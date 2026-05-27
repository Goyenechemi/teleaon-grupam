import { ShieldCheck } from "lucide-react";

export function MockupCompliance() {
  return (
    <div className="w-full h-full bg-inverse-surface rounded p-4 relative flex items-center justify-center overflow-hidden">
      {/* Radar rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 border border-outline/20 rounded-full" />
        <div className="absolute w-16 h-16 border border-outline/20 rounded-full" />
        <div className="absolute w-8 h-8 border border-primary/50 rounded-full animate-ping" />
      </div>
      
      {/* Central Shield */}
      <ShieldCheck className="w-8 h-8 text-tertiary-fixed z-10 bg-inverse-surface rounded-full" />
      
      {/* Incoming threat */}
      <div className="absolute w-2 h-2 bg-error rounded-full animate-[incomingThreat_2.5s_infinite]" />
      
      {/* Deflected/Safe */}
      <div className="absolute w-2 h-2 bg-tertiary-fixed-dim rounded-full opacity-0 animate-[deflectedSafe_2.5s_infinite]" />
    </div>
  );
}
