
"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const handleMouseMove = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;

      if (animationFrame.current === null) {
        animationFrame.current = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      current.current.x += dx * 0.12;
      current.current.y += dy * 0.12;

      glow.style.transform = `translate3d(
        ${current.current.x}px,
        ${current.current.y}px,
        0
      ) translate(-50%, -50%)`;

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        animationFrame.current = requestAnimationFrame(updatePosition);
      } else {
        animationFrame.current = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-[#c7ff3d]/8 blur-[100px] md:block"
      style={{
        transform: "translate3d(0, 0, 0) translate(-50%, -50%)",
        willChange: "transform",
      }}
    />
  );
}
