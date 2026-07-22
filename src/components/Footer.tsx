import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import PhotoSlot from "./PhotoSlot";
import "./footer.css";
import Logo from "./Logo";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer className="footer" id="contato">
      <div className="footer__photo">
        <PhotoSlot
          src="/images/footer/MassaFarinhada.webp"
          alt="Pizza artesanal sendo servida à mesa"
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
          Esperamos que estas receitas sejam só o começo.
        </p>
        <div className="footer__contact">
          <a
            className="footer__social"
            href="https://www.instagram.com/atelierdopaocanoas/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram aria-hidden />
            <span>
              <span className="eyebrow">Instagram</span>
              @atelierdopaocanoas
            </span>
          </a>

          <a
            className="footer__social"
            href="https://wa.me/5551998799949"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden />
            <span>
              <span className="eyebrow">WhatsApp</span>
              Fazer um pedido
            </span>
          </a>
        </div>

        <div className="footer__brand">
          <Logo className="footer__logo" />
        </div>
      </div>
    </footer>
  );
}
