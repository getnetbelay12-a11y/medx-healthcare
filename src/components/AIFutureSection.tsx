import {
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  DatabaseZap,
  Eye,
  ShieldCheck,
} from "lucide-react";

const aiCapabilities = [
  {
    title: "Demand forecasting",
    description:
      "Use supply, facility, and consumption data to anticipate medicine and device needs before stock pressure becomes visible.",
    icon: BarChart3,
  },
  {
    title: "Diagnostic decision support",
    description:
      "Support laboratory quality, result triage, referral pathways, and clinical coordination without replacing professional judgment.",
    icon: BrainCircuit,
  },
  {
    title: "Screening program intelligence",
    description:
      "Improve cervical-cancer screening follow-up, outreach prioritization, and referral tracking through structured data workflows.",
    icon: ClipboardCheck,
  },
  {
    title: "Supply-chain visibility",
    description:
      "Detect stock risks, distribution bottlenecks, delayed procurement, and facility-level gaps through operational dashboards.",
    icon: Eye,
  },
];

const governance = [
  "Human-in-the-loop review",
  "Data privacy and access control",
  "Clinical and public-health validation",
  "Transparent reporting for partners",
];

export default function AIFutureSection() {
  return (
    <section className="corporate-shell py-24 text-white">
      <div className="container-medx">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200">
              Digital and AI readiness
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.07] tracking-normal md:text-5xl">
              Responsible analytics for forecasting, screening, and smarter healthcare operations.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            MedX can prepare for practical AI by first building reliable data,
            clear human oversight, public-health value, and measurable service
            quality across supply, diagnostics, and screening workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {aiCapabilities.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300/12 text-emerald-300">
                  <Icon size={25} />
                </div>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <aside className="rounded-[1.5rem] border border-white/10 bg-white p-7 text-[#071b33] shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071b33] text-emerald-300">
              <ShieldCheck size={27} />
            </div>
            <h3 className="mt-6 text-2xl font-black">
              Responsible AI governance
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              Advanced analytics must strengthen operational discipline and
              public trust. Any future AI-assisted workflow should be governed
              through clear controls, auditable outputs, and accountable clinical
              and executive review.
            </p>
            <div className="mt-6 space-y-3">
              {governance.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-black text-slate-700"
                >
                  <DatabaseZap className="shrink-0 text-[#10a66e]" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
