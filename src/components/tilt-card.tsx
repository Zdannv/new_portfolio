"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(251, 146, 60, 0.15)"
}

export function TiltCard({ children, className, glowColor = "rgba(251, 146, 60, 0.15)", ...props }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shineX, setShineX] = useState(50);
  const [shineY, setShineY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates around the center (from -0.5 to 0.5)
    const xc = width / 2;
    const yc = height / 2;
    const dx = x - xc;
    const dy = y - yc;

    // Max rotation angles (e.g., 10 degrees)
    const maxRotate = 10;
    const rx = -(dy / yc) * maxRotate;
    const ry = (dx / xc) * maxRotate;

    setRotateX(rx);
    setRotateY(ry);

    // Calculate percentage for shine effect
    const sx = (x / width) * 100;
    const sy = (y / height) * 100;
    setShineX(sx);
    setShineY(sy);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300 ease-out select-none",
        "glass-card border border-white/5",
        className
      )}
      style={{
        perspective: "1000px",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
          isHovered ? 1.02 : 1
        }, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? "transform 0.05s ease-out" : "transform 0.5s ease-out, box-shadow 0.3s ease",
        boxShadow: isHovered 
          ? `0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 30px -5px ${glowColor}`
          : "0 4px 20px -10px rgba(0, 0, 0, 0.3)",
      }}
      {...props}
    >
      {/* Glossy shine reflection effect */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.08 : 0,
          background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgb(255, 255, 255) 0%, transparent 60%)`,
        }}
      />

      {/* Glow highlight effect */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 120px at ${shineX}% ${shineY}%, ${glowColor} 0%, transparent 100%)`,
        }}
      />

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
