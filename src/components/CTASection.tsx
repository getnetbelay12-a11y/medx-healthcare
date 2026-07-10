import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Handshake,
  Mail,
  PackageCheck,
  Phone,
} from "lucide-react";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export default function CTASection({
  title = "Tell us what your facility or healthcare program needs.",
  description = "MedX can review your request, confirm availability, assess the service requirement, and recommend the right next step.",
  buttonLabel = "Submit a request",
}: CTASectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="container-medx">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#071b33] text-white shadow-[0_30px_90px_rgba(8,27,51,0.24)]">
          <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-36 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[0.92fr_1.08fr] lg:p-14">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">
                Work with MedX
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
                {title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  {buttonLabel}
                  <ArrowRight size={17} />
                </Link>

                <Link href="/services" className="btn-outline">
                  Review services
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <Mail className="text-emerald-300" size={18} />
                  Contact MedX
                </div>

                <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <Phone className="text-emerald-300" size={18} />
                  Request callback
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Link
                href="/contact"
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/12 text-emerald-300">
                  <PackageCheck size={23} />
                </div>

                <h3 className="mt-6 text-xl font-black">
                  Product & supply request
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Request pharmaceuticals, medical supplies, devices, equipment,
                  laboratory products, or diagnostic support.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-emerald-300">
                  Start request
                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                    size={16}
                  />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-300">
                  <Building2 size={23} />
                </div>

                <h3 className="mt-6 text-xl font-black">
                  Facility & program support
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Discuss institutional supply, diagnostics, screening,
                  implementation support, or public-health delivery.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                  Discuss requirements
                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                    size={16}
                  />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-300">
                  <Handshake size={23} />
                </div>

                <h3 className="mt-6 text-xl font-black">
                  Partnership inquiry
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Explore supplier, technology, distribution, institutional, or
                  implementation partnerships with MedX.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-amber-300">
                  Explore partnership
                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                    size={16}
                  />
                </span>
              </Link>

              <div className="rounded-[1.5rem] bg-white p-6 text-[#071b33]">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#10a66e]">
                  Include in your request
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Organization and location",
                    "Products or service needed",
                    "Quantity and urgency",
                    "Preferred delivery timeline",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10a66e]" />
                      <p className="text-sm font-bold leading-6 text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
