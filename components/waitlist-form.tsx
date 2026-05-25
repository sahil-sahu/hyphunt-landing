"use client"

import { useState } from "react"
import { toast } from "sonner"

interface WaitlistFormProps {
  variant?: "default" | "dark"
}

export function WaitlistForm({ variant = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to join waitlist.")
      }

      setStatus("success")
      toast.success(data.message || "Welcome to the tribe!")
      setEmail("")
    } catch (err: any) {
      setStatus("error")
      toast.error(err?.message || "An unexpected error occurred.")
      // Reset status to idle after a brief delay so the user can try again
      setTimeout(() => setStatus("idle"), 2500)
    }
  }

  const isDark = variant === "dark"

  if (status === "success") {
    return (
      <div 
        className={
          isDark 
            ? "neo-border bg-[#000000] p-4 md:p-6 text-[#CCFF00] flex items-center gap-3" 
            : "neo-border-volt neo-shadow-black bg-[#CCFF00] p-4 md:p-6 text-[#000000] flex items-center gap-3"
        }
      >
        <div className={`w-4 h-4 ${isDark ? "bg-[#CCFF00]" : "bg-[#000000]"}`} />
        <span className="text-sm md:text-base uppercase tracking-terminal font-bold">
          ACCESS_GRANTED // CHECK INBOX
        </span>
      </div>
    )
  }

  // Define input classes based on variant
  const inputClass = isDark
    ? "w-full h-14 md:h-16 px-4 bg-[#000000] text-[#CCFF00] placeholder:text-[#CCFF00]/40 uppercase tracking-terminal text-sm md:text-base neo-border focus:outline-none sm:border-r-0 transition-colors"
    : "w-full h-14 md:h-16 px-4 bg-[#1a1a1a] text-[#CCFF00] placeholder:text-[#CCFF00]/40 uppercase tracking-terminal text-sm md:text-base neo-border-volt focus:outline-none focus:bg-[#0a0a0a] transition-colors sm:border-r-0"

  // Define button classes based on variant
  const buttonClass = isDark
    ? "h-14 md:h-16 px-6 md:px-8 bg-[#000000] text-[#CCFF00] uppercase tracking-terminal text-sm md:text-base font-bold neo-border hover:bg-[#1a1a1a] active:translate-x-[4px] active:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed neo-shadow"
    : "h-14 md:h-16 px-6 md:px-8 bg-[#CCFF00] text-[#000000] uppercase tracking-terminal text-sm md:text-base font-bold neo-border hover:bg-[#b3e600] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed neo-shadow-black"

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
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={buttonClass}
        >
          {status === "loading" ? "PROCESSING..." : "JOIN_HUNT"}
        </button>
      </div>
    </form>
  )
}
