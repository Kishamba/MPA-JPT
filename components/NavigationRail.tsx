const navigationItems = [
  "Dashboard",
  "Venue Map",
  "Systems",
  "BOQ",
  "Timeline",
  "Risks",
  "Site Control",
  "Sources"
];

export function NavigationRail() {
  return (
    <nav className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-56 shrink-0 border-r border-white/10 bg-command-950/72 px-3 py-4 lg:block">
      <div className="mb-4 px-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Command Modules</p>
      </div>
      <div className="space-y-1">
        {navigationItems.map((item, index) => {
          const isActive = index === 0;

          return (
            <a
              key={item}
              className={`flex items-center justify-between rounded border px-3 py-2.5 text-sm transition ${
                isActive
                  ? "border-signal-cyan/45 bg-signal-cyan/10 text-white"
                  : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-slate-100"
              }`}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
            >
              <span>{item}</span>
              {isActive ? <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" /> : null}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
