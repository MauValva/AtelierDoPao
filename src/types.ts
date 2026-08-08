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
  bakeMinutesAt250: number;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  secret: string;
  image?: string;
}
