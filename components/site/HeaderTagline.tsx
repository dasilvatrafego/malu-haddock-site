"use client";

import { usePathname } from "next/navigation";

/** Páginas que mostram uma assinatura ao lado da logo no cabeçalho. */
const TAGLINES: Record<string, string> = {
  "/destraveseusoleos": "Aromaterapia Clínica Integral",
};

/** Mesma fonte (Futura → Jost) e mesmo tamanho do "Malu Haddock Lobo" da logo. */
export default function HeaderTagline() {
  const texto = TAGLINES[usePathname()];
  if (!texto) return null;
  return (
    <span className="ml-2.5 flex h-[30px] items-center whitespace-nowrap border-l border-white/40 pl-2.5 font-futura text-[10.5px] font-light uppercase leading-none tracking-[0.06em] text-white/80">
      {texto}
    </span>
  );
}
