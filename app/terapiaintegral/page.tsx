import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";
import FormularioContato from "@/components/site/FormularioContato";
import { CHECKOUT, SOCIAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terapia Integral | Malu Haddock Lobo",
  description:
    "Formação em Terapia Integral: cristais em sinergia com óleos essenciais e a frequência das cores. Certificado de 150h com selo da ABRATH.",
};

const CHECK = CHECKOUT.terapiaIntegral;

/** Botão roxo desta página (bg #794577, cantos arredondados). */
function Cta({
  children,
  href = CHECK,
  raio = "rounded-[30px]",
}: {
  children: React.ReactNode;
  href?: string;
  raio?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-ti-roxo px-8 py-2.5 text-center font-sans text-[16px] font-semibold text-white transition-colors hover:bg-[#8d5289] ${raio}`}
    >
      {children}
    </a>
  );
}

const PROGRAMA = [
  ["Planetas, cores e cristais segundo a ", "Astrologia Védica"],
  ["Métodos de limpeza, energização dos cristais", ""],
  ["Harmonização e limpeza energética do ambiente", ""],
  ["Geometria sagrada e as ", "frequências cromáticas"],
  ["Anatomia sutil", ""],
  ["Estudo dos chakras, corpos sutis, cores, cristais e óleos essenciais correspondentes", ""],
  ["Elixir de cristais", ""],
  ["Cristais mestres", ""],
  ["Oráculo de cristais", ""],
  ["Radiestesia - ", "uso do pêndulo"],
  ["Uso do bastão cromático / lemuriano", ""],
  ["Alinhamento energético com cristais, óleos essenciais e bastão cromático", ""],
  ["Meditação e manifestação utilizando cristais, óleos essenciais e frequências cromáticas", ""],
  ["", "Aura-soma"],
  ["Anamnese frequêncial", ""],
] as const;

const BENEFICIOS = [
  {
    icone: "/img/icons/aulas.svg",
    titulo: "AULAS NA HOTMART",
    texto: "São 150 horas de aula, que ficam disponíveis durante 3 anos na plataforma do Hotmart.",
  },
  {
    icone: "/img/icons/mentoria.svg",
    titulo: "MENTORIA",
    texto: "Mentoria diária para tirar dúvidas (de seg à sex) pelo WhatsApp.",
  },
  {
    icone: "/img/icons/grupo.svg",
    titulo: "GRUPO EXCLUSIVO",
    texto: "Acesso ao grupo de WhatsApp exclusivo para trocar experiências e tirar dúvidas.",
  },
  {
    icone: "/img/icons/garantia.svg",
    titulo: "GARANTIA",
    texto:
      "7 dias de garantia de devolução. Certificado de 150h com selo da ABRATH, na conclusão.",
  },
];

const DEPOIMENTOS = [
  {
    autor: "Andréa Gavani",
    paragrafos: [
      <>
        Este foi um curso que superou as minhas expectativas, aprendi muito e o mais bacana é
        que já ajudei muitas pessoas com{" "}
        <strong>
          os ensinamentos da Professora Malu Haddock Lobo, uma profissional dedicada,
          altamente qualificada e sabe passar o conteúdo de forma muito didática.
        </strong>
      </>,
      <>Por isso super recomendo esse curso!</>,
      <>Me sinto honrada e privilegiada em beber desta fonte de conhecimento.</>,
      <>Aproveito para te agradecer Malu, por todo seu carinho, cuidado e dedicação.</>,
      <>Gratidão sempre 🙏🏼🥰❤️💚</>,
    ],
  },
  {
    autor: "Tay Galheigo",
    paragrafos: [
      <>
        Sou aluna da Malu desde 2020, hoje formada em Aromaterapia Clínica Integral e prestes
        a terminar a Terapia Integral, posso dizer que os cursos mudaram minha vida!
      </>,
      <>
        <strong>
          Entrar em contato com os conhecimentos aprofundados sobre os óleos essenciais e os
          cristais não só me ajudou pessoalmente a curar sintomas e doenças do corpo e da
          mente, como abriu meu campo profissional.
        </strong>
      </>,
      <>
        Hoje eu sou dona da Equilibrium Terapias Integradas e além dos atendimentos
        terapêuticos, desenvolvi uma linha de produtos naturais, veganos e ecológicos à base
        de óleos essenciais e cristais, que potencializam as fórmulas. Essa linha, alinhada ao
        meu propósito, me possibilita ajudar o maior número possível de pessoas a encontrarem
        o equilíbrio físico, mental, emocional e energético.{" "}
        <strong>
          Tudo isso graças não só aos conhecimentos recebidos nos cursos, mas principalmente a
          Malu pessoa e profissional, que com muito carinho e atenção está sempre disponível a
          nos ajudar. Além de mestra, ela nos passa a segurança e as técnicas necessárias para
          trabalhar de diversas formas possíveis com os ensinamentos que recebemos.
        </strong>
      </>,
      <>Só tenho a agradecer a Deus pela oportunidade de tê-la em minha Vida!</>,
    ],
  },
  {
    autor: "Marcela",
    paragrafos: [
      <>Olá sou Marcela,</>,
      <>
        Sou apaixonada pelas cores. O mundo é colorido, nosso pensamento é colorido... E por
        que não estudá-las.
      </>,
      <>
        Conheci a Malu Haddock Lobo uma pessoal maravilhosa e grande mestra que me apresentou
        a Cromoterapia Vibracional.{" "}
        <strong>
          Um universo novo foi me apresentado com muitas possibilidades de cura, não só através
          da vibração das cores, como também dos cristais e óleos essenciais.
        </strong>
      </>,
      <>
        Sem falar como a Malu é atenciosa, sempre disposta a tirar nossas dúvidas com
        sabedoria, me passou muita confiança!!!
      </>,
    ],
  },
];

const FAQ = [
  {
    pergunta: "Para quem é o curso de Formação em Terapia Integral?",
    resposta: (
      <p>
        Qualquer pessoa que esteja preparada para receber essa informação, que tenha interesse
        em terapias integrativas, em formas de cura e contato com a natureza e que queira se
        tornar um profissional qualificado, um Terapeuta Integral.
      </p>
    ),
  },
  {
    pergunta: "Por quanto tempo eu tenho acesso as aulas?",
    resposta: <p>O acesso ao conteúdo do curso fica disponível na plataforma da Hotmart por 3 anos.</p>,
  },
];

export default function TerapiaIntegral() {
  return (
    <div className="font-sans">
      {/* ---------- 1. Hero (título gravado na imagem, como no original) ---------- */}
      <section className="relative bg-black">
        <Image
          src="/img/terapia-hero.png"
          alt="Formação em Terapia Integral — um curso completo para transformar a sua vida com o conhecimento e estudo dos cristais em sinergia com os óleos essenciais e com a frequência das cores"
          width={1366}
          height={768}
          priority
          className="h-auto w-full"
        />
        <div className="site-container -mt-12 flex justify-center pb-10 md:-mt-24 md:justify-end md:pr-16">
          <Cta raio="rounded-[40px]">QUERO ME INSCREVER AGORA</Cta>
        </div>
      </section>

      {/* ---------- 2. Quem é Malu ---------- */}
      <section className="bg-ti-sage py-14 md:py-16">
        <div className="site-container relative">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_auto]">
            <Reveal>
              <div className="bg-white p-8 md:p-10">
                <h2 className="font-sans text-[28px] font-bold text-ti-roxo md:text-[32px]">
                  Malu Haddock Lobo
                </h2>

                <div className="mt-6 space-y-5 text-[16px] leading-[1.7] text-black">
                  <p>
                    Minha história como terapeuta começa lá nos anos 90, quando eu{" "}
                    <strong>
                      me apaixonei pela aromaterapia e pela medicina tradicional chinesa e
                      decidi migrar de carreira.
                    </strong>
                  </p>
                  <p>
                    Fiz formação em Aromaterapia no Institute of Traditional Herbal Medicine and
                    Aromatherapy (ITHMA) – UK, Cursos de especialização na França, Formação em
                    Ayurveda na Escola Yoga Brahma Vidyalaya, Formação em terapia cristalina com
                    a Katrina Raphael na Crystal Academy em Taos no Novo México e Terapeuta
                    Aura-Soma certificada na Inglaterra pela Art and Science International
                    Academy of Colour Tecnology (ASIACT).
                  </p>
                  <p>
                    Com <strong>mais de 20 anos de prática clínica</strong> trabalho uma visão
                    integral, unindo a Aromaterapia, a Cromoterapia, Aura-Soma, Cristais e
                    Ayurveda. Além disso, sou pesquisadora do cultivo biodinâmico de plantas
                    medicinais e destilação de óleos essenciais e hidrolatos, em ressonância com
                    os ciclos lunares e planetários.
                  </p>
                  <p>Quer saber mais sobre mim?</p>
                </div>

                <div className="mt-7">
                  <Cta href={SOCIAL.instagram}>Me siga no Instagram</Cta>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="md:pt-6">
              <Image
                src="/img/terapia-malu.jpg"
                alt="Malu Haddock Lobo"
                width={376}
                height={431}
                className="mx-auto h-[431px] w-full max-w-[376px] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 3. Citação ---------- */}
      <section className="bg-white py-14">
        <div className="site-container text-center">
          <Reveal>
            <p className="mx-auto max-w-[780px] font-sans text-[28px] leading-[1.3] text-ti-roxo md:text-[40px]">
              &ldquo;Estar a serviço dos outros é o maior presente que você pode dar a si
              mesmo&rdquo;
            </p>
            <p className="mt-5 text-[18px] text-ti-roxo">Anônimo</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4. Sobre o curso ---------- */}
      <section className="bg-ti-sage py-14 md:py-16">
        <div className="site-container">
          <Reveal>
            <h2 className="text-center font-sans text-[32px] font-bold text-white md:text-[40px]">
              Sobre o curso
            </h2>
            <p className="mx-auto mt-6 max-w-[839px] text-center text-[17px] leading-[1.7] text-white">
              Quando em sinergia, as energias vivas e dinâmicas da Natureza promovem o
              equilíbrio integral e colocam o indivíduo em contato com a sua essência e em
              sincronismo com o seu propósito Divino (Dharma).
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { src: "/img/terapia-aura-soma.jpg", alt: "Frascos Aura-Soma coloridos" },
                { src: "/img/terapia-ametista.jpg", alt: "Ametista nas mãos" },
                { src: "/img/terapia-oleo-maos.jpg", alt: "Aplicação de óleo essencial" },
              ].map((im) => (
                <Image
                  key={im.src}
                  src={im.src}
                  alt={im.alt}
                  width={300}
                  height={319}
                  className="h-[319px] w-full object-cover"
                />
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full bg-white p-8">
                <h3 className="text-[18px] font-bold text-ti-verde">PROGRAMA</h3>
                <ul className="mt-5 space-y-2 text-[16px] leading-[1.6] text-black">
                  {PROGRAMA.map(([texto, forte], i) => (
                    <li key={i}>
                      - {texto}
                      {forte && <strong>{forte}</strong>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col bg-white p-8">
                <h3 className="text-[18px] font-bold text-ti-verde">CRONOGRAMA</h3>
                <div className="mt-5 space-y-4 text-[16px] leading-[1.6] text-black">
                  <p>
                    - O curso é composto de 18 aulas gravadas e de um grupo de WhatsApp para
                    tirar dúvidas e compartilhar experiência.
                  </p>
                  <p>
                    Inclui:{" "}
                    <strong>
                      certificado de 150h com selo da ABRATH que capacita o aluno a trabalhar
                      com práticas de{" "}
                    </strong>
                    <strong>
                      terapias integrativas como cristaloterapia, aromaterapia frequencial e
                      cromoterapia vibracional,
                    </strong>{" "}
                    além disso, você tem mentoria de segunda a sexta no círculo de partilha no
                    WhatsApp.
                  </p>
                  <p>
                    <strong>
                      O aluno conta com meu suporte pessoal para se tornar um terapeuta
                      integrativo profissional, uma das profissões que têm tido uma grande
                      demanda nos tempos atuais.
                    </strong>
                  </p>
                  <p className="pt-2">
                    <strong>Tudo isso por apenas:</strong>
                  </p>
                  <p className="text-[20px]">
                    <strong>12 x R$ 150,69</strong>
                  </p>
                  <p>
                    <strong>ou R$ 1.457,00 à vista</strong>
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <Cta>QUERO ME INSCREVER AGORA</Cta>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 5. O que está incluso ---------- */}
      <section className="relative overflow-hidden bg-footer py-14">
        <Image
          src="/img/terapia-cristais-flor.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.36]"
        />
        <div className="site-container relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 90}>
              <article className="flex h-full flex-col items-center bg-ti-blush px-4 py-7 text-center">
                <Image src={b.icone} alt="" width={61} height={43} className="h-[43px] w-auto" />
                <h3 className="mt-4 text-[15px] font-semibold tracking-wide text-ti-verde">
                  {b.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ti-verde">{b.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- 6. O que é Terapia Integral ---------- */}
      <section className="bg-[#FAFAFA] py-14 md:py-16">
        <div className="site-container grid items-start gap-10 md:grid-cols-[448px_1fr]">
          <Reveal>
            <Image
              src="/img/terapia-atendimento.jpg"
              alt="Atendimento de Terapia Integral"
              width={448}
              height={431}
              className="h-[431px] w-full object-cover"
            />
            <div className="mt-10">
              <Cta>QUERO ME INSCREVER AGORA</Cta>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-sans text-[32px] font-bold text-ti-roxo md:text-[40px]">
              Terapia Integral
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.7] text-black">
              <p>
                A <strong>Terapia Integral é a soma do uso dos cristais, em sinergia com os
                óleos essenciais e com a Cromoterapia Vibracional.</strong>
              </p>
              <p>
                A <strong>Cromoterapia</strong> é uma ferramenta utilizada desde a antiguidade
                para <strong>nutrir o indivíduo, dando ordem, coerência e reequilíbrio
                psicoenergético.</strong>
              </p>
              <p>
                Esta terapia <strong>renova bloqueios, proporciona bem-estar, ativando seus
                talentos, tornando sua vida harmoniosa e saudável.</strong>
              </p>
              <p>
                E o que é a Cromoterapia Vibracional? É uma{" "}
                <strong>
                  combinação perfeita de conhecimento antigo e curativo dos cristais com a
                  tecnologia moderna mais avançada, para nutrir suavemente e profundamente o
                  corpo de luz, através dos centros de energia e afetar os aspectos mais sutis
                  de nosso funcionamento fisiológico.
                </strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 7. Depoimentos ---------- */}
      <section className="bg-ti-sage py-14 md:py-16">
        <div className="site-container">
          <Reveal>
            <h2 className="text-center font-sans text-[32px] font-bold text-white md:text-[40px]">
              Veja o que falam sobre o curso
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <Reveal key={d.autor} delay={i * 100}>
                <blockquote className="flex h-full flex-col">
                  <div className="space-y-4 text-[15px] leading-[1.6] text-white">
                    {d.paragrafos.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  <footer className="mt-auto pt-6 text-[16px] font-semibold text-white">
                    {d.autor}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 8. FAQ ---------- */}
      <section className="relative overflow-hidden bg-[#757575] py-14">
        <Image
          src="/img/terapia-quartzo-rosa.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.85]"
        />
        <div className="site-container relative">
          <Reveal>
            <h2 className="text-center font-sans text-[32px] font-bold text-white md:text-[40px]">
              Perguntas Frequentes
            </h2>
          </Reveal>
          <div className="mt-8">
            <Accordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* ---------- 9. Dúvidas / formulário ---------- */}
      <section className="bg-white">
        <div className="site-container grid items-center gap-10 py-14 md:grid-cols-2 md:py-0">
          <Reveal className="md:py-16">
            <h2 className="font-sans text-[32px] font-bold text-ti-roxo md:text-[40px]">
              Dúvidas?
            </h2>
            <p className="mt-3 text-[16px] text-black">
              Envie uma mensagem abaixo ou por <strong>WhatsApp</strong>
            </p>
            <div className="mt-6">
              <FormularioContato />
            </div>
          </Reveal>

          <Reveal delay={100} className="md:h-full">
            <Image
              src="/img/terapia-pontas-cristal.jpg"
              alt="Pontas de cristal"
              width={490}
              height={547}
              className="h-[547px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
