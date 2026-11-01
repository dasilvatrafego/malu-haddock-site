import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Reveal from "@/components/site/Reveal";
import Contagem from "@/components/site/Contagem";
import { CHECKOUT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destrave Seus Óleos | Black Friday | Malu Haddock Lobo",
  description:
    "Aromaterapia, Ayurveda e Cosmética Natural: 3 cursos da Malu Haddock Lobo de R$ 990 por R$ 297 na Black Friday.",
};

/*
 * PENDÊNCIAS desta página (ver "Estratégia de Combo — Black Friday 2026", seção 6):
 * 1) Preço avulso de Aromaterapia na Prática e de Aromaterapia e Ayurveda
 *    (para confirmar que o "de R$ 990" é a soma dos três cursos).
 * 2) Rituais do Curso 2 além do Shiroabhyanga.
 * 3) Depoimentos reais de alunas.
 */
const CHECK = CHECKOUT.destraveSeusOleos;

/** Selo "Black Friday · Destrave seus Óleos". Se o arquivo faltar, o hero mostra só o texto. */
const SELO = "/img/destrave-selo.png";
const FOTO_HERO = "/img/maos-oleos-brasileiros.jpg";

/** Preço do combo (parcela conforme o checkout da Hotmart). */
const PRECO = { de: "R$ 990,00", parcela: "R$ 30,72", vista: "R$ 297,00" };

/** Fim da oferta: Cyber Monday, 30/11/2026, 23h59 (horário de Brasília). */
const FIM_DA_OFERTA = "2026-11-30T23:59:59-03:00";

/** Botão principal: dourado, raio 10px, Nunito Sans 700 (mesmo padrão de /cosmetico). */
function Cta({
  children = "Quero destravar meus óleos",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const externo = CHECK.startsWith("http");
  return (
    <a
      href={CHECK}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
      className={`inline-block rounded-[10px] bg-bf-gold px-8 py-4 text-center font-nunito text-[18px] font-bold text-bf-black shadow-[0_2px_12px_rgba(201,160,74,0.35)] transition-colors hover:bg-bf-gold-lt ${className}`}
    >
      {children}
    </a>
  );
}

const CURSOS = [
  {
    n: "Curso 1",
    titulo: "Aromaterapia na Prática",
    para: "Para usar hoje o que está parado em casa.",
    itens: [
      "O que são, de verdade, os óleos essenciais",
      "Dosagens e proporções corretas, para usar com segurança",
      "As vias de utilização: como o óleo chega ao corpo",
      "As formas de uso no dia a dia",
    ],
  },
  {
    n: "Curso 2",
    titulo: "Aromaterapia e Ayurveda",
    para: "Para descobrir quais óleos são os seus.",
    itens: [
      "As raízes: a origem da aromaterapia e o culto à Grande Mãe, os achados históricos e a flor de lótus, a destilação ancestral e os attars",
      "A visão integral: uma aromaterapia que cuida de corpo, mente, emoção e alma, e como purificar o ar da sua casa",
      "Os doshas: o que são Vata, Pitta e Kapha, os óleos para pacificar cada um e os óleos tridoshas, que servem a todos",
      // PENDENTE: completar a lista de rituais além do Shiroabhyanga.
      "Os rituais ayurvédicos, como o Shiroabhyanga",
    ],
  },
  {
    n: "Curso 3",
    titulo: "Cosméticos Naturais Seguros",
    para: "Para formular seus próprios cosméticos naturais, sem medo de errar, em poucas semanas.",
    itens: [
      "Calcular diluições seguras e escolher os conservantes certos",
      "Estruturar uma fórmula do zero",
      "Cremes, séruns, desodorantes, sabonetes, perfumes naturais e mais de uma dezena de produtos",
      "Boas práticas de manipulação e leitura de rótulos",
    ],
  },
];

/* Ícones de linha (traço dourado) da seção "Para quem é". */
const ICONES = {
  gota: <path d="M12 3c3 4 6 7.4 6 11a6 6 0 0 1-12 0c0-3.6 3-7 6-11z" />,
  pessoa: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
    </>
  ),
  maos: (
    <>
      <path d="M4 14c2.5 0 4 1 5.5 2.5H14a1.5 1.5 0 0 1 0 3H9" />
      <path d="M4 20.5h9l6.2-3.4a1.6 1.6 0 0 0-1.5-2.8L14 16" />
      <path d="M14 4c1.6 2 2.6 3.4 2.6 4.8a2.6 2.6 0 0 1-5.2 0C11.4 7.4 12.4 6 14 4z" />
    </>
  ),
  folha: (
    <>
      <path d="M5 19C5 10 11 5 20 4c-.5 9-5.5 15-14 15z" />
      <path d="M5 19l8-8" />
    </>
  ),
};

function Icone({ nome }: { nome: keyof typeof ICONES }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bf-black">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-bf-gold-lt"
        aria-hidden="true"
      >
        {ICONES[nome]}
      </svg>
    </span>
  );
}

const PARA_QUEM_E: { icone: keyof typeof ICONES; texto: string }[] = [
  { icone: "gota", texto: "Tem óleos essenciais parados em casa e quer usá-los com segurança" },
  {
    icone: "pessoa",
    texto: "Sente que “o óleo que funciona para todo mundo” não funciona para você",
  },
  {
    icone: "maos",
    texto: "Quer trocar cosméticos industrializados por algo feito com as próprias mãos",
  },
  { icone: "folha", texto: "Busca um cuidado natural que une ciência, ritual e ancestralidade" },
];

/** Depoimentos de alunas (texto curto + nome). PENDENTE: preencher. */
const DEPOIMENTOS: { texto: string; autora: string }[] = [];

const PARA_QUEM_NAO_E = [
  "Procura fórmula mágica ou substituto de acompanhamento médico",
];

/** Faixa compacta de preço + botão, repetida no fim de cada dobra. */
function PrecoBotao({
  tema = "claro",
  cta,
  className = "",
}: {
  tema?: "claro" | "escuro";
  cta?: string;
  className?: string;
}) {
  const escuro = tema === "escuro";
  return (
    <div
      className={`mx-auto mt-12 flex max-w-[760px] flex-col items-center gap-5 rounded-[15px] px-6 py-6 md:flex-row md:justify-between md:px-8 ${
        escuro ? "border border-bf-gold/40 bg-bf-ink" : "bg-bf-black"
      } ${className}`}
    >
      <div className="text-center md:text-left">
        <p className="text-[12px] font-bold tracking-[0.25em] text-bf-gold">
          BLACK FRIDAY · 3 CURSOS
        </p>
        <p className="mt-1 text-bf-cream">
          <span className="text-[15px] text-bf-cream/60 line-through">R$ 990</span>{" "}
          <span className="text-[15px]">por</span>{" "}
          <span className="text-[15px]">12x</span>{" "}
          <span className="font-serif text-[34px] font-semibold leading-none text-bf-gold-lt">
            {PRECO.parcela}
          </span>
        </p>
        <p className="text-[13px] text-bf-cream/70">ou {PRECO.vista} à vista</p>
      </div>
      <Cta className="shrink-0">{cta}</Cta>
    </div>
  );
}

/** Bloco de preço com contagem regressiva — reaproveitado no meio e no fim da página. */
function Oferta({ id, cta }: { id?: string; cta?: string }) {
  return (
    <div
      id={id}
      className="mx-auto max-w-[640px] scroll-mt-6 rounded-[15px] border border-bf-gold/50 bg-bf-black px-6 py-10 text-center text-bf-cream shadow-[0_10px_40px_rgba(0,0,0,0.25)] md:px-10"
    >
      <span className="inline-block rounded-[15px] bg-bf-gold px-4 py-1.5 text-[12px] font-bold tracking-[0.2em] text-bf-black">
        BLACK FRIDAY
      </span>
      <p className="mt-5 text-[17px]">
        3 cursos completos. De{" "}
        <span className="text-bf-cream/60 line-through">{PRECO.de}</span> por:
      </p>

      {/* Valor em destaque: parcela grande, à vista logo abaixo */}
      <div className="mx-auto mt-5 max-w-[420px] rounded-[15px] border-2 border-bf-gold bg-gradient-to-b from-bf-ink to-bf-black px-6 py-7 shadow-[0_0_40px_rgba(201,160,74,0.18)]">
        <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-bf-gold">
          Em até 12x de
        </p>
        <p className="mt-2 font-serif text-[64px] font-semibold leading-none text-bf-gold-lt md:text-[80px]">
          {PRECO.parcela}
        </p>
        <div className="mx-auto my-5 h-px w-24 bg-bf-gold/40" />
        <p className="text-[18px] text-bf-cream">
          ou <strong className="text-[24px] text-bf-cream">{PRECO.vista}</strong> à vista
        </p>
      </div>
      <p className="mt-8 text-[13px] font-bold tracking-[0.15em] text-bf-gold">
        A OFERTA ENCERRA NA CYBER MONDAY, 30/11, ÀS 23H59
      </p>
      <Contagem ate={FIM_DA_OFERTA} className="mt-4 text-bf-gold-lt" />

      <div className="mt-8">
        <Cta>{cta}</Cta>
      </div>
      <p className="mt-5 text-[14px] text-bf-cream/80">
        🛡️ Garantia incondicional de 7 dias. Risco zero.
      </p>
    </div>
  );
}

export default function DestraveSeusOleos() {
  const temSelo = existsSync(join(process.cwd(), "public", SELO));

  return (
    <div className="font-nunito">
      {/* ---------- 1. Hero (preto) ---------- */}
      <section className="overflow-hidden bg-bf-black py-14 md:py-20">
        <div className="site-container grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            {temSelo ? (
              <Image
                src={SELO}
                alt="Black Friday · Destrave seus Óleos · Combo de cursos"
                width={640}
                height={640}
                priority
                className="h-[150px] w-[150px] rounded-full md:h-[190px] md:w-[190px]"
              />
            ) : (
              <p className="text-[13px] font-bold tracking-[0.25em] text-bf-gold">
                BLACK FRIDAY · DESTRAVE SEUS ÓLEOS
              </p>
            )}

            <p className="mt-8 text-[12px] font-bold tracking-[0.3em] text-bf-gold">
              MALU HADDOCK LOBO · AROMATERAPIA &amp; AYURVEDA
            </p>

            <h1 className="mt-4 font-serif text-[42px] leading-[1.08] text-bf-cream md:text-[60px]">
              Aquele vidrinho parado na gaveta tem{" "}
              <em className="text-bf-gold-lt">muito mais</em> para te dar do que perfume.
            </h1>

            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.75] text-bf-cream/80">
              Três cursos com Malu Haddock Lobo, mais de 25 anos de prática clínica em
              aromaterapia e Ayurveda e formação internacional. Você vai aprender a
              usar seus óleos com segurança, descobrir quais combinam com o seu tipo e criar
              seus próprios cosméticos, sem toxinas silenciosas.
            </p>

            <div className="mt-9">
              <Cta>Quero meus óleos fora da gaveta</Cta>
            </div>
            <p className="mt-5 text-[14px] text-bf-cream/70">
              3 cursos · De R$ 990 por{" "}
              <strong className="text-bf-gold-lt">12x de {PRECO.parcela}</strong> ou {PRECO.vista} à
              vista · Garantia de 7 dias
            </p>
          </Reveal>

          <Reveal delay={150}>
            {/* Foto em arco, como na prévia da Lovable */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-t-full border border-bf-gold/40">
              <Image
                src={FOTO_HERO}
                alt="Mãos segurando frascos de óleos essenciais de aroeira, breu branco e cagaita"
                fill
                priority
                sizes="(min-width: 768px) 440px, 100vw"
                className="object-cover object-[45%_center]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 2. Talvez seja você ---------- */}
      <section className="bg-bf-cream py-16 md:py-24">
        <div className="site-container grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="text-[12px] font-bold tracking-[0.3em] text-bf-gold">
              TALVEZ SEJA VOCÊ
            </p>
            <h2 className="mt-4 font-serif text-[34px] leading-[1.15] text-black md:text-[42px]">
              Você comprou lavanda porque disseram que acalma.
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-[1.75] text-[#3a332c]">
              <p>Depois veio o alecrim, o limão-siciliano, talvez um kit inteiro.</p>
              <p>
                Hoje eles estão ali, enfileirados. Você abre um de vez em quando, sente o
                cheiro, fecha de novo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[15px] bg-bf-black px-8 py-10 md:px-10 md:py-12">
              <p className="font-serif text-[38px] italic leading-[1.1] text-bf-gold-lt md:text-[46px]">
                Não é falta de vontade.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-bf-cream">
                É que ninguém te explicou{" "}
                <strong>quantas gotas, em quê, onde aplicar e por quê.</strong> E diante da
                dúvida, a gente guarda.
              </p>
              <div className="mt-7 border-t border-bf-gold/30 pt-6 text-[15px] leading-[1.7] text-bf-cream/70">
                Enquanto isso, os cremes do armário seguem cheios de ingredientes que você não
                sabe pronunciar.
              </div>
            </div>
          </Reveal>
          <PrecoBotao className="md:col-span-2" />
        </div>
      </section>

      {/* ---------- 3. A virada + preço (preto) ---------- */}
      <section className="bg-bf-black py-16 md:py-24">
        <div className="site-container text-center">
          <Reveal>
            <p className="text-[12px] font-bold tracking-[0.3em] text-bf-gold">
              BLACK FRIDAY · COMBO DE CURSOS
            </p>
            <h2 className="mx-auto mt-5 max-w-[820px] font-serif text-[36px] leading-[1.15] text-bf-cream md:text-[52px]">
              O problema nunca foi o óleo.{" "}
              <em className="text-bf-gold-lt">Foi usar sem saber quem você é.</em>
            </h2>
            <p className="mx-auto mt-8 max-w-[720px] text-[17px] leading-[1.75] text-bf-cream/80">
              O mesmo óleo que acalma uma pessoa pode agitar outra. O Ayurveda explica isso há
              milênios, com os doshas. Quando você une aromaterapia, Ayurveda e as mãos na
              massa, seus vidrinhos viram ritual,{" "}
              <strong className="text-bf-cream">cuidado natural</strong> e autonomia.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <Oferta id="oferta" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4. O que você leva (preto) ---------- */}
      <section className="bg-bf-black py-16 md:py-24">
        <div className="site-container">
          <Reveal>
            <p className="text-center text-[12px] font-bold tracking-[0.3em] text-bf-gold">
              O QUE VOCÊ LEVA
            </p>
            <h2 className="mt-4 text-center font-serif text-[36px] text-bf-cream md:text-[48px]">
              Três cursos, um caminho
            </h2>
            <p className="mt-3 text-center text-[17px] text-bf-cream/70">
              No combo de Black Friday, os três cursos ficam juntos.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CURSOS.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 100}>
                <article className="flex h-full flex-col rounded-[15px] border border-bf-gold/30 bg-bf-ink px-6 py-8">
                  <p className="text-[12px] font-bold tracking-[0.25em] text-bf-gold">
                    {c.n.toUpperCase()}
                  </p>
                  <h3 className="mt-3 font-serif text-[28px] font-semibold leading-tight text-bf-cream">
                    {c.titulo}
                  </h3>
                  <p className="mt-3 text-[16px] italic leading-[1.6] text-bf-gold-lt">{c.para}</p>
                  <ul className="mt-6 space-y-3 border-t border-bf-gold/20 pt-6 text-[15px] leading-[1.6] text-bf-cream/80">
                    {c.itens.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-bf-gold" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <PrecoBotao tema="escuro" />
        </div>
      </section>

      {/* ---------- 5. Para quem é / não é ---------- */}
      <section className="bg-bf-cream py-16 md:py-24">
        <div className="site-container grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-[12px] font-bold tracking-[0.3em] text-bf-gold">PARA QUEM É</p>
            <h2 className="mt-3 font-serif text-[36px] leading-[1.15] text-black md:text-[44px]">
              Este combo é para você que:
            </h2>
            <ul className="mt-8 space-y-5">
              {PARA_QUEM_E.map((li) => (
                <li key={li.texto} className="flex items-center gap-4">
                  <Icone nome={li.icone} />
                  <span className="text-[17px] leading-[1.55] text-[#3a332c]">{li.texto}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[15px] bg-bf-black px-8 py-9 md:mt-14">
              <h2 className="font-serif text-[30px] text-bf-cream">Para quem não é</h2>
              <ul className="mt-6 space-y-4 text-[16px] leading-[1.6] text-bf-cream/80">
                {PARA_QUEM_NAO_E.map((li) => (
                  <li key={li} className="flex gap-3">
                    <span className="text-bf-gold">✕</span>
                    <span>{li}</span>
                  </li>
                ))}
                <li className="flex gap-3">
                  <span className="text-bf-gold">✕</span>
                  <span>
                    Quem quer formação profissional em aromaterapia clínica. Para isso existe o{" "}
                    <Link href="/" className="font-bold text-bf-gold-lt underline underline-offset-2">
                      Método Haddock Lobo
                    </Link>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
          <PrecoBotao className="md:col-span-2" />
        </div>
      </section>

      {/* ---------- 6. Quem ensina ---------- */}
      <section className="bg-white py-16 md:py-24">
        <div className="site-container grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-t-full border border-bf-gold/40 shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
              <Image
                src="/img/malu-cachoeira-oleos.jpg"
                alt="Malu Haddock Lobo sentada numa pedra junto a uma cachoeira, com frascos de óleos essenciais"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover object-[60%_center]"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[12px] font-bold tracking-[0.3em] text-bf-gold">QUEM ENSINA</p>
            <h2 className="mt-3 font-serif text-[38px] text-black md:text-[48px]">
              Malu Haddock Lobo
            </h2>
            <p className="mt-6 text-[17px] leading-[1.75] text-[#3a332c]">
              Aromaterapeuta, educadora e praticante em aromaterapia e Ayurveda. São mais de 25
              anos de prática clínica, com formação internacional.
            </p>
            <p className="mt-5 font-serif text-[24px] italic leading-[1.4] text-bf-gold">
              Ela ensina do jeito que pratica: com rigor científico e respeito às tradições que
              guardaram esse saber por milênios.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { n: "+25 anos", d: "de prática clínica" },
                { n: "+8.000", d: "alunas formadas" },
                { n: "ITHMA", d: "formação no Reino Unido" },
              ].map((s) => (
                <div key={s.n} className="rounded-[10px] bg-bf-black px-2 py-4">
                  <p className="font-serif text-[20px] font-semibold leading-tight text-bf-gold-lt md:text-[22px]">
                    {s.n}
                  </p>
                  <p className="mt-1 text-[12px] text-bf-cream/75">{s.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <PrecoBotao className="md:col-span-2" />
        </div>
      </section>

      {/* ---------- 7. Depoimentos ----------
          PENDENTE: depoimentos reais de alunas. Enquanto DEPOIMENTOS estiver vazio,
          os quadros de espaço reservado aparecem só nas prévias da Vercel e no
          ambiente local, nunca em produção. */}
      {(DEPOIMENTOS.length > 0 || process.env.VERCEL_ENV !== "production") && (
        <section className="bg-bf-cream py-16 md:py-24">
          <div className="site-container">
            <Reveal>
              <p className="text-center text-[12px] font-bold tracking-[0.3em] text-bf-gold">
                QUEM JÁ TIROU OS ÓLEOS DA GAVETA
              </p>
              <h2 className="mt-4 text-center font-serif text-[34px] text-black md:text-[42px]">
                O que dizem as alunas
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {DEPOIMENTOS.length > 0
                ? DEPOIMENTOS.map((d, i) => (
                    <Reveal key={d.autora} delay={i * 100}>
                      <figure className="flex h-full flex-col rounded-[15px] bg-bf-black px-7 py-8">
                        <span className="font-serif text-[56px] leading-none text-bf-gold">“</span>
                        <blockquote className="mt-2 flex-1 text-[16px] leading-[1.7] text-bf-cream/85">
                          {d.texto}
                        </blockquote>
                        <figcaption className="mt-6 border-t border-bf-gold/25 pt-4 text-[14px] font-bold tracking-wide text-bf-gold-lt">
                          {d.autora}
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))
                : [1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="flex h-[220px] items-center justify-center rounded-[15px] border-2 border-dashed border-bf-gold/40 text-[15px] text-[#7a6f63]"
                    >
                      Depoimento de aluna {n}
                    </div>
                  ))}
            </div>
            <PrecoBotao tema="escuro" className="!bg-bf-black" />
          </div>
        </section>
      )}

      {/* ---------- 8. Oferta final (preto) ---------- */}
      <section className="bg-bf-black py-16 md:py-24">
        <div className="site-container text-center">
          <Reveal>
            {temSelo && (
              <Image
                src={SELO}
                alt="Black Friday · Destrave seus Óleos · Combo de cursos"
                width={640}
                height={640}
                className="mx-auto h-[200px] w-[200px] rounded-full ring-1 ring-bf-gold/50 ring-offset-8 ring-offset-bf-black md:h-[260px] md:w-[260px]"
              />
            )}
            <h2 className="mt-10 font-serif text-[40px] leading-[1.1] text-bf-cream md:text-[60px]">
              Seus vidrinhos estão esperando.
            </h2>
            <p className="mt-5 text-[18px] text-bf-cream/80">
              Ritual, cuidado natural e autonomia, a partir do que você já tem em casa.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12">
              <Oferta cta="Quero meus óleos fora da gaveta" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
