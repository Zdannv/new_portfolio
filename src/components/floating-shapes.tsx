import React from "react";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5 select-none opacity-40">
      {/* Glowing Ring shape (Top Left) */}
      <div 
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full border border-primary/20 animate-float-slow"
        style={{
          boxShadow: "0 0 50px -10px rgba(251, 146, 60, 0.05)",
          background: "radial-gradient(circle, transparent 70%, rgba(251, 146, 60, 0.02) 100%)"
        }}
      />

      {/* Wireframe Rotating Cube Mock (Middle Right) */}
      <div className="absolute top-[35%] right-[8%] w-48 h-48 animate-float-medium">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/10 stroke-current fill-none stroke-[0.5]">
          {/* Isometric Cube Draw */}
          <polygon points="50,15 90,35 90,75 50,95 10,75 10,35" />
          <line x1="50" y1="15" x2="50" y2="95" />
          <line x1="50" y1="55" x2="90" y2="35" />
          <line x1="50" y1="55" x2="10" y2="35" />
          <line x1="90" y1="75" x2="50" y2="55" />
          <line x1="10" y1="75" x2="50" y2="55" />
        </svg>
      </div>

      {/* Hexagon mesh detail (Bottom Left) */}
      <div className="absolute bottom-[20%] left-[8%] w-36 h-36 animate-float-fast">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/15 stroke-current fill-none stroke-[0.8]">
          <polygon points="50,5 93.3,30 93.3,80 50,105 6.7,80 6.7,30" />
          <polygon points="50,20 78,36 78,69 50,85 22,69 22,36" className="opacity-50" />
        </svg>
      </div>

      {/* Slow floating orb detail (Top Center-Right) */}
      <div 
        className="absolute top-[5%] right-[25%] w-72 h-72 rounded-full bg-primary/3 blur-[120px] animate-pulse-slow"
      />

      {/* Blurred background orb (Center Left) */}
      <div 
        className="absolute top-[50%] left-[15%] w-96 h-96 rounded-full bg-amber-500/2 blur-[150px] animate-pulse-slow"
        style={{ animationDelay: "-3s" }}
      />
    </div>
  );
}
