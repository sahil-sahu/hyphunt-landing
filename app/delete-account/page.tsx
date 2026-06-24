"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit deletion request.")
      }

      setStatus("success")
      toast.success(data.message || "Account data successfully removed.")
      setEmail("")
    } catch (err: any) {
      setStatus("error")
      toast.error(err?.message || "An unexpected error occurred.")
      setTimeout(() => setStatus("idle"), 2500)
    }
  }

  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-x-hidden p-4 md:p-8">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-12 md:mb-20 flex items-center justify-between border-b-4 border-[#CCFF00] pb-6">
        <Link href="/">
          <Image 
            src="/images/hyphunt-logo.png" 
            alt="Hyphunt" 
            width={180} 
            height={48}
            className="h-10 md:h-12 w-auto hover:opacity-85 transition-opacity"
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
      <section className="max-w-xl mx-auto mb-8 text-center">
        <div className="inline-block mb-6">
          <div className="neo-border bg-[#CCFF00] px-4 py-2">
            <span className="text-xs md:text-sm uppercase tracking-terminal text-[#000000] font-bold">
              REVOCATION_PROTOCOL // ACCOUNT_DELETION
            </span>
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-anton)] text-4xl sm:text-5xl text-[#CCFF00] uppercase tracking-tight leading-none mb-4">
          DELETE ACCOUNT
        </h1>
        <p className="font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#888888] uppercase tracking-terminal">
          Data Cleansing Endpoint // irreversible
        </p>
      </section>

      {/* Warning Box & Form */}
      <section className="max-w-xl mx-auto mb-20 space-y-8 font-[family-name:var(--font-space-mono)] text-sm">
        
        {/* Warning Card */}
        <div className="neo-border border-red-500 bg-[#0d0d0d] p-6 text-[#cccccc] flex flex-col gap-3">
          <div className="flex items-center gap-3 border-b border-red-500/20 pb-3">
            <div className="w-3 h-3 bg-red-500 animate-pulse" />
            <strong className="text-red-500 uppercase">// SYSTEM_WARNING</strong>
          </div>
          <p className="text-xs md:text-sm leading-relaxed">
            Deleting your account will immediately remove your email from our priority queue waitlist. 
            All queue points, waitlist entries, and credentials will be permanently destroyed. 
            This action is irreversible.
          </p>
        </div>

        {/* Input Form */}
        {status === "success" ? (
          <div className="neo-border border-[#CCFF00] bg-[#CCFF00] text-[#000000] p-6 text-center">
            <div className="w-6 h-6 bg-[#000000] mx-auto mb-4" />
            <h2 className="font-[family-name:var(--font-anton)] text-2xl uppercase tracking-tight mb-2">
              DELETION_SUCCESSFUL
            </h2>
            <p className="text-xs font-bold leading-relaxed opacity-85">
              Your registered email was cleared from the waitlist database and a deletion request was logged.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER_REGISTERED_EMAIL"
                required
                disabled={status === "loading"}
                className="w-full h-14 md:h-16 px-4 bg-[#1a1a1a] text-[#CCFF00] placeholder:text-[#CCFF00]/40 uppercase tracking-terminal text-sm md:text-base neo-border-volt focus:outline-none focus:bg-[#0a0a0a] transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-14 md:h-16 bg-red-500 text-[#ffffff] uppercase tracking-terminal text-sm md:text-base font-bold border-2 border-red-500 hover:bg-red-600 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed neo-shadow-red"
              >
                {status === "loading" ? "DELETING..." : "CONFIRM_ACCOUNT_DELETION"}
              </button>
            </div>
          </form>
        )}

      </section>

      {/* Footer */}
      <footer className="max-w-xl mx-auto border-t-4 border-[#CCFF00] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/50">
        <span>2026 // HYPHUNT_SYSTEMS</span>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-[#CCFF00] transition-colors">ABOUT</Link>
          <Link href="/privacy" className="hover:text-[#CCFF00] transition-colors">PRIVACY</Link>
          <Link href="/terms" className="hover:text-[#CCFF00] transition-colors">TERMS</Link>
        </div>
      </footer>
    </main>
  )
}
