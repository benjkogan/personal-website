"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const move = (e: MouseEvent) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    };

    // Forward all pointer events through the overlay to elements below
    const forward = (e: MouseEvent) => {
      overlay.style.pointerEvents = "none";
      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      overlay.style.pointerEvents = "auto";

      if (target) {
        const forwarded = new MouseEvent(e.type, e);
        target.dispatchEvent(forwarded);
      }
    };

    const events: (keyof HTMLElementEventMap)[] = [
      "click",
      "dblclick",
      "mousedown",
      "mouseup",
      "contextmenu",
    ];

    events.forEach((evt) => overlay.addEventListener(evt, forward as EventListener));
    window.addEventListener("mousemove", move);

    return () => {
      events.forEach((evt) => overlay.removeEventListener(evt, forward as EventListener));
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Invisible overlay that forces cursor: none on the entire viewport */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          cursor: "none",
          pointerEvents: "auto",
        }}
      />
      {/* Custom dot cursor */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[10px] w-[10px] rounded-full bg-white/60"
      />
    </>
  );
}
