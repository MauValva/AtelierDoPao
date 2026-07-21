import PhotoSlot from "./PhotoSlot";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__photo">
        <PhotoSlot
          alt="Pizza artesanal sendo servida à mesa"
          label="Foto de encerramento — pizza sendo servida"
        />
      </div>
      <div className="crust-edge footer__crust" aria-hidden />
      <div className="wrap footer__content">
        <p className="footer__thanks display">
          Obrigado por levar o Atelier do Pão para a sua mesa.
        </p>
        <p className="footer__sub">
          Toda massa que sai da nossa bancada carrega a mesma fermentação
          natural e a mesma farinha italiana do primeiro pão que fizemos.
        </p>
        <div className="footer__contact">
          <div>
            <span className="eyebrow">Instagram</span>
            <a
              href="https://www.instagram.com/atelierdopaocanoas"
              target="_blank"
              rel="noreferrer"
            >
              @atelierdopaocanoas
            </a>
          </div>
          <div>
            <span className="eyebrow">WhatsApp</span>
            <a
              href="https://wa.me/5551998799949"
              target="_blank"
              rel="noreferrer"
            >
              Fazer um pedido
            </a>
          </div>
        </div>
        <div className="footer__brand">
          <span aria-hidden>🌾</span> Atelier do Pão — Fermentação Natural
        </div>
      </div>
    </footer>
  );
}
