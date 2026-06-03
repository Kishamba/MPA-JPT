export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-command-950/90 backdrop-blur-xl">
      <div className="flex min-h-[57px] items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-base font-semibold text-white">MPA Site Bible</h1>
          <span className="hidden h-5 w-px bg-white/10 sm:block" />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-signal-cyan sm:inline">
            CL1 / MPA
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="hidden rounded border border-white/10 bg-white/5 px-2.5 py-1.5 font-semibold uppercase tracking-[0.14em] text-slate-300 md:inline">
            Asian Games 2026
          </span>
          <span className="rounded border border-signal-amber/40 bg-signal-amber/10 px-2.5 py-1.5 font-semibold uppercase tracking-[0.12em] text-signal-amber">
            Draft Intelligence System
          </span>
        </div>
      </div>
    </header>
  );
}
