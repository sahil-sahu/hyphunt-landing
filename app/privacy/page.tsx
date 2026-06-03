import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-x-hidden p-4 md:p-8">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-12 md:mb-20 flex items-center justify-between border-b-4 border-[#CCFF00] pb-6">
        <Link href="/">
          <Image 
            src="/images/hyphunt-logo.png" 
            alt="Hyphunt" 
            width={120} 
            height={32}
            className="h-6 md:h-8 w-auto hover:opacity-85 transition-opacity"
          />
        </Link>
        <Link 
          href="/" 
          className="neo-border bg-[#CCFF00] text-[#000000] px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-terminal hover:bg-[#b3e600] active:translate-x-[2px] active:translate-y-[2px] transition-all"
        >
          ← BACK_TO_HUNT
        </Link>
      </nav>

      {/* Hero Content */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="inline-block mb-6">
          <div className="neo-border bg-[#CCFF00] px-4 py-2">
            <span className="text-xs md:text-sm uppercase tracking-terminal text-[#000000] font-bold">
              SECURITY_PROTOCOL // PRIVACY_POLICY
            </span>
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-anton)] text-4xl sm:text-6xl md:text-7xl text-[#CCFF00] uppercase tracking-tight leading-none mb-4">
          PRIVACY POLICY
        </h1>
        <p className="font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#888888] uppercase tracking-terminal">
          Last Updated: June 2026 // SYSTEM_STABLE
        </p>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto mb-20 space-y-8 font-[family-name:var(--font-space-mono)] text-sm leading-relaxed text-[#cccccc]">
        
        {/* Box 1 */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            1. DATA COLLECTION PROTOCOL
          </h2>
          <p className="mb-4">
            We minimize data intake to prioritize speed and privacy. When joining the Hyphunt waitlist, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
            <li>Your email address (required for authorization keys and inbox dispatch).</li>
            <li>Your timestamp of registration (used to calculate priority queue positioning).</li>
            <li>Name configurations derived from email credentials or optional submissions.</li>
          </ul>
        </div>

        {/* Box 2 */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            2. SERVICES & RELAY INTEGRATION
          </h2>
          <p className="mb-4">
            Your submissions are processed securely:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
            <li><strong>Google Sheets Integration:</strong> Data is relayed via Google Apps Script POST requests and recorded securely inside a Google Spreadsheet.</li>
            <li><strong>Email Triggers (Gmail/Resend):</strong> Registrations trigger a automated welcome email via Google Apps Script (GmailApp API) or Resend API wrapper.</li>
            <li><strong>Local DB Backup:</strong> In offline/local modes, registrations write to an isolated local file backup.</li>
          </ul>
        </div>

        {/* Box 3 */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            3. THIRD-PARTY DISCLOSURE
          </h2>
          <p>
            We do not sell, trade, or lease your personal credentials. We only share information with our trusted integration partners (Google & Resend) to execute basic system services, email dispatching, and queue logging.
          </p>
        </div>

        {/* Box 4 */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            4. USER PRIVILEGES
          </h2>
          <p>
            At any point, you can request full removal of your waitlist credentials. Reach out to our system administrators at <strong className="text-[#CCFF00]">welcome@hyphunt.xyz</strong> to clear your data records from the sheet and database.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto border-t-4 border-[#CCFF00] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/50">
        <span>2026 // HYPHUNT_SYSTEMS</span>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-[#CCFF00] transition-colors">ABOUT</Link>
          <Link href="/terms" className="hover:text-[#CCFF00] transition-colors">TERMS</Link>
        </div>
      </footer>
    </main>
  )
}
