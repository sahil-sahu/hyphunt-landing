import { NextRequest, NextResponse } from "next/server"
import { registerEmail, isAlreadyRegistered } from "@/lib/db"
import { sendWelcomeEmail } from "@/lib/email"

// Basic email regex for quick serverside validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    let body
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { success: false, error: "INVALID_JSON", message: "Invalid JSON in request body." },
        { status: 400 }
      )
    }

    const { email } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "MISSING_EMAIL", message: "Email parameter is required." },
        { status: 400 }
      )
    }

    const cleanedEmail = email.trim()

    if (!EMAIL_REGEX.test(cleanedEmail)) {
      return NextResponse.json(
        { success: false, error: "INVALID_EMAIL", message: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // Check for duplicates
    const alreadyRegistered = await isAlreadyRegistered(cleanedEmail)
    if (alreadyRegistered) {
      return NextResponse.json(
        { 
          success: false, 
          error: "EMAIL_ALREADY_EXISTS", 
          message: "You have already joined the hunt! Check your inbox for your access key." 
        },
        { status: 400 }
      )
    }

    // Register email in local DB
    const success = await registerEmail(cleanedEmail)
    if (!success) {
      return NextResponse.json(
        { success: false, error: "REGISTRATION_FAILED", message: "Failed to register email." },
        { status: 500 }
      )
    }

    let mockEmail = false
    let forwardedToGoogleSheet = false

    // Forward to Google Sheet Apps Script Web App if configured
    const googleSheetUrl = process.env.GOOGLE_SHEET_URL
    if (googleSheetUrl) {
      try {
        const namePart = cleanedEmail.split("@")[0]
        const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1)
        
        const sheetResponse = await fetch(googleSheetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formattedName,
            email: cleanedEmail
          })
        })
        forwardedToGoogleSheet = sheetResponse.ok
        console.log("Forwarded waitlist entry to Google Sheet. Status OK:", sheetResponse.ok)
      } catch (sheetErr) {
        console.error("Failed to forward to Google Sheets Apps Script:", sheetErr)
      }
    }

    // Trigger local Welcome Email (only if Resend is explicitly configured or if we didn't forward to Google Sheets which sends its own Gmail welcome email)
    if (process.env.RESEND_API_KEY || !googleSheetUrl) {
      const emailResult = await sendWelcomeEmail(cleanedEmail)
      mockEmail = emailResult.mock
    }

    return NextResponse.json({
      success: true,
      message: "Access granted! Welcome to the tribe.",
      mock: mockEmail,
      googleSheet: forwardedToGoogleSheet
    })
  } catch (err: any) {
    console.error("API Route /api/waitlist error:", err)
    return NextResponse.json(
      { 
        success: false, 
        error: "INTERNAL_SERVER_ERROR", 
        message: err?.message || "An unexpected error occurred." 
      },
      { status: 500 }
    )
  }
}
