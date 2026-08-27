"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let trailTimeout: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Trail lags slightly behind
      trailTimeout = window.setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      }, 50);

      const target = e.target as HTMLElement;
      if (!target) return;

      const hasPointerCursor = window.getComputedStyle(target).getPropertyValue("cursor") === "pointer";
      const isInteractive = 
        target.closest('[data-cursor-pointer]') || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        hasPointerCursor;

      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(trailTimeout);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring (Trailing) */}
      <div
        className={cn(
          "hidden md:block fixed w-8 h-8 rounded-full pointer-events-none z-[1000] border transition-all duration-300 ease-out",
          isPointer 
            ? "border-primary/80 bg-primary/10 scale-125" 
            : "border-primary/40 bg-transparent"
        )}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Inner Dot */}
      <div
        className={cn(
          "hidden md:block fixed w-2 h-2 rounded-full pointer-events-none z-[1001] bg-primary transition-transform duration-150 ease-out",
          isPointer ? "scale-50 opacity-80" : "scale-100 opacity-100"
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}

