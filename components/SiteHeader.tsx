export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-command-950/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-signal-cyan">
            Olympic Command Center
          </p>
          <h1 className="mt-1 text-xl font-semibold text-white">MPA Site Bible</h1>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <span className="hidden rounded border border-white/10 bg-white/5 px-3 py-1.5 sm:inline">
            Venue Operations
          </span>
          <span className="rounded border border-signal-green/40 bg-signal-green/10 px-3 py-1.5 text-signal-green">
            Live Build Mode
          </span>
        </div>
      </div>
    </header>
  );
}
