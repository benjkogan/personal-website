"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;

      // Force-hide native cursor on the hovered element (handles tab-switch & button hover edge cases)
      const target = e.target as HTMLElement;
      if (target && target.style && target.style.cursor !== "none") {
        target.style.cursor = "none";
      }
    };

    const resetCursor = () => {
      document.documentElement.style.cursor = "none";
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("visibilitychange", resetCursor);
    window.addEventListener("focus", resetCursor);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("visibilitychange", resetCursor);
      window.removeEventListener("focus", resetCursor);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[10px] w-[10px] rounded-full bg-white/60"
    />
  );
}
