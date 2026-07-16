/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import HistoricalBoardCarousel from "@/components/leadership/HistoricalBoardCarousel";
import LeadershipCarousel, {
  LeadershipCard,
} from "@/components/leadership/LeadershipCarousel";
import AutoCarousel from "@/components/motion/AutoCarousel";
import ContinuousCarousel from "@/components/motion/ContinuousCarousel";
import HistoricalRelationshipsCarousel from "@/components/partners/HistoricalRelationshipsCarousel";
import RelationshipsCarousel, {
  RelationshipCard,
} from "@/components/partners/RelationshipsCarousel";
import {
  getPublishedHistoricalLeadership,
  getPublishedLeadership,
} from "@/data/leadership";
import {
  getPublishedHistoricalRelationships,
  getPublishedRelationships,
} from "@/data/relationships";

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
  it("renders original items once semantically and one hidden clone track", async () => {
    render(
      <ContinuousCarousel ariaLabel="Test carousel">
        <article id="item-a">Alpha</article>
        <article id="item-b">Beta</article>
      </ContinuousCarousel>,
    );

    const originalTrack = screen.getByTestId("carousel-original-track");
    const cloneTrack = await screen.findByTestId("carousel-clone-track");

    expect(within(originalTrack).getAllByText(/Alpha|Beta/)).toHaveLength(2);
    expect(cloneTrack).toHaveAttribute("aria-hidden", "true");
    expect(cloneTrack).toHaveAttribute("tabindex", "-1");
    expect(document.querySelectorAll("#item-a")).toHaveLength(1);
    expect(document.querySelectorAll("#item-b")).toHaveLength(1);
  });

  it("removes clone focus targets", async () => {
    render(
      <ContinuousCarousel ariaLabel="Focusable carousel">
        <a href="/services" id="service-link">
          Services
        </a>
      </ContinuousCarousel>,
    );

    const cloneTrack = await screen.findByTestId("carousel-clone-track");
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
    render(<HistoricalRelationshipsCarousel />);

    const published = getPublishedHistoricalRelationships();
    const originalTrack = screen.getByTestId("auto-carousel-original-track");

    expect(originalTrack.children).toHaveLength(published.length);
    expect(screen.getByText("Relationships and Historical Context")).toBeTruthy();
    expect(within(originalTrack).queryAllByText("Arbor Vita Corporation").length).toBeGreaterThan(0);
  });

  it("renders available historical partner logos and initials fallbacks", () => {
    render(<HistoricalRelationshipsCarousel />);

    const originalTrack = screen.getByTestId("auto-carousel-original-track");
    expect(originalTrack.querySelectorAll("img").length).toBeGreaterThan(0);
    expect(
      within(originalTrack).getAllByText("Black Lion Hospital, Addis Ababa").length,
    ).toBeGreaterThan(0);
    expect(within(originalTrack).getAllByText("AV")).toBeTruthy();
  });

  it("renders approved board portraits and does not duplicate the heading", () => {
    render(<HistoricalBoardCarousel />);

    const published = getPublishedHistoricalLeadership();
    const originalTrack = screen.getByTestId("auto-carousel-original-track");

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

describe("AutoCarousel motion contract", () => {
  it("autoplays by default without requiring a click", () => {
    render(
      <AutoCarousel ariaLabel="Autoplay carousel">
        <article>Alpha</article>
        <article>Beta</article>
      </AutoCarousel>,
    );

    const region = screen.getByLabelText("Autoplay carousel");
    expect(region).toHaveAttribute("data-paused", "false");
    expect(region).toHaveStyle({ "--carousel-duration": "56s" });
  });

  it("uses right-to-left motion for board and left-to-right motion for relationships", () => {
    render(
      <>
        <LeadershipCarousel />
        <RelationshipsCarousel />
      </>,
    );

    expect(screen.getByLabelText("Leadership and governance carousel")).toHaveStyle({
      "--carousel-direction": "medx-board-marquee",
    });
    expect(screen.getByLabelText("Relationships and historical context carousel")).toHaveStyle({
      "--carousel-direction": "medx-relationships-marquee",
    });
  });

  it("keeps public leadership and relationship carousels automatic without visible controls", () => {
    render(
      <>
        <LeadershipCarousel />
        <RelationshipsCarousel />
      </>,
    );

    expect(
      screen.queryByLabelText("Pause Leadership and governance carousel"),
    ).toBeNull();
    expect(
      screen.queryByLabelText("Pause Relationships and historical context carousel"),
    ).toBeNull();
    expect(screen.getByLabelText("Leadership and governance carousel")).toHaveAttribute(
      "data-paused",
      "false",
    );
    expect(
      screen.getByLabelText("Relationships and historical context carousel"),
    ).toHaveAttribute("data-paused", "false");
  });

  it("pauses on hover and focus, and resumes afterward", () => {
    render(
      <AutoCarousel ariaLabel="Interactive auto carousel">
        <button type="button">Focusable item</button>
      </AutoCarousel>,
    );

    const region = screen.getByLabelText("Interactive auto carousel");
    const viewport = document.querySelector(".auto-carousel-viewport");
    expect(viewport).toBeTruthy();

    fireEvent.mouseEnter(viewport as Element);
    expect(region).toHaveAttribute("data-paused", "true");
    fireEvent.mouseLeave(viewport as Element);
    expect(region).toHaveAttribute("data-paused", "false");

    const originalTrack = screen.getByTestId("auto-carousel-original-track");
    fireEvent.focus(within(originalTrack).getByText("Focusable item"));
    expect(region).toHaveAttribute("data-paused", "true");
  });

  it("pause button works independently of autoplay", () => {
    render(
      <AutoCarousel ariaLabel="Controlled auto carousel">
        <article>Alpha</article>
      </AutoCarousel>,
    );

    const region = screen.getByLabelText("Controlled auto carousel");
    fireEvent.click(screen.getByLabelText("Pause Controlled auto carousel"));
    expect(region).toHaveAttribute("data-paused", "true");
    fireEvent.click(screen.getByLabelText("Play Controlled auto carousel"));
    expect(region).toHaveAttribute("data-paused", "false");
  });

  it("pauses offscreen and when the browser tab is hidden", () => {
    isIntersecting = false;
    render(
      <AutoCarousel ariaLabel="Visibility auto carousel">
        <article>Alpha</article>
      </AutoCarousel>,
    );

    const region = screen.getByLabelText("Visibility auto carousel");
    expect(region).toHaveAttribute("data-offscreen", "true");
    expect(region).toHaveAttribute("data-paused", "true");

    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: true,
    });
    fireEvent(document, new Event("visibilitychange"));
    expect(region).toHaveAttribute("data-paused", "true");
  });

  it("disables autoplay for reduced-motion users while keeping controls", () => {
    prefersReducedMotion = true;
    render(
      <AutoCarousel ariaLabel="Reduced auto carousel">
        <article>Alpha</article>
      </AutoCarousel>,
    );

    const region = screen.getByLabelText("Reduced auto carousel");
    expect(region).toHaveAttribute("data-reduced-motion", "true");
    expect(region).toHaveAttribute("data-paused", "true");
    expect(screen.getByLabelText("Play Reduced auto carousel")).toBeTruthy();
  });

  it("keeps clone track hidden and non-focusable without duplicate IDs", async () => {
    render(
      <AutoCarousel ariaLabel="Clone safety carousel">
        <a href="/services" id="safe-link">
          Services
        </a>
      </AutoCarousel>,
    );

    const cloneTrack = await screen.findByTestId("auto-carousel-clone-track");
    expect(cloneTrack).toHaveAttribute("aria-hidden", "true");
    expect(cloneTrack).toHaveAttribute("inert");
    expect(cloneTrack).toHaveAttribute("tabindex", "-1");
    expect(cloneTrack.querySelector("a")).toHaveAttribute("tabindex", "-1");
    expect(document.querySelectorAll("#safe-link")).toHaveLength(1);
  });

  it("does not render clone tracks into server HTML", () => {
    const html = renderToStaticMarkup(
      <AutoCarousel ariaLabel="Server carousel">
        <article data-partner-id="one">One</article>
        <article data-partner-id="two">Two</article>
      </AutoCarousel>,
    );

    expect(html).toContain('data-testid="auto-carousel-original-track"');
    expect(html).not.toContain('data-testid="auto-carousel-clone-track"');
    expect(html.match(/data-partner-id=/g)).toHaveLength(2);
  });

  it("keeps historical records unique in server-rendered semantic HTML", () => {
    const partnerHtml = renderToStaticMarkup(<RelationshipsCarousel />);
    const boardHtml = renderToStaticMarkup(<LeadershipCarousel />);

    expect(partnerHtml).not.toContain('data-testid="auto-carousel-clone-track"');
    expect(boardHtml).not.toContain('data-testid="auto-carousel-clone-track"');

    const partnerIds = Array.from(
      partnerHtml.matchAll(/data-relationship-id="([^"]+)"/g),
      (match) => match[1],
    );
    const boardIds = Array.from(
      boardHtml.matchAll(/data-leadership-id="([^"]+)"/g),
      (match) => match[1],
    );

    expect(new Set(partnerIds).size).toBe(partnerIds.length);
    expect(new Set(boardIds).size).toBe(boardIds.length);
  });

  it("renders mobile touch fallback state without hiding items", () => {
    render(
      <AutoCarousel ariaLabel="Mobile auto carousel">
        <article>Alpha</article>
        <article>Beta</article>
      </AutoCarousel>,
    );

    const region = screen.getByLabelText("Mobile auto carousel");
    const viewport = document.querySelector(".auto-carousel-viewport");
    fireEvent.touchStart(viewport as Element);
    expect(region).toHaveAttribute("data-touch-paused", "true");
    expect(screen.getByTestId("auto-carousel-original-track").children).toHaveLength(2);
  });

  it("uses initials when a relationship logo is not available", () => {
    render(
      <RelationshipCard
        relationship={{
          id: "initials-relationship",
          organization: "Initials Relationship Organization",
          relationshipType: "Historical institution reference",
          sourceYear: 2020,
          publicDescription: "Test",
          status: "historical",
          isPublished: true,
          displayOrder: 1,
        }}
      />,
    );

    expect(document.querySelector('[data-relationship-id="initials-relationship"] img')).toBeNull();
    expect(screen.getByText("IR")).toBeTruthy();
  });

  it("uses initials when a leadership portrait is not available", () => {
    render(
      <LeadershipCard
        member={{
          id: "initials-leader",
          name: "Dr. Sample Leader",
          credentials: "M.D.",
          role: "Historical test reference",
          sourceYear: 2020,
          status: "historical",
          isPublished: true,
          displayOrder: 1,
        }}
      />,
    );

    expect(document.querySelector('[data-leadership-id="initials-leader"] img')).toBeNull();
    expect(screen.getByText("SL")).toBeTruthy();
    expect(screen.getByText("Historical 2020 reference")).toBeTruthy();
  });

  it("renders all published directors from centralized data", () => {
    render(<LeadershipCarousel />);

    const originalTrack = screen.getByTestId("auto-carousel-original-track");
    expect(originalTrack.children).toHaveLength(getPublishedLeadership().length);
    expect(screen.getAllByText("Historical 2020 reference").length).toBeGreaterThan(0);
    expect(screen.getByText("CEO of Arbor Vita Corporation")).toBeTruthy();
  });

  it("renders all published relationships from centralized data", () => {
    render(<RelationshipsCarousel />);

    const originalTrack = screen.getByTestId("auto-carousel-original-track");
    expect(originalTrack.children).toHaveLength(getPublishedRelationships().length);
    expect(screen.getAllByText("2020 reference").length).toBeGreaterThan(0);
    expect(screen.getByText("TIRET Corporate")).toBeTruthy();
  });

  it("filters relationship status without a page reload", () => {
    render(<RelationshipsCarousel />);

    expect(screen.getByText("Arbor Vita Corporation")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Current" }));
    expect(screen.queryByText("Arbor Vita Corporation")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Historical" }));
    expect(screen.getByText("Arbor Vita Corporation")).toBeTruthy();
  });
});
