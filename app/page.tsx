import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";
import DepoimentosSlider from "@/components/site/DepoimentosSlider";
import { CHECKOUT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Malu Haddock Lobo | Formação em terapias alternativas",
  description:
    "Torne-se uma Aromaterapeuta Profissional com o Método Haddock Lobo — método validado em mais de 25 anos de prática clínica.",
};

const CHECK = CHECKOUT.home;

/** Botão verde da Hotmart: #35C42C, raio 5px, Open Sans 700. */
function Cta({
  children,
  grande = false,
}: {
  children: React.ReactNode;
  grande?: boolean;
}) {
  return (
    <a
      href={CHECK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-[5px] bg-cta px-10 text-center font-sans font-bold text-white shadow-[0_1px_4px_0_rgba(0,0,0,0.6)] transition-colors hover:bg-[#2CAB24] ${
        grande ? "py-[18px] text-[21px]" : "py-3 text-[17px]"
      }`}
    >
      {children}
    </a>
  );
}

/** Linha divisória cor pêssego, usada entre as seções. */
function Linha() {
  return <div className="h-[7px] w-full bg-peach" aria-hidden />;
}

/** Título de seção no padrão da home: Caslon, 40px (28px nos títulos dos Pilares). */
function Titulo({
  children,
  className = "text-white",
  pilar = false,
}: {
  children: React.ReactNode;
  className?: string;
  pilar?: boolean;
}) {
  if (pilar) {
    return (
      <h2
        className={`font-caslon text-[24px] leading-[1.34] tracking-[-0.012em] md:text-[28px] ${className}`}
      >
        {children}
      </h2>
    );
  }
  return (
    // Libre Caslon Text é mais larga que a Adobe Caslon do original;
    // o tracking negativo compensa para o texto quebrar nas mesmas linhas.
    <h2
      className={`font-caslon text-[30px] leading-[1.34] tracking-[-0.012em] md:text-[40px] ${className}`}
    >
      {children}
    </h2>
  );
}

/** Item de "Abordagens": ícone + texto. */
function Abordagem({
  icone,
  alt = "",
  children,
}: {
  icone: string;
  alt?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <Image src={icone} alt={alt} width={110} height={110} className="h-[88px] w-auto shrink-0" />
      <p className="pt-2 text-[17px] leading-[1.75] text-white">{children}</p>
    </div>
  );
}

const QUEM_PROCURA = [
  { src: "/img/quem-procura-1.png", alt: "Estão em transição de carreira." },
  { src: "/img/quem-procura-2.png", alt: "Buscam soluções naturais para dores físicas, emocionais ou existenciais." },
  { src: "/img/quem-procura-3.png", alt: "Para quem é o curso" },
  { src: "/img/quem-procura-4.png", alt: "Para quem é o curso" },
];

const OFERTA = [
  { img: "/img/oferta-1.png", titulo: "Curso de formação em aromaterapia clínica integrativa.", preco: "R$ 2.610,00" },
  { img: "/img/oferta-2.png", titulo: "Curso de especialização em aromaterapia clínica integrativa.", preco: "R$ 3.190,00" },
  { img: "/img/oferta-3.png", titulo: "Assistente virtual - aromaterapeuta clínica integrativa.", preco: "R$ 290,00" },
  { img: "/img/oferta-4.png", titulo: "⁠Assistente virtual - creta - criadora de conteúdos", preco: "R$ 290,00" },
  { img: "/img/oferta-5.png", titulo: "⁠Aulas bônus", preco: "R$ 290,00" },
];

const VIDEOS = [
  { src: "/video/depoimento-1.mp4", poster: "/img/poster-depoimento-1.jpg" },
  { src: "/video/depoimento-2.mp4", poster: "/img/poster-depoimento-2.jpg" },
  { src: "/video/depoimento-3.mp4", poster: "/img/poster-depoimento-3.jpg" },
];

const DEPOIMENTOS = [
  {
    autor: "Tay Galheigo",
    texto: [
      "Sou aluna da Malu desde 2020, hoje formada em Aromaterapia Clínica Integral e prestes a terminar a Cromoterapia Vibracional, posso dizer que os cursos mudaram minha vida!",
      "Entrar em contato com os conhecimentos aprofundados sobre os óleos essenciais e os cristais não só me ajudou pessoalmente a curar sintomas e doenças do corpo e da mente, como abriu meu campo profissional.",
      "Hoje eu sou dona da Equilibrium Terapias Integradas e além dos atendimentos terapêuticos, desenvolvi uma linha de produtos naturais, veganos e ecológicos à base de óleos essenciais e cristais, que potencializam as fórmulas. Essa linha, alinhada ao meu propósito, me possibilita ajudar o maior número possível de pessoas a encontrarem o equilíbrio físico, mental, emocional e energético. Tudo isso graças não só aos conhecimentos recebidos nos cursos, mas principalmente a Malu pessoa e profissional, que com muito carinho e atenção está sempre disponível a nos ajudar. Além de mestra, ela nos passa a segurança e as técnicas necessárias para trabalhar de diversas formas possíveis com os ensinamentos que recebemos.",
      "Só tenho a agradecer a Deus pela oportunidade de tê-la em minha Vida!",
    ],
  },
  {
    autor: "Andréa Gavani",
    texto: [
      "Este foi um curso que superou as minhas expectativas, aprendi muito e o mais bacana é que já ajudei muitas pessoas com os ensinamentos da Professora Malu Haddock Lobo, uma profissional dedicada, altamente qualificada e sabe passar o conteúdo de forma muito didática.",
      "Por isso super recomendo esse curso!",
      "Me sinto honrada e privilegiada em beber desta fonte de conhecimento.",
      "Aproveito para te agradecer Malu, por todo seu carinho, cuidado e dedicação.",
      "Gratidão sempre 🙏🏼🥰❤️💚",
    ],
  },
  {
    autor: "Juliana Paiva Oliveira (@aromaterapeuta.infantil)",
    texto: [
      "Passando para agradecer por todo conhecimento passado no nosso curso de formação Malu, vc e sensacional… lembro até hoje eu cheia de dúvidas utilizando óleos essenciais errado e vc sempre paciente explicando me ajudando pelo WhatsApp tbm rsrs",
      "Sempre me apoiando quando eu disse queria me especializar na área da criança sempre ficou ao meu lado, tirando dúvidas e até puxando minha orelha para eu pensar e fazer tudo certinho!!!",
      "Aromaterapia hoje as pessoas acha q uma coisa simples e só cheirar ou passar na pele mais não é temos que ter conhecimento e prática para ter bons resultados!",
      "Eu espero que vc consiga passar todo esse seu conhecimento para várias pessoas!",
    ],
  },
  {
    autor: "Maria Clara Imparato Pinto",
    texto: [
      "Fazer o curso de óleos essenciais com a Malu foi a melhor decisão que tomei nos últimos tempos. Eu tinha interesse e curiosidade de saber mais a respeito, mas a quantidade de coisas que aprendi com o curso foi muito além do que imaginei no começo. Tanto que agora estou me aprofundando mais com o curso de especialização e ficando ainda mais apaixonada por esse mundo que até dois anos atrás não conhecia.",
      "A Malu conhece muito, está sempre disponível para tirar nossas dúvidas. Esses dois cursos com a Malu com certeza abriram um mundo de possibilidades. Estou imersa de tal forma no mundo dos óleo essenciais e hidrolatos que agora é um caminho sem volta. Hoje além de conhecer já consigo fazer recomendações importantes que tem sido chave para ajudar a minha família e amigos.",
      "Obrigada Malu!",
    ],
  },
  {
    autor: "Magda Beatriz Leite da Silva Cásseres",
    texto: [
      "Foi quando mergulhei no mundo dos OEs que eu descobri a Malu!!",
      "No começo eu me interessei por este mundo porque me convidaram para participar de um negócio que parecia ser uma grande promessa financeira. Foi quando uma sobrinha que conhece bem a Malu me falou que ela trabalhava com OEs e que faria uma live. Assisti a live e pensei, “eu tenho que fazer esse curso”!!!! Comecei então o Curso de Formação em Aromaterapia Clínica Integral com a Malu, me apaixonei mais ainda pelos OEs. Achei que o meu encanto fosse parar nos OEs, mas a Malu ainda tinha outra carta na manga – a Especialização em Aromaterapia Clínica - e desta vez ela vinha com algo que tem me fascinado dia a dia - Os Hidrolatos. Que coisa linda tudo isso!!! E que conhecimento que a Malu tem de cada coisa, cada pergunta feita é uma resposta dada e com muita segurança!! São aulas maravilhosas que nos fazem viajar para o mundo das alquimias. E que nos provocam a vontade de criar os produtos para o nosso próprio bem estar e da nossa família!!",
      "Os cursos com a Malu têm atendimento 24h. Temos aulas 1x/por mês, temos 1 mentoria, com hora marcada, 1x/mês e temos mentoria 24h por dia pelo WhatsApp, ela não deixa ninguém sem resposta. Isso nos dá muita segurança para fazer as indicações solicitadas pelas pessoas e devidamente corretas.",
    ],
  },
];

const FAQ = [
  {
    pergunta: "Para quem é o curso de Formação em Aromaterapia Clínica Integral?",
    resposta: (
      <div className="space-y-4">
        <p>
          Qualquer pessoa que esteja preparada para receber essa informação, que tenha interesse
          em terapias alternativas, em formas de cura e contato com a natureza e que queira se
          tornar um profissional qualificado, um Aromaterapeuta.
        </p>
        <p>Se você responder SIM para essas perguntas:</p>
        <p>Você adoraria ser um aromaterapeuta e fazer protocolos eficazes que fazem diferença?</p>
        <p>
          Você quer entender os óleos essenciais em um nível profundo, conhecer as moléculas
          químicas e aprender como elas atuam no nível físico, mental, emocional e energético
          beneficiando as pessoas e promovendo saúde e bem estar?
        </p>
        <p>
          O pensamento de estudar Aromaterapia é realmente emocionante e você mal pode esperar
          para começar?
        </p>
        <p>Então esse curso é para você! Estamos te esperando!</p>
      </div>
    ),
  },
  {
    pergunta: "Como funciona o curso?",
    resposta: (
      <p>
        Aulas gravadas e hospedadas na plataforma hotmart. O aluno terá acesso às gravações por 3
        anos a partir da data da compra.
      </p>
    ),
  },
  {
    pergunta: "Por quanto tempo eu tenho acesso as aulas?",
    resposta: <p>O acesso ao conteúdo do curso fica disponível na plataforma da Hotmart por 3 anos.</p>,
  },
  {
    pergunta: "Como tiro minhas dúvidas?",
    resposta: (
      <div className="space-y-4">
        <p>O aluno, no ato da compra, terá acesso à comunidade de alunos no whatsapp.</p>
        <p>
          A própria Malu Haddock Lobo responde todas as dúvidas. O grupo funciona de segunda a
          sexta em horário comercial. Além disso, o aluno terá acesso à assistente virtual que é
          treinada pela própria Malu. Nossa assistente virtual, a aromaterapeuta integrativa, vai
          tirar suas dúvidas e te auxiliar com o estudo e com os protocolos seguros 24 horas e 7
          dias por semana.
        </p>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-green-deep font-sans">
      {/* ---------- 1. Hero ----------
          O fundo #243733 é a cor exata do painel verde da imagem original, então a
          foto (que começa em 54% da largura da imagem) emenda sem costura.

          Desktop (lg+): texto à esquerda em coluna própria; a foto ocupa a metade
          direita com a diagonal recortada por clip-path. Assim o título nunca cai
          sobre o rosto, em nenhuma largura de tela.

          Celular: rosto da Malu no canto superior esquerdo, logo à direita, texto
          centralizado por baixo, tudo sobre o verde. */}
      <section className="relative overflow-hidden bg-[#243733]">

        {/* ===== Desktop ===== */}
        <div className="relative hidden h-[537px] lg:block">
          <div
            className="absolute inset-y-0 right-0 w-[58%]"
            style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src="/img/home-hero-bg.png"
              alt="Malu Haddock Lobo"
              fill
              priority
              sizes="60vw"
              className="object-cover object-[78%_center]"
            />
          </div>

          <div className="site-container relative h-full">
            {/* Logo: caixa 257x217 que sobrepõe o título, como no original */}
            <Image
              src="/img/logo-metodo.png"
              alt="Método Haddock Lobo"
              width={1080}
              height={2020}
              priority
              className="-ml-[82px] mt-[-17px] h-[217px] w-[257px] object-cover object-center"
            />

            {/* Largura limitada a 50% da tela para nunca alcançar a foto */}
            <div className="-mt-[26px] w-[min(586px,50vw)]">
              <h1 className="font-caslon text-[26px] leading-[1.35] text-gold-light">
                Torne-se uma Aromaterapeuta Profissional com o Método Haddock Lobo – a formação
                que te entrega o mapa para você construir uma carreira lucrativa e reconhecida.
              </h1>

              <p className="mt-5 text-[18px] leading-[1.3] text-white">
                Método validado, em mais de 25 anos de prática clínica, que ensina o passo a passo
                claro para você atuar com confiança, reconhecimento e independência financeira na
                Aromaterapia.
              </p>

              <div className="mt-7">
                <Cta>QUERO ME INSCREVER AGORA</Cta>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Celular e tablet ===== */}
        <div className="relative lg:hidden">
          {/* Faixa do topo: rosto à esquerda, logo à direita */}
          <div className="relative h-[190px]">
            <div className="absolute inset-y-0 left-0 w-[58%]">
              <Image
                src="/img/home-hero-bg.png"
                alt="Malu Haddock Lobo"
                fill
                priority
                sizes="60vw"
                className="object-cover object-[82%_18%]"
              />
              {/* funde a foto no verde pela direita e por baixo */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(rgba(36,55,51,0.32), rgba(36,55,51,0.32)), linear-gradient(to right, rgba(36,55,51,0) 40%, #243733 100%), linear-gradient(to bottom, rgba(36,55,51,0) 50%, #243733 100%)",
                }}
                aria-hidden
              />
            </div>

            <Image
              src="/img/logo-metodo.png"
              alt="Método Haddock Lobo"
              width={1080}
              height={2020}
              priority
              className="absolute right-4 top-3 h-[150px] w-[178px] object-cover object-center"
            />
          </div>

          <div className="px-6 pb-9 text-center">
            <h1 className="font-caslon text-[17px] leading-[1.45] text-gold-light">
              Torne-se uma Aromaterapeuta Profissional com o Método Haddock Lobo – a formação que
              te entrega o mapa para você construir uma carreira lucrativa e reconhecida.
            </h1>

            <p className="mt-5 text-[15px] leading-[1.5] text-white">
              Método validado, em mais de 25 anos de prática clínica, que ensina o passo a passo
              claro para você atuar com confiança, reconhecimento e independência financeira na
              Aromaterapia.
            </p>

            <div className="mt-6">
              <a
                href={CHECK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-[5px] bg-cta py-3 text-center font-sans text-[17px] font-bold text-white shadow-[0_1px_4px_0_rgba(0,0,0,0.6)] transition-colors hover:bg-[#2CAB24]"
              >
                QUERO ME INSCREVER AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      <Linha />

      {/* ---------- 2. Quem procura ---------- */}
      <section className="py-10">
        <div className="site-container">
          <Reveal>
            <Titulo className="text-center text-white">Quem procura:</Titulo>
          </Reveal>

          {/* No original os 4 cards são maiores que a coluna de 980px (532px cada,
              somando ~1132px). Mantido, com o bloco extravasando o container. */}
          <div className="relative left-1/2 mt-10 grid w-[min(1132px,calc(100vw-40px))] -translate-x-1/2 gap-x-[68px] gap-y-[62px] sm:grid-cols-2">
            {QUEM_PROCURA.map((q, i) => (
              <Reveal key={q.src} delay={i * 80}>
                <Image
                  src={q.src}
                  alt={q.alt}
                  width={625}
                  height={360}
                  className="h-auto w-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Linha />

      {/* ---------- 3. Você precisa sair desse ciclo ---------- */}
      <section className="py-10">
        <div className="site-container">
          <Reveal>
            <Titulo className="text-center text-white">Você precisa sair desse ciclo</Titulo>
          </Reveal>
          <Reveal delay={100}>
            <Image
              src="/img/ciclo-vantagens.png"
              alt="Sensação de insegurança para atender com o que ama; sensação de não pertencimento ao mundo acadêmico; autocrítica alta e medo do julgamento; falta de acolhimento nos cursos disponíveis; falta de confiança para aplicar a aromaterapia na prática"
              width={1331}
              height={781}
              className="mx-auto mt-10 h-auto w-full max-w-[1013px]"
            />
          </Reveal>
        </div>
      </section>

      <Linha />

      {/* ---------- 4. Pilar 1 ---------- */}
      <section className="relative overflow-hidden py-10">
        {/* Flor decorativa na borda esquerda, como no original. */}
        <Image src="/img/flor-1.png" alt="" width={1414} height={1043} aria-hidden
          className="pointer-events-none absolute left-0 top-[380px] hidden w-[213px] lg:block" />
        <div className="site-container">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_420px]">
            <Reveal>
              <Titulo pilar className="text-white">
                Pilar 1 - Cura do Corpo - Trata os sistemas fisiológicos com base científica e
                prática clínica.
              </Titulo>
              <p className="mt-6 max-w-[513px] text-[17px] leading-[1.8] text-white md:text-[18px]">
                A aromaterapia é um abraço da natureza ao corpo físico: amorosa, profunda e eficaz.
                Ela harmoniza-se com os tratamentos convencionais, trazendo alívio imediato,
                equilíbrio e vitalidade renovada.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <Image
                src="/img/pilar1-malu.jpg"
                alt="Malu Haddock Lobo"
                width={420}
                height={283}
                className="h-[283px] w-full rounded-[8px] object-cover"
              />
            </Reveal>
          </div>

          <Reveal>
            <Titulo className="mt-14 text-center text-white">Abordagens:</Titulo>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Abordagem icone="/img/ic-quimica.png">
              Química dos óleos essenciais e suas ações farmacológicas.
            </Abordagem>
            <Abordagem icone="/img/ic-protocolos.png">
              Protocolos clínicos com base em <strong>evidências cientítficas.</strong>
            </Abordagem>
            <Abordagem icone="/img/ic-selecao.png">
              Domine a seleção precisa de óleos essenciais para cada sistema corporal
              <strong>. A chave para resultados terapêuticos reais.</strong>
            </Abordagem>
            <Abordagem icone="/img/ic-vias.png">
              Vias de utilização: uso tópico (pele), inalação consciente, mucosa vaginal,
              <strong> mucosa sublingual e ingestão segura.</strong>
            </Abordagem>
          </div>

          <p className="mt-10 text-center font-avenir text-[19px] leading-[1.75] text-white md:text-[20px]">
            O corpo é o primeiro templo que acolhe o aroma. É onde a cura começa a se manifestar.
          </p>
        </div>
      </section>

      <Linha />

      {/* ---------- 5. Pilar 2 ---------- */}
      <section className="relative overflow-hidden py-10">
        {/* Flor decorativa na borda direita, como no original. */}
        <Image src="/img/flor-2.png" alt="" width={1414} height={1043} aria-hidden
          className="pointer-events-none absolute right-0 top-[430px] hidden w-[178px] lg:block" />
        <div className="site-container">
          <div className="grid items-start gap-8 md:grid-cols-[348px_1fr]">
            <Reveal>
              <Image
                src="/img/pilar2-malu.jpg"
                alt="Malu Haddock Lobo"
                width={348}
                height={316}
                className="h-[316px] w-full rounded-[8px] object-cover"
              />
            </Reveal>

            <Reveal delay={100}>
              <Titulo pilar className="text-white">
                Pilar 2 - Cura Emocional -
                <br />
                Da Inalação ao Coração
              </Titulo>
              <p className="mt-6 max-w-[433px] text-[17px] leading-[1.8] text-white md:text-[18px]">
                A psicoaromaterapia é um caminho profundo de libertação e equilíbrio. Com técnicas
                cientificamente embasadas e uma escuta sensível, você aprende a usar os óleos
                essenciais para conquistar uma verdadeira harmonia emocional.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <Titulo className="mt-14 text-center text-white">Abordagens:</Titulo>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Abordagem icone="/img/ic-coracao.png">
              Psicoaromaterapia - A união entre ciência e sensibilidade permite que os aromas
              regulem o sistema nervoso e restaurem o <strong>equilíbrio emocional.</strong>
            </Abordagem>
            <Abordagem icone="/img/ic-neuro.png">
              Neuroplasticidade aromática, mapeamento emocional, respiração consciente.
            </Abordagem>
          </div>

          <p className="mx-auto mt-10 max-w-[732px] text-center text-[17px] leading-[1.75] text-white md:text-[18px]">
            Os aromas falam direto ao coração: dissolvem resistências, despertam lembranças e abrem
            caminhos de cura que só a linguagem das emoções pode revelar.
          </p>
        </div>
      </section>

      <Linha />

      {/* ---------- 6. Pilar 3 ---------- */}
      <section className="relative overflow-hidden py-10">
        {/* Flor decorativa na borda esquerda, como no original. */}
        <Image src="/img/flor-1.png" alt="" width={1414} height={1043} aria-hidden
          className="pointer-events-none absolute left-0 top-[350px] hidden w-[129px] lg:block" />
        <div className="site-container">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_324px]">
            <Reveal>
              <Titulo pilar className="text-white">Pilar 3 - Cura da Alma – Alma Viva</Titulo>
              <div className="mt-6 max-w-[493px] space-y-5 text-[17px] leading-[1.75] text-white md:text-[18px]">
                <p>
                  Desperte sua essência mais profunda e transforme sua missão de vida com a{" "}
                  <strong>força das Almas Vegetais.</strong>
                </p>
                <p>
                  Neste caminho de <strong>espiritualidade integrativa</strong>, você se cura
                  enquanto cura, conecta-se ao seu propósito sagrado e descobre como{" "}
                  <strong>gerar impacto verdadeiro no mundo</strong>, unindo autoconhecimento e
                  propósito em ação.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Image
                src="/img/pilar3-malu.jpg"
                alt="Malu Haddock Lobo"
                width={324}
                height={267}
                className="h-[267px] w-full rounded-[8px] object-cover"
              />
            </Reveal>
          </div>

          <Reveal>
            <Titulo className="mt-14 text-center text-white">Abordagens:</Titulo>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Abordagem icone="/img/ic-sutil.png">Aromaterapia sutil e quântica</Abordagem>
            <Abordagem icone="/img/ic-dialogos.png">
              Diálogos com as almas vegetais (óleos essenciais)
            </Abordagem>
            <Abordagem icone="/img/ic-arquetipos.png">
              Óleos essenciais e arquétipos (deusas, símbolos, chakras)
            </Abordagem>
            <Abordagem icone="/img/ic-aroma-alma.png">
              O aroma é a alma da planta. Ele desperta nossa essência e devolve sentido à
              existência.
            </Abordagem>
          </div>

          <div className="mt-12 text-center">
            <Cta grande>QUERO ME INSCREVER AGORA</Cta>
          </div>
        </div>
      </section>

      <Linha />

      {/* ---------- 7. Para quem é o curso ---------- */}
      <section className="bg-white">
        <div className="grid md:grid-cols-[327px_1fr]">
          <div className="relative min-h-[260px] bg-offwhite">
            <Image
              src="/img/para-quem-lateral.png"
              alt="Malu Haddock Lobo"
              fill
              sizes="(min-width:768px) 327px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="px-6 py-14 md:px-12">
            <Reveal>
              <Titulo className="text-center text-ink">Para quem é o curso?</Titulo>
            </Reveal>

            <div className="mt-10 space-y-8">
              {[
                {
                  n: "/img/num-1.png",
                  texto: (
                    <strong>
                      É para quem quer se tornar uma aromaterapeuta profissional e também para quem
                      quer incluir a aromaterapia nos seus atendimentos. Você vai aprender a pensar
                      fora da caixinha, longe das receitas prontas, adquirindo confiança e
                      autoridade para usar e recomendar os óleos essenciais!
                    </strong>
                  ),
                },
                {
                  n: "/img/num-2.png",
                  texto: (
                    <>
                      Também é para{" "}
                      <strong>
                        você que está começando agora. Essa formação irá abrir seus horizontes
                        trazendo o respaldo científico que você precisa, de forma simples e
                        acessível!
                      </strong>
                    </>
                  ),
                },
                {
                  n: "/img/num-3.png",
                  texto: (
                    <>
                      Em outras palavras, eu vou te ensinar desde o básico até o avançado{" "}
                      <strong>sobre a prática profissional da aromaterapia!</strong>
                    </>
                  ),
                },
              ].map((item, i) => (
                <Reveal key={item.n} delay={i * 90}>
                  <div className="flex items-start gap-5">
                    <Image src={item.n} alt="" width={92} height={92} className="h-[64px] w-[64px] shrink-0" />
                    <p className="pt-2 text-[18px] leading-[1.8] text-black md:text-[20px]">
                      {item.texto}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 8. Diferencial do método ---------- */}
      <section className="py-10">
        <div className="site-container">
          <Reveal>
            <Titulo className="text-center text-white">Diferencial do Método Hadoock Lobo</Titulo>
          </Reveal>
          <Reveal delay={100}>
            <Image
              src="/img/diferencial-metodo.png"
              alt="Acolhimento profundo; oferece suporte real; tem um método validado, vivência clínica e autoridade; ensina com alma, técnica e experiência"
              width={1277}
              height={582}
              className="mx-auto mt-10 h-auto w-full"
            />
          </Reveal>
          <div className="mt-12 text-center">
            <Cta grande>QUERO ME INSCREVER AGORA</Cta>
          </div>
        </div>
      </section>

      <Linha />

      {/* ---------- 9. Método Haddock Lobo ---------- */}
      <section className="py-10">
        <div className="site-container text-center">
          <Reveal>
            <h2 className="font-caslon text-[26px] text-white md:text-[30px]">
              MÉTODO HADDOCK LOBO
            </h2>
            <Image
              src="/img/pilares.png"
              alt="Os três pilares do Método Haddock Lobo: Cura do Corpo, Cura da Emoção e Cura da Alma"
              width={272}
              height={270}
              className="mx-auto mt-8 h-[221px] w-auto rounded-full"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-8 max-w-[980px] space-y-5 text-left text-[17px] leading-[1.75] text-white md:text-[18px]">
              <p>
                O <strong>Método Haddock Lobo foi d</strong>esenvolvido por{" "}
                <strong>Malu Haddock Lobo,</strong> que{" "}
                <strong>há 25 anos integra ciência e tradição em uma visão única de</strong>{" "}
                <strong>cura integrativa.</strong>
              </p>
              <p>
                Aqui, a aromaterapia é mais que prática clínica: é{" "}
                <strong>instrumento de despertar, transformação e propósito.</strong>
              </p>
              <p>
                Os <strong>3 pilares do método</strong> sustentam não apenas uma formação, mas um{" "}
                <strong>movimento de cura integral</strong> que começa em você e se expande para o
                mundo.
              </p>
            </div>

            <div className="mt-10">
              <Cta>QUERO FAZER PARTE</Cta>
            </div>
          </Reveal>
        </div>
      </section>

      <Linha />

      {/* ---------- 10. Certificado ---------- */}
      <section className="py-10">
        {/* No original o título ocupa uma linha só (951px de largura); a coluna
            precisa ser larga o bastante para não quebrar. */}
        <div className="site-container grid items-center gap-10 md:grid-cols-[1fr_435px]">
          <Reveal>
            <Titulo className="text-white">O curso tem certificado?</Titulo>
            <p className="mt-6 max-w-[517px] font-avenir text-[19px] leading-[1.8] text-white md:text-[20px]">
              Sim, nosso certificado é de 350 horas e reconhecido pela Abrath o que permite o aluno
              ter o registro de aromaterapeuta profissional.
            </p>
            <div className="mt-9">
              <Cta grande>QUERO ME INSCREVER AGORA</Cta>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Image
              src="/img/certificado.png"
              alt="Certificado de Aromaterapia Clínica Integral com selo da ABRATH"
              width={2000}
              height={1414}
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- 11. Faixa: mais que uma formação ---------- */}
      <section className="relative overflow-hidden bg-[#757575] py-10">
        <Image
          src="/img/faixa-metodo.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="site-container relative text-center">
          <Reveal>
            <p className="mx-auto max-w-[801px] text-[20px] leading-[1.75] text-white md:text-[22px]">
              O Método Haddock Lobo é mais que uma formação. É um caminho de cura,
              <br />
              reconexão e prosperidade.
            </p>
            <p className="mt-6 text-[20px] text-white md:text-[22px]">
              Clique no link abaixo para começar sua jornada.
            </p>
            <div className="mt-8">
              <Cta grande>QUERO ME INSCREVER AGORA</Cta>
            </div>
          </Reveal>
        </div>
      </section>

      <Linha />

      {/* ---------- 12. Bônus para as 5 primeiras ---------- */}
      <section className="py-10">
        <div className="site-container">
          <Reveal>
            <Titulo className="text-center text-white">Bônus para as 5 primeiras</Titulo>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Image
                src="/img/icons/cosmeticos-naturais.svg"
                alt=""
                width={72}
                height={73}
                className="h-[56px] w-auto"
              />
              <p className="text-[18px] font-bold text-white md:text-[20px]">
                Curso de Cosméticos Naturais com Óleos Essenciais
              </p>
            </div>

            <Titulo className="mt-8 text-center text-white">Bônus de 24h</Titulo>
          </Reveal>

          {/* Faixas de bônus: imagem à esquerda, texto à direita (como no original) */}
          <div className="mt-10 space-y-6">
            {[
              {
                img: "/img/bonus-1.png",
                alt: "Aulas bônus gravadas",
                texto: (
                  <div className="space-y-4">
                    <p>
                      Aula Bônus 1 (gravada): como desbloquear sua crença de escassez e prosperar
                      com aromaterapia.
                    </p>
                    <p>Aula Bônus 2 (gravada): como criar conteúdos com a IA.</p>
                    <p>
                      Aula Bônus 3 (gravada): como fazer seu primeiro atendimento pago com o sistema
                      da psicoaromaterapia 13 aromas.
                    </p>
                  </div>
                ),
              },
              {
                img: "/img/bonus-2.png",
                alt: "Assistente virtual Creta",
                texto: (
                  <p>
                    Creta - Assistente virtual para criar conteúdos no instagram que engajam e
                    trazem resultado - máquina de conteúdos - nicho aromaterapia clínica integral.
                  </p>
                ),
              },
              {
                img: "/img/bonus-3.png",
                alt: "Assistente virtual MarIA",
                texto: (
                  <p>
                    MarIA - Assistente virtual, especialista em aromaterapia clínica integrativa,
                    para você tirar suas dúvidas 24 horas e 7 dias por semana.
                  </p>
                ),
              },
            ].map((b, i) => (
              <Reveal key={b.img} delay={i * 90}>
                <div className="relative overflow-hidden bg-[#EFEFE3]">
                  <Image src={b.img} alt={b.alt} width={699} height={244} className="h-auto w-full" />
                  <div className="px-6 pb-8 font-caslon text-[20px] leading-[1.3] text-black md:absolute md:inset-y-0 md:left-[42%] md:right-[4%] md:flex md:flex-col md:justify-center md:px-0 md:pb-0 md:text-[25px]">
                    {b.texto}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center font-caslon text-[24px] leading-[1.35] text-white md:text-[29px]">
              Esses bônus foram pensados para te empoderar e te inspirar desde o primeiro dia.
            </p>
            <div className="mt-8 text-center">
              <Cta grande>QUERO ME INSCREVER AGORA</Cta>
            </div>
          </Reveal>
        </div>
      </section>

      <Linha />

      {/* ---------- 13. Bônus extras ---------- */}
      <section className="py-10">
        <div className="site-container text-center">
          <Reveal>
            <h2 className="font-caslon text-[34px] text-white md:text-[45px]">Bônus extras</h2>

            <Image
              src="/img/bonus-grupo.png"
              alt="Grupo de WhatsApp"
              width={1080}
              height={1920}
              className="mx-auto mt-8 h-[213px] w-auto"
            />
            <p className="mx-auto mt-6 max-w-[975px] font-caslon text-[22px] leading-[1.3] text-white md:text-[28px]">
              <strong>
                Suporte no grupo do whatsapp durante a duração do curso: você terá acesso ao suporte
                direto com a Malu Haddock Lobo em um grupo de whatsapp de segunda a sexta em horário
                comercial.
              </strong>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <Image
              src="/img/bonus-3anos.png"
              alt="3 anos de acesso"
              width={1080}
              height={1080}
              className="mx-auto mt-10 h-[203px] w-auto"
            />
            <p className="mx-auto mt-6 max-w-[985px] font-caslon text-[22px] leading-[1.3] text-white md:text-[28px]">
              <strong>
                3 anos de acesso! Para que você tenha tempo de assistir e rever o material por
                quanto tempo precisar.
              </strong>
            </p>

            <div className="mt-10">
              <Cta grande>QUERO ME INSCREVER AGORA</Cta>
            </div>
          </Reveal>
        </div>
      </section>

      <Linha />

      {/* ---------- 14. A oferta ---------- */}
      <section className="py-10">
        <div className="site-container">
          <Reveal>
            <Titulo className="mx-auto max-w-[548px] text-center text-white">
              Entrando agora, você vai ganhar tudo isso:
            </Titulo>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {OFERTA.map((o, i) => (
              <Reveal key={o.img} delay={i * 80}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={o.img}
                    alt=""
                    width={163}
                    height={172}
                    className="h-[154px] w-auto rounded-full border-2 border-peach object-cover"
                  />
                  <p className="mt-5 max-w-[240px] text-[16px] leading-[1.8] text-white">
                    {o.titulo}
                  </p>
                  <p className="mt-3 text-[24px] text-white md:text-[26px]">{o.preco}</p>
                  <div className="mt-2 h-[7px] w-[184px] bg-white" aria-hidden />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Caixa do preço final — pêssego #FEBC91, cantos 8px */}
          <Reveal delay={100}>
            <div className="mx-auto mt-14 max-w-[980px] rounded-[8px] bg-peach px-6 py-10 text-center">
              <p className="font-avenir text-[22px] leading-[1.45] text-black md:text-[25px]">
                Valor total
                <br />
                R$ 6.670,00
              </p>

              <div className="mx-auto mt-4 h-[7px] w-[202px] bg-ink" aria-hidden />

              <p className="mt-5 font-avenir text-[18px] leading-[1.6] text-black md:text-[20px]">
                Mas hoje
                <br />
                por 12x R$ 157,20
              </p>

              <p className="mt-4 text-[22px] font-bold text-black md:text-[25px]">
                ou R$ 1.520,00 (à vista)
              </p>

              <div className="mt-8">
                <Cta grande>QUERO ME INSCREVER AGORA</Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Linha />

      {/* ---------- 15. O que falam do curso (vídeos) ---------- */}
      <section className="py-10">
        <div className="site-container">
          <Reveal>
            <Titulo className="text-center text-white">O que falam do curso</Titulo>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VIDEOS.map((v, i) => (
              <Reveal key={v.src} delay={i * 100}>
                <div className="bg-white p-2">
                  <video
                    src={v.src}
                    poster={v.poster}
                    controls
                    preload="none"
                    playsInline
                    className="aspect-square w-full bg-black object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 16. Depoimentos ---------- */}
      <section className="py-10">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-[272px_1fr]">
            <div>
              <p className="font-caslon text-[26px] text-white">DEPOIMENTOS</p>
              <p className="mt-4 text-[17px] leading-[1.6] text-white">
                Arrasta para o lado,{" "}
                <strong>leia os depoimentos de nossos alunos e tire suas próprias conclusões</strong>
              </p>
            </div>
            <DepoimentosSlider itens={DEPOIMENTOS} />
          </div>
        </div>
      </section>

      {/* ---------- 17. FAQ ---------- */}
      <section className="relative overflow-hidden bg-[#3F4726] py-10">
        <Image src="/img/faq-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="site-container relative">
          <Reveal>
            <h2 className="text-center font-caslon text-[36px] text-white md:text-[50px]">
              Perguntas Frequentes
            </h2>
          </Reveal>

          <div className="mt-10">
            <Accordion items={FAQ} />
          </div>

          <div className="mt-12 text-center">
            <Cta grande>QUERO ME INSCREVER</Cta>
          </div>
        </div>
      </section>

      {/* ---------- 18. Conheça Malu ---------- */}
      <section className="bg-[#FFF5F0] py-10">
        <div className="site-container grid items-center gap-10 md:grid-cols-[371px_1fr]">
          <Reveal>
            <Image
              src="/img/conheca-malu.png"
              alt="Malu Haddock Lobo"
              width={426}
              height={637}
              className="mx-auto h-auto w-full max-w-[371px]"
            />
          </Reveal>

          <Reveal delay={100}>
            <Titulo className="text-ink">Conheça Malu Haddock Lobo</Titulo>

            <div className="mt-6 space-y-5 font-avenir text-[17px] leading-[1.75] text-black md:text-[18px]">
              <p>
                Nos anos 90, na Califórnia, a aromaterapia transformou minha vida. Em 1997, deixei o
                mercado financeiro para me dedicar integralmente às práticas integrativas e fui para
                minha jornada de excelência: formação em Aromaterapia com Gabriel Mojay (Londres),
                clínica com hidrolatos com Nelly Grosjean (Provence), aromaterapia Quântica com Dr.
                Daniel Penoel, formação em práticas ancestrais - Ayurveda e Espagíria.
              </p>
              <p>
                Experiência clínica: Dois anos na equipe multidisciplinar da Clínica São Vicente-RJ,
                aplicando Aromaterapia Clínica Integral na clínica médica e psiquiátrica.
              </p>
              <p>
                Mais de duas décadas ensinando, atendendo e validando meu método autoral em
                formações, atendimentos e pós-graduações.
              </p>
              <p>
                Pronta para usar óleos essenciais com confiança, responsabilidade e profundidade com
                quem já trilhou esse caminho?
              </p>
            </div>

            <div className="mt-10">
              <Cta grande>ESTOU PRONTA!</Cta>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
