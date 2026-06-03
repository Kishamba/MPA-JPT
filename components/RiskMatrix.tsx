import { risks } from "@/data/risks";

const levelStyles = {
  Low: "text-signal-green",
  Medium: "text-signal-amber",
  High: "text-orange-300",
  Severe: "text-signal-red"
};

export function RiskMatrix() {
  return (
    <section className="rounded-lg border border-white/10 bg-command-800/55 p-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Risk Matrix</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Operational Exposure</h2>
        </div>
        <span className="text-sm text-slate-400">{risks.length} active risks</span>
      </div>
      <div className="mt-5 overflow-hidden rounded border border-white/10">
        <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr] bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.16em] text-slate-500">
          <span>Risk</span>
          <span>Prob</span>
          <span>Impact</span>
          <span>Level</span>
        </div>
        {risks.map((risk) => (
          <div
            key={risk.name}
            className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr] border-t border-white/10 px-4 py-4 text-sm"
          >
            <div>
              <p className="font-medium text-white">{risk.name}</p>
              <p className="mt-1 text-xs text-slate-500">{risk.owner}</p>
            </div>
            <span className="text-slate-300">{risk.probability}/5</span>
            <span className="text-slate-300">{risk.impact}/5</span>
            <span className={`font-semibold ${levelStyles[risk.level]}`}>{risk.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
