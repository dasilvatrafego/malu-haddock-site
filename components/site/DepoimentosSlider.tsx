"use client";

import { useRef, useState } from "react";

export type Depoimento = { texto: string[]; autor: string };

/**
 * Carrossel de depoimentos. No original era um slideshow do Wix;
 * aqui é um scroll horizontal com snap — arrasta no celular, setas no desktop.
 */
export default function DepoimentosSlider({ itens }: { itens: Depoimento[] }) {
  const trilha = useRef<HTMLDivElement>(null);
  const [atual, setAtual] = useState(0);

  const irPara = (i: number) => {
    const el = trilha.current;
    if (!el) return;
    const idx = Math.max(0, Math.min(itens.length - 1, i));
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    setAtual(idx);
  };

  return (
    // min-w-0 é obrigatório: sem ele a trilha de rolagem infla a coluna do grid
    // e a página inteira passa a rolar na horizontal.
    <div className="relative w-full min-w-0">
      <div
        ref={trilha}
        onScroll={(e) => {
          const el = e.currentTarget;
          setAtual(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {itens.map((d, i) => (
          <blockquote
            key={i}
            className="w-full shrink-0 snap-center px-1 md:px-8"
          >
            <div className="rich space-y-4 font-sans text-[16px] leading-[1.75] text-white">
              {d.texto.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            <footer className="mt-6 font-serif text-[22px] text-gold-light">
              {d.autor}
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => irPara(atual - 1)}
          disabled={atual === 0}
          aria-label="Depoimento anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition disabled:opacity-30 enabled:hover:bg-white/10"
        >
          ‹
        </button>

        <div className="flex gap-2">
          {itens.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => irPara(i)}
              aria-label={`Ir para o depoimento ${i + 1}`}
              aria-current={i === atual}
              className={`h-2 rounded-full transition-all ${i === atual ? "w-6 bg-gold-light" : "w-2 bg-white/40"}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => irPara(atual + 1)}
          disabled={atual === itens.length - 1}
          aria-label="Próximo depoimento"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition disabled:opacity-30 enabled:hover:bg-white/10"
        >
          ›
        </button>
      </div>
    </div>
  );
}
