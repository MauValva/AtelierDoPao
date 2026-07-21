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
        <span className={`recipe-card__stamp stamp ${recipe.category}`}>
          {recipe.order}
        </span>
      </div>
      <div className="recipe-card__body">
        <h3>{recipe.name}</h3>
        <p>{recipe.tagline}</p>
      </div>
    </Link>
  );
}
