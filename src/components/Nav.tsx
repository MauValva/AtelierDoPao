import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./nav.css";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const isHome = location.pathname === "/";
  const links = [
    { href: isHome ? "#receitas" : "/#receitas", label: "Receitas" },
    {
      href: isHome ? "#equilibrio" : "/#equilibrio",
      label: "Crie sua receita",
    },
    { href: isHome ? "#como-assar" : "/#como-assar", label: "Como assar" },
    { href: isHome ? "#contato" : "/#contato", label: "Pedidos" },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner wrap">
        <Link to="/" className="nav__brand">
          <Logo className="nav__logo" />
        </Link>
        <nav className="nav__links nav__links--desktop">
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav className="nav__links nav__links--mobile">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
