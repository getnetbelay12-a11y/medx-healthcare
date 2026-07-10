import MedxImage from "@/components/MedxImage";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="gradient-hero overflow-hidden text-white">
      <div className="container-medx grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-24">
        <div>
          {eyebrow && (
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-emerald-300">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            {description}
          </p>
        </div>

        {image && (
          <MedxImage
            src={image.src}
            alt={image.alt}
            priority
            className="aspect-[16/9] rounded-[2rem] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
        )}
      </div>
    </section>
  );
}
