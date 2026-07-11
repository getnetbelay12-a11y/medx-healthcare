import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/data/company";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Website terms for MedX Healthcare Solutions information, inquiries, service availability, and commercial communications.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        description="Terms for using this website and submitting MedX inquiries."
        image={medxImages.hospitalPartnership}
      />
      <section className="bg-white py-20">
        <div className="container-medx max-w-4xl space-y-7 text-lg leading-8 text-slate-600 [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#071b33]">
          <p>{company.disclaimer}</p>
          <h2>Informational purpose</h2>
          <p>
            This website describes MedX organizational context, services, and
            strategic direction. It does not create a customer, supplier,
            investor, clinical, or partnership relationship by itself.
          </p>
          <h2>No medical advice</h2>
          <p>
            Website content is not medical advice and should not be used for
            diagnosis, treatment, emergency care, or patient-specific decisions.
          </p>
          <h2>Service and product availability</h2>
          <p>
            Product availability, service scope, regulatory status, pricing, and
            delivery timelines depend on jurisdiction, approvals, inventory,
            contracts, and written confirmation from MedX.
          </p>
          <h2>Commercial terms</h2>
          <p>
            Quotations, purchase orders, signed agreements, and applicable law
            control commercial terms. Website descriptions do not override those
            documents.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Website text, design, and brand assets may not be copied, reused, or
            represented as MedX-approved material without authorization.
          </p>
          <h2>Limitations</h2>
          <p>
            MedX aims to keep information accurate, but website content may
            change and may require company confirmation before reliance.
          </p>
        </div>
      </section>
    </>
  );
}
