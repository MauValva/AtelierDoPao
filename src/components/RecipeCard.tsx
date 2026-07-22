import { Link } from "react-router-dom";
import type { Recipe } from "../types";
import PhotoSlot from "./PhotoSlot";
import "./recipe-card.css";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link to={`/receita/${recipe.slug}`} className="recipe-card">
      <div className="recipe-card__photo">
        <PhotoSlot
          src={recipe.image}
          alt={`Pizza ${recipe.name}`}
          label={recipe.name}
        />
      </div>

      <div className="recipe-card__body">
        <h3>{recipe.name}</h3>
        <p>{recipe.tagline}</p>
        <span className="recipe-card__cta">Ver receita →</span>
      </div>
    </Link>
  );
}
