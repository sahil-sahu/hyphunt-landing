import Image from "next/image"
import Link from "next/link"
import { LiveCounter } from "@/components/live-counter"
import { WaitlistForm } from "@/components/waitlist-form"
import { Instagram, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#CCFF00] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b-4 border-[#CCFF00]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <Image 
            src="/images/hyphunt-logo.png" 
            alt="Hyphunt" 
            width={240} 
            height={64}
            className="h-12 md:h-16 w-auto"
          />
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/hyphunt" target="_blank" rel="noopener noreferrer" className="text-[#CCFF00] hover:text-[#FFFFFF] transition-colors" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/hyphunt" target="_blank" rel="noopener noreferrer" className="text-[#CCFF00] hover:text-[#FFFFFF] transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#CCFF00] animate-terminal-blink" />
              <span className="text-[10px] md:text-xs uppercase tracking-terminal hidden sm:inline">
                SYSTEM_ACTIVE
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 md:px-6 min-h-screen flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
          {/* Top Row - Badge and Icons */}
          <div className="animate-snap-in flex items-center justify-between mb-6 md:mb-8">
            {/* Left Badge */}
            <div className="inline-block">
              <div className="neo-border bg-[#CCFF00] px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2">
                <span className="text-[10px] md:text-xs uppercase tracking-terminal text-[#000000] font-bold">
                  BETA_ACCESS
                </span>
                <svg className="w-4 h-4 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-[#CCFF00] text-lg md:text-xl">+</span>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#CCFF00]" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div className="flex gap-[2px]">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-[2px] md:w-[3px] bg-[#CCFF00]" style={{ height: `${12 + Math.random() * 12}px` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Stacked Typography */}
          <div className="animate-snap-in-delay-1 flex-1 flex flex-col justify-center items-center text-center">
            {/* HUNT */}
            <h1 className="font-[family-name:var(--font-anton)] text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[14rem] text-[#CCFF00] leading-[0.85] uppercase tracking-tight headline-shadow w-full">
              HUNT
            </h1>
            
            {/* THE + VIBE row */}
            <div className="flex items-baseline justify-center gap-2 md:gap-4 w-full">
              <span className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#CCFF00] uppercase tracking-tight headline-shadow leading-none">
                THE
              </span>
              <span className="font-[family-name:var(--font-anton)] text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[14rem] text-[#CCFF00] leading-[0.85] uppercase tracking-tight headline-shadow">
                VIBE
              </span>
            </div>

            {/* JOIN THE banner */}
            <div className="animate-snap-in-delay-2 inline-flex items-center justify-center my-2 md:my-4">
              <div className="bg-[#CCFF00] px-4 md:px-6 py-1.5 md:py-2.5 flex items-center gap-2 md:gap-3">
                <span className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000] uppercase tracking-tight">
                  JOIN THE
                </span>
                <svg className="w-5 h-5 md:w-7 md:h-7 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            {/* TRIBE */}
            <h1 className="font-[family-name:var(--font-anton)] text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[14rem] text-[#CCFF00] leading-[0.85] uppercase tracking-tight headline-shadow w-full">
              TRIBE
            </h1>
          </div>

          {/* Bottom Row */}
          <div className="animate-snap-in-delay-3 flex flex-col items-center gap-6 mt-6 md:mt-8">
            {/* Taglines - Centered */}
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-xs md:text-sm uppercase tracking-terminal text-[#CCFF00]/70">
                REAL_TIME // REAL_VIBE // REAL_HYP
              </p>
              <p className="font-[family-name:var(--font-teko)] text-base md:text-lg lg:text-xl text-[#CCFF00]/60">
                Made with &#10084; in Bhubaneswar
              </p>
            </div>

            {/* Waitlist Form - Centered */}
            <div className="w-full max-w-xl">
              <WaitlistForm />
            </div>
          </div>

          {/* Live Counter - Bottom Centered */}
          <div className="animate-snap-in-delay-4 mt-4 md:mt-6 flex justify-center">
            <LiveCounter />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 border-t-4 border-[#CCFF00] bg-[#CCFF00]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-anton)] text-3xl md:text-4xl lg:text-5xl text-[#000000] mb-4 md:mb-6 uppercase">
            THE HUNT BEGINS
          </h2>
          <p className="text-sm md:text-base uppercase tracking-terminal text-[#000000]/70 mb-8 md:mb-12 max-w-xl mx-auto">
            Low-key energy, High-key loud
          </p>
          <div className="max-w-xl mx-auto">
            <WaitlistForm variant="dark" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t-4 border-[#CCFF00] bg-[#000000]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Image 
            src="/images/hyphunt-logo.png" 
            alt="Hyphunt" 
            width={180} 
            height={48}
            className="h-9 md:h-12 w-auto"
          />
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[10px] md:text-xs uppercase tracking-terminal font-bold">
            <Link href="/about" className="text-[#CCFF00]/60 hover:text-[#CCFF00] transition-colors">ABOUT</Link>
            <Link href="/privacy" className="text-[#CCFF00]/60 hover:text-[#CCFF00] transition-colors">PRIVACY</Link>
            <Link href="/terms" className="text-[#CCFF00]/60 hover:text-[#CCFF00] transition-colors">TERMS</Link>
            <span className="text-[#CCFF00]/20 hidden sm:inline">|</span>
            <a href="https://instagram.com/hyphunt" target="_blank" rel="noopener noreferrer" className="text-[#CCFF00]/60 hover:text-[#CCFF00] transition-colors flex items-center gap-1">
              <Instagram className="w-3.5 h-3.5" /> INSTAGRAM
            </a>
            <a href="https://linkedin.com/company/hyphunt" target="_blank" rel="noopener noreferrer" className="text-[#CCFF00]/60 hover:text-[#CCFF00] transition-colors flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
            </a>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/50 text-center md:text-right">
            2026 // HYPHUNT_SYSTEMS // ALL_RIGHTS_RESERVED
          </span>
        </div>
      </footer>
    </main>
  )
}
