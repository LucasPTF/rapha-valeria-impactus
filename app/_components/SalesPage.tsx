import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleCheck,
  Clock3,
  FileCheck2,
  GraduationCap,
  HeartPulse,
  LockKeyhole,
  MessageCircleQuestion,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { GuaranteeSeal } from "./GuaranteeSeal";

type Variant = "a1" | "a2" | "a3";

const heroCopy: Record<Variant, { title: string; support: string; cta: string }> = {
  a1: {
    title:
      "Existe uma diferença gigantesca entre quem aplica ozônio, quem aplica bem e quem decide o protocolo.",
    support:
      "Em 90 minutos, você acompanha uma aplicação completa e vê essa decisão sendo tomada, da anamnese à agulha.",
    cta: "Quero acompanhar a aplicação",
  },
  a2: {
    title:
      "A mesma aplicação, em dois pacientes. No primeiro não respondeu. No segundo respondeu.",
    support:
      "Mudou uma decisão tomada antes da agulha. Você vai acompanhar anamnese, dose, via e frequência sendo decididas caso a caso.",
    cta: "Quero entender a decisão",
  },
  a3: {
    title:
      "Na sua cidade, quantos profissionais decidem o protocolo de ozônio caso a caso?",
    support:
      "Em 90 minutos, você acompanha uma aplicação completa e decide junto antes de conhecer a escolha real.",
    cta: "Quero participar do workshop",
  },
};

const discoveries = [
  "As perguntas da anamnese que podem mudar toda a conduta.",
  "Como dose, via e frequência são decididas em conjunto.",
  "O que fazer quando o caso não se parece com um protocolo conhecido.",
  "Por que intercorrências acontecem e por que o protocolo existe.",
  "O mapa entre assistir a uma técnica e atender com mais critério.",
];

const program = [
  {
    number: "01",
    title: "Onde a ozonioterapia está hoje",
    text: "O que mudou desde 2023 e por que a exigência de formação aumentou. Uma visão geral, sem avançar sobre o escopo de cada conselho.",
  },
  {
    number: "02",
    title: "A anamnese direcionada",
    text: "As perguntas que mudam a conduta. Você recebe o checklist em branco e acompanha o preenchimento em um caso simulado.",
  },
  {
    number: "03",
    title: "A decisão participativa",
    text: "A turma decide primeiro quais perguntas faria e que via escolheria. Depois, a decisão é apresentada e discutida.",
  },
  {
    number: "04",
    title: "A aplicação completa",
    text: "Anamnese, protocolo, dose, via e aplicação. Cada passo é narrado junto com o motivo da escolha.",
  },
  {
    number: "05",
    title: "Onde mora o perigo",
    text: "Uma visão geral sobre intercorrências e segurança, sem prescrição de dose em material aberto.",
  },
  {
    number: "06",
    title: "O mapa do caminho",
    text: "O que separa quem assistiu de quem atende com segurança em diferentes frentes clínicas.",
  },
];

const truthCards = [
  {
    title: "Não é a sua mão que falta. É o protocolo.",
    text: "A parte manual se aproxima de habilidades que o profissional da saúde já pratica. O critério nasce da anamnese e orienta a decisão.",
  },
  {
    title: "Mais horas de curso não viram mais segurança.",
    text: "Acumular conteúdo não resolve a ausência de critério na hora de decidir um caso.",
  },
  {
    title: "O equipamento não decide nada.",
    text: "O gerador produz o gás. A concentração, a via e a frequência dependem da avaliação profissional.",
  },
  {
    title: "Decisão não se aprende apenas lendo.",
    text: "É preciso observar o raciocínio diante de um caso e confrontar a própria escolha com a decisão discutida.",
  },
];

const faq = [
  {
    question: "É online. Como vou aprender a prática?",
    answer:
      "Você acompanha uma aplicação completa do início ao fim. Anamnese, raciocínio de protocolo e escolha da via são apresentados decisão por decisão.",
  },
  {
    question: "Serve para quem já aplica há anos?",
    answer:
      "Sim. Quem já aplica costuma dominar o gesto e pode repetir os mesmos protocolos. O workshop concentra o olhar em como a decisão é construída.",
  },
  {
    question: "Serve para quem nunca aplicou?",
    answer:
      "Serve para profissionais de saúde de nível superior que desejam entender o raciocínio desde a anamnese antes de investir em uma formação mais longa.",
  },
  {
    question: "Já fiz curso de ozônio. Vou encontrar novidade?",
    answer:
      "Se você já decide protocolo caso a caso com segurança, talvez não. Se ainda repete a mesma conduta no automático, este é o ponto trabalhado no workshop.",
  },
  {
    question: "Minha profissão pode aplicar ozônio?",
    answer:
      "A Lei 14.648/2023 trata da atuação por profissionais de saúde de nível superior inscritos em seus conselhos. O escopo de cada procedimento é definido pelo conselho de cada categoria.",
  },
  {
    question: "Quanto tempo dura e haverá replay?",
    answer:
      "O workshop dura 90 minutos. O replay fica disponível por alguns dias. A gravação com acesso vitalício está prevista como item opcional no checkout.",
  },
  {
    question: "Vou receber certificado?",
    answer: "Sim. Você recebe certificado de participação.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem 7 dias para solicitar o reembolso, sem precisar justificar o pedido.",
  },
];

function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a className={`button button-primary ${className}`} href="#inscricao">
      <span>{label}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}

export function SalesPage({ variant }: { variant: Variant }) {
  const hero = heroCopy[variant];
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Instituto Impactus, início">
          <span className="brand-mark" aria-hidden="true">
            O3
          </span>
          <span>
            Instituto
            <strong>Impactus</strong>
          </span>
        </a>
        <a className="header-link" href="#programa">
          Ver programa
          <ArrowDown aria-hidden="true" size={16} />
        </a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Workshop de Ozonioterapia
            </p>
            <h1>{hero.title}</h1>
            <p className="hero-support">{hero.support}</p>
            <p className="mechanism">
              A primeira camada do <strong>Método O3 em 3 Camadas</strong>: critério.
            </p>
            <Cta label={hero.cta} />
            <ul className="hero-facts" aria-label="Informações principais">
              <li>
                <Clock3 aria-hidden="true" />
                <span>
                  <strong>90 minutos</strong>
                  de workshop online
                </span>
              </li>
              <li>
                <FileCheck2 aria-hidden="true" />
                <span>
                  <strong>Kit clínico</strong>
                  para acompanhar a aula
                </span>
              </li>
              <li>
                <GraduationCap aria-hidden="true" />
                <span>
                  <strong>Certificado</strong>
                  de participação
                </span>
              </li>
            </ul>
          </div>
          <div className="portrait-shell portrait-shell-hero" aria-hidden="true">
            <div className="portrait-blank" />
            <div className="portrait-orbit portrait-orbit-one" />
            <div className="portrait-orbit portrait-orbit-two" />
          </div>
        </section>

        <section className="transformation section-pad">
          <div className="section-intro">
            <p className="section-kicker">O ponto de virada</p>
            <h2>Você não precisa repetir o protocolo que domina.</h2>
          </div>
          <div className="shift-list">
            {[
              ["Da tabela", "para a anamnese"],
              ["Do caso rotineiro", "para o raciocínio diante do novo"],
              ["Da sombra de dúvida", "para saber por que a decisão foi tomada"],
            ].map(([from, to]) => (
              <article key={from}>
                <span>{from}</span>
                <ArrowRight aria-hidden="true" />
                <strong>{to}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="discoveries section-pad">
          <div className="section-intro split-intro">
            <div>
              <p className="section-kicker light">Critério antes da aplicação</p>
              <h2>O que você vai descobrir.</h2>
            </div>
            <p>
              Técnica você já pode ter. O workshop mostra a camada anterior, onde o caso é lido e a conduta começa a ser decidida.
            </p>
          </div>
          <div className="discovery-grid">
            {discoveries.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clinical-story section-pad">
          <div className="clinical-icon" aria-hidden="true">
            <HeartPulse />
          </div>
          <div>
            <p className="section-kicker">Quando a técnica parece certa</p>
            <h2>E mesmo assim o resultado não vem.</h2>
          </div>
          <div className="story-copy">
            <p>
              Existe um momento na carreira de quem trabalha com ozônio que quase ninguém comenta. O paciente volta e pergunta se é normal ainda não sentir diferença.
            </p>
            <p>
              Você refaz a aplicação mentalmente. Assepsia, técnica e execução estavam certas. Muitas vezes, o ponto que precisa ser revisto apareceu antes: na pergunta que faltou na anamnese, na dose repetida por hábito ou na via escolhida sem considerar o caso inteiro.
            </p>
            <blockquote>
              Curso ensina técnica. Este workshop mostra a decisão acontecendo.
            </blockquote>
          </div>
        </section>

        <section className="program section-pad" id="programa">
          <div className="section-intro split-intro">
            <div>
              <p className="section-kicker">Programa completo</p>
              <h2>Seis blocos. Uma aplicação. Cada escolha explicada.</h2>
            </div>
            <p>
              A experiência foi organizada para você acompanhar a construção do raciocínio, participar da decisão e reconhecer o que ainda precisa dominar.
            </p>
          </div>
          <div className="program-list">
            {program.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-pad">
          <div className="experience-card">
            <p className="section-kicker light">Como a experiência acontece</p>
            <h2>Você decide antes de conhecer a decisão real.</h2>
            <p>
              Durante a aplicação, a turma é convidada a dizer o que faria. Quais perguntas entrariam na anamnese? Que via seria considerada? Só depois o raciocínio real é apresentado. É nesse contraste que aparece o que você já sabe e o que ainda parecia saber.
            </p>
            <div className="experience-steps" aria-label="Etapas da experiência">
              <span>Anamnese</span>
              <ArrowRight aria-hidden="true" />
              <span>Decisão</span>
              <ArrowRight aria-hidden="true" />
              <span>Aplicação</span>
            </div>
          </div>
          <aside>
            <Clock3 aria-hidden="true" />
            <strong>90 min</strong>
            <p>por videochamada, com acesso enviado após a confirmação da compra</p>
          </aside>
        </section>

        <section className="truths section-pad">
          <div className="section-intro">
            <p className="section-kicker">Quatro ideias essenciais</p>
            <h2>O que muda quando o critério entra na frente da técnica.</h2>
          </div>
          <div className="truth-grid">
            {truthCards.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="audience section-pad">
          <div className="audience-main">
            <p className="section-kicker light">Para quem faz sentido</p>
            <h2>Para profissionais que precisam decidir, não apenas repetir.</h2>
            <ul className="check-list">
              {[
                "Profissionais de saúde de nível superior inscritos em seu conselho.",
                "Quem já aplica ozônio e percebeu que repete os mesmos protocolos.",
                "Quem comprou o gerador e ainda não começou a atender com ele.",
                "Quem fez curso livre e ainda trava ao decidir sem ajuda.",
                "Quem quer conhecer o raciocínio antes de investir em uma formação longa.",
              ].map((item) => (
                <li key={item}>
                  <CircleCheck aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="not-for">
            <p>Não é indicado para</p>
            <ul>
              <li>Profissionais sem nível superior na área da saúde.</li>
              <li>Quem procura uma receita de dose pronta.</li>
              <li>Quem não atua nem pretende atuar na área da saúde.</li>
            </ul>
          </aside>
        </section>

        <section className="method section-pad">
          <div className="method-visual" aria-hidden="true">
            <div className="method-ring method-ring-one" />
            <div className="method-ring method-ring-two" />
            <div className="method-ring method-ring-three" />
            <span>O3</span>
          </div>
          <div className="method-copy">
            <p className="section-kicker">O diferencial</p>
            <h2>A primeira camada do Método O3 em 3 Camadas.</h2>
            <p>
              A maior parte do mercado ensina a aplicar. Este workshop entra na camada anterior, onde o resultado começa a ser decidido: o critério.
            </p>
            <p>
              Você não recebe apenas uma explicação sobre o raciocínio. Você acompanha esse raciocínio em um caso e participa antes de conhecer a decisão discutida.
            </p>
          </div>
        </section>

        <section className="authority section-pad">
          <div className="portrait-shell portrait-shell-authority" aria-hidden="true">
            <div className="portrait-blank" />
          </div>
          <div className="authority-copy">
            <p className="section-kicker light">Instituto Impactus</p>
            <h2>Conhecimento clínico reunido além das fronteiras de uma sala de aula.</h2>
            <p>
              Mais de 80 profissionais de saúde já estudam com o corpo docente do Instituto Impactus. São seis professores que vivem de ozonioterapia, reunidos de quatro estados.
            </p>
            <p>
              Entre eles, há uma enfermeira que participou da construção da regulamentação da ozonioterapia no conselho da categoria. O formato online permite reunir esse repertório em uma experiência acessível de diferentes regiões.
            </p>
            <div className="authority-stats">
              <span>
                <strong>80+</strong>
                profissionais
              </span>
              <span>
                <strong>6</strong>
                professores
              </span>
              <span>
                <strong>4</strong>
                estados
              </span>
            </div>
          </div>
        </section>

        <section className="offer section-pad" id="inscricao">
          <div className="offer-copy">
            <p className="section-kicker">Seu acesso ao workshop</p>
            <h2>Veja a decisão acontecendo.</h2>
            <p>
              Uma experiência objetiva para enxergar como o critério conecta anamnese, dose, via, frequência e aplicação.
            </p>
            <ul className="offer-list">
              {[
                "Workshop online de 90 minutos",
                "Aplicação completa, decisão por decisão",
                "Checklist de anamnese direcionada",
                "Cartão de protocolo, prontuário e termo de consentimento",
                "Replay disponível por alguns dias",
                "Certificado de participação",
              ].map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="price-card">
            <p>Investimento</p>
            <div className="price">
              <span>R$</span>
              <strong>29</strong>
              <sup>,90</sup>
            </div>
            <small>à vista ou no cartão</small>
            {checkoutUrl ? (
              <a className="button button-primary button-full" href={checkoutUrl}>
                <span>Garantir minha vaga</span>
                <LockKeyhole aria-hidden="true" size={17} />
              </a>
            ) : (
              <button className="button button-primary button-full" type="button" disabled>
                Checkout em configuração
              </button>
            )}
            <span className="secure-note">
              <ShieldCheck aria-hidden="true" /> Compra protegida por garantia de 7 dias
            </span>
          </div>
        </section>

        <section className="guarantee section-pad">
          <GuaranteeSeal />
          <div>
            <p className="section-kicker light">Você decide com tranquilidade</p>
            <h2>Assista e avalie o workshop por 7 dias.</h2>
            <p>
              Se a experiência não fizer sentido para você, solicite o reembolso dentro de 7 dias. O pedido não exige justificativa.
            </p>
          </div>
        </section>

        <section className="faq section-pad">
          <div className="section-intro split-intro">
            <div>
              <p className="section-kicker">Dúvidas frequentes</p>
              <h2>Antes de decidir, veja se o workshop é para você.</h2>
            </div>
            <MessageCircleQuestion aria-hidden="true" />
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing section-pad">
          <div className="closing-symbol" aria-hidden="true">
            <Stethoscope />
          </div>
          <p className="section-kicker light">Critério muda a aplicação</p>
          <h2>Noventa minutos não resolvem uma carreira.</h2>
          <p>
            Mas podem esclarecer a pergunta que trava a próxima aplicação: como essa decisão é construída?
          </p>
          <Cta label="Quero acompanhar a aplicação" className="button-light" />
        </section>
      </main>

      <footer>
        <div className="brand brand-footer">
          <span className="brand-mark" aria-hidden="true">
            O3
          </span>
          <span>
            Instituto
            <strong>Impactus</strong>
          </span>
        </div>
        <p>
          Conteúdo educacional para profissionais de saúde. O workshop não substitui formação profissional e não amplia o escopo definido pelo conselho de cada categoria.
        </p>
        <span>© 2026 Instituto Impactus</span>
      </footer>

      <div className="mobile-cta">
        <a href="#inscricao">
          <span>Participar do workshop</span>
          <strong>R$ 29,90</strong>
        </a>
      </div>
    </>
  );
}
