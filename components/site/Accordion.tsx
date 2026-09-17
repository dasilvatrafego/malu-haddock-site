"use client";

import { useState } from "react";

export type FaqItem = { pergunta: string; resposta: React.ReactNode };

/** Acordeão das Perguntas Frequentes — reproduz o comportamento do original. */
export default function Accordion({ items }: { items: FaqItem[] }) {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-[820px]">
      {items.map((item, i) => {
        const ativo = aberto === i;
        return (
          <div key={i} className="border-b border-white/30">
            <h3>
              <button
                type="button"
                onClick={() => setAberto(ativo ? null : i)}
                aria-expanded={ativo}
                aria-controls={`faq-painel-${i}`}
                className="flex w-full items-start gap-4 py-5 text-left transition-opacity hover:opacity-80"
              >
                <span className="font-serif text-[22px] leading-none text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-sans text-[17px] font-semibold text-white">
                  {item.pergunta}
                </span>
                <span
                  aria-hidden
                  className={`mt-1 shrink-0 text-[20px] leading-none text-white transition-transform duration-300 ${ativo ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={`faq-painel-${i}`}
              hidden={!ativo}
              className="rich pb-6 pl-[46px] pr-8 font-sans text-[16px] leading-[1.75] text-white/90"
            >
              {item.resposta}
            </div>
          </div>
        );
      })}
    </div>
  );
}
