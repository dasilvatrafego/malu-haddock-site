import { NextResponse } from "next/server";

/**
 * Recebe o formulário de contato de /terapiaintegral e grava no Supabase.
 *
 * Configuração necessária (Vercel > Environment Variables):
 *   SUPABASE_URL                 URL do projeto Supabase
 *   SUPABASE_SERVICE_ROLE_KEY    chave service_role (somente servidor, nunca no cliente)
 *
 * Tabela esperada:
 *   create table contatos_site (
 *     id          bigint generated always as identity primary key,
 *     nome        text not null,
 *     telefone    text not null,
 *     email       text not null,
 *     mensagem    text,
 *     origem      text,
 *     criado_em   timestamptz not null default now()
 *   );
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

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error("[contato] SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY não configurados", {
      nome,
      email,
      telefone,
    });
    return NextResponse.json({ erro: "Envio indisponível no momento" }, { status: 503 });
  }

  const r = await fetch(`${url}/rest/v1/contatos_site`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      nome,
      telefone,
      email,
      mensagem: mensagem || null,
      origem,
    }),
  });

  if (!r.ok) {
    console.error("[contato] Supabase respondeu", r.status, await r.text().catch(() => ""));
    return NextResponse.json({ erro: "Não foi possível registrar" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
