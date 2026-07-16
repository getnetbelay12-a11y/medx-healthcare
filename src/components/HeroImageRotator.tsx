"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { medxImages } from "@/data/images";

const frames = [
  {
    ...medxImages.aiPlatformHero,
    label: "Operations intelligence",
  },
  {
    ...medxImages.aiDiagnosticsFrame,
    label: "Diagnostics readiness",
  },
  {
    ...medxImages.aiSupplyFrame,
    label: "Supply coordination",
  },
];

export default function HeroImageRotator() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % frames.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <div className="medx-hero-slideshow">
      {frames.map((frame, index) => (
        <Image
          key={frame.src}
          src={frame.src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`medx-hero-frame object-cover object-center ${
            activeFrame === index ? "medx-hero-frame-active" : ""
          }`}
        />
      ))}

      <div
        className="medx-frame-indicator medx-frame-indicator-floating"
        aria-label="Hero image scenes"
      >
        {frames.map((frame, index) => (
          <button
            key={frame.label}
            type="button"
            onClick={() => setActiveFrame(index)}
            className={activeFrame === index ? "medx-frame-indicator-active" : ""}
            aria-pressed={activeFrame === index}
          >
            <i />
            {frame.label}
          </button>
        ))}
        <button
          type="button"
          className="medx-frame-toggle"
          onClick={() => setIsPaused((current) => !current)}
          aria-pressed={isPaused}
          aria-label={isPaused ? "Play hero image rotation" : "Pause hero image rotation"}
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
          {isPaused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}
