import { useMemo, useState } from "react";
import { OVEN_TEMP_BANDS, estimateBakeTime } from "../utils/ovenTime";
import "./oven-time-panel.css";

const DEFAULT_BAND =
  OVEN_TEMP_BANDS.find((b) => 250 >= b.minTemp && 250 <= b.maxTemp) ??
  OVEN_TEMP_BANDS[0];

export default function OvenTimePanel({
  baseMinutes,
}: {
  baseMinutes: number;
}) {
  const [calcTemp, setCalcTemp] = useState(DEFAULT_BAND.calcTemp);
  const estimate = useMemo(
    () => estimateBakeTime(baseMinutes, calcTemp),
    [baseMinutes, calcTemp],
  );

  return (
    <div className="oven-panel">
      <div className="oven-panel__row">
        <label htmlFor="oven-temp" className="oven-panel__label">
          🔥 Utilize o forno em temperatura máxima e ligue o Grill!
        </label>
      </div>
      <p className="oven-panel__preheat">
        <strong>Antes de começar:</strong> pré-aqueça o forno por pelo menos 10
        minutos.
      </p>

      <div className="oven-panel__temp-select">
        <label htmlFor="oven-temp" className="oven-panel__temp-label">
          Temperatura? <span aria-hidden></span>
        </label>
        <select
          id="oven-temp"
          className="oven-panel__select"
          value={calcTemp}
          onChange={(e) => setCalcTemp(Number(e.target.value))}
        >
          {OVEN_TEMP_BANDS.map((band) => (
            <option key={band.label} value={band.calcTemp}>
              {band.label}
            </option>
          ))}
        </select>
      </div>

      <div className="oven-panel__result">
        <span className="oven-panel__time">
          {estimate.minMinutes} a {estimate.maxMinutes} minutos
        </span>
      </div>
    </div>
  );
}
