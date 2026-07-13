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

export type AutoCarouselProps = {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  showControls?: boolean;
  ariaLabel: string;
  className?: string;
  itemGap?: number;
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

  if ("children" in props) {
    nextProps.children = Children.map(props.children as ReactNode, sanitizeClone);
  }

  return cloneElement(element, nextProps);
}

export default function AutoCarousel({
  children,
  direction = "left",
  duration = 56,
  pauseOnHover = true,
  pauseOnFocus = true,
  showControls = true,
  ariaLabel,
  className = "",
  itemGap = 18,
}: AutoCarouselProps) {
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
  const [isTouchPaused, setIsTouchPaused] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsTabHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);

    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  const isPaused =
    prefersReducedMotion ||
    isUserPaused ||
    isTabHidden ||
    !isVisible ||
    isTouchPaused ||
    (pauseOnHover && isHovered) ||
    (pauseOnFocus && isFocusWithin);

  const moveByCard = (multiplier: 1 | -1) => {
    setIsUserPaused(true);
    const viewportWidth = viewportRef.current?.clientWidth || 320;
    const offset = Math.max(260, Math.min(360, viewportWidth * 0.72));
    viewportRef.current?.scrollBy?.({ left: offset * multiplier, behavior: "smooth" });
  };

  const style = {
    "--carousel-duration": `${duration}s`,
    "--carousel-gap": `${itemGap}px`,
    "--carousel-direction":
      direction === "left" ? "medx-board-marquee" : "medx-relationships-marquee",
  } as CSSProperties;

  return (
    <section
      className={`auto-carousel ${className}`}
      aria-label={ariaLabel}
      data-direction={direction}
      data-paused={isPaused ? "true" : "false"}
      data-reduced-motion={prefersReducedMotion ? "true" : "false"}
      data-offscreen={isVisible ? "false" : "true"}
      data-touch-paused={isTouchPaused ? "true" : "false"}
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
        className="auto-carousel-viewport"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocusWithin(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsFocusWithin(false);
          }
        }}
        onTouchStart={() => setIsTouchPaused(true)}
      >
        <div className="auto-carousel-strip">
          <div className="auto-carousel-track" data-testid="auto-carousel-original-track">
            {items.map((item, index) => (
              <div className="auto-carousel-item" key={`original-${index}`}>
                {item}
              </div>
            ))}
          </div>
          <div
            className="auto-carousel-track"
            data-testid="auto-carousel-clone-track"
            aria-hidden="true"
            tabIndex={-1}
            {...({ inert: true } as HTMLAttributes<HTMLDivElement>)}
          >
            {clonedItems.map((item, index) => (
              <div className="auto-carousel-item" key={`clone-${index}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
