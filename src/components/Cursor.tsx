"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pre-load the cursor image so the browser has it cached
    const img = new Image();
    img.src = "/transparent.png";

    const cursorStyle = 'url("/transparent.png") 0 0, none';

    // Apply immediately on mount
    document.documentElement.style.setProperty("cursor", cursorStyle, "important");

    const move = (e: MouseEvent) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    };

    // Re-apply cursor on any pointer entry into the document
    const hideNative = () => {
      document.documentElement.style.setProperty("cursor", cursorStyle, "important");
    };

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("pointerenter", hideNative);
    document.addEventListener("pointermove", hideNative, { once: false, passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("pointerenter", hideNative);
      document.removeEventListener("pointermove", hideNative);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[10px] w-[10px] rounded-full bg-white/60"
    />
  );
}
