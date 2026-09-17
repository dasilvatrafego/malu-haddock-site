import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import Marca from "@/components/site/Marca";

export const metadata: Metadata = {
  title: "Destrave sua Jornada na Aromaterapia",
  description:
    "Evento gratuito de 3 aulas para terapeutas que querem atender com segurança, embasamento clínico e autenticidade.",
};

/*
 * ATENÇÃO — herdado do site original:
 * 1) Os botões desta página não levam a nenhuma inscrição. No Wix eles apontam
 *    para uma âncora da própria página (apenas rolam para o topo).
 *    Trocar CTA_HREF pelo link real de inscrição quando existir.
 * 2) O evento citado é de 24, 25 e 26 de junho — datas do texto original.
 */
const CTA_HREF = "#topo";

const AULAS = [
  {
    icone: "/img/icone-aula-1.png",
    n: "AULA 01",
    titulo: "A Trava Invisível",
    texto: (
      <>
        Mostrar que a insegurança, a confusão e o medo não são falta de talento —{" "}
        <strong>são sintomas da ausência de estrutura, direção e acolhimento.</strong>
      </>
    ),
    data: "Dia 24.06 às 20h no",
  },
  {
    icone: "/img/icone-aula-2.png",
    n: "AULA 02",
    titulo: "O Corpo da Confiança",
    texto: (
      <>
        Os pilares que transformam conhecimento solto em{" "}
        <strong>prática segura, ética e respeitada na aromaterapia clínica.</strong>
      </>
    ),
    data: "Dia 25.06 às 20h no",
  },
  {
    icone: "/img/icone-aula-3.png",
    n: "AULA 03",
    titulo: "O Primeiro Passo da Nova Versão de Você",
    texto: (
      <>
        Como transformar sua paixão pelos óleos{" "}
        <strong>em uma carreira com propósito, autonomia financeira e impacto real.</strong>
      </>
    ),
    data: "Dia 26.06 às 20h no",
  },
];

/** Botão dourado desta página (443px de largura, como no original). */
function BotaoInscricao({ className = "" }: { className?: string }) {
  return (
    <a
      href={CTA_HREF}
      className={`inline-block w-full max-w-[443px] bg-gold-btn px-6 py-3 text-center font-sans text-[17px] font-bold text-white transition-colors hover:bg-[#8f6f34] ${className}`}
    >
      QUERO ME INSCREVER GRATUITAMENTE
    </a>
  );
}

export default function DestraveSuaJornada() {
  return (
    <div id="topo" className="font-sans">
      {/* ---------- 1. Hero ---------- */}
      <section className="relative min-h-[560px] overflow-hidden md:min-h-[800px]">
        <Image
          src="/img/hero-destrave.png"
          alt="Malu Haddock Lobo em um campo ao pôr do sol"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />

        <div className="site-container relative flex min-h-[560px] flex-col items-center justify-center py-10 md:min-h-[800px] md:items-end">
          <div className="w-full max-w-[514px] text-center">
            <Image
              src="/img/titulo-destrave.png"
              alt="Destrave sua Jornada na Aromaterapia"
              width={500}
              height={500}
              priority
              className="mx-auto h-auto w-full max-w-[500px]"
            />

            <div className="mt-4 space-y-6 text-cream [text-shadow:rgba(0,0,0,0.35)_0_2px_6px]">
              <p className="text-[25px] font-bold leading-[1.75]">24, 25 e 26/06 às 20h</p>
              <p className="text-[20px] leading-[1.75]">
                Você sente que <strong>está pronta para viver da Aromaterapia,</strong> mas
                trava na hora de atender?
              </p>
              <p className="text-[20px] leading-[1.75]">
                A insegurança, a falta de direcionamento e o medo de não saber o suficiente
                impedem muitas terapeutas de dar o próximo passo.{" "}
                <strong>Mas isso pode mudar agora!</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2. O mapa ----------
          Fundo dourado (#A77936) com a foto de óleos a 8% de opacidade — igual ao original. */}
      <section className="relative overflow-hidden bg-gold py-20 md:flex md:min-h-[533px] md:items-center">
        <Image
          src="/img/oleos-flores.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.08]"
        />

        <div className="site-container relative flex w-full flex-col items-center gap-10 md:flex-row md:gap-12">
          <Reveal className="w-full md:w-[38%]">
            <h1 className="text-[32px] font-bold leading-[1.2] text-white [text-shadow:rgba(0,0,0,0.4)_0_4px_5px] md:text-[41px]">
              Neste evento gratuito de 3 aulas, vou te dar o MAPA para:
            </h1>
          </Reveal>

          <Reveal delay={120} className="w-full md:w-[62%]">
            <div className="space-y-6 text-[18px] font-bold leading-[1.75] text-white [text-shadow:rgba(0,0,0,0.4)_0_4px_5px] md:text-[20px]">
              <p>
                ✅ Romper com o ciclo da dúvida e do medo de atender
                <br />
                ✅ Se posicionar com confiança, mesmo sem anos de experiência
                <br />
                ✅ Aplicar a Aromaterapia com embasamento científico com visão integrativa
              </p>
              <p>
                ✅ Atender de forma ética, profunda e transformadora, unindo técnica,
                intuição e propósito
                <br />
                ✅ E dar os primeiros passos para viver com autonomia financeira fazendo o
                que ama
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 3. Você está travada ----------
          Coluna central creme (#FCF8ED) entre duas faixas de imagem. */}
      <section className="relative bg-[#FCF8ED] py-16 md:py-20">
        {/* Faixa esquerda: foto sobre verde escuro a 52% de opacidade (como no original). */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[14%] bg-green-deep md:block">
          <Image
            src="/img/maos-oleo-escuro.jpg"
            alt=""
            fill
            sizes="20vw"
            className="object-cover opacity-[0.52]"
          />
        </div>
        {/* Faixa direita: foto sobre verde escuro a 92% de opacidade. */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[14%] bg-green-deep md:block">
          <Image
            src="/img/lavanda.jpg"
            alt=""
            fill
            sizes="20vw"
            className="object-cover opacity-[0.92]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[627px] px-5 text-center">
          <Reveal>
            <h2 className="text-[30px] font-bold leading-[1.2] text-gold md:text-[41px]">
              Sente que está travada, mesmo sabendo que nasceu para ajudar com a
              Aromaterapia?
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 space-y-6 text-[18px] leading-[1.6] md:text-[20px]">
              <p className="font-bold">Chega de deixar o medo te paralisar.</p>
              <p>
                <Marca>Destrave sua Jornada na Aromaterapia é um evento 100% gratuito,</Marca>{" "}
                criado para profissionais da saúde, terapeutas, estudantes e apaixonadas por
                aromaterapia que{" "}
                <strong>desejam se tornar profissionais confiantes nesse Universo.</strong>
              </p>
              <p>
                Mesmo que você ainda se sinta insegura,{" "}
                <strong>eu vou te mostrar o caminho para atender com segurança,</strong>{" "}
                embasamento clínico e autenticidade.
              </p>
              <p>
                Você vai aprender a dominar as habilidades fundamentais para{" "}
                <strong>
                  transformar sua paixão em uma prática profissional e uma carreira
                  próspera.
                </strong>
              </p>
              <p>
                🌿 Não importa de onde você vem — <Marca>importa onde você quer chegar.</Marca>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 space-y-5 text-left text-[18px] font-bold leading-[1.75] md:text-[20px]">
              <p>Sem uma base sólida em Aromaterapia, você corre o risco de:</p>
              <p>
                ❌{" "}
                <Marca>
                  Se sentir insegura na hora de aplicar o que já aprendeu — mesmo depois de
                  estudar tanto.
                </Marca>
              </p>
              <p>
                ❌{" "}
                <Marca>
                  Ficar travada na hora de atender, sem saber exatamente quais óleos
                  essenciais indicar com confiança.
                </Marca>
              </p>
              <p>
                ❌{" "}
                <Marca>
                  Perder tempo e dinheiro com cursos superficiais, que não te levam a lugar
                  nenhum.
                </Marca>
              </p>
              <p>
                ❌{" "}
                <Marca>
                  Sentir que nunca está realmente pronta para atuar como uma aromaterapeuta
                  segura, completa e respeitada.
                </Marca>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 space-y-6 text-[18px] leading-[1.7] md:text-[20px]">
              <p>
                <strong>
                  Chegou a hora de te revelar, nesse evento gratuito, todo o mapa, o caminho
                  fundamental que eu usei e que já compartilhei
                </strong>{" "}
                com minhas alunas para que sejam aromaterapeutas completas e de sucesso, para
                conseguirem empreender na área.
              </p>
              <p>
                Serão 3 aulas que irão acontecer nos próximos dias{" "}
                <strong>24, 25 e 26 de Junho,</strong> às 20h no Zoom, onde{" "}
                <strong>
                  você irá descobrir como destravar sua jornada na aromaterapia para se
                  tornar uma aromaterapeuta de sucesso!
                </strong>
              </p>
            </div>

            <div className="mt-12">
              <BotaoInscricao />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4. As 3 aulas ---------- */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <Image src="/img/fundo-frascos-verde.png" alt="" fill sizes="100vw" className="object-cover" />

        <div className="site-container relative">
          <Reveal>
            <h2 className="mx-auto max-w-[869px] text-center text-[28px] font-bold leading-[1.2] text-white [text-shadow:rgba(0,0,0,0.4)_0_4px_5px] md:text-[41px]">
              Garanta seu acesso agora ao evento mais transformador do ano para quem deseja
              viver da Aromaterapia com autoridade e prosperidade.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-6">
            {AULAS.map((a, i) => (
              <Reveal key={a.n} delay={i * 120}>
                {/* Card branco com cantos de 50px, como no original. */}
                <article className="flex h-full flex-col items-center rounded-[50px] bg-white px-6 py-10 text-center">
                  <Image src={a.icone} alt="" width={130} height={130} className="h-[93px] w-auto" />

                  <p className="mt-7 text-[22px] font-bold leading-none">
                    <span className="bg-gold px-2 py-0.5 text-white [text-shadow:rgba(0,0,0,0.4)_0_4px_5px]">
                      {a.n}
                    </span>
                  </p>

                  <h3 className="mt-3 font-avenir text-[22px] font-extrabold leading-tight text-black">
                    {a.titulo}
                  </h3>

                  <p className="mt-6 max-w-[229px] text-[18px] leading-[1.6] text-[#545454]">
                    {a.texto}
                  </p>

                  <p className="mt-auto pt-8 font-avenir text-[22px] font-extrabold leading-tight text-black">
                    {a.data}
                    <br />
                    <span className="text-gold-btn">ZOOM</span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <BotaoInscricao />
          </div>
        </div>
      </section>

      {/* ---------- 5. Quem é sua mentora ---------- */}
      <section className="relative overflow-hidden py-16 md:min-h-[685px] md:flex md:items-center md:py-0">
        <Image
          src="/img/malu-fundo-bege.png"
          alt="Malu Haddock Lobo"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="site-container relative flex w-full items-center">
          <Reveal className="w-full md:w-[58%]">
            <h2 className="text-[30px] font-bold leading-[1.4] text-gold md:text-[41px]">
              Quem é o sua mentora?
            </h2>

            <div className="mt-6 space-y-6 text-[18px] leading-[1.75] md:text-[20px]">
              <p>
                <strong>Malu Haddock Lobo, </strong>aromaterapeuta clínica integrativa com{" "}
                <strong>
                  mais de 25 anos de experiência, criadora do Método Haddock Lobo.{" "}
                </strong>
                Esse método é <strong>validado por milhares de alunas </strong>que tiveram
                suas vidas transformadas após a formação.{" "}
                <strong>
                  Ele une tradição, ciência e alma para formar profissionais preparados para
                  atender de forma ética, sensível e altamente eficaz.
                </strong>
              </p>
              <p>
                Atualmente, além dos cursos online e atendimento clínico, ministra aulas na
                pós graduação em nutrição funcional da faculdade VP e faz parte do corpo
                docente da pós em Ayurveda.
              </p>
            </div>

            <div className="mt-10">
              <BotaoInscricao />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
