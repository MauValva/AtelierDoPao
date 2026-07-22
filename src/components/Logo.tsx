interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/images/nav/LogoAtelier.webp"
      alt="Atelier do Pão"
      className={className}
    />
  );
}
