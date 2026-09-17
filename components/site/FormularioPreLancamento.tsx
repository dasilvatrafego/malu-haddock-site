"use client";

import { useState } from "react";
import { GRUPO_TRAVESSIA } from "@/lib/site";

type Estado = "parado" | "enviando" | "erro";

/**
 * Formulário da página /preinscricao40 (Travessia, Mulheres 40+).
 * Réplica do formulário do Wix: campos com linha inferior, botão pílula terracota.
 * Grava o lead em /api/contato e leva a pessoa para o grupo do WhatsApp.
 * Se a gravação falhar, ainda assim abre o grupo: o lead não pode ficar de fora.
 */
export default function FormularioPreLancamento() {
  const [estado, setEstado] = useState<Estado>("parado");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");

    const dados = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dados, origem: "preinscricao40" }),
      });
    } catch {
      // segue para o grupo mesmo assim
    }

    window.location.href = GRUPO_TRAVESSIA;
  }

  // Campo no estilo do Wix: só a linha de baixo, sem caixa.
  const campo =
    "w-full border-0 border-b border-black bg-transparent px-0 pb-1.5 pt-1 font-avenir text-[14px] font-light text-black outline-none placeholder:text-transparent focus:border-b-2";
  const rotulo = "mb-2 block font-avenir text-[16px] font-light leading-[1.41] text-black";

  return (
    <form onSubmit={enviar} className="mx-auto w-full max-w-[802px]">
      <div className="grid gap-x-[65px] gap-y-[58px] md:grid-cols-2">
        <label className="block">
          <span className={rotulo}>Nome *</span>
          <input name="nome" required autoComplete="name" className={campo} />
        </label>
        <label className="block">
          <span className={rotulo}>Telefone *</span>
          <input name="telefone" required type="tel" autoComplete="tel" className={campo} />
        </label>
      </div>

      <label className="mt-[58px] block">
        <span className={rotulo}>Email *</span>
        <input name="email" required type="email" autoComplete="email" className={campo} />
      </label>

      {/* honeypot anti-spam: humano não vê nem preenche */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="mt-[42px] block w-full rounded-[50px] bg-[#C1633D] px-4 py-[8px] text-center font-avenir text-[15px] font-extrabold md:px-6 md:py-[7px] md:text-[18px] leading-[1.41] text-white shadow-[0_1px_4px_0_rgba(0,0,0,0.6)] transition-colors hover:bg-white hover:text-[#794577] hover:ring-1 hover:ring-[#794577] disabled:opacity-70"
      >
        {estado === "enviando" ? "Enviando..." : "Entre no grupo do pré-lançamento"}
      </button>
    </form>
  );
}
