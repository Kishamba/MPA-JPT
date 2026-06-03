import { risks } from "@/data/risks";
import { timeline } from "@/data/timeline";
import type { TimelineMilestone } from "@/data/types";
import { zones } from "@/data/zones";

const statusStyles: Record<TimelineMilestone["status"], string> = {
  planned: "border-blue-300/30 bg-blue-400/10 text-blue-200",
  blocked: "border-signal-red/45 bg-signal-red/10 text-signal-red",
  delayed: "border-orange-300/45 bg-orange-400/10 text-orange-200",
  "at-risk": "border-yellow-300/45 bg-yellow-300/10 text-yellow-200",
  completed: "border-signal-green/35 bg-signal-green/10 text-signal-green",
  "to-confirm": "border-purple-300/45 bg-purple-400/10 text-purple-200"
};

const zoneById = new Map(zones.map((zone) => [zone.id, zone]));
const riskById = new Map(risks.map((risk) => [risk.id, risk]));

const blockedDelayedCount = timeline.filter(
  (milestone) => milestone.status === "blocked" || milestone.status === "delayed"
).length;
const atRiskCount = timeline.filter((milestone) => milestone.status === "at-risk").length;
const nextCriticalMilestone =
  timeline.find((milestone) => milestone.status === "blocked") ??
  timeline.find((milestone) => milestone.status === "delayed") ??
  timeline.find((milestone) => milestone.status === "at-risk") ??
  timeline[0];

export function TimelineStrip() {
  return (
    <section className="rounded-lg border border-white/10 bg-command-800/55 p-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Timeline Reality</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Critical Milestones</h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-4">
          <div className="rounded border border-white/10 bg-command-950/55 px-3 py-2">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Total</p>
            <p className="mt-1 text-lg font-semibold text-white">{timeline.length}</p>
          </div>
          <div className="rounded border border-signal-red/25 bg-signal-red/10 px-3 py-2">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Blocked/Delayed</p>
            <p className="mt-1 text-lg font-semibold text-signal-red">{blockedDelayedCount}</p>
          </div>
          <div className="rounded border border-yellow-300/25 bg-yellow-300/10 px-3 py-2">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">At Risk</p>
            <p className="mt-1 text-lg font-semibold text-yellow-200">{atRiskCount}</p>
          </div>
          <div className="rounded border border-white/10 bg-command-950/55 px-3 py-2">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Next Critical</p>
            <p className="mt-1 truncate text-sm font-semibold text-white">{nextCriticalMilestone.title}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {timeline.map((milestone) => {
          const linkedZones = milestone.linkedZoneIds
            .map((zoneId) => zoneById.get(zoneId))
            .filter((zone) => zone !== undefined);
          const linkedRisks = milestone.linkedRiskIds
            .map((riskId) => riskById.get(riskId))
            .filter((risk) => risk !== undefined);

          return (
            <article key={milestone.id} className="rounded-lg border border-white/10 bg-command-950/55 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{milestone.ownerSystem}</p>
                  <h3 className="mt-2 text-base font-semibold text-white">{milestone.title}</h3>
                </div>
                <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${statusStyles[milestone.status]}`}>
                  {milestone.status}
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded border border-white/10 bg-white/[0.035] px-3 py-2">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Planned</p>
                  <p className="mt-1 text-sm font-semibold text-white">{milestone.plannedDate}</p>
                </div>
                {milestone.currentDate ? (
                  <div className="rounded border border-white/10 bg-white/[0.035] px-3 py-2">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Current</p>
                    <p className="mt-1 text-sm font-semibold text-signal-amber">{milestone.currentDate}</p>
                  </div>
                ) : null}
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">{milestone.description}</p>
              {milestone.impact ? (
                <p className="mt-3 rounded border border-signal-amber/25 bg-signal-amber/10 px-3 py-2 text-sm leading-6 text-signal-amber">
                  {milestone.impact}
                </p>
              ) : null}

              <div className="mt-4 grid gap-3">
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
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Linked Risks</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {linkedRisks.map((risk) => (
                      <span key={risk.id} className="rounded border border-signal-red/20 bg-signal-red/10 px-2.5 py-1 text-xs text-slate-200">
                        {risk.title}
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
