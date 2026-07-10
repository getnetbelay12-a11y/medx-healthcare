"use client";

import Image from "next/image";
import { useState } from "react";

type MedxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export default function MedxImage({
  src,
  alt,
  priority = false,
  className = "",
  imageClassName = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: MedxImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[linear-gradient(135deg,#061a31_0%,#0f9f6e_100%)] ${className}`}
    >
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
          onError={() => setFailed(true)}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061a31]/25 via-transparent to-white/5" />
    </div>
  );
}
