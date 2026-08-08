export interface OvenTempBand {
  /** Texto mostrado no select, ex: "200 a 230°C" */
  label: string;
  minTemp: number;
  maxTemp: number;
  /** Temperatura usada no cálculo do tempo — ponto médio da faixa */
  calcTemp: number;
}

/**
 * Agrupa o intervalo min..max (de step em step) em blocos de `groupSize`
 * valores. Ex.: buildBands(200, 320, 10, 4) gera faixas de 4 em 4 degraus
 * de 10°C: [200-230], [240-270], [280-320].
 *
 * Se o último bloco sair menor que `groupSize` (sobra), ele é fundido ao
 * bloco anterior em vez de virar uma faixa isolada — assim nunca fica uma
 * opção "solta" no fim da lista, tipo "320°C" sozinho.
 */
function buildBands(
  min: number,
  max: number,
  step: number,
  groupSize: number,
): OvenTempBand[] {
  const temps: number[] = [];
  for (let t = min; t <= max; t += step) temps.push(t);

  const groups: number[][] = [];
  for (let i = 0; i < temps.length; i += groupSize) {
    groups.push(temps.slice(i, i + groupSize));
  }

  // funde o último grupo no penúltimo se ele sair incompleto
  if (groups.length > 1 && groups[groups.length - 1].length < groupSize) {
    const last = groups.pop()!;
    groups[groups.length - 1].push(...last);
  }

  return groups.map((group) => {
    const minTemp = group[0];
    const maxTemp = group[group.length - 1];
    const calcTemp = Math.round((minTemp + maxTemp) / 2);
    const label =
      minTemp === maxTemp ? `${minTemp}°C` : `${minTemp} a ${maxTemp}°C`;
    return { label, minTemp, maxTemp, calcTemp };
  });
}

export const OVEN_TEMP_BANDS = buildBands(200, 320, 10, 4);
// resultado agora: [200-230°C], [240-270°C], [280-320°C]

const REFERENCE_TEMP = 250;

export interface BakeEstimate {
  minMinutes: number;
  maxMinutes: number;
}

/**
 * Estimativa prática de tempo de forno a partir da temperatura escolhida.
 *
 * Isso NÃO é uma fórmula termodinâmica exata — calibração de forno, espessura
 * da massa e umidade do recheio variam demais para isso. É uma aproximação
 * calibrada a partir do tempo de referência a 250°C que já testamos em cada
 * receita: serve para orientar, não substitui o olho de quem está assando.
 *
 * O expoente 1.4 foi ajustado para dar uma variação realista dentro da faixa
 * 200–320°C (pouca mudança perto de 250°C, queda mais visível perto de 320°C).
 * Se, testando na prática, sentirem que o tempo real diverge muito do
 * estimado, é só ajustar esse número.
 */
export function estimateBakeTime(
  baseMinutes: number,
  targetTempC: number,
): BakeEstimate {
  const baseKelvin = REFERENCE_TEMP + 273;
  const targetKelvin = targetTempC + 273;
  const scale = Math.pow(baseKelvin / targetKelvin, 3);
  const center = baseMinutes * scale;

  const floor = 3; // nunca sugerir menos que isso, por segurança
  const minMinutes = Math.max(floor, Math.round(center - 1));
  const maxMinutes = Math.max(minMinutes + 1, Math.round(center + 1));
  return { minMinutes, maxMinutes };
}
