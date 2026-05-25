"use client"

import { useState, useEffect } from "react"

export function LiveCounter() {
  const [count, setCount] = useState(2847)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1)
      setTimeout(() => setIsAnimating(false), 200)
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="neo-border-volt bg-[#000000] p-4 md:p-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-[#CCFF00] animate-terminal-blink" />
        <span className="text-[10px] md:text-xs uppercase tracking-terminal text-[#CCFF00]/70">
          CURRENT.ACTIVE.HUNTERS
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span 
          className={`text-4xl md:text-6xl font-bold text-[#CCFF00] tabular-nums ${isAnimating ? 'animate-counter-tick' : ''}`}
        >
          {count.toLocaleString()}
        </span>
        <span className="text-xs md:text-sm text-[#CCFF00]/50 uppercase tracking-terminal">
          LIVE
        </span>
      </div>
    </div>
  )
}
