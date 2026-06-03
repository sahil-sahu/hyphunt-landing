import { NextRequest, NextResponse } from "next/server"
import { deleteEmail, isAlreadyRegistered } from "@/lib/db"

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

    // Check if user exists
    const exists = await isAlreadyRegistered(cleanedEmail)
    if (!exists) {
      return NextResponse.json(
        { success: false, error: "EMAIL_NOT_FOUND", message: "This email address is not registered in our waitlist." },
        { status: 404 }
      )
    }

    // Delete from local DB (safe for serverless/local)
    await deleteEmail(cleanedEmail)

    let forwardedToGoogleSheet = false

    // Forward deletion to Google Sheet Apps Script Web App if configured
    const googleSheetUrl = process.env.GOOGLE_SHEET_URL
    if (googleSheetUrl) {
      try {
        const sheetResponse = await fetch(googleSheetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: "delete",
            email: cleanedEmail
          })
        })
        forwardedToGoogleSheet = sheetResponse.ok
        console.log("Forwarded account deletion to Google Sheet. Status OK:", sheetResponse.ok)
      } catch (sheetErr) {
        console.error("Failed to forward deletion to Google Sheets Apps Script:", sheetErr)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your waitlist reservation and data have been successfully deleted.",
      googleSheet: forwardedToGoogleSheet
    })
  } catch (err: any) {
    console.error("API Route /api/delete-account error:", err)
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
