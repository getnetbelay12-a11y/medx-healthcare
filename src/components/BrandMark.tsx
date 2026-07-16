type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const sizeClasses = {
  sm: "h-10 w-10 rounded-[13px]",
  md: "h-11 w-11 rounded-[14px]",
  lg: "h-12 w-12 rounded-2xl",
} as const;

export default function BrandMark({
  size = "md",
  variant = "dark",
}: BrandMarkProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`medx-brand-mark ${sizeClasses[size]} ${
        isLight ? "medx-brand-mark-light" : "medx-brand-mark-dark"
      }`}
      aria-hidden="true"
    >
      <span className="medx-brand-mark-cross" />
      <span className="medx-brand-mark-wave" />
      <strong>MX</strong>
    </div>
  );
}
