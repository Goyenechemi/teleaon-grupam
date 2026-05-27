export function MockupAnalytics() {
  return (
    <div className="w-full h-full bg-inverse-surface rounded p-4 flex flex-col gap-2 justify-end items-center relative overflow-hidden">
      {/* Bars */}
      <div className="flex items-end justify-around w-full h-1/2 border-b border-outline/30 pb-1 z-10">
        <div className="w-3 bg-primary-fixed-dim/60 rounded-t animate-[barGrow1_2s_ease-out_infinite]" />
        <div className="w-3 bg-primary-fixed-dim/80 rounded-t animate-[barGrow2_2s_ease-out_infinite]" />
        <div className="w-3 bg-primary-fixed rounded-t animate-[barGrow3_2s_ease-out_infinite]" />
        <div className="w-3 bg-tertiary-fixed rounded-t animate-[barGrow4_2s_ease-out_infinite]" />
      </div>
      
      {/* Line Chart */}
      <svg className="absolute top-2 left-4 right-4 h-1/2 w-[calc(100%-2rem)] z-0" preserveAspectRatio="none" viewBox="0 0 100 50">
        <path d="M 0 40 Q 25 10, 50 30 T 100 5" stroke="#cbe9d9" strokeWidth="2" fill="none" 
              strokeDasharray="150" strokeDashoffset="150" className="animate-[drawLine_2s_ease-out_infinite]" />
      </svg>
    </div>
  );
}
