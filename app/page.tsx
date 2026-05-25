import Image from "next/image"
import { LiveCounter } from "@/components/live-counter"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#CCFF00] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b-4 border-[#CCFF00]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <Image 
            src="/images/hyphunt-logo.png" 
            alt="Hyphunt" 
            width={120} 
            height={32}
            className="h-6 md:h-8 w-auto"
          />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#CCFF00] animate-terminal-blink" />
            <span className="text-[10px] md:text-xs uppercase tracking-terminal hidden sm:inline">
              SYSTEM_ACTIVE
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 min-h-screen flex flex-col">
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
            <div className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                placeholder="ENTER_EMAIL"
                className="flex-1 h-14 md:h-16 px-4 bg-[#000000] text-[#CCFF00] placeholder:text-[#CCFF00]/40 uppercase tracking-terminal text-sm md:text-base neo-border focus:outline-none sm:border-r-0"
              />
              <button className="h-14 md:h-16 px-6 md:px-8 bg-[#000000] text-[#CCFF00] uppercase tracking-terminal text-sm md:text-base font-bold neo-border hover:bg-[#1a1a1a] active:translate-x-[4px] active:translate-y-[4px] transition-all neo-shadow">
                JOIN_HUNT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t-4 border-[#CCFF00] bg-[#000000]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image 
            src="/images/hyphunt-logo.png" 
            alt="Hyphunt" 
            width={100} 
            height={28}
            className="h-5 md:h-6 w-auto"
          />
          <span className="text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/50">
            2026 // HYPHUNT_SYSTEMS // ALL_RIGHTS_RESERVED
          </span>
        </div>
      </footer>
    </main>
  )
}
