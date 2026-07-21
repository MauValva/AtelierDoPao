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
      { text: "Aguarde cerca de 2 minutos antes de cortar e servir." },
    ],
    secret:
      "A simplicidade desta pizza faz com que cada ingrediente tenha grande importância. O manjericão deve ser adicionado somente após a pizza sair do forno, preservando seus aromas e garantindo um acabamento mais elegante.",
  },
  {
    slug: "calabresa",
    image: "/images/pizzas/Calabresa.webp",
    order: 2,
    name: "Calabresa",
    tagline: "O sabor mais pedido do Brasil, na medida certa.",
    category: "salgada",
    bakeTime: "8 a 10 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "70 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "100 g" },
      { name: "Calabresa fatiada fina", quantity: "80 g" }, // CONFERIR
      { name: "Cebola roxa em rodelas finas", quantity: "1/4 de unidade" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella e, em seguida, a calabresa fatiada." },
      { text: "Finalize com as rodelas de cebola roxa por cima da calabresa." },
      {
        text: "Leve ao forno por 8 a 10 minutos, até a calabresa levemente tostar nas bordas.",
      },
      { text: "Aguarde cerca de 2 minutos antes de cortar e servir." },
    ],
    secret:
      "A calabresa solta gordura durante o assado — por isso a fatia deve ser fina, nunca em cubos grossos. Isso evita uma pizza encharcada e mantém a massa crocante.",
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
      { name: "Molho de tomate (camada fina)", quantity: "50 g" },
      { name: "Mozzarella ralada", quantity: "60 g" },
      { name: "Gorgonzola em pequenos pedaços", quantity: "30 g" },
      { name: "Parmesão ralado na hora", quantity: "20 g" },
      { name: "Catupiry® ou requeijão cremoso", quantity: "30 g" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      { text: "Espalhe uma camada fina de molho de tomate." },
      {
        text: "Distribua a mozzarella e, por cima, o gorgonzola em pedaços pequenos.",
      },
      {
        text: "Finalize com colheradas de Catupiry® ou requeijão espalhadas pela superfície.",
      },
      {
        text: "Leve ao forno por 7 a 9 minutos e polvilhe o parmesão assim que sair do forno.",
      },
      { text: "Aguarde cerca de 2 minutos antes de cortar e servir." },
    ],
    secret:
      "Quatro queijos não é sinônimo de excesso: o segredo é usar queijos com personalidades diferentes (cremoso, salgado, forte, suave) em pequena quantidade cada um, para que se complementem em vez de competir.",
  },
  {
    slug: "parma-e-rucula",
    image: "/images/pizzas/ParmaRucula.webp",
    order: 4,
    name: "Parma e Rúcula",
    tagline: "Elegância em poucos ingredientes.",
    category: "salgada",
    bakeTime: "6 a 8 minutos",
    ingredients: [
      { name: "Mozzarella fatiada (sem molho de tomate)", quantity: "110 g" },
      { name: "Presunto de Parma fatiado fino", quantity: "50 g" }, // CONFERIR
      { name: "Rúcula fresca", quantity: "1 punhado" },
      { name: "Lascas de parmesão", quantity: "a gosto" },
      { name: "Azeite extravirgem", quantity: "a gosto" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Distribua a mozzarella fatiada por toda a superfície, sem molho de tomate.",
      },
      {
        text: "Leve ao forno por 6 a 8 minutos, até o queijo derreter e a borda dourar.",
      },
      {
        text: "Retire do forno e finalize com as fatias de presunto de Parma.",
      },
      {
        text: "Cubra com a rúcula fresca, lascas de parmesão e um fio de azeite.",
      },
      { text: "Sirva imediatamente, para que a rúcula não murche." },
    ],
    secret:
      "Parma e rúcula são ingredientes crus por natureza — nunca vão ao forno. Adicioná-los somente depois de assar é o que garante o frescor e o contraste de temperatura que definem essa pizza.",
  },
  {
    slug: "cogumelos",
    image: "/images/pizzas/Cogumelos.webp",
    order: 5,
    name: "Cogumelos",
    tagline: "Terroso, simples e sofisticado.",
    category: "salgada",
    bakeTime: "8 a 10 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "60 g" },
      { name: "Mozzarella ralada ou fatiada", quantity: "100 g" },
      {
        name: "Mix de cogumelos fatiados (paris, shimeji, portobello)",
        quantity: "80 g",
      }, // CONFERIR
      { name: "Alho laminado", quantity: "1 dente" },
      { name: "Tomilho ou salsinha fresca", quantity: "a gosto" },
    ],
    steps: [
      {
        text: "Refogue rapidamente os cogumelos com o alho laminado em fio de azeite, só para retirar a umidade.",
      },
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella e, por cima, os cogumelos refogados." },
      { text: "Leve ao forno por 8 a 10 minutos, até o queijo gratinar." },
      { text: "Finalize com tomilho ou salsinha fresca antes de servir." },
    ],
    secret:
      "Cogumelo cru solta água no forno e encharca a massa. Um refogado rápido antes de montar a pizza concentra o sabor e mantém a base crocante.",
  },
  {
    slug: "frango-com-requeijao",
    image: "/images/pizzas/FrangoRequeijao.webp",
    order: 6,
    name: "Frango com Requeijão",
    tagline: "O preferido de sempre, sem exageros.",
    category: "salgada",
    bakeTime: "8 a 10 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "60 g" },
      { name: "Mozzarella ralada", quantity: "80 g" },
      { name: "Frango desfiado temperado", quantity: "90 g" }, // CONFERIR
      { name: "Requeijão cremoso", quantity: "50 g" },
      { name: "Milho verde (opcional)", quantity: "2 col. sopa" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella e, por cima, o frango desfiado." },
      {
        text: "Finalize com colheradas de Catupiry® espalhadas pela superfície.",
      },
      {
        text: "Leve ao forno por 8 a 10 minutos, até o Catupiry® dourar levemente.",
      },
      { text: "Aguarde cerca de 2 minutos antes de cortar e servir." },
    ],
    secret:
      "O frango deve estar bem temperado e levemente úmido antes de ir à pizza — frango seco é o motivo nº 1 de uma pizza de frango decepcionante.",
  },
  {
    slug: "bacon-milho-requeijao",
    image: "/images/pizzas/BaconMilhoRequeijao.webp",
    order: 7,
    name: "Bacon, Milho e Requeijão",
    tagline: "Defumado, doce e cremoso em equilíbrio.",
    category: "salgada",
    bakeTime: "8 a 10 minutos",
    ingredients: [
      { name: "Molho de tomate", quantity: "60 g" },
      { name: "Mozzarella ralada", quantity: "90 g" },
      { name: "Bacon em cubos pequenos, já frito", quantity: "60 g" }, // CONFERIR
      { name: "Milho verde", quantity: "3 col. sopa" },
      { name: "Requeijão cremoso", quantity: "40 g" },
    ],
    steps: [
      { text: "Frite o bacon em cubos até dourar e escorra bem a gordura." },
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Espalhe o molho de tomate uniformemente, deixando a borda livre.",
      },
      { text: "Distribua a mozzarella, o bacon e o milho verde." },
      { text: "Finalize com fios de requeijão cremoso sobre a cobertura." },
      { text: "Leve ao forno por 8 a 10 minutos, até dourar." },
    ],
    secret:
      "Fritar e escorrer bem o bacon antes de montar evita que a gordura em excesso encharque a massa — a mesma lógica de qualquer proteína gordurosa nesta pizza.",
  },
  {
    slug: "lombinho-geleia-pimenta",
    image: "/images/pizzas/LombinhoGeleia.webp",
    order: 8,
    name: "Lombinho com Geleia de Abacaxi com Pimenta",
    tagline: "Doce e picante em doses pequenas — o efeito surpresa.",
    category: "salgada",
    bakeTime: "8 a 10 minutos",
    ingredients: [
      { name: "Mozzarella ralada ou fatiada", quantity: "100 g" },
      { name: "Lombo suave fatiado fino", quantity: "80 g" }, // CONFERIR
      { name: "Geleia de abacaxi com pimenta", quantity: "40 g" },
      { name: "Cebolinha fresca picada", quantity: "a gosto" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      {
        text: "Distribua a mozzarella por toda a superfície, sem molho de tomate.",
      },
      { text: "Adicione o lombo fatiado fino sobre o queijo." },
      {
        text: "Leve ao forno por 8 a 10 minutos, até o queijo derreter e o lombo dourar nas pontas.",
      },
      {
        text: "Retire do forno e distribua pequenas porções da geleia de abacaxi com pimenta.",
      },
      { text: "Finalize com cebolinha fresca picada antes de servir." },
    ],
    secret:
      "A geleia entra depois de assar e em pequenas porções espalhadas — não em camada única. Isso cria pontos de doce e picante em vez de dominar a pizza inteira.",
  },
  {
    slug: "chocolate-com-morangos",
    image: "/images/pizzas/ChocolateMorangos.webp",
    order: 9,
    name: "Chocolate com Morangos",
    tagline: "A sobremesa que fecha a mesa com chave de ouro.",
    category: "doce",
    bakeTime: "5 a 7 minutos",
    ingredients: [
      { name: "Chocolate ao leite ou meio amargo picado", quantity: "100 g" }, // CONFERIR
      { name: "Morangos frescos fatiados", quantity: "8 unidades" },
      { name: "Açúcar de confeiteiro (para polvilhar)", quantity: "a gosto" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      { text: "Distribua o chocolate picado por toda a superfície da massa." },
      {
        text: "Leve ao forno por 5 a 7 minutos, só até o chocolate derreter — sem deixar dourar demais a massa.",
      },
      {
        text: "Retire do forno e espalhe os morangos fatiados sobre o chocolate ainda derretido.",
      },
      { text: "Polvilhe açúcar de confeiteiro por cima." },
      { text: "Sirva morna, em fatias pequenas." },
    ],
    secret:
      "Pizza doce assa menos tempo que a salgada — o objetivo é só derreter o chocolate, nunca ressecar a massa. Os morangos sempre entram frios, depois do forno.",
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
      { name: "Banana nanica fatiada", quantity: "2 unidades" },
      { name: "Canela em pó", quantity: "a gosto" },
    ],
    steps: [
      { text: "Unte a assadeira e posicione a massa pré-assada sobre ela." },
      { text: "Espalhe o doce de leite uniformemente por toda a massa." },
      { text: "Distribua as fatias de banana sobre o doce de leite." },
      {
        text: "Leve ao forno por 5 a 7 minutos, até a banana começar a caramelizar levemente.",
      },
      { text: "Retire do forno e polvilhe canela em pó." },
      { text: "Sirva morna, em fatias pequenas." },
    ],
    secret:
      "A banana vai ao forno junto — diferente do morango — porque é o calor que caramelíza levemente sua superfície e intensifica o sabor. Fatie na hora para evitar que escureça antes de assar.",
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}
