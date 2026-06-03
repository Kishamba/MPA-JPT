import { systems } from "@/data/systems";
import type { Dependency, SourceRef, SystemKey } from "@/data/types";
import { zones } from "@/data/zones";

type SystemDetailPanelProps = {
  activeSystem: SystemKey | null;
  onClose: () => void;
};

const riskStyles: Record<Dependency["risk"], string> = {
  low: "border-signal-green/35 bg-signal-green/10 text-signal-green",
  medium: "border-signal-amber/35 bg-signal-amber/10 text-signal-amber",
  high: "border-orange-300/40 bg-orange-400/10 text-orange-200",
  critical: "border-signal-red/45 bg-signal-red/10 text-signal-red"
};

function uniqueDependencies(dependencies: Dependency[]) {
  return Array.from(new Map(dependencies.map((dependency) => [dependency.id, dependency])).values());
}

function uniqueSources(sourceRefs: SourceRef[]) {
  return Array.from(
    new Map(
      sourceRefs.map((source) => [
        `${source.type}-${source.document}-${source.page ?? "na"}-${source.note ?? ""}`,
        source
      ])
    ).values()
  );
}

export function SystemDetailPanel({ activeSystem, onClose }: SystemDetailPanelProps) {
  if (!activeSystem) {
    return (
      <section className="rounded-lg border border-white/10 bg-command-800/55 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">System Intelligence</p>
        <p className="mt-3 text-sm text-slate-300">Select a system to inspect operational dependencies.</p>
      </section>
    );
  }

  const system = systems.find((item) => item.key === activeSystem);
  const relatedZones = zones.filter((zone) => zone.system === activeSystem);
  const dependencies = uniqueDependencies(relatedZones.flatMap((zone) => zone.dependencies));
  const sources = uniqueSources(relatedZones.flatMap((zone) => zone.sourceRefs));
  const highExposureZones = relatedZones.filter(
    (zone) => zone.riskLevel === "high" || zone.riskLevel === "critical"
  );

  return (
    <section className="rounded-lg border border-signal-cyan/20 bg-command-800/65 p-5 shadow-panel">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">System Intelligence</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{system?.name ?? activeSystem}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">{system?.detail}</p>
        </div>
        <button
          className="h-8 rounded border border-white/10 bg-white/5 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 transition hover:border-signal-cyan/60 hover:bg-signal-cyan/10 hover:text-white"
          type="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded border border-white/10 bg-command-950/55 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Related Zones</p>
            <span className="text-xs text-slate-400">
              {highExposureZones.length} high / critical
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {relatedZones.length > 0 ? (
              relatedZones.map((zone) => (
                <div key={zone.id} className="rounded border border-white/10 bg-white/[0.035] p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{zone.name}</p>
                    <span className={`rounded border px-2 py-1 text-xs font-semibold ${riskStyles[zone.riskLevel]}`}>
                      {zone.riskLevel}
                    </span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">{zone.status}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-400">No zones currently assigned to this system.</p>
            )}
          </div>
        </div>

        <div className="rounded border border-white/10 bg-command-950/55 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Dependency Map</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {dependencies.length > 0 ? (
              dependencies.map((dependency) => (
                <span
                  key={dependency.id}
                  className={`rounded border px-2.5 py-1 text-xs ${riskStyles[dependency.risk]}`}
                >
                  {dependency.label} · {dependency.system}
                </span>
              ))
            ) : (
              <span className="text-sm text-slate-400">No dependencies mapped.</span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded border border-white/10 bg-command-950/55 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Source References</p>
        <div className="mt-3 grid gap-2 lg:grid-cols-2">
          {sources.length > 0 ? (
            sources.map((source) => (
              <div
                key={`${source.type}-${source.document}-${source.page ?? "na"}-${source.note ?? ""}`}
                className="rounded border border-white/10 bg-white/[0.035] p-3"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold uppercase tracking-[0.14em] text-signal-cyan">
                    {source.type}
                  </span>
                  <span className="text-slate-300">{source.document}</span>
                  {source.page ? <span className="text-slate-500">p. {source.page}</span> : null}
                </div>
                {source.note ? <p className="mt-1 text-xs leading-5 text-slate-400">{source.note}</p> : null}
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-400">No source references mapped.</p>
          )}
        </div>
      </div>
    </section>
  );
}
