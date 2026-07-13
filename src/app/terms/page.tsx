import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  governingLawText,
  legalConfig,
  legalFieldsRequiringConfirmation,
  termsSections,
} from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | MedX Healthcare Solutions",
  description:
    "Review the terms governing use of the MedX Healthcare Solutions website, inquiry forms, AI-assisted tools, and public-facing services.",
  path: "/terms",
});

const sectionIds = termsSections.map((title) => ({
  title,
  id: title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
}));

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-black leading-tight text-[#071b33]">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item) => (
        <li key={item} className="list-disc pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="container-medx max-w-5xl">
          <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#10a66e]">
            Last updated: {legalConfig.termsLastUpdated}
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-[#071b33] md:text-5xl">
            Terms of Use
          </h1>
          <div className="mt-5 grid gap-2 text-sm font-bold text-slate-600 sm:grid-cols-3">
            <p>Effective date: {legalConfig.termsEffectiveDate}</p>
            <p>Last updated: {legalConfig.termsLastUpdated}</p>
            <p>Version: {legalConfig.termsVersion}</p>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            These Terms govern access to and use of the MedX Healthcare Solutions
            website, digital tools, inquiry forms, and related public-facing services.
          </p>
        </div>
      </section>

      <main className="bg-white py-12 md:py-16">
        <div className="container-medx grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start">
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <nav
              aria-label="Terms sections"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#10a66e]">
                Contents
              </p>
              <ol className="mt-4 space-y-2 text-sm font-bold leading-6 text-slate-600">
                {sectionIds.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="rounded-sm transition hover:text-[#071b33] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-4xl">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-bold leading-7 text-amber-950">
              This page is a public website terms template for MedX review. The
              following fields require company or legal confirmation:{" "}
              {legalFieldsRequiringConfirmation.join(", ")}.
            </div>

            <div className="mt-10 space-y-10">
              <LegalSection id="acceptance-of-terms" title="Acceptance of Terms">
                <p>
                  By accessing this website, using MedX public-facing digital tools,
                  or submitting an inquiry form, you agree to these Terms and to the
                  MedX{" "}
                  <Link
                    href="/privacy"
                    className="font-black text-[#0a7c5b] underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                  >
                    Privacy Policy
                  </Link>
                  . If you do not agree, do not use the website or submit information
                  through its forms.
                </p>
              </LegalSection>

              <LegalSection id="informational-purpose" title="Informational Purpose">
                <p>
                  The website provides organizational, service, strategic, and contact
                  information about MedX. Website content is informational and does
                  not create a customer, supplier, investor, clinical, employment,
                  or partnership relationship by itself.
                </p>
              </LegalSection>

              <LegalSection
                id="no-medical-advice-or-emergency-services"
                title="No Medical Advice or Emergency Services"
              >
                <p>
                  The website does not provide medical diagnosis, treatment advice,
                  emergency service, or patient-specific healthcare decisions.
                  Information on the website should not be used as a substitute for
                  qualified medical judgment.
                </p>
                <p>
                  For health concerns, users should contact qualified healthcare
                  professionals. For emergencies, users should contact local emergency
                  services or the nearest appropriate healthcare facility.
                </p>
              </LegalSection>

              <LegalSection id="eligibility-and-authority" title="Eligibility and Authority">
                <p>
                  If you submit an inquiry on behalf of an organization, you confirm
                  that you are authorized to share the submitted information and to
                  communicate with MedX for that organization.
                </p>
              </LegalSection>

              <LegalSection id="acceptable-use" title="Acceptable Use">
                <p>Users may not use the website or forms for abusive or unauthorized purposes.</p>
                <BulletList
                  items={[
                    "Illegal activity or violation of applicable law.",
                    "False, misleading, or incomplete information.",
                    "Impersonation or misrepresentation of authority.",
                    "Malware, phishing, security attacks, or automated abuse.",
                    "Scraping beyond normal search-engine indexing.",
                    "Unauthorized access, interference, or disruption of the website.",
                    "Infringement of intellectual property or confidential rights.",
                    "Submission of sensitive patient, clinical, or health information through general forms.",
                  ]}
                />
              </LegalSection>

              <LegalSection id="inquiry-submissions" title="Inquiry Submissions">
                <p>
                  Inquiry submissions do not create a contract and do not guarantee a
                  response, quotation, supply commitment, partnership, investment
                  discussion, or service availability. Users must provide accurate
                  information and may be asked to verify organizational identity,
                  authority, product needs, regulatory requirements, or intended use.
                </p>
                <p>
                  MedX may decline incomplete, abusive, inappropriate, unverifiable,
                  or out-of-scope inquiries. Sensitive health information, patient
                  records, diagnoses, images, or emergency requests must not be
                  submitted through general inquiry forms.
                </p>
              </LegalSection>

              <LegalSection
                id="product-and-service-availability"
                title="Product and Service Availability"
              >
                <p>
                  Product and service availability varies by product, location,
                  regulatory status, inventory, implementation capacity, and written
                  confirmation. Delivery timelines, service scope, and prices require
                  confirmation through MedX staff and, where applicable, written
                  quotation or contract documents.
                </p>
                <p>
                  Strategic roadmap items, future capabilities, AI features, digital
                  systems, manufacturing readiness, or cancer-care expansion concepts
                  may not be currently available.
                </p>
              </LegalSection>

              <LegalSection
                id="quotations-orders-and-commercial-agreements"
                title="Quotations, Orders, and Commercial Agreements"
              >
                <p>
                  Signed agreements, accepted quotations, purchase orders, invoices,
                  delivery terms, and applicable law control commercial relationships.
                  Website descriptions, service summaries, images, and public content
                  do not override signed documents or written commercial terms.
                </p>
              </LegalSection>

              <LegalSection id="ai-assisted-tools" title="AI-Assisted Tools">
                <p>
                  MedX may use AI-assisted tools for inquiry preparation, routing,
                  operational planning, and general information. AI output may be
                  incomplete, inaccurate, outdated, or unsuitable for a specific
                  context, and users must review generated content before relying on
                  it or submitting it.
                </p>
                <BulletList
                  items={[
                    "AI tools do not provide medical diagnosis or treatment advice.",
                    "AI tools must not be used for emergency requests.",
                    "AI tools do not provide autonomous procurement approval.",
                    "AI tools do not make autonomous clinical decisions.",
                    "MedX staff must confirm availability, pricing, regulatory considerations, and implementation requirements.",
                    "AI-assisted features may be suspended, changed, limited, or removed.",
                  ]}
                />
              </LegalSection>

              <LegalSection id="intellectual-property" title="Intellectual Property">
                <p>
                  Website content, design, trademarks, logos, images, data
                  visualizations, software, documents, page layouts, and other
                  materials are owned by or licensed to MedX or their respective
                  owners. Ordinary website access does not grant permission to copy,
                  reuse, publish, modify, sell, or represent materials as MedX-approved
                  content.
                </p>
              </LegalSection>

              <LegalSection
                id="historical-materials-and-relationships"
                title="Historical Materials and Relationships"
              >
                <p>
                  Some website references may be based on older investor, company, or
                  project materials. Historical names, boards, partners, investors,
                  institutions, facilities, or program references do not necessarily
                  represent current relationships, endorsements, legal status,
                  shareholders, governance, approvals, or service commitments. Current
                  status requires separate confirmation.
                </p>
              </LegalSection>

              <LegalSection
                id="third-party-services-and-links"
                title="Third-Party Services and Links"
              >
                <p>
                  The website may rely on third-party services such as hosting,
                  email providers, CAPTCHA, analytics, AI providers, databases, and
                  external websites. Third-party services may have separate terms,
                  privacy policies, security practices, and availability constraints.
                  MedX is not responsible for external websites that are not controlled
                  by MedX.
                </p>
              </LegalSection>

              <LegalSection id="privacy" title="Privacy">
                <p>
                  Submission data is handled according to the MedX{" "}
                  <Link
                    href="/privacy"
                    className="font-black text-[#0a7c5b] underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                  >
                    Privacy Policy
                  </Link>
                  . Users should not submit sensitive patient information, diagnoses,
                  treatment records, emergency details, or confidential third-party
                  information through general forms.
                </p>
              </LegalSection>

              <LegalSection id="website-availability" title="Website Availability">
                <p>
                  The website may be interrupted, changed, updated, suspended, or
                  removed. Maintenance may occur without notice, and features or
                  content may be modified as MedX operations and public information
                  needs change. MedX does not guarantee uninterrupted access.
                </p>
              </LegalSection>

              <LegalSection id="disclaimers" title="Disclaimers">
                <p>
                  The website is provided on an &quot;as available&quot; basis. MedX aims to
                  provide useful and accurate public information, but factual content
                  may require confirmation and may not always be current, complete, or
                  applicable to a specific transaction, jurisdiction, product, or
                  service need.
                </p>
              </LegalSection>

              <LegalSection id="limitation-of-liability" title="Limitation of Liability">
                <p>
                  To the maximum extent permitted by applicable law, MedX is not
                  responsible for indirect, incidental, consequential, or similar loss
                  arising from reliance on website content, website interruption,
                  unavailable products, delays, third-party services, or public
                  information that requires confirmation.
                </p>
              </LegalSection>

              <LegalSection id="indemnification" title="Indemnification">
                <p>
                  Users agree to be responsible for claims, losses, or expenses that
                  arise from misuse of the website, violation of these Terms,
                  unauthorized submissions, or infringement of third-party rights, to
                  the extent permitted by applicable law.
                </p>
              </LegalSection>

              <LegalSection id="suspension-and-termination" title="Suspension and Termination">
                <p>
                  MedX may suspend, restrict, or block access to the website or digital
                  tools when MedX reasonably believes there is abuse, fraud, security
                  risk, illegal use, automated misuse, false submission activity, or a
                  violation of these Terms.
                </p>
              </LegalSection>

              <LegalSection id="changes-to-terms" title="Changes to Terms">
                <p>
                  MedX may update these Terms. The updated effective date or last
                  updated date will be posted on this page. Continued use of the
                  website after an update means acceptance of the updated Terms where
                  permitted by applicable law.
                </p>
              </LegalSection>

              <LegalSection id="governing-law" title="Governing Law">
                <p>{governingLawText}</p>
              </LegalSection>

              <LegalSection
                id="severability-and-entire-agreement"
                title="Severability and Entire Agreement"
              >
                <p>
                  If part of these Terms is found unenforceable, the remaining parts
                  continue to apply where permitted. These Terms, together with the
                  Privacy Policy and any applicable written commercial documents, form
                  the relevant agreement for public website use.
                </p>
              </LegalSection>

              <LegalSection id="contact" title="Contact">
                <p>
                  Questions about these Terms may be submitted through the{" "}
                  <Link
                    href="/contact"
                    className="font-black text-[#0a7c5b] underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                  >
                    MedX contact page
                  </Link>
                  {legalConfig.legalContactEmail
                    ? ` or by email at ${legalConfig.legalContactEmail}.`
                    : "."}
                </p>
                <p className="text-sm font-bold text-slate-500">
                  Legal company name shown for review: {legalConfig.legalCompanyName}.
                </p>
              </LegalSection>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
