import type { EscalationRule, SiteControlStage, SourceRef } from "@/data/types";

const handbookSource: SourceRef = {
  type: "Site Handbook",
  document: "MPA Site Delivery Handbook",
  note: "Site control lifecycle and reporting logic"
};

const scheduleSource: SourceRef = {
  type: "Schedule",
  document: "MPA Integrated Delivery Schedule",
  note: "Stage gate and readiness timing reference"
};

const erpSource: SourceRef = {
  type: "ERP",
  document: "MPA Emergency Response Plan",
  note: "Escalation and incident response interface"
};

export const siteControlStages: SiteControlStage[] = [
  {
    id: "CTRL_SITE_RECEPTION",
    title: "Site Reception",
    sequence: 1,
    status: "completed",
    purpose: "Confirm the received site condition before work starts. Reception defines the initial condition.",
    controlPoint: "Baseline condition record accepted by site delivery lead before setting out begins.",
    requiredRecords: ["Reception checklist", "Photo record", "Access constraints log", "Existing condition register"],
    linkedSystemKeys: ["logistics", "overlay", "hse"],
    linkedZoneIds: ["MPA_LOGISTICS_ROUTE", "MPA_MAIN_STADIUM", "MPA_SECURITY_SCREENING"],
    sourceRefs: [handbookSource, scheduleSource]
  },
  {
    id: "CTRL_SETTING_OUT",
    title: "Setting Out / Marking",
    sequence: 2,
    status: "in-progress",
    purpose: "Translate masterplan intent into controlled field markings before installation teams mobilize.",
    controlPoint: "Marked zones match approved masterplan and no clashes remain with access, security or power routes.",
    requiredRecords: ["Setting-out drawing", "Marked-zone photos", "Clash log", "Approval note"],
    linkedSystemKeys: ["overlay", "power", "security"],
    linkedZoneIds: ["MPA_NRG_POWER_AREA", "MPA_BRS_COMPOUND", "MPA_CEREMONIES_COMPOUND"],
    sourceRefs: [handbookSource, { type: "Masterplan", document: "MPA Venue Masterplan" }]
  },
  {
    id: "CTRL_BUILDING_PERIOD",
    title: "Building Period",
    sequence: 3,
    status: "in-progress",
    purpose: "Control installation, SIMOPS, daily reporting and package readiness. If it is not reported, it is not done.",
    controlPoint: "Daily work status, blockers and handover risks captured before next shift planning.",
    requiredRecords: ["Daily site report", "SIMOPS board", "Permit register", "Issue and action log"],
    linkedSystemKeys: ["logistics", "power", "broadcast", "overlay"],
    linkedZoneIds: ["MPA_LOGISTICS_ROUTE", "MPA_NRG_POWER_AREA", "MPA_BRS_COMPOUND", "MPA_MAIN_STADIUM"],
    sourceRefs: [handbookSource, scheduleSource]
  },
  {
    id: "CTRL_INSPECTION",
    title: "Inspection",
    sequence: 4,
    status: "not-started",
    purpose: "Verify installed scope before operational use or client handover.",
    controlPoint: "No handover, no use. Inspection defects must be recorded and closed or accepted with mitigation.",
    requiredRecords: ["Inspection checklist", "Defect list", "Photo evidence", "Safety sign-off"],
    linkedSystemKeys: ["hse", "power", "security", "broadcast"],
    linkedZoneIds: ["MPA_NRG_POWER_AREA", "MPA_SECURITY_SCREENING", "MPA_BRS_COMPOUND", "MPA_MED_CONDITIONING"],
    sourceRefs: [handbookSource, erpSource]
  },
  {
    id: "CTRL_CLIENT_HANDOVER",
    title: "Client Handover",
    sequence: 5,
    status: "not-started",
    purpose: "Transfer accepted zones or systems to client/operations with clear scope, condition and constraints.",
    controlPoint: "Signed handover record confirms accepted condition, open items and permitted operational use.",
    requiredRecords: ["Handover certificate", "Open items list", "As-built markups", "Operational constraints note"],
    linkedSystemKeys: ["sport", "security", "power", "broadcast", "ceremonies"],
    linkedZoneIds: ["MPA_MAIN_STADIUM", "MPA_BRS_COMPOUND", "MPA_CEREMONIES_COMPOUND", "MPA_SECURITY_SCREENING"],
    sourceRefs: [handbookSource, scheduleSource]
  },
  {
    id: "CTRL_TRANSITION",
    title: "Transition",
    sequence: 6,
    status: "not-started",
    purpose: "Move from build mode to operational mode with stable access, command and reporting routines.",
    controlPoint: "Operational control room, escalation route and daily reporting cadence are active.",
    requiredRecords: ["Transition checklist", "Command contacts", "Access protocol", "Readiness dashboard"],
    linkedSystemKeys: ["security", "logistics", "hse", "sport"],
    linkedZoneIds: ["MPA_MAIN_STADIUM", "MPA_TRAINING_AREA", "MPA_ACR_VAO", "MPA_MED_CONDITIONING"],
    sourceRefs: [handbookSource, erpSource]
  },
  {
    id: "CTRL_CLIENT_HANDBACK",
    title: "Client Handback",
    sequence: 7,
    status: "not-started",
    purpose: "Confirm client returns zones for dismantling with condition, constraints and live operational risks understood.",
    controlPoint: "Handback record defines what can be dismantled, protected or accessed.",
    requiredRecords: ["Handback certificate", "Condition photos", "Protection list", "Residual risk log"],
    linkedSystemKeys: ["overlay", "logistics", "hse"],
    linkedZoneIds: ["MPA_MAIN_STADIUM", "MPA_LOGISTICS_ROUTE", "MPA_CEREMONIES_COMPOUND"],
    sourceRefs: [handbookSource]
  },
  {
    id: "CTRL_DISMANTLING_PERIOD",
    title: "Dismantling Period",
    sequence: 8,
    status: "not-started",
    purpose: "Control removal works, route access, waste movement and residual safety risks after operations.",
    controlPoint: "Dismantling sequence avoids uncontrolled SIMOPS and protects client assets.",
    requiredRecords: ["Dismantling plan", "Waste transfer records", "Permit register", "Daily site report"],
    linkedSystemKeys: ["logistics", "overlay", "power", "hse"],
    linkedZoneIds: ["MPA_LOGISTICS_ROUTE", "MPA_CNW_WASTE_AREA", "MPA_NRG_POWER_AREA"],
    sourceRefs: [handbookSource, scheduleSource]
  },
  {
    id: "CTRL_SITE_REINSTATEMENT",
    title: "Site Reinstatement",
    sequence: 9,
    status: "not-started",
    purpose: "Return the site to the agreed condition and close remaining defects, records and claims.",
    controlPoint: "Final reinstatement acceptance confirms no unresolved damage, waste or access obligations remain.",
    requiredRecords: ["Reinstatement checklist", "Final photo record", "Defect closure log", "Acceptance certificate"],
    linkedSystemKeys: ["overlay", "logistics", "hse"],
    linkedZoneIds: ["MPA_MAIN_STADIUM", "MPA_LOGISTICS_ROUTE", "MPA_CNW_WASTE_AREA"],
    sourceRefs: [handbookSource]
  }
];

export const escalationRules: EscalationRule[] = [
  {
    id: "ESC_SAFETY_IMPACT",
    trigger: "Safety impact",
    level: "site",
    description: "Any incident, unsafe condition or control failure that can affect people, emergency access or public safety.",
    requiredAction: "Stop affected works, make area safe, notify HSE lead and record corrective action before restart.",
    sourceRefs: [handbookSource, erpSource]
  },
  {
    id: "ESC_SCHEDULE_IMPACT",
    trigger: "Schedule impact",
    level: "cluster",
    description: "A delay threatens a stage gate, handover, inspection, transition or Games-time readiness milestone.",
    requiredAction: "Log issue, identify critical path impact, propose resequence and escalate recovery decision.",
    sourceRefs: [handbookSource, scheduleSource]
  },
  {
    id: "ESC_COST_IMPACT",
    trigger: "Cost impact",
    level: "project",
    description: "A site condition, delay or instruction creates cost exposure beyond approved package assumptions.",
    requiredAction: "Capture cause, evidence and estimate; route through commercial review before commitment.",
    sourceRefs: [handbookSource, { type: "BOQ", document: "MPA Operational BOQ Intelligence Register" }]
  },
  {
    id: "ESC_SCOPE_CHANGE",
    trigger: "Scope change",
    level: "project",
    description: "Requested works differ from baseline masterplan, BOQ, handover condition or approved technical scope.",
    requiredAction: "Freeze informal instruction, raise change record, confirm owner, impact and approval route.",
    sourceRefs: [handbookSource, { type: "BOQ", document: "MPA Operational BOQ Intelligence Register" }]
  },
  {
    id: "ESC_CLIENT_COMMITMENT",
    trigger: "Client commitment impact",
    level: "cluster",
    description: "A decision or issue affects promised client handover, access, operating condition or service level.",
    requiredAction: "Escalate with options, decision deadline and client-facing impact statement.",
    sourceRefs: [handbookSource, scheduleSource]
  },
  {
    id: "ESC_COMPLIANCE",
    trigger: "Legal/compliance issue",
    level: "executive",
    description: "A permit, inspection, code, safety, environmental or contractual compliance matter is at risk.",
    requiredAction: "Stop unsupported activity, preserve evidence and escalate to compliance owner for direction.",
    sourceRefs: [handbookSource, erpSource]
  },
  {
    id: "ESC_REPUTATION",
    trigger: "Reputation issue",
    level: "executive",
    description: "An issue may attract client, public, media, broadcast, athlete or stakeholder visibility.",
    requiredAction: "Escalate facts, affected parties, response options and holding position before external commitment.",
    sourceRefs: [handbookSource]
  }
];
