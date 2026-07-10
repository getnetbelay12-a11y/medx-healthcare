type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-3xl font-black text-[#0b1f3a]">{value}</p>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
