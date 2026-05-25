/**
 * Email Sender Service using Resend's REST API with a local mock fallback.
 */

const RESEND_API_URL = "https://api.resend.com/emails"

/**
 * Returns a beautifully styled cyber-themed HTML template matching Hyphunt's dark-mode and neon-volt aesthetic.
 */
function getWelcomeEmailHtml(email: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the Tribe // Hyphunt</title>
  <style>
    body {
      background-color: #F0F0F0;
      color: #000000;
      font-family: 'Arial Black', Impact, sans-serif;
      margin: 0;
      padding: 0;
    }
    .wrapper {
      width: 100%;
      background-color: #F0F0F0;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .container {
      max-width: 580px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border: 5px solid #000000;
      padding: 40px 30px;
      box-shadow: 10px 10px 0px #000000;
      box-sizing: border-box;
    }
    .header-block {
      background-color: #CCFF00;
      border: 4px solid #000000;
      padding: 20px;
      text-align: center;
      margin-bottom: 30px;
      box-shadow: 6px 6px 0px #000000;
    }
    .brand {
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -2px;
      color: #000000;
      text-transform: uppercase;
      margin: 0;
    }
    .tagline {
      font-family: monospace;
      font-size: 11px;
      letter-spacing: 2px;
      color: #000000;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 5px;
    }
    .greeting {
      font-size: 26px;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 25px;
      letter-spacing: -1px;
    }
    .highlight {
      background-color: #CCFF00;
      padding: 2px 8px;
      border: 2px solid #000000;
      box-shadow: 3px 3px 0px #000000;
      display: inline-block;
    }
    .content-box {
      background-color: #FFFFFF;
      border: 4px solid #000000;
      padding: 25px;
      margin-bottom: 30px;
      box-shadow: 6px 6px 0px #000000;
    }
    .text {
      font-family: 'Courier New', Courier, monospace;
      font-size: 14px;
      line-height: 1.6;
      color: #000000;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 15px;
    }
    .cta-btn {
      display: block;
      width: 100%;
      text-align: center;
      background-color: #CCFF00;
      color: #000000 !important;
      text-decoration: none;
      font-weight: 900;
      font-size: 16px;
      text-transform: uppercase;
      padding: 18px 0;
      border: 4px solid #000000;
      box-shadow: 6px 6px 0px #000000;
      box-sizing: border-box;
      letter-spacing: 1px;
    }
    .cta-btn:hover {
      background-color: #000000;
      color: #CCFF00 !important;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      font-family: monospace;
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #666666;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header-block">
        <div class="brand">HYPHUNT</div>
        <div class="tagline">REAL_TIME // REAL_VIBE // REAL_HYP</div>
      </div>
      
      <div class="greeting">ACCESS: <span class="highlight">${email.split('@')[0].toUpperCase()}</span></div>
      
      <div class="content-box">
        <p class="text" style="font-size: 16px; margin-bottom: 0;">
          [STATUS: ENROLLED] The hunt has officially begun. You have successfully claimed your spot on the priority tribe waitlist.
        </p>
      </div>

      <p class="text">
        We are actively scanning the frequencies of Bhubaneswar to map curations that actually resonate with your aesthetic. No corporate algorithms, just pure vibe.
      </p>

      <p class="text">
        Keep your alerts enabled. Your private beta access key will be compiled and dispatched shortly to: <span class="highlight">${email}</span>.
      </p>
      
      <a href="https://hyphunt.com" class="cta-btn">STAY_IN_THE_LOOP</a>
      
      <div class="footer">
        MADE WITH ❤️ IN BHUBANESWAR
      </div>
    </div>
  </div>
</body>
</html>
  `
}

/**
 * Sends a welcome email to the user.
 * Falls back to mock console output if no API key is configured.
 */
export async function sendWelcomeEmail(email: string): Promise<{ success: boolean; mock: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  const senderEmail = process.env.SENDER_EMAIL || "welcome@hyphunt.xyz"

  const htmlContent = getWelcomeEmailHtml(email)

  if (!apiKey) {
    // High-fidelity Mock Mode console logger
    console.log("\n" + "=".repeat(60))
    console.log(`[MOCK EMAIL SENT - MOCK MODE ACTIVE]`)
    console.log(`To:      ${email}`)
    console.log(`From:    Hyphunt <${senderEmail}>`)
    console.log(`Subject: WELCOME TO THE TRIBE // HYPHUNT waitlist`)
    console.log("-".repeat(60))
    console.log(`[HTML Template Preview Compiled Successfully]`)
    console.log(`System Status: OK // Local JSON database updated.`)
    console.log("=".repeat(60) + "\n")
    return { success: true, mock: true }
  }

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: `Hyphunt <${senderEmail}>`,
        to: [email],
        subject: "WELCOME TO THE TRIBE // HYPHUNT waitlist",
        html: htmlContent
      })
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error("Resend API Request failed:", errText)
      return { success: false, mock: false, error: errText }
    }

    const result = await response.json()
    console.log(`Resend API: Welcome email successfully triggered for ${email}. Message ID:`, result.id)
    return { success: true, mock: false }
  } catch (err: any) {
    console.error("Failed to send welcome email via Resend:", err)
    return { success: false, mock: false, error: err?.message || String(err) }
  }
}
