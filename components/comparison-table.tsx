export function ComparisonTable() {
  const comparisons = [
    { swipe: "LOCATION: ???", hyphunt: "LOCATION: 0.3MI AWAY" },
    { swipe: "STATUS: LAST SEEN 3 DAYS AGO", hyphunt: "STATUS: LIVE NOW" },
    { swipe: "VIBE: CURATED LIES", hyphunt: "VIBE: RAW REALITY" },
    { swipe: "MATCH: MAYBE SOMEDAY", hyphunt: "MATCH: RIGHT NOW" },
  ]

  return (
    <div className="w-full neo-border-volt bg-[#000000]">
      {/* Header */}
      <div className="grid grid-cols-2 border-b-4 border-[#CCFF00]">
        <div className="p-3 md:p-4 border-r-4 border-[#CCFF00]">
          <span className="text-xs md:text-sm uppercase tracking-terminal text-[#CCFF00]/50">
            SWIPE_MIRAGE
          </span>
        </div>
        <div className="p-3 md:p-4 bg-[#CCFF00]">
          <span className="text-xs md:text-sm uppercase tracking-terminal text-[#000000] font-bold">
            HYPHUNT_VIBE_MATCH
          </span>
        </div>
      </div>
      
      {/* Rows */}
      {comparisons.map((row, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-2 ${index < comparisons.length - 1 ? 'border-b-4 border-[#CCFF00]' : ''}`}
        >
          <div className="p-3 md:p-4 border-r-4 border-[#CCFF00]">
            <span className="text-xs md:text-sm uppercase tracking-terminal text-[#CCFF00]/40 line-through">
              {row.swipe}
            </span>
          </div>
          <div className="p-3 md:p-4">
            <span className="text-xs md:text-sm uppercase tracking-terminal text-[#CCFF00] font-bold">
              {row.hyphunt}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
