"use client"

import { useState } from "react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setStatus("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    setStatus("success")
    setEmail("")
  }

  if (status === "success") {
    return (
      <div className="neo-border-volt neo-shadow-black bg-[#CCFF00] p-4 md:p-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-[#000000]" />
          <span className="text-sm md:text-base uppercase tracking-terminal text-[#000000] font-bold">
            ACCESS_GRANTED // CHECK INBOX
          </span>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-0">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER_EMAIL"
            required
            className="w-full h-14 md:h-16 px-4 bg-[#1a1a1a] text-[#CCFF00] placeholder:text-[#CCFF00]/40 uppercase tracking-terminal text-sm md:text-base neo-border-volt focus:outline-none focus:bg-[#0a0a0a] transition-colors sm:border-r-0"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-14 md:h-16 px-6 md:px-8 bg-[#CCFF00] text-[#000000] uppercase tracking-terminal text-sm md:text-base font-bold neo-border hover:bg-[#b3e600] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed neo-shadow-black"
        >
          {status === "loading" ? "PROCESSING..." : "JOIN_HUNT"}
        </button>
      </div>
    </form>
  )
}
