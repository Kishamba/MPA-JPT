"use client";

import { useMemo, useState } from "react";
import { type VenueZone, type ZoneSystem, zones } from "@/data/zones";

type Layer = "Base" | "Security" | "Power" | "Broadcast" | "Ceremonies" | "Logistics" | "HSE";

const layers: Layer[] = ["Base", "Security", "Power", "Broadcast", "Ceremonies", "Logistics", "HSE"];

const layerSystem: Partial<Record<Layer, ZoneSystem>> = {
  Security: "security",
  Power: "power",
  Broadcast: "broadcast",
  Ceremonies: "ceremonies",
  Logistics: "logistics"
};

const systemStyles: Record<ZoneSystem, { border: string; bg: string; text: string; dot: string }> = {
  power: {
    border: "border-yellow-300/70",
    bg: "bg-yellow-300/16",
    text: "text-yellow-200",
    dot: "bg-yellow-300"
  },
  security: {
    border: "border-red-400/75",
    bg: "bg-red-500/16",
    text: "text-red-200",
    dot: "bg-red-400"
  },
  broadcast: {
    border: "border-blue-400/75",
    bg: "bg-blue-500/16",
    text: "text-blue-200",
    dot: "bg-blue-400"
  },
  ceremonies: {
    border: "border-purple-400/75",
    bg: "bg-purple-500/16",
    text: "text-purple-200",
    dot: "bg-purple-400"
  },
  logistics: {
    border: "border-green-400/75",
    bg: "bg-green-500/16",
    text: "text-green-200",
    dot: "bg-green-400"
  },
  sport: {
    border: "border-cyan-300/75",
    bg: "bg-cyan-400/16",
    text: "text-cyan-100",
    dot: "bg-cyan-300"
  },
  hse: {
    border: "border-orange-300/75",
    bg: "bg-orange-400/16",
    text: "text-orange-100",
    dot: "bg-orange-300"
  },
  overlay: {
    border: "border-slate-300/65",
    bg: "bg-slate-400/14",
    text: "text-slate-200",
    dot: "bg-slate-300"
  }
};

const riskStyles: Record<VenueZone["riskLevel"], string> = {
  low: "border-signal-green/35 bg-signal-green/10 text-signal-green",
  medium: "border-signal-amber/35 bg-signal-amber/10 text-signal-amber",
  high: "border-orange-300/40 bg-orange-400/10 text-orange-200",
  critical: "border-signal-red/45 bg-signal-red/10 text-signal-red"
};

const statusLabels: Record<VenueZone["status"], string> = {
  ready: "Ready",
  "in-progress": "In Progress",
  blocked: "Blocked",
  watch: "Watch"
};

function isZoneVisible(zone: VenueZone, activeLayer: Layer) {
  if (activeLayer === "Base") {
    return true;
  }

  if (activeLayer === "HSE") {
    return zone.riskLevel === "high" || zone.riskLevel === "critical";
  }

  return zone.system === layerSystem[activeLayer];
}

export function VenueMap() {
  const [activeLayer, setActiveLayer] = useState<Layer>("Base");
  const [selectedZoneId, setSelectedZoneId] = useState<string>(zones[0]?.id ?? "");

  const visibleZones = useMemo(
    () => zones.filter((zone) => isZoneVisible(zone, activeLayer)),
    [activeLayer]
  );

  const selectedZone = zones.find((zone) => zone.id === selectedZoneId) ?? visibleZones[0] ?? zones[0];

  function selectLayer(layer: Layer) {
    setActiveLayer(layer);
    const firstVisibleZone = zones.find((zone) => isZoneVisible(zone, layer));
    if (firstVisibleZone && !isZoneVisible(selectedZone, layer)) {
      setSelectedZoneId(firstVisibleZone.id);
    }
  }

  return (
    <section className="rounded-lg border border-white/10 bg-command-800/55 p-5 shadow-panel">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Venue Map</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">MPA Interactive Venue Map</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {layers.map((layer) => {
            const isActive = activeLayer === layer;

            return (
              <button
                key={layer}
                className={`rounded border px-3 py-2 text-sm transition ${
                  isActive
                    ? "border-signal-cyan/70 bg-signal-cyan/15 text-white"
                    : "border-white/10 bg-white/5 text-slate-200 hover:border-signal-cyan/60 hover:bg-signal-cyan/10"
                }`}
                type="button"
                onClick={() => selectLayer(layer)}
              >
                {layer}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid min-h-[520px] gap-4 rounded-lg border border-signal-cyan/20 bg-command-950/40 p-4 lg:grid-cols-[minmax(0,1fr)_330px]">
        <div className="relative min-h-[440px] overflow-hidden rounded border border-white/10 bg-[#05080d]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.052)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.052)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(70,216,255,0.13),transparent_24rem)]" />
          <div className="absolute left-[5%] top-[78%] h-px w-[88%] bg-signal-green/35" />
          <div className="absolute left-[48%] top-[8%] h-[82%] w-px bg-white/10" />
          <div className="absolute left-4 top-4 rounded border border-white/10 bg-command-950/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            Schematic Canvas
          </div>
          <div className="absolute bottom-4 left-4 rounded border border-white/10 bg-command-950/90 px-3 py-2 text-sm text-slate-300">
            Layer: <span className="text-signal-cyan">{activeLayer}</span>
          </div>

          {visibleZones.map((zone) => {
            const styles = systemStyles[zone.system];
            const isSelected = selectedZone?.id === zone.id;

            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setSelectedZoneId(zone.id)}
                className={`absolute rounded border p-2 text-left shadow-[0_12px_36px_rgba(0,0,0,0.28)] transition hover:scale-[1.015] hover:bg-white/10 ${
                  styles.border
                } ${styles.bg} ${isSelected ? "ring-2 ring-white/70" : ""}`}
                style={{
                  top: `${zone.mapPosition.top}%`,
                  left: `${zone.mapPosition.left}%`,
                  width: `${zone.mapPosition.width}%`,
                  height: `${zone.mapPosition.height}%`
                }}
              >
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
                  <span className={`truncate text-xs font-semibold uppercase tracking-[0.12em] ${styles.text}`}>
                    {zone.id}
                  </span>
                </span>
                <span className="mt-1 block truncate text-sm font-semibold text-white">{zone.name}</span>
              </button>
            );
          })}
        </div>

        <aside className="rounded border border-white/10 bg-command-950/72 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Zone Detail</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{selectedZone.name}</h3>
            </div>
            <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${riskStyles[selectedZone.riskLevel]}`}>
              {selectedZone.riskLevel.toUpperCase()}
            </span>
          </div>

          <dl className="mt-5 space-y-4">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">System</dt>
              <dd className={`mt-1 flex items-center gap-2 text-sm font-semibold ${systemStyles[selectedZone.system].text}`}>
                <span className={`h-2 w-2 rounded-full ${systemStyles[selectedZone.system].dot}`} />
                {selectedZone.system}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Status</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{statusLabels[selectedZone.status]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Description</dt>
              <dd className="mt-1 text-sm leading-6 text-slate-300">{selectedZone.description}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Dependencies</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {selectedZone.dependencies.map((dependency) => (
                  <span
                    key={dependency}
                    className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {dependency}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
