import type { OperationalRisk, SourceRef } from "@/data/types";

const riskRegisterSource: SourceRef = {
  type: "Site Handbook",
  document: "MPA Operational Risk Register",
  note: "Risk Engine v1 draft register"
};

const scheduleSource: SourceRef = {
  type: "Schedule",
  document: "MPA Integrated Delivery Schedule",
  note: "Trigger and critical path reference"
};

const erpSource: SourceRef = {
  type: "ERP",
  document: "MPA Emergency Response Plan",
  note: "Emergency escalation and response interface"
};

export const risks: OperationalRisk[] = [
  {
    id: "RISK_DELAYED_ACCESS",
    title: "Delayed Site Access",
    category: "schedule",
    riskLevel: "critical",
    description: "Site access slips against the planned installation sequence for critical overlay and infrastructure works.",
    trigger: "Venue access not granted according to planned installation sequence.",
    impact: "Compresses installation period and forces parallel works, increasing SIMOPS and handover risk.",
    mitigation: "Maintain access issue log, escalate through agreed channel, resequence non-dependent tasks, protect critical path.",
    linkedSystemKeys: ["logistics", "overlay", "power"],
    linkedZoneIds: ["MPA_LOGISTICS_ROUTE", "MPA_NRG_POWER_AREA", "MPA_MAIN_STADIUM"],
    linkedBoqItemIds: ["BOQ_NRG_GENERATORS", "BOQ_CONTAINMENT_CABLE_RAMPS"],
    sourceRefs: [riskRegisterSource, scheduleSource]
  },
  {
    id: "RISK_TYPHOON",
    title: "Typhoon",
    category: "weather",
    riskLevel: "critical",
    description: "Severe weather interrupts outdoor installation, temporary works stability and delivery access.",
    trigger: "Typhoon warning or high-wind threshold affects active site work and temporary structures.",
    impact: "Stops works, delays inspections, exposes temporary assets and can force resequencing of power, overlay and logistics tasks.",
    mitigation: "Apply weather hold points, secure temporary assets, protect electrical equipment and activate recovery work windows.",
    linkedSystemKeys: ["hse", "power", "logistics", "overlay"],
    linkedZoneIds: ["MPA_NRG_POWER_AREA", "MPA_LOGISTICS_ROUTE", "MPA_CEREMONIES_COMPOUND"],
    linkedBoqItemIds: ["BOQ_NRG_GENERATORS", "BOQ_CONTAINMENT_CABLE_RAMPS", "BOQ_CEREMONIES_FITOUT"],
    sourceRefs: [riskRegisterSource, erpSource, scheduleSource]
  },
  {
    id: "RISK_HEAT_STRESS",
    title: "Heat Stress",
    category: "safety",
    riskLevel: "high",
    description: "High temperatures affect workforce, athletes and operational readiness in exposed areas.",
    trigger: "Heat index reaches welfare threshold during installation, training or Games-time operations.",
    impact: "Reduces work capacity, increases medical response demand and can disrupt athlete movement and service operations.",
    mitigation: "Deploy shade, hydration, adjusted shift timing, welfare checks and medical escalation routes.",
    linkedSystemKeys: ["hse", "sport", "logistics"],
    linkedZoneIds: ["MPA_TRAINING_AREA", "MPA_THROWING_AREA", "MPA_MED_CONDITIONING", "MPA_LOGISTICS_ROUTE"],
    linkedBoqItemIds: ["BOQ_SANITARY_ATHLETE", "BOQ_FNB_COLD_STORAGE"],
    sourceRefs: [riskRegisterSource, erpSource]
  },
  {
    id: "RISK_POWER_FAILURE",
    title: "Power Failure",
    category: "power",
    riskLevel: "critical",
    description: "Temporary power failure affects operational systems that depend on continuous supply.",
    trigger: "Generator, distribution, fuel or cable containment failure interrupts venue power supply.",
    impact: "Disrupts broadcast, security screening, ceremonies, cold storage and Games-time command functions.",
    mitigation: "Validate redundancy, load testing, fuel management, cable protection, LOTO controls and escalation procedure.",
    linkedSystemKeys: ["power", "broadcast", "security", "ceremonies"],
    linkedZoneIds: ["MPA_NRG_POWER_AREA", "MPA_BRS_COMPOUND", "MPA_SECURITY_SCREENING", "MPA_CEREMONIES_COMPOUND"],
    linkedBoqItemIds: ["BOQ_NRG_GENERATORS", "BOQ_CONTAINMENT_CABLE_RAMPS", "BOQ_BRS_CABINS_CR"],
    sourceRefs: [riskRegisterSource, erpSource, { type: "Technical Catalog", document: "Temporary Power Technical Catalog" }]
  },
  {
    id: "RISK_SECURITY_FREEZE",
    title: "Security Freeze",
    category: "security",
    riskLevel: "critical",
    description: "Security lockdown or access freeze blocks planned works and operational movements.",
    trigger: "Security command restricts site movement, vehicle access or compound entry during readiness period.",
    impact: "Blocks logistics, delays broadcast works and creates handover pressure for secure area systems.",
    mitigation: "Pre-clear critical work packs, maintain emergency access rules and align daily security work windows.",
    linkedSystemKeys: ["security", "logistics", "broadcast"],
    linkedZoneIds: ["MPA_SECURITY_SCREENING", "MPA_LOGISTICS_ROUTE", "MPA_BRS_COMPOUND", "MPA_ACR_VAO"],
    linkedBoqItemIds: ["BOQ_SECURITY_SCREENING_INFRA", "BOQ_BRS_CABINS_CR"],
    sourceRefs: [riskRegisterSource, scheduleSource]
  },
  {
    id: "RISK_BROADCAST_LATE_CHANGES",
    title: "Broadcast Late Changes",
    category: "broadcast",
    riskLevel: "critical",
    description: "Late broadcast requirements change cabin, cable route, power and installation assumptions.",
    trigger: "HB/RHB requirements change after planned design or BOQ baseline freeze.",
    impact: "Increases change-request scope, compresses installation, adds power load and creates cable route conflicts.",
    mitigation: "Lock decision gates, control late change log, validate power impact and protect cable route installation windows.",
    linkedSystemKeys: ["broadcast", "power", "logistics"],
    linkedZoneIds: ["MPA_BRS_COMPOUND", "MPA_NRG_POWER_AREA", "MPA_LOGISTICS_ROUTE"],
    linkedBoqItemIds: ["BOQ_BRS_CABINS_CR", "BOQ_CONTAINMENT_CABLE_RAMPS", "BOQ_NRG_GENERATORS"],
    sourceRefs: [riskRegisterSource, { type: "Schedule", document: "Broadcast Integration Schedule" }]
  },
  {
    id: "RISK_SIMOPS_COLLISION",
    title: "SIMOPS Collision",
    category: "logistics",
    riskLevel: "high",
    description: "Concurrent works collide across logistics, power, overlay and security-controlled areas.",
    trigger: "Multiple contractors require the same route, compound or exclusion zone during compressed delivery windows.",
    impact: "Creates safety exposure, blocked access, installation clashes and missed handover milestones.",
    mitigation: "Run daily coordination board, enforce exclusion windows, sequence high-risk tasks and publish route controls.",
    linkedSystemKeys: ["logistics", "power", "overlay", "security"],
    linkedZoneIds: ["MPA_LOGISTICS_ROUTE", "MPA_NRG_POWER_AREA", "MPA_SECURITY_SCREENING", "MPA_MAIN_STADIUM"],
    linkedBoqItemIds: ["BOQ_CONTAINMENT_CABLE_RAMPS", "BOQ_SECURITY_SCREENING_INFRA"],
    sourceRefs: [riskRegisterSource, scheduleSource, { type: "Site Handbook", document: "MPA Site Handbook" }]
  },
  {
    id: "RISK_FUEL_SPILL",
    title: "Fuel Spill",
    category: "safety",
    riskLevel: "high",
    description: "Fuel handling incident affects power compound, logistics route and environmental controls.",
    trigger: "Fuel delivery, storage or generator refueling causes spill or contamination near operational areas.",
    impact: "Creates HSE incident, power interruption, access restriction and environmental reporting requirement.",
    mitigation: "Confirm bunding, spill kits, trained fuel handlers, controlled delivery windows and ERP notification route.",
    linkedSystemKeys: ["power", "hse", "logistics"],
    linkedZoneIds: ["MPA_NRG_POWER_AREA", "MPA_LOGISTICS_ROUTE", "MPA_CNW_WASTE_AREA"],
    linkedBoqItemIds: ["BOQ_NRG_GENERATORS", "BOQ_CNW_WASTE"],
    sourceRefs: [riskRegisterSource, erpSource]
  }
];
