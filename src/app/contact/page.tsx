import type { Metadata } from "next";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import { medxImages } from "@/data/images";
import { isValidPublicEmail, normalizePhoneHref, publicEnv } from "@/lib/env";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact MedX",
  description:
    "Contact MedX Healthcare Solutions for partnerships, product supply requests, diagnostics, public-health programs, and investment inquiries.",
  path: "/contact",
  image: medxImages.aiDiagnosticsFrame.src,
});

const contactDetails = [
  publicEnv.companyLocation
    ? { label: "Location", value: publicEnv.companyLocation, icon: MapPin }
    : null,
  isValidPublicEmail(publicEnv.companyEmail)
    ? {
        label: "Email",
        value: publicEnv.companyEmail,
        icon: Mail,
        href: `mailto:${publicEnv.companyEmail}`,
      }
    : null,
  publicEnv.companyPhone
    ? {
        label: "Phone",
        value: publicEnv.companyPhone,
        icon: Phone,
        href: normalizePhoneHref(publicEnv.companyPhone),
      }
    : null,
  publicEnv.officeHours
    ? { label: "Office Hours", value: publicEnv.officeHours, icon: Clock }
    : null,
].filter(Boolean);

const inquiryGuidance = [
  "Product or service needed",
  "Facility or program location",
  "Estimated quantity and urgency",
  "Preferred response timeline",
];

const responseSteps = [
  {
    title: "Request review",
    detail:
      "MedX reviews the organization, product or program need, destination, and urgency.",
  },
  {
    title: "Scope clarification",
    detail:
      "The team may ask for quantities, facility context, documentation needs, or decision-owner details.",
  },
  {
    title: "Next-step alignment",
    detail:
      "MedX confirms whether the request is a supply inquiry, program discussion, relationship pathway, or strategic follow-up.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact MedX"
        title="Start a clear healthcare request or relationship discussion."
        description="Connect with MedX for supply requests, diagnostics, devices, screening programs, investment discussion, and healthcare collaboration."
        highlights={["Product requests", "Program support", "Relationship inquiry"]}
        image={medxImages.aiDiagnosticsFrame}
        imageLabel="Request intake"
        imageCaption="Scope • urgency • follow-up"
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight text-[#071b33]">
              Let’s strengthen healthcare access together.
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Use the form for supply requests, diagnostics, medical devices,
              screening programs, investment discussions, and research
              collaboration.
            </p>
            <div className="mt-7 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0a8d63]">
                For faster review
              </p>
              <div className="mt-4 grid gap-3">
                {inquiryGuidance.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#10a66e]" size={18} />
                    <p className="text-sm font-bold leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 space-y-5">
              {contactDetails.map((detail) => {
                const { label, value, icon: Icon } = detail!;
                const content = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-black text-[#071b33]">{label}</p>
                      <p className="mt-1 text-slate-600">{value}</p>
                    </div>
                  </>
                );

                return detail && "href" in detail && detail.href ? (
                  <a
                    key={label}
                    href={detail.href}
                    className="card-premium flex gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="card-premium flex gap-4 p-5">
                    {content}
                  </div>
                );
              })}
            </div>
            {/* Contact location image: /public/images/medx/medx-bahir-dar-healthcare.jpg */}
            <MedxImage
              src={medxImages.bahirDar.src}
              alt={medxImages.bahirDar.alt}
              className="mt-8 aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
            <p className="mt-3 text-xs font-bold text-slate-500">
              Conceptual Bahir Dar healthcare context image.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-band py-14 md:py-16">
        <div className="container-medx">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#10a66e]">
                After you submit
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#071b33] md:text-4xl">
                Clear requests move faster.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                The form is designed to route serious product, program, and
                relationship inquiries into a practical review path.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {responseSteps.map((step, index) => (
                <article key={step.title} className="medx-contact-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
