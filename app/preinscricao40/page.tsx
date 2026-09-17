import type { Metadata } from "next";
import Image from "next/image";
import FormularioPreLancamento from "@/components/site/FormularioPreLancamento";

export const metadata: Metadata = {
  title: "Pré-inscrição Mulher 40+ | Malu Haddock Lobo",
  description:
    "Travessia: método de cuidado natural integrativo para mulheres 40+. Deixe seu contato e entre no grupo do pré-lançamento.",
};

/*
 * Página de captação do pré-lançamento "Travessia" (climatério e menopausa).
 * Três seções, réplica da página /preinscricao40 do Wix:
 *   1. Hero: logo Travessia sobre aquarela de folhas (imagem única) + texto
 *   2. "Quem sou eu": faixa terracota #C1633D com foto e bio
 *   3. Formulário: fundo #E8E6E6, leva para o grupo do WhatsApp
 */
export default function PreInscricao40() {
  return (
    <div className="font-avenir">
      {/* ---------- 1. Hero ---------- */}
      <section className="relative overflow-hidden bg-[#FEF7F1]">
        {/* Desktop: arte horizontal 1366x768 preenchendo 724px de altura */}
        <div className="relative hidden h-[724px] md:block">
          <Image
            src="/img/travessia-hero.jpg"
            alt="Travessia: método de cuidado natural integrativo para mulheres 40+"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="site-container absolute inset-x-0 top-[527px]">
            <TextoHero />
          </div>
        </div>

        {/* Celular: arte vertical 1080x1350, texto na área livre inferior */}
        <div className="relative aspect-[1080/1350] md:hidden">
          <Image
            src="/img/travessia-hero-mobile.jpg"
            alt="Travessia: método de cuidado natural integrativo para mulheres 40+"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
            <TextoHero />
          </div>
        </div>
      </section>

      {/* ---------- 2. Quem sou eu ---------- */}
      <section className="bg-[#C1633D]">
        {/* Celular: foto inteira em cima, texto embaixo */}
        <div className="md:hidden">
          <Image
            src="/img/travessia-malu.jpg"
            alt="Malu Haddock Lobo"
            width={1355}
            height={2000}
            className="h-auto w-full"
          />
          <div className="px-5 pb-10 pt-8">
            <TextoQuemSouEu />
          </div>
        </div>

        {/* Desktop: faixa de 321px; a foto é mais alta que a faixa e fica recortada,
            começando 83px à esquerda da coluna de conteúdo, como no original. */}
        <div className="relative hidden h-[321px] overflow-hidden md:block">
          <div className="site-container relative h-full">
            <div className="absolute -left-[63px] top-[15px] h-[576px] w-[406px]">
              <Image
                src="/img/travessia-malu.jpg"
                alt="Malu Haddock Lobo"
                fill
                sizes="406px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute left-[415px] top-[60px] w-[492px]">
              <TextoQuemSouEu />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 3. Quero acesso antecipado ---------- */}
      <section className="bg-offwhite px-5 pb-16 pt-14 md:pb-[70px] md:pt-[80px]">
        <div className="mx-auto w-full max-w-[805px] text-center">
          <h2 className="font-serif text-[32px] font-semibold leading-[1.375] text-black md:text-[38px]">
            Quero acesso antecipado
          </h2>
          <p className="mt-[11px] text-[16px] font-light leading-[1.5] text-black">
            Deixe seu contato e entre no grupo para garantir a condição especial de pré lançamento.
          </p>
        </div>

        <div className="mt-[58px]">
          <FormularioPreLancamento />
        </div>
      </section>
    </div>
  );
}

function TextoHero() {
  return (
    <p className="mx-auto max-w-[677px] text-center text-[16px] font-light leading-[1.5] text-black md:text-[18px]">
      Método criado por <strong className="font-bold">Malu Haddock Lobo</strong> para atravessar
      o climatério e a menopausa sabendo o que está acontecendo com você e o que fazer a respeito.
      Aromaterapia clínica, fitoterapia e cuidados naturais para{" "}
      <strong className="font-bold">mulheres 40+.</strong> Se você tem sentido o corpo e a mente
      mudando e ainda não encontrou um caminho que faça sentido, a Travessia é para você.
    </p>
  );
}

function TextoQuemSouEu() {
  return (
    <>
      <h2 className="font-serif text-[32px] font-semibold leading-[1.375] text-black md:text-[38px]">
        Quem sou eu
      </h2>
      <p className="mt-[26px] text-[16px] font-light leading-[1.8] text-black">
        <strong className="font-bold">Malu Haddock Lobo</strong> é aromaterapeuta clínica formada
        pelo ITHMA (Reino Unido), com formações pela Neal&rsquo;s Yard Remedies e especializações
        na França. São mais de 26 anos de prática clínica e 8.000 alunas formadas ao redor do
        mundo.
      </p>
    </>
  );
}
