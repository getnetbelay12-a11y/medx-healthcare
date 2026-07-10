import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="executive-card group relative overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10a66e] via-[#d7a84f] to-[#0b2747]" />
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#0f9f6e] ring-1 ring-emerald-100">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-black text-[#0b1f3a]">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#10a66e]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#10a66e]" />
        MedX capability
      </div>
    </div>
  );
}
