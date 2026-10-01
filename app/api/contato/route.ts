import { NextResponse } from "next/server";

/**
 * Recebe o formulário de contato de /terapiaintegral e /preinscricao40 e
 * grava numa planilha do Google Sheets, via um Apps Script publicado como
 * Web App na própria planilha.
 *
 * Configuração necessária (Vercel > Environment Variables):
 *   SHEETS_WEBAPP_URL      URL do Web App do Apps Script (termina em /exec)
 *   SHEETS_WEBAPP_SECRET   mesmo valor configurado no Apps Script (SECRET)
 *
 * Enquanto as variáveis não existirem, o envio devolve erro 503 e o formulário
 * oferece o WhatsApp como alternativa — nenhum lead se perde silenciosamente.
 */

export const runtime = "nodejs";

/** Páginas que podem enviar leads; qualquer outro valor cai em "site". */
const ORIGENS = ["terapiaintegral", "preinscricao40"] as const;

type Corpo = {
  nome?: string;
  telefone?: string;
  email?: string;
  mensagem?: string;
  origem?: string;
  /** honeypot anti-spam: se vier preenchido, é robô */
  website?: string;
};

export async function POST(req: Request) {
  let body: Corpo;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ erro: "Corpo inválido" }, { status: 400 });
  }

  // Armadilha anti-spam: robôs preenchem tudo.
  if (body.website) return NextResponse.json({ ok: true });

  const nome = (body.nome || "").trim();
  const telefone = (body.telefone || "").trim();
  const email = (body.email || "").trim();
  const mensagem = (body.mensagem || "").trim();
  const origem = (ORIGENS as readonly string[]).includes(body.origem || "")
    ? (body.origem as string)
    : "site";

  if (!nome || !telefone || !email) {
    return NextResponse.json({ erro: "Preencha nome, telefone e e-mail" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ erro: "E-mail inválido" }, { status: 400 });
  }

  const url = process.env.SHEETS_WEBAPP_URL;
  const secret = process.env.SHEETS_WEBAPP_SECRET;

  if (!url || !secret) {
    console.error("[contato] SHEETS_WEBAPP_URL/SHEETS_WEBAPP_SECRET não configurados", {
      nome,
      email,
      telefone,
    });
    return NextResponse.json({ erro: "Envio indisponível no momento" }, { status: 503 });
  }

  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      nome,
      telefone,
      email,
      mensagem: mensagem || null,
      origem,
    }),
  });

  const resultado = await r.json().catch(() => null);
  if (!r.ok || !resultado?.ok) {
    console.error("[contato] Apps Script respondeu", r.status, JSON.stringify(resultado));
    return NextResponse.json({ erro: "Não foi possível registrar" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
