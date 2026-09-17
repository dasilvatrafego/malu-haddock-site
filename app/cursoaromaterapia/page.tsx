import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";
import DepoimentosSlider from "@/components/site/DepoimentosSlider";
import { CHECKOUT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aromaterapia | Malu Haddock Lobo",
  description:
    "Curso de Formação em Aromaterapia Clínica Integral — certificado de 150h com selo da ABRATH, aulas ao vivo pelo Zoom e monitoria diária.",
};

const CHECK = CHECKOUT.cursoAromaterapia;

/** Botão roxo desta página (bg #794577, cantos retos). */
function Cta({ children, href = CHECK }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-block bg-ti-roxo px-7 py-3 text-center font-sans text-[15px] font-semibold text-white transition-colors hover:bg-[#24423B]"
    >
      {children}
    </a>
  );
}

const PROGRAMA_1 = {
  intro:
    "Este curso é ao vivo, online, pelo Zoom, mas fica salvo e disponível na plataforma do Hotmart por 2 anos.",
  blocos: [
    {
      titulo: "Alquimia e aromaterapia",
      itens: [
        "A arte da destilação dos óleos essenciais e hidrolatos",
        "Portas de entrada dos óleos essenciais (uso tópico, olfativo, mucosas e ingestão)",
        "Formas de uso dos óleos essenciais",
        "Química descomplicada dos óleos essenciais",
        "Estudo de cromatografias e como fazer substituiçōes de óleos essenciais à partir das moléculas químicas",
        "Moléculas químicas e suas funções terapêuticas",
        "Interação medicamentosa dos óleos essenciais com medicaçōes alopáticas e homeopáticas",
        "Estudo de artigos científicos que embasam a função terapêutica dos óleos essenciais",
        "Função terapêutica dos hidrolatos",
        "Dosagens e proporções corretas e seguras",
        "Como montar protocolos seguros para bebês, crianças, adultos, idosos e pacientes com necessidades especiais",
        "Indicaçōes e contra-indicaçōes",
        "Ayurveda e aromaterapia",
      ],
    },
    {
      titulo: "Psicoaromaterapia",
      itens: [
        "Abertura da consciência com óleos essenciais",
        "Grupos aromáticos e suas características emocionais",
        "Anamnese através dos sentidos",
        "O sistema dos 13 aromas de Dietrich Gumbel",
        "Sinergias terapêuticas",
        "Meditações para controle das emoções com óleos essenciais",
      ],
    },
  ],
};

const PROGRAMA_2 = [
  {
    titulo: "Aromaterapia quântica",
    itens: [
      "Estudo das assinaturas energéticas dos óleos essenciais",
      "Aromaterapia sutil, uma abordagem integrativa",
      "Como as moléculas químicas organizam nossa frequência vibracional",
      "O uso dos hidrolatos na aromaterapia sutil",
    ],
  },
  { titulo: "Cosméticos naturais utilizando óleos essenciais", itens: [] },
  {
    titulo:
      "Anamnese da Aromaterapia Integrativa e estudo de casos clínicos - aprendendo a tratar a raiz do desequilíbrio",
    itens: [],
  },
];

const BENEFICIOS = [
  {
    icone: "/img/icons/aulas-online.svg",
    titulo: "AULAS ONLINE AO VIVO",
    texto:
      "150 horas de aulas ao vivo e mentorias, pelo Zoom, que ficam disponíveis durante 2 anos na plataforma do Hotmart.",
  },
  {
    icone: "/img/icons/monitoria.svg",
    titulo: "MONITORIA",
    texto:
      "2 horas de monitoria mensal, em grupo (online) e mais monitoria diária (seg à sex) pelo WhatsApp.",
  },
  {
    icone: "/img/icons/grupo-balao.svg",
    titulo: "GRUPO EXCLUSIVO",
    texto:
      "Acesso ao grupo de WhatsApp exclusivo, onde você poderá participar, trocar experiências e tirar dúvidas.",
  },
  {
    icone: "/img/icons/escudo.svg",
    titulo: "GARANTIA",
    texto: "7 dias de garantia de devolução. Certificado de 150h com selo da ABRATH, na conclusão.",
  },
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

/** Lista de tópicos do programa, com subitens indentados. */
function Bloco({ titulo, itens }: { titulo: string; itens: readonly string[] }) {
  return (
    <div>
      <p className="mt-4 text-[16px] font-semibold text-black">{titulo}</p>
      {itens.length > 0 && (
        <ul className="mt-1 space-y-1 pl-5 text-[15px] leading-[1.55] text-black">
          {itens.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CursoAromaterapia() {
  return (
    <div className="font-sans">
      {/* ---------- 1. Hero ---------- */}
      <section className="relative overflow-hidden bg-[#281728] py-16 md:min-h-[759px] md:flex md:items-center md:py-20">
        <Image
          src="/img/curso-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="site-container relative w-full text-center">
          <h1 className="text-[38px] font-bold leading-tight text-white [text-shadow:rgba(0,0,0,0.4)_0_4px_5px] md:text-[64px] lg:text-[80px]">
            Curso de Formação em Aromaterapia Clínica Integral
          </h1>

          <p className="mt-10 text-[20px] font-bold text-white">INSCRIÇÕES ABERTAS!</p>

          <p className="mt-4 text-[22px] font-bold text-ti-blush">
            A próxima turma online começa dia 25 de Março
          </p>
          <p className="mt-1 text-[22px] font-bold text-white">Vagas limitadas</p>
        </div>
      </section>

      {/* ---------- 2. Para quem é ---------- */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#FFF5F0] px-6 py-14 md:px-14">
          <Reveal>
            <div className="mx-auto max-w-[440px] space-y-5 text-center text-[17px] leading-[1.8] text-[#8B6255]">
              <p>
                Seja qual for o seu nível de experiência em Aromaterapia, este é o curso perfeito
                para você. Talvez você queira realizar uma paixão pessoal, tornar-se um
                Aromaterapeuta certificado ou adicionar ao menu de tratamento que você já oferece
                como terapeuta holístico qualificado e aumentar o seu fluxo de renda.
              </p>
              <p>
                O curso é muito interativo, com muito apoio e orientação pessoal para garantir que
                você atinja os mais altos padrões profissionais como Aromaterapeuta.
              </p>
              <p>
                A Aromaterapia é uma profissão dinâmica e pode te abrir as portas para um mundo de
                possibilidades.
              </p>
              <p>
                O curso de Formação em Aromaterapia Clínica Integral capacita o aluno a trabalhar
                com práticas de Aromaterapia, utilizar os óleos essenciais com segurança no seu
                dia-a-dia, trabalhar como Aromaterapeuta profissional, em consultas presenciais e
                virtuais, e a desenvolver produtos naturais com óleos essenciais.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[300px] bg-footer">
          <Image
            src="/img/oleos-flores.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-[0.51]"
          />
        </div>
      </section>

      {/* ---------- 3. Quem é Malu ---------- */}
      <section className="relative overflow-hidden bg-[#9F8C82] py-14 md:py-16">
        {/* Folha de linalool decorativa sobreposta à esquerda, como no original. */}
        <Image
          src="/img/folha-linalool.png"
          alt=""
          width={350}
          height={530}
          aria-hidden
          className="pointer-events-none absolute left-[172px] top-[290px] hidden w-[338px] opacity-90 lg:block"
        />

        <div className="site-container relative grid items-center gap-8 md:grid-cols-[418px_1fr]">
          <Reveal>
            <Image
              src="/img/curso-malu-retrato.jpg"
              alt="Malu Haddock Lobo"
              width={418}
              height={507}
              className="mx-auto h-auto w-full max-w-[418px] object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white p-8 md:p-10">
              <h2 className="text-[26px] text-black md:text-[30px]">MALU HADDOCK LOBO</h2>

              <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-black">
                <p>
                  Minha história como terapeuta começa lá nos anos 90, quando eu me apaixonei pela
                  aromaterapia e pela medicina tradicional chinesa e decidi migrar de carreira. Fiz
                  formação em Aromaterapia no Institute of Traditional Herbal Medicine and
                  Aromatherapy (ITHMA) – UK, Cursos na Neal&rsquo;s Yard Remedies - UK, Cursos de
                  especialização na França com Nelly Grosjean e com Dr. Daniel Penoel. Formação em
                  Ayurveda na Escola Yoga Brahma Vidyalaya. Quando voltei para o Brasil comecei a
                  dar cursos de formação em aromaterapia no ano 2000, tendo formado mais de 5.000
                  alunos ao redor do mundo.
                </p>
                <p>
                  Trabalhei na Clínica São Vicente com aromaterapeuta clínica na equipe do Dr
                  Sergio Abramoff, onde atendia pacientes da clínica geral e da psiquiatria.
                </p>
                <p>
                  Com mais de 20 anos de prática clínica trabalho uma visão integral, atuando na
                  raíz das queixas e individualizando os protocolos de acordo com a necessidade de
                  cada cliente.
                </p>
                <p>
                  Além disso, sou fundadora da marca de cosméticos naturais Soma Aromaterapia e
                  pesquisadora do cultivo biodinâmico de plantas medicinais e destilação de óleos
                  essenciais e hidrolatos, em ressonância com os ciclos lunares e planetários. Quer
                  saber mais sobre mim?
                </p>
              </div>

              {/* No original este botão levava à página /about, que não faz parte
                  deste clone. Aponta para a home até a página ser migrada. */}
              <div className="mt-7">
                <Cta href="/">Descubra mais</Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4. Faixa de imagens ---------- */}
      <section className="grid grid-cols-1 sm:grid-cols-3">
        {[
          { src: "/img/curso-oleo-vidraria.jpg", alt: "Óleos essenciais em vidraria de laboratório" },
          { src: "/img/curso-manipulacao.jpg", alt: "Manipulação de cosméticos naturais" },
          { src: "/img/curso-inalacao.jpg", alt: "Inalação de óleo essencial" },
        ].map((im) => (
          <div key={im.src} className="relative h-[258px]">
            <Image src={im.src} alt={im.alt} fill sizes="(min-width:640px) 33vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      {/* ---------- 5. Programa e cronograma ---------- */}
      <section className="bg-white py-14 md:py-16">
        <div className="site-container grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full bg-white/[0.74] p-2">
              <h2 className="text-[26px] text-black md:text-[30px]">PROGRAMA E CRONOGRAMA</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-black">{PROGRAMA_1.intro}</p>
              {PROGRAMA_1.blocos.map((b) => (
                <Bloco key={b.titulo} titulo={b.titulo} itens={b.itens} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col bg-white/[0.74] p-2">
              {PROGRAMA_2.map((b) => (
                <Bloco key={b.titulo} titulo={b.titulo} itens={b.itens} />
              ))}

              <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-black">
                <p>
                  Início: 25 de Março de 2023 - Sábados mensais das 10:00 às 18:00h (com intervalo
                  de 1:30h para almoço).
                </p>
                <p>Duração da formação completa: 9 meses.</p>
                <p>
                  Datas das aulas: Aula 1 - 25/03, Aula 2 - 22/04, Aula 3 - 20/05, Aula 4 - 17/06,
                  Aula 5 - 15/07, Aula 6 - 19/08, Aula 7 - 16/09, Aula 8 - 14/10, Aula 9 - 18/11.
                </p>
                <p>
                  Inclui: certificado de 150h com selo da ABRATH que capacita o aluno a trabalhar
                  como Aromaterapeuta profissional e se filiar à ABRATH, 2 horas mensais de
                  monitoria online ao vivo e monitoria diária de segunda a sexta pelo grupo
                  exclusivo do WhatsApp.
                </p>
                <p className="pt-2 font-bold">Tudo isso por apenas:</p>
                <p className="text-[20px] font-bold">9 x R$ 290,00</p>
                <p className="font-bold">ou R$ 2.349,00 à vista</p>
              </div>

              <div className="mt-8">
                <Cta>CLIQUE AQUI PARA SE INSCREVER</Cta>
              </div>

              <Image
                src="/img/folha-linalool.png"
                alt=""
                width={350}
                height={530}
                className="mt-8 h-auto w-[240px] self-center opacity-90"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 6. O que você vai receber ---------- */}
      <section className="relative overflow-hidden bg-[#BDD5CF] py-14">
        <Image
          src="/img/curso-laboratorio.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.29]"
        />
        <div className="site-container relative">
          <Reveal>
            <h2 className="text-center text-[26px] font-bold text-black md:text-[30px]">
              O QUE VOCÊ VAI RECEBER
            </h2>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFICIOS.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 90}>
                <article className="flex h-full flex-col items-center bg-cream px-4 py-7 text-center">
                  <Image src={b.icone} alt="" width={72} height={57} className="h-[57px] w-auto" />
                  <h3 className="mt-4 text-[16px] font-bold text-ti-verde">{b.titulo}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-ti-verde">{b.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 7. Depoimentos ---------- */}
      <section className="bg-ti-roxo py-14 md:py-16">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-[272px_1fr]">
            <div>
              <p className="text-[26px] text-[#F6EBE4]">DEPOIMENTOS</p>
              <p className="mt-4 text-[17px] leading-[1.6] text-white">
                Arrasta pro lado, leia os depoimentos de nossos alunos e tire suas próprias
                conclusões
              </p>
            </div>

            {/* min-w-0: sem isso a trilha do carrossel infla a coluna do grid
                e a página passa a rolar na horizontal. */}
            <div className="min-w-0 italic">
              <DepoimentosSlider itens={DEPOIMENTOS} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 8. FAQ ---------- */}
      <section className="relative overflow-hidden bg-ti-sage py-14">
        <Image
          src="/img/curso-difusor.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.51]"
        />
        <div className="site-container relative">
          <Reveal>
            <h2 className="text-center text-[32px] text-white md:text-[40px]">
              Perguntas Frequentes
            </h2>
          </Reveal>
          <div className="mt-8">
            <Accordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* ---------- 9. Depoimentos em vídeo (YouTube) ---------- */}
      <section className="relative overflow-hidden bg-[#24423B] py-14">
        <Image
          src="/img/maos-oleo-escuro.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.16]"
        />
        <div className="site-container relative">
          <Reveal>
            <h2 className="text-center text-[34px] font-bold text-[#D4D4D4] md:text-[46px]">
              Veja o que nossas alunas falam
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { id: "WVoAdjtp8z8", titulo: "Depoimento de aluna — parte 1" },
              { id: "sT5OG9DmwO4", titulo: "Depoimento de aluna — parte 2" },
            ].map((v) => (
              <div key={v.id} className="aspect-video w-full overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 10. Dúvidas ---------- */}
      <section className="bg-white">
        <div className="site-container grid items-center gap-10 py-14 md:grid-cols-2 md:py-0">
          <Reveal className="md:py-16">
            <h2 className="text-[32px] text-ti-roxo md:text-[40px]">Dúvidas?</h2>
            {/*
              HERDADO DO ORIGINAL: o texto diz "abaixo", mas nesta página não existe
              formulário — só na /terapiaintegral. Mantido idêntico ao Wix.
              Para resolver: reaproveitar <FormularioContato /> aqui, ou trocar o texto.
            */}
            <p className="mt-3 text-[16px] text-black">
              Envie uma mensagem abaixo ou por{" "}
              <a
                href="https://api.whatsapp.com/send?phone=5521987370503"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                WhatsApp
              </a>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <Image
              src="/img/curso-kit-oleos.jpg"
              alt="Kit de óleos essenciais"
              width={586}
              height={483}
              className="h-[400px] w-full object-cover md:h-[483px]"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
