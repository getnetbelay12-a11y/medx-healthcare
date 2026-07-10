import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  HeartPulse,
  PackageCheck,
  Pill,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    title: "Pharmaceuticals & Medical Supplies",
    shortTitle: "Pharmaceutical Supply",
    description:
      "Reliable sourcing and distribution of essential medicines, consumables, and healthcare products for public and private facilities.",
    icon: Pill,
    label: "Medicines & supplies",
    features: [
      "Essential medicines",
      "Clinical consumables",
      "Institutional supply",
    ],
    gradient:
      "from-[#e7f0ff] via-[#f4f8ff] to-white",
    iconBackground: "bg-[#dceaff]",
    iconColor: "text-[#2467a8]",
  },
  {
    title: "Medical Devices & Equipment",
    shortTitle: "Medical Devices",
    description:
      "Medical equipment, clinical devices, and technical support that help healthcare facilities operate safely and consistently.",
    icon: Stethoscope,
    label: "Clinical equipment",
    features: [
      "Equipment sourcing",
      "Device delivery",
      "Installation coordination",
    ],
    gradient:
      "from-[#dff7fb] via-[#f2fcfd] to-white",
    iconBackground: "bg-[#d5f3f7]",
    iconColor: "text-[#078b9c]",
  },
  {
    title: "Diagnostics & Laboratory Solutions",
    shortTitle: "Diagnostic Solutions",
    description:
      "Laboratory tools, testing supplies, and diagnostic workflows that support early detection and better clinical decisions.",
    icon: FlaskConical,
    label: "Testing & diagnostics",
    features: [
      "Laboratory supplies",
      "Testing support",
      "Screening workflows",
    ],
    gradient:
      "from-[#dff9ef] via-[#f0fcf8] to-white",
    iconBackground: "bg-[#d5f5e9]",
    iconColor: "text-[#0a8d63]",
  },
  {
    title: "Cervical-Cancer Screening",
    shortTitle: "Cervical Screening",
    description:
      "Screening-program support built around OncoE6, facility readiness, implementation guidance, training, and follow-up.",
    icon: HeartPulse,
    label: "Women’s health",
    features: [
      "OncoE6 support",
      "Program implementation",
      "Training and follow-up",
    ],
    gradient:
      "from-[#e1f9f0] via-[#f3fcf8] to-white",
    iconBackground: "bg-[#d8f6eb]",
    iconColor: "text-[#0a8d63]",
  },
];

export default function ServiceShowcase() {
  return (
    <section className="bg-[#f5f8fa] py-24">
      <div className="container-medx">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#10a66e]">
              Core healthcare solutions
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-[#071b33] md:text-5xl">
              Four service areas MedX can execute now.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              MedX delivers practical healthcare solutions for facilities, diagnostic services, screening programs, and institutional supply needs.
            </p>

            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#10a66e]"
            >
              View all service details
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="medx-card-motion group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(8,27,51,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(8,27,51,0.13)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} p-7`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/70 blur-2xl" />

                  <div className="relative flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#071b33]/50">
                        {service.label}
                      </p>

                      <h3 className="mt-5 max-w-md text-3xl font-black leading-tight text-[#071b33]">
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] ${service.iconBackground} ${service.iconColor} shadow-sm ring-1 ring-white/80`}
                    >
                      <Icon size={38} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="relative mt-8 flex items-center gap-3">
                    <PackageCheck className="text-[#10a66e]" size={19} />
                    <p className="text-sm font-black text-[#071b33]">
                      Service area 0{index + 1}
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-base leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-xl border border-slate-100 bg-[#f8fafb] px-4 py-3"
                      >
                        <div className="mb-2 h-1.5 w-1.5 rounded-full bg-[#10a66e]" />
                        <p className="text-xs font-bold leading-5 text-slate-600">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">
                    <p className="text-sm font-black text-[#071b33]">
                      {service.shortTitle}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#071b33] px-4 py-2.5 text-xs font-black text-white transition group-hover:bg-[#10a66e]"
                    >
                      Request service
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
