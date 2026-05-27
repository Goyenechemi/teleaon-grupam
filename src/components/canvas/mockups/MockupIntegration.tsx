import { Database, Cloud, Building2, Cpu } from "lucide-react";

export function MockupIntegration() {
  return (
    <div className="w-full h-full bg-inverse-surface rounded p-4 relative flex items-center justify-center overflow-hidden">
      {/* Central Hub */}
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center z-10 animate-[spin_10s_linear_infinite]">
        <Cpu className="w-6 h-6 text-on-primary" />
      </div>
      
      {/* Orbiting nodes */}
      <div className="absolute inset-0 animate-[spin_8s_linear_infinite_reverse]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-surface-dim rounded-full flex items-center justify-center">
          <Database className="w-3 h-3 text-primary" />
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-surface-dim rounded-full flex items-center justify-center">
          <Cloud className="w-3 h-3 text-primary" />
        </div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-surface-dim rounded-full flex items-center justify-center">
          <Building2 className="w-3 h-3 text-primary" />
        </div>
      </div>
      
      {/* Data pulses from center to edges */}
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-tertiary-fixed rounded-full animate-[pulseUp_2s_infinite]" />
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-tertiary-fixed rounded-full animate-[pulseDown_2s_infinite]" />
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-tertiary-fixed rounded-full animate-[pulseLeft_2s_infinite]" />
    </div>
  );
}
