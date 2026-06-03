export function DashboardHero() {
  const metrics = [
    { label: "Systems", value: "8", tone: "text-signal-cyan" },
    { label: "Critical Risks", value: "1", tone: "text-signal-red" },
    { label: "Readiness", value: "83%", tone: "text-signal-green" },
    { label: "Milestones", value: "8", tone: "text-signal-amber" }
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-panel">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          <span>Master Venue Control</span>
          <span className="h-1 w-1 rounded-full bg-signal-cyan" />
          <span>Engineering Dashboard</span>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
          Integrated site intelligence for delivery, operations, and Games-time control.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
          A single command surface for venue systems, milestone readiness, operational risks,
          and zone-level coordination.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-white/10 bg-command-800/70 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
            <p className={`mt-3 text-3xl font-semibold ${metric.tone}`}>{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
