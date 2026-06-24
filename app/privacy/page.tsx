import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export default function PrivacyPage() {
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
              SECURITY_PROTOCOL // OFFICIAL_PRIVACY_POLICY
            </span>
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-anton)] text-4xl sm:text-6xl md:text-7xl text-[#CCFF00] uppercase tracking-tight leading-none mb-4">
          PRIVACY POLICY
        </h1>
        <p className="font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#888888] uppercase tracking-terminal">
          Effective Date: June 3, 2026 // Last Updated: June 3, 2026
        </p>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto mb-20 space-y-8 font-[family-name:var(--font-space-mono)] text-sm leading-relaxed text-[#cccccc]">
        
        {/* Section 1: Intro & Data Controller */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            1. INTRODUCTION & DATA FIDUCIARY
          </h2>
          <p className="mb-4">
            Welcome to Hyphunt (&quot;Hyphunt,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). 
            Hyphunt is a social discovery and interest-based networking platform that helps users connect, communicate, discover communities, and engage with content and opportunities relevant to their interests.
          </p>
          <p className="mb-6">
            This Privacy Policy explains how we collect, use, store, share, and protect your personal data when you access our website, mobile applications, and related services (&quot;Services&quot;). By creating an account or using Hyphunt, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          
          <div className="border-t border-[#CCFF00]/20 pt-4">
            <h3 className="text-[#CCFF00] font-bold uppercase text-xs md:text-sm mb-2">DATA FIDUCIARY / DATA CONTROLLER INFO:</h3>
            <p className="text-xs">
              <strong>Neuvision Technologies Private Limited</strong><br />
              Email: <a href="mailto:info@hyphunt.com" className="text-[#CCFF00] underline">info@hyphunt.com</a> / <a href="mailto:info.neuvision@gmail.com" className="text-[#CCFF00] underline">info.neuvision@gmail.com</a><br />
              Website: <a href="https://www.hyphunt.com" target="_blank" rel="noopener noreferrer" className="text-[#CCFF00] underline">www.hyphunt.com</a>
            </p>
          </div>
        </div>

        {/* Section 2: Information We Collect */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            2. INFORMATION WE COLLECT
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-[#CCFF00] font-bold text-xs uppercase mb-2">// 2.1 Information You Provide Directly</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#bbbbbb]">
                <li>Full name, Username, Email address, and Mobile number.</li>
                <li>Profile photograph, Bio, Date of birth, and Gender (optional).</li>
                <li>Educational and Professional information.</li>
                <li>Social media links.</li>
                <li>Messages, communications, community posts, comments, and user-generated content.</li>
                <li>Customer support requests.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#CCFF00] font-bold text-xs uppercase mb-2">// 2.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#bbbbbb]">
                <li>Device type, identifiers, operating system, and browser information.</li>
                <li>IP address and approximate location.</li>
                <li>Usage logs, crash reports, session duration, app interactions, and search history.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#CCFF00] font-bold text-xs uppercase mb-2">// 2.3 Information From Third Parties</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#bbbbbb]">
                <li>Google Sign-In and Apple Sign-In authentication.</li>
                <li>Social login providers, analytics partners, and advertising partners.</li>
                <li>Publicly available sources.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Why We Process Your Data */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            3. WHY WE PROCESS YOUR DATA
          </h2>
          <p className="mb-4">We process personal data for the following reasons:</p>
          
          <ul className="space-y-3 text-xs">
            <li><strong>Account Management:</strong> Create accounts, authenticate users, and provide support.</li>
            <li><strong>Service Delivery:</strong> Enable networking/discovery features, personalize content, and match users with relevant communities.</li>
            <li><strong>Platform Security:</strong> Detect fraud/abuse, prevent spam, and protect platform integrity.</li>
            <li><strong>Communications:</strong> Send service notifications, safety alerts, and updates.</li>
            <li><strong>Analytics & Improvement:</strong> Understand user behavior, improve UX, and conduct internal research.</li>
            <li><strong>Legal Compliance:</strong> Meet regulatory obligations and respond to lawful requests.</li>
          </ul>
        </div>

        {/* Section 4: Legal Basis */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            4. LEGAL BASIS FOR PROCESSING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="border border-[#CCFF00]/20 p-4 bg-[#111] rounded">
              <h3 className="text-[#CCFF00] font-bold mb-2">// FOR USERS IN INDIA</h3>
              <p className="text-[#bbbbbb]">Based on user consent, legitimate uses under applicable law (like DPDP Act), legal obligations, and security/fraud prevention requirements.</p>
            </div>
            <div className="border border-[#CCFF00]/20 p-4 bg-[#111] rounded">
              <h3 className="text-[#CCFF00] font-bold mb-2">// FOR USERS IN THE EEA</h3>
              <p className="text-[#bbbbbb]">Based on consent, contract performance, legal obligations, legitimate interests, and protection of vital interests (GDPR framework).</p>
            </div>
          </div>
        </div>

        {/* Section 5: Consent */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            5. CONSENT & WITHDRAWAL
          </h2>
          <p className="mb-4">
            By using Hyphunt, you consent to the processing of your personal data as described in this Policy. You may withdraw consent at any time by:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#bbbbbb] mb-4">
            <li>Updating your in-app account settings.</li>
            <li>Contacting us directly at <a href="mailto:info@hyphunt.com" className="text-[#CCFF00] underline">info@hyphunt.com</a>.</li>
            <li>Requesting full account deletion.</li>
          </ul>
          <p className="text-xs text-[#888888]">
            * Note: DPDP Act requires consent to be informed, specific, and easy to withdraw. Withdrawal does not affect processing performed before withdrawal.
          </p>
        </div>

        {/* Section 6: Sharing of Data */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            6. SHARING & TRANSFERS
          </h2>
          <p className="mb-4"><strong>We do not sell personal data.</strong> We may share data only with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#bbbbbb] mb-4">
            <li><strong>Service Providers:</strong> Cloud hosting, analytics, customer support, communication, and payment processor vendors.</li>
            <li><strong>Business Partners:</strong> Where necessary to provide user-requested services.</li>
            <li><strong>Legal Authorities:</strong> When required by court orders, regulatory agencies, or applicable laws.</li>
            <li><strong>Corporate Transactions:</strong> In connection with mergers, acquisitions, or asset sales.</li>
          </ul>
          <p className="text-xs">
            <strong>International Data Transfers:</strong> When transferring data across borders, we implement reasonable safeguards (encryption, contractual clauses, vendor due diligence) to protect your records.
          </p>
        </div>

        {/* Section 7: Data Retention & Rights */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            7. YOUR PRIVACY RIGHTS
          </h2>
          
          <div className="space-y-4 text-xs">
            <div>
              <h3 className="text-[#CCFF00] font-bold mb-1">// INDIAN USERS (DPDP Act)</h3>
              <p className="text-[#bbbbbb]">You have the right to access your personal data, request correction of inaccurate data, request deletion, withdraw consent, nominate proxy individuals, and seek grievance redressal.</p>
            </div>
            <div>
              <h3 className="text-[#CCFF00] font-bold mb-1">// EUROPEAN USERS (GDPR)</h3>
              <p className="text-[#bbbbbb]">You have the right to access, correct, restrict, or delete your data, object to processing, request data portability, and withdraw consent.</p>
            </div>
            <p className="pt-2">To exercise these rights, contact our Data Protection Officer at: <a href="mailto:dpo@hyphunt.com" className="text-[#CCFF00] underline">dpo@hyphunt.com</a>.</p>
          </div>
        </div>

        {/* Section 8: Children's Privacy & Cookies */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            8. CHILDREN, COOKIES, & SECURITY
          </h2>
          <ul className="space-y-4 text-xs">
            <li>
              <strong className="text-[#CCFF00]">// CHILDREN&apos;S PRIVACY:</strong> Hyphunt is not intended for children under 18. We do not knowingly engage in behavioral advertising directed toward children.
            </li>
            <li>
              <strong className="text-[#CCFF00]">// COOKIES:</strong> We use essential, authentication, analytics, performance, and security cookies. You may manage cookie preferences in browser/app controls.
            </li>
            <li>
              <strong className="text-[#CCFF00]">// SECURITY MEASURES:</strong> We implement encryption in transit, encryption at rest, role-based access control, MFA, and regular security monitoring reviews.
            </li>
          </ul>
        </div>

        {/* Section 9: Deletion & Grievance */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl md:text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
            9. DELETION & GRIEVANCE REDRESSAL
          </h2>
          
          <div className="space-y-4 text-xs">
            <div>
              <h3 className="text-[#CCFF00] font-bold mb-1">// ACCOUNT DELETION</h3>
              <p className="text-[#bbbbbb]">
                You can delete your account in your app settings or by emailing <a href="mailto:info@hyphunt.com" className="text-[#CCFF00] underline">info@hyphunt.com</a>. Upon verification, profile information will be removed and user content anonymized.
              </p>
            </div>
            
            <div className="border-t border-[#CCFF00]/10 pt-3">
              <h3 className="text-[#CCFF00] font-bold mb-1">// GRIEVANCE OFFICER & COMPLAINTS</h3>
              <p className="text-[#bbbbbb] mb-2">
                If you have queries, complaints, or seek grievance redressal under the DPDP Act or applicable regulations:
              </p>
              <p className="text-[#bbbbbb]">
                Email: <a href="mailto:info@hyphunt.com" className="text-[#CCFF00] underline">info@hyphunt.com</a> / <a href="mailto:info.neuvision@gmail.com" className="text-[#CCFF00] underline">info.neuvision@gmail.com</a>
              </p>
              <p className="text-[#888888] mt-1">* We aim to acknowledge complaints within 7 business days and resolve them within a reasonable period.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto border-t-4 border-[#CCFF00] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/50 font-bold">
        <span>2026 // HYPHUNT_SYSTEMS</span>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link href="/about" className="hover:text-[#CCFF00] transition-colors">ABOUT</Link>
          <Link href="/terms" className="hover:text-[#CCFF00] transition-colors">TERMS</Link>
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
