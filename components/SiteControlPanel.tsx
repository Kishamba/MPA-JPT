import { escalationRules, siteControlStages } from "@/data/siteControl";
import type { SiteControlStage } from "@/data/types";
import { zones } from "@/data/zones";

const statusStyles: Record<SiteControlStage["status"], string> = {
  "not-started": "border-white/15 bg-white/5 text-slate-400",
  blocked: "border-signal-red/40 bg-signal-red/10 text-signal-red",
  "in-progress": "border-signal-cyan/35 bg-signal-cyan/10 text-signal-cyan",
  "ready-for-review": "border-signal-amber/40 bg-signal-amber/10 text-signal-amber",
  completed: "border-signal-green/35 bg-signal-green/10 text-signal-green"
};

const levelStyles = {
  site: "border-signal-cyan/30 bg-signal-cyan/10 text-signal-cyan",
  cluster: "border-signal-green/30 bg-signal-green/10 text-signal-green",
  project: "border-signal-amber/35 bg-signal-amber/10 text-signal-amber",
  executive: "border-signal-red/40 bg-signal-red/10 text-signal-red"
};

const zoneById = new Map(zones.map((zone) => [zone.id, zone]));

export function SiteControlPanel() {
  return (
    <section className="rounded-lg border border-white/10 bg-command-800/55 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Site Control</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Lifecycle, Handovers, Reporting</h2>
        </div>
        <span className="text-sm text-slate-400">No handover, no use.</span>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-3">
        {siteControlStages
          .slice()
          .sort((a, b) => a.sequence - b.sequence)
          .map((stage) => {
            const linkedZones = stage.linkedZoneIds
              .map((zoneId) => zoneById.get(zoneId))
              .filter((zone) => zone !== undefined);

            return (
              <article key={stage.id} className="rounded-lg border border-white/10 bg-command-950/55 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Stage {stage.sequence}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-white">{stage.title}</h3>
                  </div>
                  <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${statusStyles[stage.status]}`}>
                    {stage.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">{stage.purpose}</p>

                <div className="mt-4 rounded border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Control Point</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{stage.controlPoint}</p>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Required Records</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {stage.requiredRecords.map((record) => (
                      <span key={record} className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                        {record}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Linked Systems</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {stage.linkedSystemKeys.map((system) => (
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
                </div>
              </article>
            );
          })}
      </div>

      <div className="mt-5 rounded-lg border border-white/10 bg-command-950/55 p-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Escalation Rules</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Reporting And Decision Control</h3>
          </div>
          <span className="hidden text-sm text-slate-400 sm:inline">If it is not reported, it is not done.</span>
        </div>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {escalationRules.map((rule) => (
            <article key={rule.id} className="rounded border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{rule.trigger}</p>
                  <h4 className="mt-2 text-sm font-semibold text-white">{rule.description}</h4>
                </div>
                <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${levelStyles[rule.level]}`}>
                  {rule.level}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{rule.requiredAction}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
