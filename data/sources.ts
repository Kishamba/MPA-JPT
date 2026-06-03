import type { SourceDocument } from "@/data/types";

export const sourceDocuments: SourceDocument[] = [
  {
    id: "SRC_PDP",
    title: "Project Delivery Plan",
    type: "PDP",
    fileName: "AGJ26-CL1-MPA-PDP-V01-260427.pdf",
    version: "V01",
    date: "2026-04-27",
    status: "draft",
    description: "Project delivery baseline for MPA venue scope, stakeholders, constraints and delivery profile.",
    usedFor: ["venue profile", "stakeholders", "key dates", "delivery constraints", "scope overview"],
    relatedSystemKeys: ["overlay", "logistics", "security", "power"]
  },
  {
    id: "SRC_SITE_HANDBOOK",
    title: "Site Delivery Handbook",
    type: "Site Handbook",
    fileName: "AGJ26 - OPS - Site Delivery Handbook - 260523.pdf",
    date: "2026-05-23",
    status: "working",
    description: "Operational handbook for site lifecycle, handover discipline, reporting logic and escalation controls.",
    usedFor: ["site lifecycle", "handover logic", "reporting", "escalation", "site control"],
    relatedSystemKeys: ["hse", "logistics", "overlay", "security"]
  },
  {
    id: "SRC_SCHEDULE",
    title: "Construction Schedule",
    type: "Schedule",
    fileName: "Attachment 2.1 Construction Schedule.pdf",
    status: "working",
    description: "Schedule reference for access dates, installation sequence, readiness gates and Games-time windows.",
    usedFor: ["access dates", "installation sequence", "bump-in", "security sweep", "competition windows"],
    relatedSystemKeys: ["logistics", "overlay", "power", "security", "broadcast", "ceremonies"]
  },
  {
    id: "SRC_BOQ",
    title: "BOQ CL1 MPA",
    type: "BOQ",
    fileName: "BoQ_CL1_MPA.pdf",
    status: "working",
    description: "Commercial and scope quantity reference for MPA operational packages and change exposure.",
    usedFor: ["quantities", "change requests", "packages", "system load", "operational impact"],
    relatedSystemKeys: ["power", "broadcast", "security", "ceremonies", "logistics", "hse"]
  },
  {
    id: "SRC_ERP",
    title: "Emergency Response Plan",
    type: "ERP",
    fileName: "Attachment 9.1 Emergency Response Plan.pdf",
    status: "issued",
    description: "Emergency response reference for weather, medical, safety and reporting scenarios.",
    usedFor: ["emergency scenarios", "typhoon", "flooding", "heat", "worker safety", "reporting"],
    relatedSystemKeys: ["hse", "security", "power", "logistics"]
  },
  {
    id: "SRC_TECH_CATALOG",
    title: "Technical Catalogue",
    type: "Technical Catalog",
    fileName: "Attachment 5.1 Technical Catalog.pdf",
    version: "V3.5",
    status: "for-review",
    description: "Technical reference for commodities and temporary overlay specifications.",
    usedFor: ["commodities", "technical specs", "fences", "cabins", "trackways", "toilets", "containers"],
    relatedSystemKeys: ["overlay", "power", "broadcast", "logistics", "hse"]
  },
  {
    id: "SRC_MASTERPLAN",
    title: "MPA Masterplan",
    type: "Masterplan",
    fileName: "Attachment 1.1 MPA Masterplan.pdf",
    status: "working",
    description: "Masterplan reference for venue zones, overlay placement and operational movement logic.",
    usedFor: ["zones", "layouts", "overlay location", "operational flows"],
    relatedSystemKeys: ["sport", "overlay", "security", "broadcast", "logistics"]
  },
  {
    id: "SRC_ZONING",
    title: "MPA Zoning Map",
    type: "Masterplan",
    fileName: "Attachment 1.2 MPA Zoning Map.pdf",
    status: "working",
    description: "Zoning reference for access areas, work boundaries and phased site availability.",
    usedFor: ["access zones", "work areas", "phased availability"],
    relatedSystemKeys: ["security", "logistics", "overlay", "sport"]
  }
];
