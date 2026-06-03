import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
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
              LEGAL_PROTOCOL // TERMS_AND_CONDITIONS
            </span>
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-anton)] text-4xl sm:text-6xl md:text-7xl text-[#CCFF00] uppercase tracking-tight leading-none mb-4">
          TERMS & CONDITIONS
        </h1>
        <p className="font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#888888] uppercase tracking-terminal">
          Last Updated: June 2026 // SYSTEM_STABLE
        </p>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto mb-20 space-y-8 font-[family-name:var(--font-space-mono)] text-sm leading-relaxed text-[#cccccc]">
        
        {/* Box 1 */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            1. ACCEPTANCE OF CONDITIONS
          </h2>
          <p>
            By accessing this website and entering your credentials into the waitlist system, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not engage with the platform services.
          </p>
        </div>

        {/* Box 2 */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            2. ACCESS & ELIGIBILITY
          </h2>
          <p>
            Hyphunt is currently rolling out private beta credentials. Joining the waitlist does not guarantee immediate platform entry or service access. Access keys will be released in batches based on system capacity, queue order, and community needs.
          </p>
        </div>

        {/* Box 3 */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            3. INTELLECTUAL PROPERTY
          </h2>
          <p>
            The branding, layouts, neon graphics, typography configurations, logo designs, and code architectures are the intellectual properties of Hyphunt Systems. Any unauthorized reproduction, scraping, or distribution is prohibited under legal framework regulations.
          </p>
        </div>

        {/* Box 4 */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            4. DISCLAIMER & LIABILITY LIMITS
          </h2>
          <p>
            The platform is provided "as is" and "as available". We do not warrant that service operations will be uninterrupted or error-free. To the maximum extent permitted by law, Hyphunt shall not be liable for any direct, indirect, or incidental damages resulting from your registration or waitlist participation.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto border-t-4 border-[#CCFF00] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/50">
        <span>2026 // HYPHUNT_SYSTEMS</span>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-[#CCFF00] transition-colors">ABOUT</Link>
          <Link href="/privacy" className="hover:text-[#CCFF00] transition-colors">PRIVACY</Link>
        </div>
      </footer>
    </main>
  )
}
