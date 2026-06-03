import { timeline } from "@/data/timeline";

const statusStyles = {
  Complete: "border-signal-green bg-signal-green text-command-950",
  Active: "border-signal-cyan bg-signal-cyan text-command-950",
  Pending: "border-white/25 bg-command-900 text-slate-400"
};

export function TimelineStrip() {
  return (
    <section className="rounded-lg border border-white/10 bg-command-800/55 p-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Timeline</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Critical Milestones</h2>
      </div>
      <div className="mt-6 overflow-x-auto pb-2">
        <div className="grid min-w-[860px] grid-cols-8 gap-3">
          {timeline.map((milestone) => (
            <div key={milestone.name} className="relative">
              <div className="absolute left-1/2 top-4 h-px w-full bg-white/10" />
              <div
                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold ${statusStyles[milestone.status]}`}
              >
                {milestone.status === "Complete" ? "✓" : milestone.status === "Active" ? "•" : ""}
              </div>
              <p className="mt-4 text-sm font-medium text-white">{milestone.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{milestone.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
