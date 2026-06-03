import type { SourceRef, TimelineMilestone } from "@/data/types";

const scheduleSource: SourceRef = {
  type: "Schedule",
  document: "MPA Integrated Delivery Schedule",
  note: "Timeline Reality v1 milestone baseline"
};

const handbookSource: SourceRef = {
  type: "Site Handbook",
  document: "MPA Site Delivery Handbook",
  note: "Milestone control and reporting logic"
};

export const timeline: TimelineMilestone[] = [
  {
    id: "TL_SITE_ACCESS",
    title: "Site Access",
    plannedDate: "2026-06-02",
    status: "blocked",
    ownerSystem: "logistics",
    description: "Initial venue access for site reception, setting out and critical path installation.",
    impact: "Delayed access compresses installation sequence and increases parallel work risk.",
    linkedZoneIds: ["MPA_LOGISTICS_ROUTE", "MPA_MAIN_STADIUM", "MPA_NRG_POWER_AREA"],
    linkedRiskIds: ["RISK_DELAYED_ACCESS", "RISK_SIMOPS_COLLISION"],
    sourceRefs: [scheduleSource, handbookSource]
  },
  {
    id: "TL_ACCESS_AREA_A2",
    title: "Access Area A.2",
    plannedDate: "2026-07-01",
    status: "at-risk",
    ownerSystem: "overlay",
    description: "Area access for overlay interfaces around stadium and sport operational zones.",
    impact: "Area A.2 delay can push setting out and field-adjacent installation into compressed windows.",
    linkedZoneIds: ["MPA_MAIN_STADIUM", "MPA_TRAINING_AREA", "MPA_THROWING_AREA"],
    linkedRiskIds: ["RISK_DELAYED_ACCESS", "RISK_SIMOPS_COLLISION"],
    sourceRefs: [scheduleSource]
  },
  {
    id: "TL_ACCESS_AREA_B",
    title: "Access Area B",
    plannedDate: "2026-07-01",
    status: "at-risk",
    ownerSystem: "broadcast",
    description: "Area access for broadcast and compound-related enabling works.",
    impact: "Access risk threatens broadcast cabin, cable route and power interface sequencing.",
    linkedZoneIds: ["MPA_BRS_COMPOUND", "MPA_LOGISTICS_ROUTE"],
    linkedRiskIds: ["RISK_BROADCAST_LATE_CHANGES", "RISK_SECURITY_FREEZE"],
    sourceRefs: [scheduleSource]
  },
  {
    id: "TL_ACCESS_AREA_C",
    title: "Access Area C",
    plannedDate: "2026-08-03",
    status: "planned",
    ownerSystem: "logistics",
    description: "Later access window for support areas, service movements and compound completion.",
    linkedZoneIds: ["MPA_FNB_COLD_STORAGE", "MPA_CNW_WASTE_AREA", "MPA_LOGISTICS_ROUTE"],
    linkedRiskIds: ["RISK_SIMOPS_COLLISION"],
    sourceRefs: [scheduleSource]
  },
  {
    id: "TL_BUILDING_PERMIT",
    title: "Building Permit",
    plannedDate: "2026-07-16",
    status: "to-confirm",
    ownerSystem: "overlay",
    description: "Permit confirmation gate for temporary works and controlled installation scope.",
    impact: "Permit uncertainty can block inspections and limit release of temporary works packages.",
    linkedZoneIds: ["MPA_CEREMONIES_COMPOUND", "MPA_BRS_COMPOUND", "MPA_NRG_POWER_AREA"],
    linkedRiskIds: ["RISK_DELAYED_ACCESS", "RISK_SIMOPS_COLLISION"],
    sourceRefs: [scheduleSource, handbookSource]
  },
  {
    id: "TL_POWER_ON",
    title: "Power On",
    plannedDate: "2026-07-10",
    status: "at-risk",
    ownerSystem: "power",
    description: "Temporary power energization for overlay, broadcast, security and operations.",
    impact: "Power-on slippage holds dependent commissioning and increases late integration risk.",
    linkedZoneIds: ["MPA_NRG_POWER_AREA", "MPA_BRS_COMPOUND", "MPA_SECURITY_SCREENING", "MPA_CEREMONIES_COMPOUND"],
    linkedRiskIds: ["RISK_POWER_FAILURE", "RISK_BROADCAST_LATE_CHANGES", "RISK_FUEL_SPILL"],
    sourceRefs: [scheduleSource, { type: "Technical Catalog", document: "Temporary Power Technical Catalog" }]
  },
  {
    id: "TL_SITE_HANDOVER",
    title: "Site Handover",
    plannedDate: "2026-09-05",
    status: "at-risk",
    ownerSystem: "overlay",
    description: "Client handover readiness gate for controlled operational use.",
    impact: "At-risk handover threatens transition, security sweep and Games-time readiness.",
    linkedZoneIds: ["MPA_MAIN_STADIUM", "MPA_SECURITY_SCREENING", "MPA_BRS_COMPOUND", "MPA_CEREMONIES_COMPOUND"],
    linkedRiskIds: ["RISK_DELAYED_ACCESS", "RISK_POWER_FAILURE", "RISK_SECURITY_FREEZE"],
    sourceRefs: [scheduleSource, handbookSource]
  },
  {
    id: "TL_BUMP_IN",
    title: "Bump In",
    plannedDate: "2026-09-06",
    status: "planned",
    ownerSystem: "logistics",
    description: "Operational bump-in period for final overlays, ceremonies, broadcast and service setup.",
    linkedZoneIds: ["MPA_LOGISTICS_ROUTE", "MPA_CEREMONIES_COMPOUND", "MPA_BRS_COMPOUND"],
    linkedRiskIds: ["RISK_SIMOPS_COLLISION", "RISK_SECURITY_FREEZE"],
    sourceRefs: [scheduleSource]
  },
  {
    id: "TL_SECURITY_SWEEP",
    title: "Security Sweep",
    plannedDate: "2026-09-17",
    status: "planned",
    ownerSystem: "security",
    description: "Security sweep and lockdown preparation before competition operations.",
    linkedZoneIds: ["MPA_SECURITY_SCREENING", "MPA_ACR_VAO", "MPA_MAIN_STADIUM"],
    linkedRiskIds: ["RISK_SECURITY_FREEZE"],
    sourceRefs: [scheduleSource, handbookSource]
  },
  {
    id: "TL_COMPETITION_START",
    title: "Competition Start",
    plannedDate: "2026-09-24",
    status: "planned",
    ownerSystem: "sport",
    description: "Start of competition operations at MPA venue.",
    linkedZoneIds: ["MPA_MAIN_STADIUM", "MPA_TRAINING_AREA", "MPA_MED_CONDITIONING"],
    linkedRiskIds: ["RISK_HEAT_STRESS", "RISK_POWER_FAILURE", "RISK_SECURITY_FREEZE"],
    sourceRefs: [scheduleSource, { type: "Site Handbook", document: "MPA Site Handbook" }]
  },
  {
    id: "TL_BUMP_OUT",
    title: "Bump Out",
    plannedDate: "2026-10-25",
    status: "planned",
    ownerSystem: "logistics",
    description: "Post-event bump-out and removal sequence for temporary works, waste and site reinstatement.",
    linkedZoneIds: ["MPA_LOGISTICS_ROUTE", "MPA_CNW_WASTE_AREA", "MPA_NRG_POWER_AREA"],
    linkedRiskIds: ["RISK_SIMOPS_COLLISION", "RISK_FUEL_SPILL"],
    sourceRefs: [scheduleSource, handbookSource]
  }
];
