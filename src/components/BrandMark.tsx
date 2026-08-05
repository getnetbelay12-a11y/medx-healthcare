import Image from "next/image";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const sizeClasses = {
  sm: "h-10 w-[9.5rem] rounded-xl",
  md: "h-12 w-[12.5rem] rounded-xl xl:h-16 xl:w-72",
  lg: "h-14 w-56 rounded-xl sm:w-60 xl:h-16 xl:w-72",
} as const;

export default function BrandMark({
  size = "md",
  variant = "dark",
}: BrandMarkProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden border shadow-sm ${
        sizeClasses[size]
      } ${
        isLight
          ? "border-white/15 bg-white"
          : "border-slate-200 bg-white"
      }`}
      aria-label="MedX Healthcare Solutions logo"
    >
      <Image
        src="/images/medx/medx-diagnostics-ethiopia-logo.png"
        alt=""
        fill
        sizes={
          size === "lg"
            ? "(min-width: 1280px) 18rem, (min-width: 640px) 15rem, 14rem"
            : "(min-width: 1280px) 18rem, 12.5rem"
        }
        className="object-contain px-2 py-1"
        priority={size !== "sm"}
      />
    </div>
  );
}
