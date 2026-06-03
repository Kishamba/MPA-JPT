import type { SiteSystem } from "@/data/systems";

const statusStyles: Record<SiteSystem["status"], string> = {
  Nominal: "border-signal-green/35 bg-signal-green/10 text-signal-green",
  Watch: "border-signal-amber/35 bg-signal-amber/10 text-signal-amber",
  Critical: "border-signal-red/35 bg-signal-red/10 text-signal-red"
};

export function SystemCard({ system }: { system: SiteSystem }) {
  return (
    <article className="rounded-lg border border-white/10 bg-command-800/60 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-white">{system.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{system.owner}</p>
        </div>
        <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${statusStyles[system.status]}`}>
          {system.status}
        </span>
      </div>
      <p className="mt-4 min-h-12 text-sm leading-6 text-slate-300">{system.detail}</p>
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
          <span>Readiness</span>
          <span>{system.readiness}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-signal-cyan" style={{ width: `${system.readiness}%` }} />
        </div>
      </div>
    </article>
  );
}
