"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type CarouselControlsProps = {
  isPaused: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onTogglePause: () => void;
  label: string;
};

export default function CarouselControls({
  isPaused,
  onPrevious,
  onNext,
  onTogglePause,
  label,
}: CarouselControlsProps) {
  return (
    <div className="carousel-controls" aria-label={`${label} controls`}>
      <button
        type="button"
        className="carousel-control-button"
        aria-label={`Previous ${label}`}
        onClick={onPrevious}
      >
        <ChevronLeft aria-hidden="true" size={20} />
      </button>
      <button
        type="button"
        className="carousel-control-button carousel-control-button-primary"
        aria-label={isPaused ? `Play ${label}` : `Pause ${label}`}
        aria-pressed={isPaused}
        onClick={onTogglePause}
      >
        {isPaused ? (
          <Play aria-hidden="true" size={18} />
        ) : (
          <Pause aria-hidden="true" size={18} />
        )}
      </button>
      <button
        type="button"
        className="carousel-control-button"
        aria-label={`Next ${label}`}
        onClick={onNext}
      >
        <ChevronRight aria-hidden="true" size={20} />
      </button>
    </div>
  );
}
