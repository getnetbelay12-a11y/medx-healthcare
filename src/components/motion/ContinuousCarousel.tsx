"use client";

import {
  Children,
  cloneElement,
  type CSSProperties,
  type HTMLAttributes,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import CarouselControls from "./CarouselControls";

export type ContinuousCarouselProps = {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  pauseWhenOffscreen?: boolean;
  showControls?: boolean;
  ariaLabel: string;
  className?: string;
  itemGap?: number;
};

const speedDurations: Record<NonNullable<ContinuousCarouselProps["speed"]>, string> = {
  slow: "54s",
  medium: "46s",
  fast: "38s",
};

const focusableElementNames = new Set([
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "summary",
]);

function sanitizeClone(node: ReactNode): ReactNode {
  if (!isValidElement(node)) {
    return node;
  }

  const element = node as ReactElement<Record<string, unknown>>;
  const props = element.props;
  const nextProps: Record<string, unknown> = {};

  if ("id" in props) {
    nextProps.id = undefined;
  }

  if (
    typeof element.type === "string" &&
    (focusableElementNames.has(element.type) || "tabIndex" in props)
  ) {
    nextProps.tabIndex = -1;
  }

  if (typeof element.type === "string" && element.type === "img") {
    nextProps.loading = "lazy";
  }

  if (
    "src" in props &&
    ("width" in props || "height" in props || "fill" in props)
  ) {
    nextProps.loading = "lazy";
    nextProps.priority = false;
    nextProps.fetchPriority = "low";
  }

  if ("children" in props) {
    nextProps.children = Children.map(props.children as ReactNode, sanitizeClone);
  }

  return cloneElement(element, nextProps);
}

export default function ContinuousCarousel({
  children,
  direction = "left",
  speed = "medium",
  pauseOnHover = true,
  pauseOnFocus = true,
  pauseWhenOffscreen = true,
  showControls = true,
  ariaLabel,
  className = "",
  itemGap = 18,
}: ContinuousCarouselProps) {
  const carouselId = useId();
  const viewportRef = useRef<HTMLDivElement>(null);
  const items = useMemo(() => Children.toArray(children), [children]);
  const clonedItems = useMemo(() => items.map(sanitizeClone), [items]);
  const prefersReducedMotion = useReducedMotion();
  const isVisible = useElementVisibility(viewportRef);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const [manualOffset, setManualOffset] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const mountTimer = window.setTimeout(() => setHasMounted(true), 0);
    const updateVisibility = () => setIsTabHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      window.clearTimeout(mountTimer);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  const isPaused =
    prefersReducedMotion ||
    isUserPaused ||
    isTabHidden ||
    (pauseWhenOffscreen && !isVisible) ||
    (pauseOnHover && isHovered) ||
    (pauseOnFocus && isFocusWithin);

  const moveByCard = (multiplier: 1 | -1) => {
    setIsUserPaused(true);
    const viewportWidth = viewportRef.current?.clientWidth || 320;
    const offset = Math.max(220, Math.min(340, viewportWidth * 0.82));
    const nextOffset = manualOffset + offset * multiplier;
    setManualOffset(nextOffset);
    viewportRef.current?.scrollBy?.({ left: offset * multiplier, behavior: "smooth" });
  };

  const style = {
    "--carousel-duration": speedDurations[speed],
    "--carousel-gap": `${itemGap}px`,
    "--carousel-direction":
      direction === "left" ? "medx-marquee-left" : "medx-marquee-right",
    "--carousel-manual-offset": `${manualOffset}px`,
  } as CSSProperties;

  return (
    <section
      className={`continuous-carousel ${className}`}
      aria-label={ariaLabel}
      data-paused={isPaused ? "true" : "false"}
      data-reduced-motion={prefersReducedMotion ? "true" : "false"}
      data-offscreen={isVisible ? "false" : "true"}
      style={style}
    >
      {showControls && (
        <CarouselControls
          isPaused={isPaused}
          label={ariaLabel}
          onPrevious={() => moveByCard(-1)}
          onNext={() => moveByCard(1)}
          onTogglePause={() => setIsUserPaused((current) => !current)}
        />
      )}

      <div
        id={carouselId}
        ref={viewportRef}
        className="continuous-carousel-viewport"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocusWithin(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsFocusWithin(false);
          }
        }}
      >
        <div className="continuous-carousel-offset">
          <div className="continuous-carousel-strip">
            <div className="continuous-carousel-track" data-testid="carousel-original-track">
              {items.map((item, index) => (
                <div className="continuous-carousel-item" key={`original-${index}`}>
                  {item}
                </div>
              ))}
            </div>
            {hasMounted && (
              <div
                className="continuous-carousel-track"
                data-testid="carousel-clone-track"
                aria-hidden="true"
                tabIndex={-1}
                {...({ inert: true } as HTMLAttributes<HTMLDivElement>)}
              >
                {clonedItems.map((item, index) => (
                  <div className="continuous-carousel-item" key={`clone-${index}`}>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
