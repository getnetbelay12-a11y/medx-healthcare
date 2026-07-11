import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
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
  image: medxImages.hospitalPartnership.src,
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

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact MedX"
        title="Contact MedX"
        description="Connect with MedX for partnerships, supply requests, diagnostics, investment, and healthcare collaboration."
        image={medxImages.hospitalPartnership}
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-3xl font-black text-[#071b33]">
              Let’s strengthen healthcare access together.
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Use the form for supply requests, diagnostics, medical devices,
              screening programs, investment discussions, and research
              collaboration.
            </p>
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
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
