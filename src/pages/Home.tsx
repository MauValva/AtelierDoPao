import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import RecipeGrid from "../components/RecipeGrid";
import Balance from "../components/Balance";
import BakingGuide from "../components/BakingGuide";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <div className="crust-edge" aria-hidden />
      <RecipeGrid />
      <Balance />
      <BakingGuide />
    </main>
  );
}
