import { risks } from "@/data/risks";

const criticalSystems = ["Power", "Security", "Broadcast", "Ceremonies"];
const criticalRisks = risks.filter((risk) => risk.riskLevel === "critical");
const topCriticalRiskTitles = criticalRisks.slice(0, 4).map((risk) => risk.title);

export function IntelligenceSidebar() {
  return (
    <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-80 shrink-0 overflow-y-auto border-l border-white/10 bg-command-950/68 p-4 xl:block">
      <section className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Intelligence Context</p>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-slate-500">Project</dt>
            <dd className="mt-1 font-semibold text-white">MPA Site Bible</dd>
          </div>
          <div>
            <dt className="text-slate-500">Venue</dt>
            <dd className="mt-1 text-slate-200">Nagoya City Mizuho Park Athletic Stadium</dd>
          </div>
          <div>
            <dt className="text-slate-500">Mode</dt>
            <dd className="mt-1 text-signal-cyan">Operational Intelligence</dd>
          </div>
          <div>
            <dt className="text-slate-500">Data Status</dt>
            <dd className="mt-1 text-signal-amber">Draft / In Progress</dd>
          </div>
        </dl>
      </section>

      <section className="mt-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Critical Systems</p>
        <div className="mt-3 space-y-2">
          {criticalSystems.map((system) => (
            <div key={system} className="flex items-center justify-between rounded border border-white/10 bg-command-900/65 px-3 py-2">
              <span className="text-sm text-slate-200">{system}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-signal-amber" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Active Risks</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded border border-white/10 bg-command-900/65 p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Total</p>
            <p className="mt-1 text-xl font-semibold text-white">{risks.length}</p>
          </div>
          <div className="rounded border border-signal-red/25 bg-signal-red/10 p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Critical</p>
            <p className="mt-1 text-xl font-semibold text-signal-red">{criticalRisks.length}</p>
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {topCriticalRiskTitles.map((riskTitle) => (
            <div key={riskTitle} className="rounded border border-signal-red/20 bg-signal-red/8 px-3 py-2 text-sm text-slate-200">
              {riskTitle}
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
