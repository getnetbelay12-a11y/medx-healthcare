import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/data/company";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy information for MedX Healthcare Solutions website inquiries and communications.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How MedX handles inquiry information submitted through this website."
        image={medxImages.digitalHealth}
      />
      <section className="bg-white py-20">
        <div className="container-medx max-w-4xl space-y-7 text-lg leading-8 text-slate-600 [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#071b33]">
          <p>{company.disclaimer}</p>
          <h2>Information collected</h2>
          <p>
            The contact form may collect your name, organization, email, phone,
            country, city or region, inquiry type, requested product or service,
            estimated quantity, urgency, preferred timeline, and message.
          </p>
          <h2>Purpose</h2>
          <p>
            MedX uses inquiry information to respond to requests, evaluate
            supply or partnership needs, and maintain communication records.
          </p>
          <h2>Email processing</h2>
          <p>
            If email delivery is configured, inquiry details may be processed by
            an email delivery provider to notify MedX and confirm receipt.
          </p>
          <h2>Retention</h2>
          <p>
            Inquiry records are retained only as needed for business,
            compliance, and communication purposes.
          </p>
          <h2>No sale of personal data</h2>
          <p>MedX does not sell personal information submitted through this website.</p>
          <h2>Sensitive medical information</h2>
          <p>
            Do not submit sensitive medical information, diagnoses, emergency
            requests, or patient records through the general contact form.
          </p>
          <h2>Contact</h2>
          <p>
            Privacy questions can be submitted through the MedX contact page.
            Public email and phone details are displayed only when approved
            contact information has been configured.
          </p>
        </div>
      </section>
    </>
  );
}
