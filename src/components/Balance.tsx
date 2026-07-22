import "./balance.css";

const items = [
  {
    label: "Molho",
    qty: "50 a 70 g",
    note: "Camada fina, sempre deixando a borda livre.",
  },
  {
    label: "Mozzarella",
    qty: "90 a 110 g",
    note: "A base de qualquer pizza salgada — nem mais, nem menos.",
  },
  {
    label: "Proteínas",
    qty: "60 a 90 g",
    note: "Fatiadas ou desfiadas finas, nunca em blocos grossos.",
  },
  {
    label: "Requeijão",
    qty: "30 a 50 g",
    note: "Em pontos ou fios — não em camada única e pesada.",
  },
  {
    label: "Queijos especiais",
    qty: "20 a 30 g",
    note: "Gorgonzola, parmesão: usados para dar caráter, não volume.",
  },
  {
    label: "Vegetais",
    qty: "60 a 80 g",
    note: "De preferência já refogados quando soltam água (cogumelo, por exemplo).",
  },
  {
    label: "Coberturas doces",
    qty: "80 a 100 g",
    note: "Fruta ou doce de leite em camada única, sem excesso de açúcar extra.",
  },
];

export default function Balance() {
  return (
    <section className="balance" id="equilibrio">
      <div className="wrap">
        <p className="eyebrow">A filosofia do Atelier</p>
        <h2 className="balance__title display">
          O equilíbrio da pizza artesanal
        </h2>
        <p className="balance__intro">
          A massa pré-assada é fina e leve de propósito: Ela pede quantidade
          certa, não quantidade máxima. Use a tabela abaixo como referência para
          qualquer receita nova que você quiser criar.
        </p>
        <div className="balance__table" role="table">
          <div className="balance__row balance__row--head" role="row">
            <span role="columnheader">Ingrediente</span>
            <span role="columnheader">Quantidade ideal</span>
            <span role="columnheader">Por quê</span>
          </div>
          {items.map((it) => (
            <div className="balance__row" role="row" key={it.label}>
              <span role="cell" className="balance__label">
                {it.label}
              </span>
              <span role="cell" className="balance__qty">
                {it.qty}
              </span>
              <span role="cell" className="balance__note">
                {it.note}
              </span>
            </div>
          ))}
        </div>
        <p className="balance__closing">
          Exagerar no recheio pesa a massa, impede que ela asse por igual e
          esconde o sabor da fermentação natural que é a nossa assinatura.
        </p>
      </div>
    </section>
  );
}
