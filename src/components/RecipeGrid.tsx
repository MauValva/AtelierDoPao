import { useState } from "react";
import { recipes } from "../data/recipes";
import RecipeCard from "./RecipeCard";
import "./recipe-grid.css";

type Filter = "todas" | "salgada" | "doce";

export default function RecipeGrid() {
  const [filter, setFilter] = useState<Filter>("todas");
  const shown = recipes
    .slice()
    .sort((a, b) => a.order - b.order)
    .filter((r) => filter === "todas" || r.category === filter);

  return (
    <section className="recipes wrap" id="receitas">
      <p className="eyebrow">10 receitas</p>
      <h2 className="recipes__title display">Uma massa, dez caminhos</h2>
      <div
        className="recipes__filters"
        role="tablist"
        aria-label="Filtrar receitas"
      >
        {(["todas", "salgada", "doce"] as Filter[]).map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`filter-btn ${filter === f ? "is-active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "todas" ? "Todas" : f === "salgada" ? "Salgadas" : "Doces"}
          </button>
        ))}
      </div>
      <div className="recipes__grid">
        {shown.map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>
    </section>
  );
}
