"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const fencingImages = [
  { src: "/fencing/celebration.jpg", alt: "Celebration" },
  { src: "/fencing/chill-fencing.jpg", alt: "Chill fencing", objectPosition: "center 30%" },
  { src: "/fencing/high-five.jpg", alt: "High five" },
  { src: "/fencing/ivy-champs.jpg", alt: "Ivy Champs" },
  { src: "/fencing/lunge.jpg", alt: "Lunge" },
  { src: "/fencing/grand-prix.jpg", alt: "Grand Prix" },
];

export default function Athlete() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close]);

  return (
    <section id="athlete" className="px-6">
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out animate-fade-in"
          onClick={close}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={lightbox}
              alt=""
              width={1200}
              height={1200}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Fencing */}
      <div className="py-12 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Fencing
        </h2>
        <div className="mt-8 space-y-4 text-muted leading-relaxed">
          <p>
            I have been fencing since I was 10. How did I get into it? A tale
            as old as time....
          </p>
          <p>
            Anyway, I was lucky enough to make the US World Travel
            team and competed at tens of World Cups and Olympic qualifiers
            for Team USA.
          </p>
          <p>
            Now, I am focused on my NCAA fencing career at UPenn.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {fencingImages.map((img) => (
            <button
              key={img.src}
              onClick={() => setLightbox(img.src)}
              className="relative aspect-square overflow-hidden rounded-xl block cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Running + Endurance */}
      <div className="py-12 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Running + Endurance
        </h2>
        <div className="mt-8 space-y-4 text-muted leading-relaxed">
          <p>
            Recently, I have really gotten into endurance sports, specifically
            distance running. It started as cross training for fencing, but I
            ended up running the Philly Marathon (3:25) along with many halves and 5Ks,
            and now I&apos;m excited to start training for an Ironman!
            Stay tuned....
          </p>
        </div>
      </div>
    </section>
  );
}
