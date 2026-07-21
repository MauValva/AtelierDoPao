import "./photo-slot.css";

interface Props {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
}

/**
 * Onde entram as fotos reais das pizzas. Coloque os arquivos em
 * /public/images/... e passe o caminho pela prop `src`
 * (ex: "/images/pizzas/margherita.jpg"). Sem `src`, mostra um
 * espaço reservado para vocês lembrarem de trocar.
 */
export default function PhotoSlot({ src, alt, label, className = "" }: Props) {
  if (src) {
    return <img src={src} alt={alt} className={`photo-slot ${className}`} />;
  }
  return (
    <div
      className={`photo-slot photo-slot--empty ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="photo-slot__icon" aria-hidden>
        📷
      </span>
      <span className="photo-slot__label">{label ?? alt}</span>
    </div>
  );
}
