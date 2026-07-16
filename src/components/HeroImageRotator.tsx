"use client";

import Image from "next/image";
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % frames.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="medx-hero-slideshow" aria-hidden="true">
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

      <div className="medx-frame-indicator medx-frame-indicator-floating">
        {frames.map((frame, index) => (
          <span
            key={frame.label}
            className={activeFrame === index ? "medx-frame-indicator-active" : ""}
          >
            <i />
            {frame.label}
          </span>
        ))}
      </div>
    </div>
  );
}
