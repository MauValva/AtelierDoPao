import { Link, useParams } from "react-router-dom";
import { getRecipeBySlug, recipes } from "../data/recipes";
import PhotoSlot from "../components/PhotoSlot";
import "./recipe-detail.css";

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = getRecipeBySlug(slug ?? "");

  if (!recipe) {
    return (
      <main className="wrap recipe-detail__missing">
        <p className="eyebrow">Receita não encontrada</p>
        <h1 className="display">Essa página saiu do forno cedo demais.</h1>
        <Link to="/#receitas" className="btn solid">
          Voltar para as receitas
        </Link>
      </main>
    );
  }

  const next = recipes.find((r) => r.order === recipe.order + 1) ?? recipes[0];

  return (
    <main className="recipe-detail">
      <div className="recipe-detail__photo">
        <PhotoSlot
          src={recipe.image}
          alt={`Pizza ${recipe.name} pronta`}
          label={`Foto da pizza ${recipe.name}`}
        />
      </div>
      <div className="crust-edge" aria-hidden />

      <div className="wrap recipe-detail__body">
        <Link to="/#receitas" className="recipe-detail__back">
          ← Todas as receitas
        </Link>

        <div className="recipe-detail__heading">
          <span className={`stamp recipe-detail__stamp ${recipe.category}`}>
            {recipe.order}
          </span>

          <h1 className="recipe-detail__title display">{recipe.name}</h1>
        </div>

        <p className="recipe-detail__tagline">{recipe.tagline}</p>
        <div className="divider" />

        <div className="recipe-detail__grid">
          <section aria-labelledby="ingredientes">
            <h2 id="ingredientes" className="section-title">
              🌿 Ingredientes
            </h2>
            <table className="recipe-detail__table">
              <thead>
                <tr>
                  <th>Ingrediente</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {recipe.ingredients.map((ing) => (
                  <tr key={ing.name}>
                    <td>{ing.name}</td>
                    <td>{ing.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section aria-labelledby="preparo">
            <h2 id="preparo" className="section-title">
              👨‍🍳 Modo de preparo
            </h2>
            <p className="recipe-detail__preheat">
              <strong>Antes de começar:</strong> pré-aqueça o forno por pelo
              menos 15 minutos a 250°C.
            </p>
            <ol className="recipe-detail__steps">
              {recipe.steps.map((step, i) => (
                <li key={i}>
                  <span className="stamp">{i + 1}</span>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="recipe-detail__baketime">
              Tempo de forno: {recipe.bakeTime}
            </p>
          </section>
        </div>

        <div className="recipe-detail__secret">
          <span aria-hidden>🍕</span>
          <div>
            <h3>Segredo do Atelier</h3>
            <p>{recipe.secret}</p>
          </div>
        </div>

        <Link to={`/receita/${next.slug}`} className="recipe-detail__next">
          Próxima receita: {next.name} →
        </Link>
      </div>
    </main>
  );
}
