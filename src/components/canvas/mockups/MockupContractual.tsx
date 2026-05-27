export function MockupContractual() {
  return (
    <div className="w-full h-full bg-inverse-surface rounded p-4 relative overflow-hidden flex flex-col gap-3 justify-center">
      {/* Scanner */}
      <div className="absolute left-0 right-0 h-[2px] bg-primary-fixed shadow-[0_0_10px_2px_rgba(255,218,215,0.5)] z-10 animate-[scan_3s_ease-in-out_infinite]" />
      
      {/* Doc header */}
      <div className="h-3 w-1/3 bg-outline-variant/30 rounded-sm mb-2" />
      
      <div className="flex items-center justify-between w-full">
        <div className="h-2 w-3/4 bg-outline-variant/20 rounded-sm" />
      </div>
      
      {/* Highlight Red */}
      <div className="flex items-center justify-between w-full">
        <div className="h-2 w-full bg-outline-variant/20 rounded-sm animate-[highlightRed_3s_ease-in-out_infinite]" />
        <div className="h-2 w-2 rounded-full bg-error ml-2 opacity-0 animate-[fadeInOut_3s_ease-in-out_infinite]" />
      </div>
      
      {/* Highlight Green */}
      <div className="flex items-center justify-between w-full">
        <div className="h-2 w-5/6 bg-outline-variant/20 rounded-sm animate-[highlightGreen_3s_ease-in-out_infinite]" />
      </div>
      
      <div className="flex items-center justify-between w-full">
        <div className="h-2 w-1/2 bg-outline-variant/20 rounded-sm" />
      </div>
    </div>
  );
}
