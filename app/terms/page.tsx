import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-x-hidden p-4 md:p-8">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-12 md:mb-20 flex items-center justify-between border-b-4 border-[#CCFF00] pb-6">
        <Link href="/">
          <Image 
            src="/images/hyphunt-logo.png" 
            alt="Hyphunt" 
            width={240} 
            height={64}
            className="h-12 md:h-16 w-auto hover:opacity-85 transition-opacity"
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
          Last Updated: November 2026 // SYSTEM_STABLE
        </p>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto mb-20 space-y-8 font-[family-name:var(--font-space-mono)] text-sm leading-relaxed text-[#cccccc]">
        
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            1. ACCEPTANCE
          </h2>
          <p>
            By creating an account on, or using, the Hyphunt app or website you agree to these Terms of Use and our Privacy Policy. If you don&apos;t agree, don&apos;t use Hyphunt.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            2. WHO CAN USE HYPHUNT
          </h2>
          <p>
            You must be at least 13 years old (or the minimum age in your country) to use Hyphunt. You are responsible for your account and everything posted from it.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            3. YOUR CONTENT
          </h2>
          <p>
            You can post content in Hyphunt, including visit logs, notes, photos, stories, crew chat messages and your profile. You keep ownership of it and give Hyphunt a licence to host and show it inside the service. Only post content you have the right to share.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            4. ZERO TOLERANCE FOR OBJECTIONABLE CONTENT
          </h2>
          <p>
            Hyphunt has zero tolerance for objectionable content or abusive users. You must not post or send anything that is hateful, harassing, threatening, sexually explicit, violent, illegal, spam, or that impersonates someone or infringes their rights. We filter objectionable language automatically. Breaking these rules gets the content removed and the account suspended or permanently banned without notice.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            5. REPORTING AND BLOCKING
          </h2>
          <p>
            Every message, log, story and profile has a Report option, and you can block any user from their profile or from their content. Blocking hides that person&apos;s content from you and stops them interacting with you. You can unblock people under Settings → Blocked users. We review every report within 24 hours, remove the content if it breaks these terms, and remove the user who posted it.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            6. PLACES AND CREATOR CONTENT
          </h2>
          <p>
            Place information and short videos about places come from public sources such as Google Places and public Instagram posts. Each video is credited to its creator and links to the original. If you created something shown on Hyphunt and want it removed, email info@hyphunt.com and we will take it down promptly.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            7. ACCOUNT DELETION
          </h2>
          <p>
            You can delete your account at any time in the app under Settings → Delete account. This permanently removes your profile and the content and data linked to it.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            8. INTELLECTUAL PROPERTY
          </h2>
          <p>
            The Hyphunt name, logo, design and code belong to Hyphunt. Do not copy, scrape or redistribute them without permission.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            9. DISCLAIMER AND LIABILITY
          </h2>
          <p>
            Hyphunt is provided &quot;as is&quot;. Place details, opening hours and events can change, so check before you go. As far as the law allows, Hyphunt isn&apos;t liable for indirect or incidental damages arising from your use of the service.
          </p>
        </div>
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            10. CONTACT
          </h2>
          <p>
            Questions or reports: info@hyphunt.com.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto border-t-4 border-[#CCFF00] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/50 font-bold">
        <span>2026 // HYPHUNT_SYSTEMS</span>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link href="/about" className="hover:text-[#CCFF00] transition-colors">ABOUT</Link>
          <Link href="/privacy" className="hover:text-[#CCFF00] transition-colors">PRIVACY</Link>
          <span className="text-[#CCFF00]/20 hidden sm:inline">|</span>
          <a href="https://instagram.com/hyphunt" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors flex items-center gap-1">
            <Instagram className="w-3.5 h-3.5" /> INSTAGRAM
          </a>
          <a href="https://linkedin.com/company/hyphunt" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors flex items-center gap-1">
            <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
          </a>
        </div>
      </footer>
    </main>
  )
}
