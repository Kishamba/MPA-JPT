"use client";

import { useState } from "react";
import { BoqIntelligence } from "@/components/BoqIntelligence";
import { DashboardHero } from "@/components/DashboardHero";
import { IntelligenceSidebar } from "@/components/IntelligenceSidebar";
import { NavigationRail } from "@/components/NavigationRail";
import { RiskMatrix } from "@/components/RiskMatrix";
import { SiteControlPanel } from "@/components/SiteControlPanel";
import { SiteHeader } from "@/components/SiteHeader";
import { SourceRegistry } from "@/components/SourceRegistry";
import { SystemCard } from "@/components/SystemCard";
import { SystemDetailPanel } from "@/components/SystemDetailPanel";
import { TimelineStrip } from "@/components/TimelineStrip";
import { VenueMap } from "@/components/VenueMap";
import { systems } from "@/data/systems";
import type { SystemKey } from "@/data/types";

export default function Home() {
  const [activeSystem, setActiveSystem] = useState<SystemKey | null>(null);

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="flex">
        <NavigationRail />
        <section className="min-w-0 flex-1 px-4 py-4 md:px-5">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <div id="dashboard">
              <DashboardHero />
            </div>
            <div id="venue-map">
              <VenueMap />
            </div>
            <section id="systems">
              <div className="mb-3 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Systems Overview
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Venue Delivery Systems</h2>
                </div>
                <span className="text-sm text-slate-400">{systems.length} systems</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
                {systems.map((system) => (
                  <SystemCard
                    key={system.name}
                    system={system}
                    isActive={activeSystem === system.key}
                    onClick={() => setActiveSystem(system.key)}
                  />
                ))}
              </div>
              <div className="mt-4">
                <SystemDetailPanel activeSystem={activeSystem} onClose={() => setActiveSystem(null)} />
              </div>
            </section>
            <div id="boq">
              <BoqIntelligence />
            </div>
            <div id="timeline">
              <TimelineStrip />
            </div>
            <div id="risks">
              <RiskMatrix />
            </div>
            <div id="site-control">
              <SiteControlPanel />
            </div>
            <div id="sources">
              <SourceRegistry />
            </div>
          </div>
        </section>
        <IntelligenceSidebar />
      </div>
    </main>
  );
}
