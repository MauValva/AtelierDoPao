import PhotoSlot from "./PhotoSlot";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__photo">
        <PhotoSlot
          alt="Pizza artesanal recém-assada, vista de cima"
          src="/images/hero/MassaAssada.webp"
        />
      </div>
      <div className="hero__content wrap">
        <p className="eyebrow">Atelier do Pão · Fermentação Natural</p>
        <h1 className="hero__title">Pizza Artesanal em Casa</h1>
        <p className="hero__subtitle">
          A mesma fermentação natural e a mesma farinha italiana do pão que você
          já conhece.
        </p>
        <a href="#receitas" className="btn solid">
          Ver as receitas ↓
        </a>
      </div>
      <div className="crust-edge" aria-hidden />
    </section>
  );
}
