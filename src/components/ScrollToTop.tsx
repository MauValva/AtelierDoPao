import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sempre que a rota muda, volta o scroll para o topo.
 * Se a navegação for para uma âncora (#receitas, #equilibrio...),
 * deixa o navegador rolar até lá normalmente.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
