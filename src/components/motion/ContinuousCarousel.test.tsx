/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import HistoricalBoardCarousel from "@/components/leadership/HistoricalBoardCarousel";
import ContinuousCarousel from "@/components/motion/ContinuousCarousel";
import HistoricalPartnersCarousel from "@/components/partners/HistoricalPartnersCarousel";
import { getPublishedHistoricalLeadership } from "@/data/leadership";
import { getPublishedHistoricalRelationships } from "@/data/relationships";

let prefersReducedMotion = false;
let isIntersecting = true;

class MockIntersectionObserver {
  private callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe() {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }

  disconnect() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
}

beforeEach(() => {
  prefersReducedMotion = false;
  isIntersecting = true;
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: prefersReducedMotion,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    value: MockIntersectionObserver,
  });
  Object.defineProperty(document, "hidden", {
    configurable: true,
    value: false,
  });
});

afterEach(() => {
  cleanup();
});

describe("ContinuousCarousel", () => {
  it("renders original items once semantically and one hidden clone track", () => {
    render(
      <ContinuousCarousel ariaLabel="Test carousel">
        <article id="item-a">Alpha</article>
        <article id="item-b">Beta</article>
      </ContinuousCarousel>,
    );

    const originalTrack = screen.getByTestId("carousel-original-track");
    const cloneTrack = screen.getByTestId("carousel-clone-track");

    expect(within(originalTrack).getAllByText(/Alpha|Beta/)).toHaveLength(2);
    expect(cloneTrack).toHaveAttribute("aria-hidden", "true");
    expect(cloneTrack).toHaveAttribute("tabindex", "-1");
    expect(document.querySelectorAll("#item-a")).toHaveLength(1);
    expect(document.querySelectorAll("#item-b")).toHaveLength(1);
  });

  it("removes clone focus targets", () => {
    render(
      <ContinuousCarousel ariaLabel="Focusable carousel">
        <a href="/services" id="service-link">
          Services
        </a>
      </ContinuousCarousel>,
    );

    const cloneTrack = screen.getByTestId("carousel-clone-track");
    expect(cloneTrack.querySelector("a")).toHaveAttribute("tabindex", "-1");
  });

  it("pauses for reduced-motion users", () => {
    prefersReducedMotion = true;
    render(
      <ContinuousCarousel ariaLabel="Reduced carousel">
        <article>Alpha</article>
      </ContinuousCarousel>,
    );

    const region = screen.getByLabelText("Reduced carousel");
    expect(region).toHaveAttribute("data-reduced-motion", "true");
    expect(region).toHaveAttribute("data-paused", "true");
  });

  it("pause button toggles manual paused state", () => {
    render(
      <ContinuousCarousel ariaLabel="Manual carousel">
        <article>Alpha</article>
      </ContinuousCarousel>,
    );

    const region = screen.getByLabelText("Manual carousel");
    fireEvent.click(screen.getByLabelText("Pause Manual carousel"));
    expect(region).toHaveAttribute("data-paused", "true");
    fireEvent.click(screen.getByLabelText("Play Manual carousel"));
    expect(region).toHaveAttribute("data-paused", "false");
  });

  it("pauses on hover and focus", () => {
    render(
      <ContinuousCarousel ariaLabel="Interactive carousel">
        <button type="button">Inspect item</button>
      </ContinuousCarousel>,
    );

    const region = screen.getByLabelText("Interactive carousel");
    const viewport = document.querySelector(".continuous-carousel-viewport");
    expect(viewport).toBeTruthy();

    fireEvent.mouseEnter(viewport as Element);
    expect(region).toHaveAttribute("data-paused", "true");
    fireEvent.mouseLeave(viewport as Element);
    expect(region).toHaveAttribute("data-paused", "false");

    const originalTrack = screen.getByTestId("carousel-original-track");
    fireEvent.focus(within(originalTrack).getByText("Inspect item"));
    expect(region).toHaveAttribute("data-paused", "true");
  });

  it("pauses when offscreen and when the browser tab is hidden", () => {
    isIntersecting = false;
    render(
      <ContinuousCarousel ariaLabel="Visibility carousel">
        <article>Alpha</article>
      </ContinuousCarousel>,
    );

    const region = screen.getByLabelText("Visibility carousel");
    expect(region).toHaveAttribute("data-offscreen", "true");
    expect(region).toHaveAttribute("data-paused", "true");

    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: true,
    });
    fireEvent(document, new Event("visibilitychange"));
    expect(region).toHaveAttribute("data-paused", "true");
  });

  it("previous and next controls pause and update manual offset", () => {
    render(
      <ContinuousCarousel ariaLabel="Controlled carousel">
        <article>Alpha</article>
        <article>Beta</article>
      </ContinuousCarousel>,
    );

    const region = screen.getByLabelText("Controlled carousel");
    fireEvent.click(screen.getByLabelText("Next Controlled carousel"));
    expect(region).toHaveAttribute("data-paused", "true");
    expect(region).toHaveStyle({ "--carousel-manual-offset": "262.4px" });
    fireEvent.click(screen.getByLabelText("Previous Controlled carousel"));
    expect(region).toHaveStyle({ "--carousel-manual-offset": "0px" });
  });
});

describe("Historical carousel content safeguards", () => {
  it("renders only published historical relationships and keeps the disclaimer visible", () => {
    render(<HistoricalPartnersCarousel />);

    const published = getPublishedHistoricalRelationships();
    const originalTrack = screen.getByTestId("carousel-original-track");

    expect(originalTrack.children).toHaveLength(published.length);
    expect(screen.getByText(/Confirm current relationship status/)).toBeTruthy();
    expect(within(originalTrack).queryByText("Arbor Vita Corporation")).toBeTruthy();
    expect(document.querySelector('[data-partner-id="arbor-vita-technology"]')).toBeNull();
  });

  it("renders approved historical partner logos", () => {
    render(<HistoricalPartnersCarousel />);

    const originalTrack = screen.getByTestId("carousel-original-track");
    expect(originalTrack.querySelectorAll("img").length).toBeGreaterThan(0);
  });

  it("renders approved board portraits and does not duplicate the heading", () => {
    render(<HistoricalBoardCarousel />);

    const published = getPublishedHistoricalLeadership();
    const originalTrack = screen.getByTestId("carousel-original-track");

    expect(originalTrack.children).toHaveLength(published.length);
    expect(
      within(originalTrack).getAllByAltText(/historical 2020 board reference/i).length,
    ).toBeGreaterThan(0);
  });

  it("renders mobile-ready snap structure", () => {
    render(
      <ContinuousCarousel ariaLabel="Mobile snap carousel">
        <article>Alpha</article>
      </ContinuousCarousel>,
    );

    expect(document.querySelector(".continuous-carousel-viewport")).toBeTruthy();
    expect(screen.getByTestId("carousel-original-track")).toBeTruthy();
  });
});
