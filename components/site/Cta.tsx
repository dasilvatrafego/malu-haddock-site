import Link from "next/link";

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = {
  sm: "text-[17px] py-3 px-8",
  md: "text-[17px] py-[13px] px-10",
  lg: "text-[21px] py-[18px] px-12",
};

/**
 * Botão de conversão. Réplica do botão do site original:
 * verde #35C42C, raio 5px, Open Sans 700, sombra suave.
 * variant="gold" reproduz o botão dourado da página Destrave.
 */
export default function Cta({
  href,
  children,
  size = "md",
  variant = "green",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  size?: Size;
  variant?: "green" | "gold";
  className?: string;
}) {
  const bg =
    variant === "gold"
      ? "bg-gold-btn hover:bg-[#8f6f34]"
      : "bg-cta hover:bg-[#2CAB24]";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block max-w-full rounded-[5px] text-center font-sans font-bold leading-tight text-white shadow-[0_1px_4px_0_rgba(0,0,0,0.6)] transition-colors duration-200 ${bg} ${SIZES[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
