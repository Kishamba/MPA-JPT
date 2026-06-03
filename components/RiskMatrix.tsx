import { boqItems } from "@/data/boq";
import { risks } from "@/data/risks";
import type { OperationalRisk } from "@/data/types";
import { zones } from "@/data/zones";

const riskStyles: Record<OperationalRisk["riskLevel"], string> = {
  low: "border-signal-green/35 bg-signal-green/10 text-signal-green",
  medium: "border-signal-amber/35 bg-signal-amber/10 text-signal-amber",
  high: "border-orange-300/40 bg-orange-400/10 text-orange-200",
  critical: "border-signal-red/45 bg-signal-red/10 text-signal-red"
};

const zoneById = new Map(zones.map((zone) => [zone.id, zone]));
const boqById = new Map(boqItems.map((item) => [item.id, item]));

export function RiskMatrix() {
  return (
    <section className="rounded-lg border border-white/10 bg-command-800/55 p-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Risk Engine</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Operational Exposure</h2>
        </div>
        <span className="text-sm text-slate-400">{risks.length} active risks</span>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {risks.map((risk) => {
          const linkedZones = risk.linkedZoneIds
            .map((zoneId) => zoneById.get(zoneId))
            .filter((zone) => zone !== undefined);
          const linkedBoqItems = risk.linkedBoqItemIds
            .map((itemId) => boqById.get(itemId))
            .filter((item) => item !== undefined);

          return (
            <article key={risk.id} className="rounded-lg border border-white/10 bg-command-950/55 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{risk.category}</p>
                  <h3 className="mt-2 text-base font-semibold text-white">{risk.title}</h3>
                </div>
                <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${riskStyles[risk.riskLevel]}`}>
                  {risk.riskLevel}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">{risk.description}</p>

              <div className="mt-4 grid gap-3">
                <div className="rounded border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Trigger</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{risk.trigger}</p>
                </div>
                <div className="rounded border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Impact</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{risk.impact}</p>
                </div>
                <div className="rounded border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Mitigation</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{risk.mitigation}</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Linked Systems</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {risk.linkedSystemKeys.map((system) => (
                      <span key={system} className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                        {system}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Linked Zones</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {linkedZones.map((zone) => (
                      <span key={zone.id} className="rounded border border-signal-cyan/25 bg-signal-cyan/10 px-2.5 py-1 text-xs text-signal-cyan">
                        {zone.shortName}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Linked BOQ</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {linkedBoqItems.map((item) => (
                      <span key={item.id} className="rounded border border-signal-amber/25 bg-signal-amber/10 px-2.5 py-1 text-xs text-signal-amber">
                        {item.itemName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
