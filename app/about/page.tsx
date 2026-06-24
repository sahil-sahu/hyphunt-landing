import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export default function AboutPage() {
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
      <section className="max-w-4xl mx-auto mb-16 text-center md:text-left">
        <div className="inline-block mb-6">
          <div className="neo-border bg-[#CCFF00] px-4 py-2">
            <span className="text-xs md:text-sm uppercase tracking-terminal text-[#000000] font-bold">
              SYSTEM_MANIFESTO // ABOUT_US
            </span>
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-anton)] text-4xl sm:text-6xl md:text-7xl text-[#CCFF00] uppercase tracking-tight leading-none mb-8">
          SWIPING IS DEAD.<br />LONG LIVE THE VIBE.
        </h1>

        <p className="font-[family-name:var(--font-space-mono)] text-sm md:text-lg text-[#cccccc] leading-relaxed max-w-3xl">
          We got tired of swiping on ghosts, scrolling past generic algorithms, and visiting spots that didn't match the energy. So we built <strong className="text-[#CCFF00]">Hyphunt</strong>—a hyperlocal discovery engine engineered to connect you with real places, real people, and real vibes in real time.
        </p>
      </section>

      {/* Grid Comparison */}
      <section className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Swiping Card */}
        <div className="neo-border border-red-500 bg-[#0d0d0d] p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-anton)] text-2xl text-red-500 uppercase tracking-tight mb-4">
              THE STATUS QUO
            </h2>
            <ul className="space-y-3 font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#888888]">
              <li>[✖] Infinite swiping on filtered profiles</li>
              <li>[✖] Outdated review boards with paid listings</li>
              <li>[✖] Disconnected local spaces</li>
              <li>[✖] Ghosted conversations</li>
            </ul>
          </div>
          <div className="mt-8 text-xs text-red-500/50 uppercase tracking-terminal">
            STATUS // DEPRECATED
          </div>
        </div>

        {/* Hyphunt Card */}
        <div className="neo-border border-[#CCFF00] bg-[#0d0d0d] p-6 md:p-8 flex flex-col justify-between neo-shadow-volt">
          <div>
            <h2 className="font-[family-name:var(--font-anton)] text-2xl text-[#CCFF00] uppercase tracking-tight mb-4">
              THE HYPHUNT WAY
            </h2>
            <ul className="space-y-3 font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#cccccc]">
              <li>[✔] Real-time crowd mapping and curation</li>
              <li>[✔] Hyperlocal feeds capturing raw energy</li>
              <li>[✔] Instant connection to active tribes</li>
              <li>[✔] Zero filters, zero noise, 100% vibe</li>
            </ul>
          </div>
          <div className="mt-8 text-xs text-[#CCFF00] uppercase tracking-terminal font-bold">
            STATUS // CORE_ACTIVE
          </div>
        </div>
      </section>

      {/* Mission / Value Pillar */}
      <section className="max-w-4xl mx-auto mb-20 border-4 border-[#CCFF00] bg-[#CCFF00] text-[#000000] p-6 md:p-10 neo-shadow">
        <h2 className="font-[family-name:var(--font-anton)] text-3xl md:text-4xl uppercase tracking-tight mb-4">
          MADE IN BHUBANESWAR, FOR THE TRIBE
        </h2>
        <p className="font-[family-name:var(--font-space-mono)] text-xs md:text-base leading-relaxed text-[#000000]/80">
          Hyphunt is born in the heart of Bhubaneswar. We are drawing the lines, connecting the dots, and mapping the local sound waves, visuals, and experiences that build true tribe connections. This is about making real-life interactions louder, bolder, and completely unfiltered.
        </p>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto border-t-4 border-[#CCFF00] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/50 font-bold">
        <span>2026 // HYPHUNT_SYSTEMS</span>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link href="/privacy" className="hover:text-[#CCFF00] transition-colors">PRIVACY</Link>
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
