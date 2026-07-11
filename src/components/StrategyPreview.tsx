import Link from "next/link";
import {
  ArrowRight,
  Factory,
  HeartHandshake,
  Network,
  ShieldCheck,
} from "lucide-react";

const priorities = [
  {
    title: "Local manufacturing",
    description:
      "Build pharmaceutical and diagnostic production capacity to reduce import dependency and improve supply reliability.",
    icon: Factory,
  },
  {
    title: "Integrated cancer care",
    description:
      "Expand from screening support toward stronger diagnostic, referral, and future specialty-care capabilities.",
    icon: HeartHandshake,
  },
  {
    title: "Regional healthcare network",
    description:
      "Develop a scalable operating model that can serve Ethiopia and selected East African markets.",
    icon: Network,
  },
];

export default function StrategyPreview() {
  return (
    <section className="bg-[#f6f9fa] py-24">
      <div className="container-medx">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(8,27,51,0.09)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden bg-[#071b33] p-10 text-white md:p-14">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">
                  Long-term strategy
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
                  A 15-year path from healthcare supply to integrated healthcare capacity.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  MedX’s immediate role is supply, diagnostics, screening, and
                  operational support. Manufacturing, expanded cancer care, and
                  regional growth are long-term strategic ambitions.
                </p>

                <div className="mt-8 rounded-[1.3rem] border border-white/10 bg-white/[0.055] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-300/12 text-emerald-300">
                      <ShieldCheck size={22} />
                    </div>

                    <div>
                      <p className="font-black text-white">
                        Growth through disciplined execution
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Long-term growth will be supported by confirmed plans, partnerships, regulatory readiness, investment, and measurable progress.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/strategy" className="btn-primary mt-8">
                  View full strategy
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#10a66e]">
                Strategic priorities
              </p>

              <div className="mt-7 grid gap-5">
                {priorities.map((priority, index) => {
                  const Icon = priority.icon;

                  return (
                    <article
                      key={priority.title}
                      className="group rounded-[1.45rem] border border-slate-200 bg-[#f8fafb] p-6 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_45px_rgba(8,27,51,0.08)]"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                          <Icon size={23} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-black text-[#071b33]">
                              {priority.title}
                            </h3>

                            <p className="text-3xl font-black text-slate-200">
                              0{index + 1}
                            </p>
                          </div>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {priority.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
