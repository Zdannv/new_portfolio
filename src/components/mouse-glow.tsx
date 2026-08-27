"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateMouseCoords = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMouseCoords);
    return () => {
      window.removeEventListener("mousemove", updateMouseCoords);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="hidden md:block fixed pointer-events-none -z-10 w-[600px] h-[600px] rounded-full transition-transform duration-500 ease-out opacity-25"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 30%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}
