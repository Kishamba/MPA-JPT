import { DashboardHero } from "@/components/DashboardHero";
import { RiskMatrix } from "@/components/RiskMatrix";
import { SiteHeader } from "@/components/SiteHeader";
import { SystemCard } from "@/components/SystemCard";
import { TimelineStrip } from "@/components/TimelineStrip";
import { VenueMap } from "@/components/VenueMap";
import { systems } from "@/data/systems";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 md:py-8">
        <DashboardHero />
        <VenueMap />
        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Systems Overview
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Venue Delivery Systems</h2>
            </div>
            <span className="text-sm text-slate-400">{systems.length} systems</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {systems.map((system) => (
              <SystemCard key={system.name} system={system} />
            ))}
          </div>
        </section>
        <TimelineStrip />
        <RiskMatrix />
      </div>
    </main>
  );
}
