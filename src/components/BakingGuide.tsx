import "./baking-guide.css";

const steps = [
  {
    title: "Pré-aqueça o forno",
    text: "Pelo menos 15 minutos, na temperatura máxima do forno de casa.",
  },
  {
    title: "Unte a assadeira",
    text: "Uma camada leve de azeite ou manteiga já evita que a massa grude.",
  },
  {
    title: "Monte com moderação",
    text: "Siga as quantidades do guia de equilíbrio — evite excesso de recheio.",
  },
  {
    title: "Respeite os tempos",
    text: "Cada receita tem seu tempo ideal. Massa pré-assada aquece rápido.",
  },
  {
    title: "Frescos entram depois",
    text: "Manjericão, rúcula e morango só vão à pizza depois que ela sai do forno.",
  },
  {
    title: "Descanse 2 minutos",
    text: "Antes de cortar, para o queijo assentar e a fatia não escorrer.",
  },
];

export default function BakingGuide() {
  return (
    <section className="baking wrap" id="como-assar">
      <p className="eyebrow">Guia rápido</p>
      <h2 className="baking__title display">Como assar a sua pizza</h2>
      <ol className="baking__list">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="stamp baking__stamp">{i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
