import Image from "next/image";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const sizeClasses = {
  sm: "h-10 w-12 rounded-[13px]",
  md: "h-11 w-14 rounded-[14px]",
  lg: "h-12 w-16 rounded-2xl",
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
        src="/images/medx/MedxLogo1.png"
        alt=""
        width={140}
        height={112}
        className="h-full w-full object-contain p-1"
        priority={size !== "sm"}
      />
    </div>
  );
}
