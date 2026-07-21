export interface Ingredient {
  name: string;
  quantity: string;
}

export interface RecipeStep {
  text: string;
}

export type RecipeCategory = "salgada" | "doce";

export interface Recipe {
  slug: string;
  order: number;
  name: string;
  tagline: string;
  category: RecipeCategory;
  bakeTime: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  secret: string;
  /** caminho de uma foto que vocês adicionarem depois em /public/images/pizzas/ */
  image: string;
}
