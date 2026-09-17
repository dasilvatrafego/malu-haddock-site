"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";

type Estado = "parado" | "enviando" | "ok" | "erro";

/**
 * Formulário de contato da página /terapiaintegral.
 * No Wix os dados caíam na base do próprio Wix; aqui vão para /api/contato
 * (Supabase). Se o envio falhar, oferecemos o WhatsApp como saída.
 */
export default function FormularioContato() {
  const [estado, setEstado] = useState<Estado>("parado");
  const [erro, setErro] = useState<string | null>(null);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");
    setErro(null);

    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries());

    try {
      const r = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!r.ok) throw new Error((await r.json().catch(() => ({}))).erro || "Falha no envio");
      form.reset();
      setEstado("ok");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Falha no envio");
      setEstado("erro");
    }
  }

  const campo =
    "w-full border border-[#794577] bg-white px-4 py-2.5 font-futura text-[16px] text-black outline-none placeholder:text-black/50 focus:ring-2 focus:ring-[#794577]/40";

  return (
    <form onSubmit={enviar} className="w-full max-w-[460px] space-y-2.5">
      <div className="grid gap-2.5 sm:grid-cols-2">
        <input name="nome" required placeholder="Nome*" className={campo} autoComplete="name" />
        <input
          name="telefone"
          required
          type="tel"
          placeholder="Telefone*"
          className={campo}
          autoComplete="tel"
        />
      </div>

      <input
        name="email"
        required
        type="email"
        placeholder="Email*"
        className={campo}
        autoComplete="email"
      />

      <textarea
        name="mensagem"
        rows={5}
        placeholder="Digite sua dúvida..."
        className={`${campo} resize-y`}
      />

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="w-[273px] max-w-full rounded-[30px] bg-[#794577] px-6 py-3 font-sans text-[16px] font-semibold text-white transition-colors hover:bg-[#8d5289] disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando..." : "Envie sua mensagem"}
      </button>

      <div aria-live="polite" className="min-h-[24px]">
        {estado === "ok" && (
          <p className="pt-1 text-[15px] text-[#794577]">Obrigada por entrar em contato!</p>
        )}
        {estado === "erro" && (
          <p className="pt-1 text-[15px] text-[#B00020]">
            Não consegui enviar{erro ? ` (${erro})` : ""}.{" "}
            <a
              href={whatsappLink("Olá! Tentei enviar uma mensagem pelo site.")}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Fale comigo no WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
