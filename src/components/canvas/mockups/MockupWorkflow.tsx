export function MockupWorkflow() {
  return (
    <div className="w-full h-full bg-inverse-surface rounded p-4 relative flex items-center justify-center">
      {/* SVG Flowchart */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Paths */}
        <path d="M 20 50 L 50 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
        <path d="M 50 50 L 80 25" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
        <path d="M 50 50 L 80 75" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
        
        {/* Glowing paths (animated stroke-dashoffset) */}
        <path d="M 20 50 L 50 50 L 80 25" stroke="#ffdad7" strokeWidth="2" fill="none" 
              strokeDasharray="150" strokeDashoffset="150" className="animate-[flowPath1_3s_ease-out_infinite]" />
        <path d="M 20 50 L 50 50 L 80 75" stroke="#ffdad7" strokeWidth="2" fill="none" 
              strokeDasharray="150" strokeDashoffset="150" className="animate-[flowPath2_3s_ease-out_infinite]" />
              
        {/* Nodes */}
        <circle cx="20" cy="50" r="6" fill="#1f392e" stroke="#cbe9d9" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#1f392e" stroke="#cbe9d9" strokeWidth="2" className="animate-[pulseNode_3s_infinite_1s]" />
        <circle cx="80" cy="25" r="6" fill="#1f392e" stroke="#cbe9d9" strokeWidth="2" className="animate-[pulseNode_3s_infinite_2s]" />
        <circle cx="80" cy="75" r="6" fill="#1f392e" stroke="#cbe9d9" strokeWidth="2" className="animate-[pulseNode_3s_infinite_2s]" />
      </svg>
    </div>
  );
}
