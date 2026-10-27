"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Contagem regressiva até `ate` (data ISO com fuso). Depois do prazo mostra
 * `encerrado`. Só renderiza os números no cliente, para não dar diferença
 * de hidratação entre o HTML do servidor e o relógio do navegador.
 */
export default function Contagem({
  ate,
  encerrado = "Oferta encerrada",
  className = "",
}: {
  ate: string;
  encerrado?: string;
  className?: string;
}) {
  const fim = new Date(ate).getTime();
  const [agora, setAgora] = useState<number | null>(null);

  useEffect(() => {
    setAgora(Date.now());
    const id = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (agora === null) return <div className={className} aria-hidden="true" />;

  const resta = Math.max(0, fim - agora);
  if (resta === 0) return <p className={className}>{encerrado}</p>;

  const s = Math.floor(resta / 1000);
  const partes = [
    { v: Math.floor(s / 86400), r: "dias" },
    { v: Math.floor((s % 86400) / 3600), r: "horas" },
    { v: Math.floor((s % 3600) / 60), r: "min" },
    { v: s % 60, r: "seg" },
  ];

  return (
    <div className={`flex justify-center gap-3 ${className}`} role="timer">
      {partes.map((p) => (
        <div key={p.r} className="min-w-[64px] rounded-[10px] border border-current/30 bg-white/5 px-3 py-2 text-center">
          <p className="font-serif text-[30px] leading-none tabular-nums">{pad(p.v)}</p>
          <p className="mt-1 text-[11px] uppercase tracking-wider">{p.r}</p>
        </div>
      ))}
    </div>
  );
}
