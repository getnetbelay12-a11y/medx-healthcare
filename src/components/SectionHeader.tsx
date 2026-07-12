type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#0f9f6e]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0b1f3a] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}
