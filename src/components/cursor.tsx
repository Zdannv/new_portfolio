"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).getPropertyValue("cursor") === "pointer" ||
        target.closest('[data-cursor-pointer]')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "hidden md:block fixed w-6 h-6 rounded-full pointer-events-none z-[1000] transition-transform duration-200 ease-out",
        "bg-primary/20 border-2 border-primary",
        isPointer ? "scale-150" : "scale-100"
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isPointer ? "scale(1.5)" : "scale(1)"}`,
      }}
    />
  );
}
