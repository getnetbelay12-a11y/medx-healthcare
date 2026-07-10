import {
  Activity,
  BarChart3,
  FlaskConical,
  MapPinned,
  Microscope,
  TrendingUp,
} from "lucide-react";

type ImageBannerProps = {
  src?: string;
  alt?: string;
  label?: string;
};

export default function ImageBanner({ label }: ImageBannerProps) {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2.4rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-emerald-400/10" />
      <div className="absolute right-[-90px] top-[-90px] h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-100px] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative grid h-full gap-5 lg:grid-cols-[1fr_0.72fr]">
        <div className="flex flex-col justify-end overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#07192f]/70 p-6">
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
              <Microscope size={34} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
                Diagnostics Lab
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                AI-ready screening and laboratory intelligence
              </h3>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <FlaskConical className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black text-white">Testing</p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Screening workflows
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <TrendingUp className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black text-white">Forecasting</p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Demand planning
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <Activity className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black text-white">Monitoring</p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Health impact
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-white/10 bg-white/95 p-5 text-[#0b1f3a] shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#0f9f6e]">
              {label || "AI-Ready Healthcare Platform"}
            </p>
            <p className="mt-2 text-lg font-black leading-7">
              Integrated diagnostics, supply intelligence, and public health
              reporting.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#07192f]/80 p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white">
                AI Health Intelligence
              </p>
              <BarChart3 className="text-emerald-300" size={20} />
            </div>

            <div className="flex h-28 items-end gap-2">
              {[35, 48, 42, 60, 55, 72, 68, 86].map((height, index) => (
                <div
                  key={index}
                  className="w-full rounded-t-lg bg-emerald-300/70"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-bold text-slate-300">
              <p>Demand Forecast</p>
              <p className="text-right text-emerald-300">Low Risk</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#07192f]/80 p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white">
                Supply Chain Visibility
              </p>
              <MapPinned className="text-emerald-300" size={20} />
            </div>

            <div className="relative h-32 overflow-hidden rounded-2xl bg-emerald-400/10">
              <div className="absolute left-8 top-8 h-3 w-3 rounded-full bg-emerald-300" />
              <div className="absolute left-24 top-16 h-3 w-3 rounded-full bg-emerald-300" />
              <div className="absolute right-16 top-10 h-3 w-3 rounded-full bg-emerald-300" />
              <div className="absolute bottom-8 right-28 h-3 w-3 rounded-full bg-emerald-300" />
              <div className="absolute left-10 top-10 h-[1px] w-64 rotate-12 bg-emerald-300/40" />
              <div className="absolute left-28 top-20 h-[1px] w-48 -rotate-12 bg-emerald-300/40" />
              <p className="absolute bottom-4 left-4 text-sm font-black text-white">
                Ethiopia • East Africa
              </p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#07192f]/80 p-5 shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Health Impact
            </p>
            <div className="mt-4 flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-emerald-300 text-xl font-black text-white">
                89%
              </div>
              <div>
                <p className="font-black text-white">Screening Coverage</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Program visibility, follow-up, and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
