export function MockupDocument() {
  return (
    <div className="w-full h-full bg-inverse-surface rounded p-4 flex items-center justify-between gap-4">
      {/* Document */}
      <div className="w-1/2 h-full bg-surface-container-highest rounded shadow-sm p-2 flex flex-col gap-2 relative">
        <div className="h-2 w-1/2 bg-outline-variant/30 rounded" />
        <div className="h-1 w-full bg-outline-variant/20 rounded mt-2" />
        <div className="h-1 w-full bg-outline-variant/20 rounded" />
        <div className="h-1 w-3/4 bg-outline-variant/20 rounded" />
        
        {/* Bounding Box Scanner */}
        <div className="absolute top-8 left-2 right-4 h-6 border border-primary bg-primary/10 rounded-sm opacity-0 animate-[scanBox_3s_infinite]" />
      </div>
      
      {/* Extracted Data DB */}
      <div className="w-1/2 flex flex-col gap-2 justify-center">
        <div className="h-2 w-full bg-outline/40 rounded opacity-0 animate-[extractData1_3s_infinite]" />
        <div className="h-2 w-5/6 bg-outline/40 rounded opacity-0 animate-[extractData2_3s_infinite]" />
        <div className="h-2 w-4/5 bg-outline/40 rounded opacity-0 animate-[extractData3_3s_infinite]" />
      </div>
    </div>
  );
}
