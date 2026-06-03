import { boqItems } from "@/data/boq";
import type { BoqItem } from "@/data/types";
import { zones } from "@/data/zones";

const riskStyles: Record<BoqItem["riskLevel"], string> = {
  low: "border-signal-green/35 bg-signal-green/10 text-signal-green",
  medium: "border-signal-amber/35 bg-signal-amber/10 text-signal-amber",
  high: "border-orange-300/40 bg-orange-400/10 text-orange-200",
  critical: "border-signal-red/45 bg-signal-red/10 text-signal-red"
};

const statusStyles: Record<BoqItem["status"], string> = {
  baseline: "border-signal-green/35 bg-signal-green/10 text-signal-green",
  "change-request": "border-signal-amber/35 bg-signal-amber/10 text-signal-amber",
  additional: "border-signal-cyan/35 bg-signal-cyan/10 text-signal-cyan",
  reduced: "border-blue-300/35 bg-blue-400/10 text-blue-200",
  removed: "border-slate-400/35 bg-slate-400/10 text-slate-300",
  "to-confirm": "border-white/20 bg-white/5 text-slate-300"
};

const zoneById = new Map(zones.map((zone) => [zone.id, zone]));
const linkedZoneCount = new Set(boqItems.flatMap((item) => item.linkedZoneIds)).size;
const criticalPackageCount = boqItems.filter((item) => item.riskLevel === "critical").length;
const changeRequestCount = boqItems.filter((item) => item.status === "change-request").length;

export function BoqIntelligence() {
  const metrics = [
    { label: "Total Packages", value: boqItems.length },
    { label: "Critical Packages", value: criticalPackageCount },
    { label: "Change Requests", value: changeRequestCount },
    { label: "Linked Zones", value: linkedZoneCount }
  ];

  return (
    <section className="rounded-lg border border-white/10 bg-command-800/55 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">BOQ Intelligence</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Operational BOQ Layer</h2>
        </div>
        <span className="text-sm text-slate-400">Package-level operational impact</span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded border border-white/10 bg-command-950/55 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {boqItems.map((item) => {
          const linkedZones = item.linkedZoneIds
            .map((zoneId) => zoneById.get(zoneId))
            .filter((zone) => zone !== undefined);

          return (
            <article key={item.id} className="rounded-lg border border-white/10 bg-command-950/55 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    {item.system} / {item.category}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white">{item.itemName}</h3>
                </div>
                <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${riskStyles[item.riskLevel]}`}>
                  {item.riskLevel}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  Qty {item.finalQuantity} {item.uom}
                </span>
                <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${statusStyles[item.status]}`}>
                  {item.status}
                </span>
                {linkedZones.map((zone) => (
                  <span
                    key={zone.id}
                    className="rounded border border-signal-cyan/25 bg-signal-cyan/10 px-2.5 py-1 text-xs text-signal-cyan"
                  >
                    {zone.shortName}
                  </span>
                ))}
              </div>

              {item.variationNote ? (
                <p className="mt-3 rounded border border-signal-amber/25 bg-signal-amber/10 px-3 py-2 text-xs leading-5 text-signal-amber">
                  {item.variationNote}
                </p>
              ) : null}
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.operationalImpact}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
