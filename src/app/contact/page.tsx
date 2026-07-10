import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import { medxImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact MedX",
  description:
    "Contact MedX Healthcare Solutions for partnerships, pharmaceutical supply, medical devices, diagnostics, investment, and healthcare collaboration.",
};

const contactDetails = [
  { label: "Location", value: "Bahir Dar, Ethiopia", icon: MapPin },
  { label: "Email", value: "info@medxhealthcare.com", icon: Mail },
  { label: "Phone", value: "+251 XXX XXX XXX", icon: Phone },
  { label: "Office Hours", value: "Monday-Friday", icon: Clock },
];

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
              {contactDetails.map(({ label, value, icon: Icon }) => (
                <div key={label} className="card-premium flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-black text-[#071b33]">{label}</p>
                    <p className="mt-1 text-slate-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Contact partnership image: /public/images/medx/medx-hospital-partnership.jpg */}
            <MedxImage
              src={medxImages.hospitalPartnership.src}
              alt={medxImages.hospitalPartnership.alt}
              className="mt-8 aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
