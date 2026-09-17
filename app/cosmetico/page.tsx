import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";
import { CHECKOUT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cosmético Seguro | Malu Haddock Lobo",
  description:
    "Formule seus próprios cosméticos naturais, sem medo de errar. Aprenda o critério técnico por trás de cada fórmula.",
};

const CHECK = CHECKOUT.cosmetico;

/* Botão principal desta página: verde #386550, raio 10px, Nunito Sans 700. */
function Cta({
  children,
  cor = "verde",
  className = "",
}: {
  children: React.ReactNode;
  cor?: "verde" | "dourado";
  className?: string;
}) {
  const bg =
    cor === "dourado"
      ? "bg-cosm-gold hover:bg-[#b57a2c]"
      : "bg-cosm-green hover:bg-[#2c5040]";
  return (
    <a
      href={CHECK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-[10px] px-8 py-4 text-center font-nunito text-[18px] font-bold text-white transition-colors ${bg} ${className}`}
    >
      {children}
    </a>
  );
}

/** Item "✔ título / descrição" usado nas listas de aprendizado. */
function ItemCheck({ titulo, desc }: { titulo: string; desc: string }) {
  return (
    <div className="rounded-[15px] border border-[#9F8C82] bg-cosm-cream px-6 py-5">
      <p className="font-nunito text-[16px] font-bold text-black">
        <span className="text-cosm-gold">✔ </span>
        {titulo}
      </p>
      <p className="mt-1 font-nunito text-[15px] text-cosm-muted">{desc}</p>
    </div>
  );
}

const APRENDIZADOS = [
  { titulo: "Calcular diluições seguras", desc: "Para cada tipo de produto e cada área do corpo" },
  { titulo: "Escolher conservantes e antioxidantes", desc: "De forma técnica, para fórmulas que duram" },
  { titulo: "Boas práticas de manipulação", desc: "Aplicadas à cosmética natural, do começo ao fim" },
  { titulo: "Interpretar rótulos de matéria-prima", desc: "Sabendo exatamente o que entra em cada produto" },
  { titulo: "Definir proporções corretas", desc: "Para cada finalidade, sem chute" },
  { titulo: "Estruturar uma fórmula do zero", desc: "Da base ao produto final acabado" },
];

const PRODUTOS_A = [
  "Cremes e loções",
  "Séruns",
  "Desodorantes",
  "Gloss e batom",
  "Perfumes naturais",
  "Repelente natural",
  "Velas de massagem",
];
const PRODUTOS_B = [
  "Pomadas",
  "Máscaras",
  "Sabonetes",
  "Body splash",
  "Óleo bifásico",
  "Esfoliantes",
  "E muito mais",
];

const DEPOIMENTOS = [
  {
    video: "/video/cosmetico-lua.mp4",
    texto: "“Antes eu tinha medo de errar nas formulações. Hoje eu sei exatamente o que estou fazendo.”",
    autor: "Lua Marotta",
  },
  {
    video: "/video/cosmetico-gilberto.mp4",
    texto: "“Ela me deu muita segurança para criar minhas invencionices.”",
    autor: "Gilberto",
  },
  {
    video: "/video/cosmetico-lygia.mp4",
    texto: "“Eu tinha medo de errar nas dosagens, mas passei a formular com confiança.”",
    autor: "Lygia",
  },
];

const ENTREGAS = [
  {
    icone: "/img/icons/cosmeticos-naturais.svg",
    titulo: "Curso completo de Cosméticos Naturais Seguros",
    desc: "Acesso por 1 ano à plataforma.",
  },
  {
    icone: "/img/icons/suporte.svg",
    titulo: "Suporte para tirar dúvidas",
    desc: "Você não ficará sozinha no processo.",
  },
  {
    icone: "/img/icons/certificado.svg",
    titulo: "Certificado de conclusão",
    desc: "Para fortalecer sua autoridade ao vender.",
  },
];

const FAQ = [
  {
    pergunta: "Preciso ter experiência?",
    resposta: <p>Não. Você aprende desde a base até a estruturação segura.</p>,
  },
  {
    pergunta: "Posso vender após o curso?",
    resposta: <p>Sim, o curso foi pensado para quem quer usar e vender com segurança.</p>,
  },
  {
    pergunta: "Por quanto tempo tenho acesso?",
    resposta: <p>1 ano de acesso completo.</p>,
  },
  {
    pergunta: "E se eu não gostar?",
    resposta: <p>Você tem 7 dias de garantia incondicional.</p>,
  },
];

export default function Cosmetico() {
  return (
    <div className="font-nunito">
      {/* ---------- 1. Hero ---------- */}
      <section className="relative overflow-hidden py-16 md:min-h-[726px] md:py-20">
        <Image src="/img/cosmetico-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <Image
          src="/img/cosmetico-hero-blur.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="site-container relative">
          <Reveal>
            <p className="font-nunito text-[14px] font-bold tracking-wide text-cosm-gold">
              FORMAÇÃO NATURAL &amp; SEGURA
            </p>

            <h1 className="mt-4 max-w-[560px] font-serif text-[36px] leading-[1.15] text-[#FFF5F0] md:text-[48px]">
              Formule seus próprios cosméticos naturais,{" "}
              <span className="text-cosm-gold">sem medo de errar</span>, em poucas semanas
            </h1>

            <p className="mt-7 max-w-[600px] text-[17px] leading-[1.7] text-[#FFF5F0]">
              Aprenda o critério técnico por trás de cada fórmula: diluição correta,
              conservação segura e ingredientes que você entende de verdade. Troque os
              cosméticos convencionais cheios de toxinas por produtos naturais que você
              mesma cria, com confiança e podendo vender.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 md:max-w-[640px]">
              <div>
                <p className="text-[17px] font-bold text-[#FFF5F0]">
                  <span className="text-cosm-gold">✔ </span>Formular com segurança
                </p>
                <p className="mt-1 text-[15px] text-[#FFF5F0]">
                  Diluições corretas, sem contra-indicações
                </p>
              </div>
              <div>
                <p className="text-[17px] font-bold text-[#FFF5F0]">
                  <span className="text-cosm-gold">✔ </span>Nova fonte de renda
                </p>
                <p className="mt-1 text-[15px] text-[#FFF5F0]">
                  Produtos eficazes e confiáveis para vender
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Cta>Quero formular com segurança</Cta>
            </div>

            <p className="mt-6 text-[14px] text-white">
              Garantia incondicional de 7 dias · Acesso por 1 ano · Certificado de conclusão
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 2. Faixa de aviso ---------- */}
      <section className="bg-cosm-gold py-4">
        <div className="site-container">
          <p className="text-center text-[15px] font-bold text-white md:text-[16px]">
            Bônus IA Formuladora de Cosméticos liberado para as inscrições desta semana
          </p>
        </div>
      </section>

      {/* ---------- 3. Você já teve medo de ---------- */}
      <section className="bg-white py-16 md:py-20">
        <div className="site-container">
          <Reveal>
            <h2 className="text-center font-serif text-[32px] text-black md:text-[36px]">
              Você já teve medo de:
            </h2>

            <div className="mx-auto mt-8 max-w-[720px] space-y-4 text-center text-[17px] text-cosm-muted">
              <p>Errar a diluição de um óleo essencial?</p>
              <p>Criar uma fórmula instável que estraga em dias?</p>
              <p>Escolher um ingrediente inseguro sem perceber?</p>
              <p>Usar uma concentração que pode irritar a pele?</p>
              <p>Simplesmente não saber, com certeza, o que está fazendo?</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-[909px] rounded-[15px] border border-[#9F8C82] bg-cosm-cream px-8 py-7">
              <p className="text-center text-[17px] leading-[1.7] text-black">
                Se você respondeu sim para qualquer uma dessas perguntas, saiba:{" "}
                <span className="text-cosm-green">
                  Você não precisa parar de formular. Você precisa aprender a formular com
                  critério técnico.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-16 text-center">
              <h2 className="font-serif text-[32px] text-black md:text-[36px]">
                Por que este curso é diferente?
              </h2>
              <p className="mt-5 text-[17px] text-black">
                Aqui você não decora receitas. Você aprende a criar.
              </p>
              <p className="mx-auto mt-2 max-w-[760px] text-[17px] text-black">
                A base técnica que transforma quem depende de fórmula pronta em quem cria
                qualquer fórmula com segurança.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {APRENDIZADOS.map((a, i) => (
              <Reveal key={a.titulo} delay={i * 60}>
                <ItemCheck titulo={a.titulo} desc={a.desc} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Cta>Quero eliminar o medo de errar minhas fórmulas</Cta>
          </div>
        </div>
      </section>

      {/* ---------- 4. O que você vai dominar ---------- */}
      <section className="bg-white py-16 md:py-20">
        <div className="site-container">
          <Reveal>
            <h2 className="text-center font-serif text-[32px] text-black md:text-[38px]">
              O que você vai dominar dentro do curso
            </h2>
            <p className="mx-auto mt-5 max-w-[882px] text-center text-[17px] text-cosm-green">
              Além da base técnica sólida, você aprenderá a formular com segurança:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-10 flex max-w-[560px] justify-center gap-14">
              <ul className="space-y-2 text-[17px] text-cosm-gold">
                {PRODUTOS_A.map((p) => (
                  <li key={p}>● {p}</li>
                ))}
              </ul>
              <ul className="space-y-2 text-[17px] text-cosm-gold">
                {PRODUTOS_B.map((p) => (
                  <li key={p}>● {p}</li>
                ))}
              </ul>
            </div>

            <p className="mx-auto mt-12 max-w-[882px] text-center text-[17px] leading-[1.7] text-cosm-green">
              Mas o diferencial não é a lista. É a segurança com que você saberá criar
              qualquer nova fórmula, mesmo as que ainda nem imaginou.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:justify-center">
              <Image
                src="/img/cosmetico-produtos.jpg"
                alt="Cosméticos naturais formulados no curso"
                width={800}
                height={800}
                className="h-[300px] w-full max-w-[600px] rounded-[15px] object-cover"
              />

              <div className="flex w-full max-w-[405px] flex-col items-center justify-center rounded-[15px] bg-cosm-green px-8 py-8 text-center">
                <p className="font-serif text-[48px] leading-none text-white md:text-[56px]">
                  Diversos
                </p>
                <p className="mt-3 text-[15px] text-white">tipos de produtos para formular</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 5. Sua mentora ---------- */}
      <section className="bg-offwhite py-16 md:py-20">
        <div className="site-container grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <Image
              src="/img/cosmetico-malu.jpg"
              alt="Malu Haddock Lobo"
              width={600}
              height={774}
              className="h-full max-h-[587px] w-full rounded-[15px] object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[15px] bg-white p-8 md:p-10">
              <p className="text-[14px] font-semibold tracking-wide text-cosm-gold">
                SUA MENTORA
              </p>
              <h2 className="mt-2 font-serif text-[32px] text-black md:text-[36px]">
                Quem vai te guiar
              </h2>

              <p className="mt-6 text-[16px] leading-[1.75] text-cosm-green">
                Malu Haddock Lobo, fundadora da marca{" "}
                <strong>
                  Soma Produtos Aromaterápicos e Cosméticos Naturais, formadora de alunas
                  que querem aprender com responsabilidade técnica, dentro da filosofia da
                  Slow Cosmética e da aromaterapia clínica.
                </strong>
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { n: "+5.000", d: "alunas formadas" },
                  { n: "25 anos", d: "de cosmética natural" },
                  { n: "Soma", d: "marca própria" },
                ].map((s) => (
                  <div key={s.n}>
                    <p className="text-[18px] font-bold text-cosm-gold">{s.n}</p>
                    <p className="mt-1 text-[13px] text-cosm-gold">{s.d}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[16px] leading-[1.7] text-black">
                &ldquo;Minha missão não é ensinar você a copiar receitas, é ensinar você a
                formular com consciência, segurança e profissionalismo.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 6. Depoimentos em vídeo ---------- */}
      <section className="bg-white py-16 md:py-20">
        <div className="site-container">
          <Reveal>
            <h2 className="text-center font-serif text-[32px] text-black md:text-[36px]">
              Quem já formulou com o método
            </h2>
            <p className="mt-4 text-center text-[17px] text-cosm-green">
              Do medo de errar à confiança de criar.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[782px] gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <Reveal key={d.autor} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-[15px] bg-cosm-sand p-4">
                  <video
                    src={d.video}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-square w-full rounded-[10px] bg-black object-cover"
                  />
                  <figcaption className="mt-4 flex flex-1 flex-col">
                    <p className="text-[14px] leading-[1.6] text-black">{d.texto}</p>
                    <p className="mt-auto pt-3 text-[15px] font-bold text-cosm-gold">
                      {d.autor}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Cta>Quero formular com segurança e confiança</Cta>
          </div>
        </div>
      </section>

      {/* ---------- 7. O que você recebe ---------- */}
      <section className="bg-offwhite py-16 md:py-20">
        <div className="site-container">
          <Reveal>
            <h2 className="text-center font-serif text-[32px] text-black md:text-[36px]">
              O que você recebe ao se inscrever hoje
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-[782px] gap-6 md:grid-cols-3">
            {ENTREGAS.map((e, i) => (
              <Reveal key={e.titulo} delay={i * 100}>
                <article className="flex h-full flex-col items-center rounded-[15px] bg-cosm-sand px-5 py-7 text-center">
                  <Image src={e.icone} alt="" width={67} height={63} className="h-[63px] w-auto" />
                  <h3 className="mt-5 font-serif text-[20px] font-bold text-[#282626]">
                    {e.titulo}
                  </h3>
                  <p className="mt-3 text-[14px] text-cosm-green">{e.desc}</p>
                  <Image
                    src="/img/icons/seta-direita.svg"
                    alt=""
                    width={41}
                    height={13}
                    className="mt-auto pt-5"
                  />
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bônus: IA Formuladora — card bronze #A77936 */}
          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-[890px] rounded-[15px] bg-cosm-bronze px-7 py-8 md:px-10 md:py-10">
              <span className="inline-block rounded-[15px] bg-cosm-gold px-4 py-1.5 text-[12px] font-bold text-white">
                BÔNUS EXCLUSIVO
              </span>

              <h3 className="mt-5 font-serif text-[26px] text-white md:text-[28px]">
                IA Formuladora de Cosméticos Naturais
              </h3>

              <p className="mt-4 text-[16px] leading-[1.7] text-[#FAF6F1]">
                Uma assistente virtual especializada que trabalha com base em material
                técnico estruturado, dentro da filosofia da Slow Cosmética e da aromaterapia
                clínica integral. Ela pensa como formuladora e ensina você a raciocinar como
                uma criadora de cosméticos naturais.
              </p>

              <ul className="mt-6 space-y-2 text-[16px] text-[#FAF6F1]">
                {[
                  "Criar formulações completas e estruturadas",
                  "Ajudar com cálculos de diluição seguros para adultos, peles sensíveis, gestantes e lactantes",
                  "Criar sinergias aromáticas com intenção terapêutica",
                  "Tirar dúvidas técnicas do curso",
                  "Indicar marcas confiáveis",
                ].map((li) => (
                  <li key={li}>
                    <span className="text-cosm-gold">● </span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Preço */}
          <Reveal delay={100}>
            <div className="mx-auto mt-10 max-w-[890px] rounded-[15px] border border-[#9F8C82] bg-cosm-cream px-8 py-10 text-center">
              <p className="text-[17px] text-cosm-green">
                Deveria custar muito mais pela segurança técnica que entrega.
              </p>
              <p className="mt-1 text-[17px] text-cosm-green">Mas hoje você entra por apenas:</p>

              <p className="mt-6 font-serif text-[42px] leading-none text-black md:text-[52px]">
                R$ 290,00
              </p>
              <p className="mt-3 text-[20px] text-black">ou 12 X R$ 29,99</p>
              <p className="mt-2 text-[14px] text-cosm-muted">
                Parcelamento no cartão conforme políticas da plataforma.
              </p>

              <p className="mt-6 text-[16px] font-bold text-cosm-green">
                🛡️ Garantia incondicional de 7 dias. Risco zero.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 text-center">
            <Cta cor="dourado">Quero garantir a minha vaga</Cta>
          </div>
        </div>
      </section>

      {/* ---------- 8. Para quem é / FAQ ---------- */}
      <section className="bg-offwhite pb-16 md:pb-20">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[15px] border border-[#9F8C82] bg-cosm-cream px-8 py-8">
                <h3 className="font-serif text-[26px] text-cosm-green md:text-[28px]">
                  Esse curso é para você se:
                </h3>
                <ul className="mt-5 space-y-3 text-[16px] leading-[1.6] text-cosm-green">
                  {[
                    "Quer substituir cosméticos convencionais com segurança",
                    "Quer saber exatamente o que está usando na sua pele",
                    "Deseja transformar conhecimento em renda",
                    "Busca formular com critério técnico",
                    "Quer parar de depender de receitas prontas",
                  ].map((li) => (
                    <li key={li}>✔ {li}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-[15px] border border-cosm-danger bg-[#E6CBCC] px-8 py-8">
                <h3 className="font-serif text-[26px] text-cosm-green md:text-[28px]">
                  Não é para você se:
                </h3>
                <ul className="mt-5 space-y-3 text-[16px] leading-[1.6] text-cosm-danger">
                  <li>✕ Procura apenas receitas copiadas sem entender formulação</li>
                  <li>✕ Não quer seguir critérios técnicos de segurança</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="mt-16 text-center font-serif text-[32px] text-black md:text-[36px]">
              Perguntas Frequentes
            </h2>
          </Reveal>

          {/* Acordeão em tema claro nesta página */}
          <div className="mt-8 [&_button_span:first-child]:text-cosm-gold [&_button_span:nth-child(2)]:!text-black [&_button_span:last-child]:!text-black [&_div[id^=faq-painel]]:!text-black/80 [&>div>div]:border-black/15">
            <Accordion items={FAQ} />
          </div>

          <div className="mt-12 text-center">
            <Cta cor="dourado">Sim, quero aprender a formular cosméticos naturais</Cta>
            <p className="mt-5 text-[15px] font-bold text-black">com segurança técnica</p>
          </div>
        </div>
      </section>
    </div>
  );
}
