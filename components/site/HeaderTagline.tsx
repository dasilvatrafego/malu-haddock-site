"use client";

import { usePathname } from "next/navigation";

/** Páginas que mostram uma assinatura ao lado da logo no cabeçalho. */
const TAGLINES: Record<string, string> = {
  "/destraveseusoleos": "Aromaterapia & Ayurveda",
};

export default function HeaderTagline() {
  const texto = TAGLINES[usePathname()];
  if (!texto) return null;
  return (
    <span className="ml-3 whitespace-nowrap border-l border-white/40 pl-3 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-white/90 md:text-[12px] md:tracking-[0.2em]">
      {texto}
    </span>
  );
}
