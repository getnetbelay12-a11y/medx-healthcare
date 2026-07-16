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
    <section className="corporate-shell relative overflow-hidden text-white">
      <div className="premium-divider absolute inset-x-0 bottom-0" />
      <div className="container-medx grid gap-10 py-16 md:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-24">
        <div>
          {eyebrow && (
            <p className="mb-4 inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-normal sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
            {description}
          </p>
          <div className="mt-8 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-3">
            {["Institutional scale", "Public-health focus", "Relationship context"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        {image && (
          <div className="relative">
            <MedxImage
              src={image.src}
              alt={image.alt}
              priority
              className="image-frame aspect-[16/9] rounded-[1.5rem] md:rounded-[2rem]"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-2xl border border-white/15 bg-[#061a31]/90 px-4 py-3 shadow-2xl backdrop-blur md:bottom-5 md:left-5 md:px-5 md:py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d7a84f]">
                MedX platform
              </p>
              <p className="mt-1 text-xs font-black md:text-sm">
                Healthcare access • supply • innovation
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
