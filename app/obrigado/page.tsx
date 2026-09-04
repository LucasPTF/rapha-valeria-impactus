import { ArrowRight, Check, Clock3, MailCheck, MessageCircle } from "lucide-react";
import { ImpactusMark } from "../_components/ImpactusMark";
import { MotionController } from "../_components/MotionController";

export const metadata = {
  title: "Inscrição recebida | Instituto Impactus",
};

export default function ObrigadoPage() {
  return (
    <main className="thanks-page">
      <MotionController />
      <div className="thanks-grid" aria-hidden="true" />
      <header className="thanks-header">
        <a className="brand" href="/a1" aria-label="Instituto Impactus, página inicial">
          <ImpactusMark />
          <span>
            Instituto
            <strong>Impactus</strong>
          </span>
        </a>
      </header>
      <section className="thanks-hero" data-hero-content>
        <div className="success-mark" aria-hidden="true">
          <Check />
        </div>
        <p className="section-kicker light">Inscrição recebida</p>
        <h1>Agora acompanhe seu e-mail.</h1>
        <p>
          Assim que a compra for confirmada, você receberá as orientações de acesso no e-mail usado durante a inscrição.
        </p>
      </section>
      <section className="next-steps" data-stagger>
        <article>
          <span>01</span>
          <MailCheck aria-hidden="true" />
          <h2>Verifique sua caixa de entrada</h2>
          <p>Procure a mensagem de confirmação e confira também as pastas de promoções e spam.</p>
        </article>
        <article>
          <span>02</span>
          <MessageCircle aria-hidden="true" />
          <h2>Aguarde as orientações</h2>
          <p>O acesso ao grupo de avisos e os próximos passos serão informados após a confirmação.</p>
        </article>
        <article>
          <span>03</span>
          <Clock3 aria-hidden="true" />
          <h2>Reserve 90 minutos</h2>
          <p>O workshop será realizado por videochamada. Data e horário serão comunicados pelos canais oficiais.</p>
        </article>
      </section>
      <a className="thanks-back" href="/a1">
        Voltar para a página do workshop
        <ArrowRight aria-hidden="true" />
      </a>
    </main>
  );
}
