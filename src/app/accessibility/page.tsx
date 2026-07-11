import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility",
  description:
    "Accessibility commitment and supported practices for the MedX Healthcare Solutions website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Accessibility"
        description="MedX is committed to a clear, readable, and usable website experience."
        image={medxImages.digitalHealth}
      />
      <section className="bg-white py-20">
        <div className="container-medx max-w-4xl space-y-7 text-lg leading-8 text-slate-600 [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#071b33]">
          <h2>Commitment</h2>
          <p>
            The MedX website is designed for readable content, keyboard access,
            strong contrast, responsive layouts, and clear form feedback.
          </p>
          <h2>Supported practices</h2>
          <p>
            The site uses semantic page structure, descriptive links, visible
            focus states, text alternatives for meaningful images, and concise
            error messages for form fields.
          </p>
          <h2>Keyboard and motion</h2>
          <p>
            Navigation and forms are operable by keyboard. Motion is restrained,
            and the design respects reduced-motion preferences.
          </p>
          <h2>Feedback</h2>
          <p>
            Accessibility issues can be reported through the contact page with
            the page URL, device, browser, and a short description of the issue.
          </p>
        </div>
      </section>
    </>
  );
}
