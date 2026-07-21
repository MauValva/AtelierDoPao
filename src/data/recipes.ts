import type { Recipe } from "../types";
//import "/images/pizzas/margherita.png";

/**
 * TODAS as receitas do site vivem neste arquivo.
 *
 * Para ADICIONAR uma receita nova: copie um objeto inteiro (de "{" até "},"),
 * cole no fim do array e ajuste os campos. O site (grade, menu e páginas de
 * detalhe) atualiza sozinho — nenhum outro arquivo precisa mudar.
 *
 * Os valores abaixo (quantidades, tempos, modo de preparo) são um ponto de
 * partida no padrão da receita de Margherita que vocês já usam. Revise cada
 * receita antes de publicar — principalmente as marcadas com "// CONFERIR".
 */
export const recipes: Recipe[] = [
  {
    slug: "margherita",
    image: "/images/pizzas/Margherita.webp",
    order: 1,
    name: "Margherita",
    tagline: "O clássico da simplicidade.",
    category: "salgada",
    bakeTime: "7 a 9 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "70 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "110 g" },
      { name: "Folhas de manjericão fresco", quantity: "6 a 8 folhas" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella de forma uniforme sobre toda a pizza." },
      {
        text: "Leve ao forno por 7 a 9 minutos, ou até que o queijo esteja completamente derretido e levemente gratinado.",
      },
      {
        text: "Retire a pizza do forno e finalize com as folhas de manjericão fresco.",
      },
    ],
    secret:
      "A simplicidade desta pizza faz com que cada ingrediente tenha grande importância. O manjericão deve ser adicionado somente após a pizza sair do forno, preservando seus aromas e garantindo um acabamento mais elegante.",
  },
  {
    slug: "calabresa",
    image: "/images/pizzas/Calabresa.webp",
    order: 2,
    name: "Calabresa",
    tagline: "Um clássico brasileiro com inspiração italiana.",
    category: "salgada",
    bakeTime: "7 a 9 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "70 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "100 g" },
      { name: "Calabresa fatiada fina", quantity: "70 g" },
      { name: "Cebola roxa em rodelas finas", quantity: "25 g" },
      { name: "Orégano", quantity: "a gosto" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella de forma uniforme sobre toda a pizza." },
      { text: "Disponha as fatias de calabresa sem sobrepô-las em excesso." },
      { text: "Espalhe a cebola fatiada sobre a pizza." },
      { text: "Finalize com uma pitada de orégano." },
      {
        text: "Leve ao forno por 7 a 9 minutos, ou até que o queijo esteja completamente derretido e levemente gratinado.",
      },
    ],
    secret:
      "Você pode utilizar a calabresa de sua preferência, mas dê preferência às versões defumadas e fatiadas finamente. Distribuir as fatias sem excesso permite que cada ingrediente apareça em equilíbrio, preservando a leveza da pizza e valorizando a massa de fermentação natural.",
  },
  {
    slug: "quatro-queijos",
    image: "/images/pizzas/QuatroQueijos.webp",
    order: 3,
    name: "Quatro Queijos",
    tagline: "Cremosidade em camadas, sem pesar na massa.",
    category: "salgada",
    bakeTime: "7 a 9 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "60 g" },
      { name: "Mozzarella ralada", quantity: "70 g" },
      { name: "Gorgonzola", quantity: "20 g" },
      { name: "Parmesão ralado", quantity: "15 g" },
      { name: "Requeijão cremoso", quantity: "30 g" },
      { name: "Orégano", quantity: "a gosto" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      {
        text: "Distribua a mozzarella de forma uniforme sobre toda a pizza.",
      },
      {
        text: "Acrescente pequenas porções de requeijão espalhadas pela superfície.",
      },
      {
        text: "Esfarele o gorgonzola em pequenos pedaços, distribuindo-o de maneira uniforme.",
      },
      { text: "Finalize com o parmesão ralado e uma pitada de orégano." },
      {
        text: "Leve ao forno por 7 a 9 minutos, ou até que os queijos estejam completamente derretidos e levemente gratinados.",
      },
    ],
    secret:
      "O equilíbrio faz toda a diferença na pizza Quatro Queijos. A mozzarella garante a base cremosa, o requeijão adiciona suavidade, o gorgonzola traz personalidade e o parmesão finaliza com um toque marcante. Respeitando essas proporções, os sabores se complementam sem esconder a leveza da massa de fermentação natural.",
  },
  {
    slug: "parma-e-rucula",
    image: "/images/pizzas/ParmaRucula.webp",
    order: 4,
    name: "Parma e Rúcula",
    tagline: "Elegância em poucos ingredientes.",
    category: "salgada",
    bakeTime: "7 a 9 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "70 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "100 g" },
      { name: "Presunto Parma fatiado", quantity: "50 g" },
      { name: "Rúcula fresca", quantity: "20 g" },
      { name: "Parmesão ralado", quantity: "10 g" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      {
        text: "Distribua a mozzarella de forma uniforme sobre toda a pizza.",
      },
      {
        text: "Leve ao forno por 7 a 9 minutos, ou até que o queijo esteja completamente derretido e levemente gratinado.",
      },
      {
        text: "Retire a pizza do forno.",
      },
      { text: "Acrescente a rúcula fresca" },
      {
        text: "Distribua delicadamente as fatias de presunto Parma sobre a pizza ainda quente.",
      },
      { text: "Finalize com o parmesão ralado." },
    ],
    secret:
      "O presunto Parma e a rúcula devem ser adicionados somente após a pizza sair do forno. O calor da pizza é suficiente para realçar o sabor do Parma, enquanto a rúcula mantém seu frescor e leve picância, criando um contraste perfeito com a mozzarella.",
  },
  {
    slug: "cogumelos",
    image: "/images/pizzas/Cogumelos.webp",
    order: 5,
    name: "Cogumelos",
    tagline: "Sabores terrosos e muito aroma.",
    category: "salgada",
    bakeTime: "7 a 9 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "60 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "90 g" },
      { name: "Cogumelos fatiados", quantity: "80 g" },
      { name: "Folhas de manjericão fresco", quantity: "6 a 8 folhas" },
      {
        name: "Sugestão: Cogumelo Paris, Shimeji, Shiitake ou Portobello.",
        quantity: "",
      },
    ],
    steps: [
      {
        text: "Aqueça uma frigideira em fogo alto e refogue rapidamente os cogumelos por cerca de 2 a 3 minutos, apenas para eliminar o excesso de umidade. Reserve e deixe esfriar levemente.",
      },
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella de forma uniforme sobre toda a pizza." },
      { text: "Espalhe os cogumelos sobre a mozzarella." },
      {
        text: "Leve ao forno por 7 a 9 minutos, ou até que o queijo esteja completamente derretido e levemente gratinado.",
      },
      {
        text: "Retire a pizza do forno e finalize com as folhas de manjericão fresco.",
      },
    ],
    secret:
      "Os cogumelos possuem grande quantidade de água. Refogá-los rapidamente antes da montagem concentra seus sabores e evita que liberem líquido durante o forno, preservando a leveza da pizza e a crocância da massa.",
  },
  {
    slug: "frango-com-requeijao",
    image: "/images/pizzas/FrangoRequeijao.webp",
    order: 6,
    name: "Frango com Requeijão",
    tagline: "A favorita brasileira em versão artesanal.",
    category: "salgada",
    bakeTime: "7 a 9 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "70 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "80 g" },
      { name: "Frango desfiado temperado", quantity: "80 g" },
      { name: "Requeijão cremoso", quantity: "50 g" },
      { name: "Orégano", quantity: "a gosto" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella sobre toda a pizza." },
      {
        text: "Espalhe o frango desfiado de maneira uniforme.",
      },
      {
        text: "Faça pequenos pontos de requeijão por toda a superfície da pizza.",
      },
      { text: "Finalize com uma pitada de orégano." },
      {
        text: "Leve ao forno por 7 a 9 minutos, ou até que o queijo esteja completamente derretido e levemente gratinado.",
      },
    ],
    secret:
      "O segredo dessa pizza está no frango. Ele deve estar bem temperado, porém sem excesso de umidade. Um recheio mais seco preserva a crocância da massa e evita que a pizza fique pesada. ",
  },
  {
    slug: "bacon-milho-requeijao",
    image: "/images/pizzas/BaconMilhoRequeijao.webp",
    order: 7,
    name: "Bacon, Milho e Requeijão",
    tagline: "O encontro perfeito entre crocância e cremosidade.",
    category: "salgada",
    bakeTime: "7 a 9 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "70 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "80 g" },
      { name: "BBacon em cubos", quantity: "60 g" }, // CONFERIR
      { name: "Milho verde", quantity: "40 g" },
      { name: "Requeijão cremoso", quantity: "40 g" },
      { name: "Orégano", quantity: "a gosto" },
    ],
    steps: [
      { text: "Frite o bacon em fogo médio até ficar dourado e crocante." },
      {
        text: "Escorra o excesso de gordura em papel-toalha e deixe esfriar por alguns minutos.",
      },
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella de forma uniforme sobre toda a pizza." },
      { text: "Acrescente o milho-verde bem escorrido." },
      { text: "Espalhe o bacon já dourado." },
      { text: "Distribua pequenas porções de requeijão por toda a pizza." },
      { text: "Finalize com uma pitada de orégano." },
      {
        text: "Leve ao forno por 7 a 9 minutos, ou até que o queijo esteja completamente derretido e levemente gratinado.",
      },
    ],
    secret:
      "Prepare o bacon antes da montagem e escorra bem o excesso de gordura. Da mesma forma, utilize o milho sempre bem escorrido. Esses cuidados evitam excesso de umidade e ajudam a manter a massa crocante. Distribuir o requeijão em pequenas porções, em vez de espalhá-lo completamente, garante uma pizza mais equilibrada e com sabor em cada fatia.",
  },
  {
    slug: "lombinho-geleia-pimenta",
    image: "/images/pizzas/LombinhoGeleia.webp",
    order: 8,
    name: "Lombinho e Geleia de Abacaxi com Pimenta",
    tagline: "O equilíbrio perfeito entre o defumado, o cremoso e o agridoce.",
    category: "salgada",
    bakeTime: "7 a 9 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "60 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "80 g" },
      { name: "Lombinho defumado fatiado", quantity: "70 g" },
      { name: "Geleia de abacaxi com pimenta", quantity: "30 g" },
      { name: "Requeijão cremoso", quantity: "40 g" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      {
        text: "Distribua a mozzarella sobre toda a pizza.",
      },
      { text: "Acomode as fatias de lombinho de maneira uniforme." },
      {
        text: "Distribua pequenas porções de requeijão entre as fatias de lombinho.",
      },
      {
        text: "Leve ao forno por 7 a 9 minutos, ou até que o queijo esteja completamente derretido e levemente gratinado.",
      },
      {
        text: "Retire a pizza do forno e finalize com pequenas porções da geleia de abacaxi com pimenta.",
      },
    ],
    secret:
      "A geleia deve ser adicionada somente após a pizza sair do forno. Assim ela preserva seu brilho, seu sabor agridoce e o leve toque picante, criando um contraste perfeito com o lombinho defumado e o requeijão.",
  },
  {
    slug: "chocolate-com-morangos",
    image: "/images/pizzas/ChocolateMorangos.webp",
    order: 9,
    name: "Chocolate com Morangos",
    tagline: "O encontro perfeito entre o doce e o frescor.",
    category: "doce",
    bakeTime: "5 a 7 minutos",
    ingredients: [
      { name: "Chocolate ao leite picado", quantity: "80 g" },
      { name: "Morangos frescos fatiados", quantity: "80 g" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      { text: "Leve a massa ao forno por 3 minutos, apenas para aquecê-la." },
      {
        text: "Retire a massa do forno e distribua o chocolate ao leite picado de maneira uniforme.",
      },
      {
        text: "Volte ao forno por 2 a 3 minutos, somente até que o chocolate esteja macio e comece a derreter.",
      },
      {
        text: "Retire a pizza do forno e espalhe o chocolate delicadamente com uma espátula de silicone ou as costas de uma colher, formando uma camada uniforme.",
      },
      {
        text: "Distribua os morangos fatiados sobre o chocolate e sirva imediatamente.",
      },
    ],
    secret:
      "O chocolate precisa apenas derreter, não assar. Deixe-o no forno por poucos minutos e retire assim que estiver macio. Se aquecer demais, ele pode perder a cremosidade e adquirir um sabor amargo.",
  },
  {
    slug: "doce-de-leite-com-banana",
    image: "/images/pizzas/DoceDeLeiteBanana.webp",
    order: 10,
    name: "Doce de Leite com Banana",
    tagline: "Simples, afetiva, do jeito que pizza doce deveria ser.",
    category: "doce",
    bakeTime: "5 a 7 minutos",
    ingredients: [
      { name: "Doce de leite cremoso", quantity: "100 g" },
      { name: "Banana madura em rodelas", quantity: "80 g" },
      { name: "Canela em pó", quantity: "a gosto" },
      {
        name: "Dica: Prefira um doce de leite mais firme, que espalhe facilmente sem escorrer.",
        quantity: "",
      },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      { text: "Leve a massa ao forno por 3 minutos, apenas para aquecê-la." },
      {
        text: "Retire a massa do forno e espalhe o doce de leite com uma espátula ou com as costas de uma colher, formando uma camada uniforme.",
      },
      {
        text: "Distribua as rodelas de banana por toda a pizza, sem sobrepô-las em excesso.",
      },
      {
        text: "Leve novamente ao forno por 2 a 3 minutos, apenas para aquecer o recheio.",
      },
      {
        text: "Retire do forno, finalize com a canela em pó e sirva imediatamente.",
      },
    ],
    secret:
      "Utilize bananas maduras, mas firmes. Elas ficam mais doces naturalmente e mantêm sua textura durante o rápido tempo de forno.",
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}
