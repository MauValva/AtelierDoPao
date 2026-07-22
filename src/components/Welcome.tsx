import "./welcome.css";

const pillars = [
  {
    title: "Fermentação natural",
    text: "Sem fermento industrial: só farinha, água, sal e tempo. É o que dá leveza e sabor à massa.",
  },
  {
    title: "Farinha italiana",
    text: 'Farinha tipo "00", a mesma usada nas pizzarias napolitanas, para uma massa fina e com boa mordida.',
  },
  {
    title: "Longa fermentação",
    text: "Descanso de 24 a 48 horas em geladeira, que desenvolve sabor e deixa a massa mais fácil de digerir.",
  },
  {
    title: "Praticidade da pré-assada",
    text: "Já vem parcialmente assada: você monta seus ingredientes e finaliza em poucos minutos no forno de casa.",
  },
];

export default function Welcome() {
  return (
    <section className="welcome wrap" id="bem-vindo">
      <p className="eyebrow">Bem-vindo</p>
      <h2 className="welcome__title display">
        A massa que o Atelier do Pão pré-assa para você
      </h2>
      <p className="welcome__intro">
        Este é o guia que preparamos para acompanhar cada massa: O equilíbrio
        certo de recheio e um passo a passo para assar como em uma pizzaria de
        bairro italiano.
      </p>
      <div className="welcome__grid">
        {pillars.map((p) => (
          <div key={p.title} className="pillar">
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
