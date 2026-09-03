"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7ff3d]/8 blur-[100px] transition-transform duration-300 md:block"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}