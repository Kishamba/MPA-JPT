import type { Dependency, SourceRef, Zone } from "@/data/types";

const commonMasterplan: SourceRef = {
  type: "Masterplan",
  document: "MPA Venue Masterplan",
  note: "Schematic map position reference"
};

const dep = (
  id: string,
  label: string,
  system: Dependency["system"],
  risk: Dependency["risk"]
): Dependency => ({
  id,
  label,
  system,
  risk
});

export const zones: Zone[] = [
  {
    id: "MPA_MAIN_STADIUM",
    name: "Main Stadium / FOP",
    shortName: "FOP",
    system: "sport",
    description: "Main field of play and stadium operational core for athletics, ceremonies and Games-time activity.",
    riskLevel: "high",
    status: "in-progress",
    dependencies: [
      dep("security-perimeter", "Security perimeter", "security", "critical"),
      dep("venue-power", "Power", "power", "critical"),
      dep("broadcast-interface", "Broadcast", "broadcast", "high"),
      dep("ceremonies-interface", "Ceremonies", "ceremonies", "high"),
      dep("athlete-flow", "Athlete flow", "sport", "high")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Overlay BOQ", note: "FOP overlay scope and temporary works" },
      { type: "PDP", document: "MPA Project Delivery Plan", note: "Core venue operational zone" },
      { type: "Schedule", document: "MPA Integrated Delivery Schedule", note: "FOP readiness and handover milestones" }
    ],
    mapPosition: { top: 23, left: 30, width: 29, height: 28 }
  },
  {
    id: "MPA_TRAINING_AREA",
    name: "Training Area / Track & Jump Warm-up",
    shortName: "TRAIN",
    system: "sport",
    description: "Athlete warm-up and preparation area for track and jumping events.",
    riskLevel: "high",
    status: "in-progress",
    dependencies: [
      dep("athlete-access", "Athlete access", "sport", "high"),
      dep("security-screening", "Security screening", "security", "critical"),
      dep("medical-support", "Medical", "hse", "high"),
      dep("training-power", "Power", "power", "high")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Overlay BOQ", note: "Training area overlay and equipment interfaces" },
      { type: "PDP", document: "MPA Project Delivery Plan", note: "Athlete operations dependency" },
      { type: "Schedule", document: "MPA Integrated Delivery Schedule", note: "Warm-up area handover sequence" }
    ],
    mapPosition: { top: 58, left: 25, width: 27, height: 16 }
  },
  {
    id: "MPA_THROWING_AREA",
    name: "Throwing Events Warm-up Area",
    shortName: "THROW",
    system: "sport",
    description: "Dedicated warm-up and preparation zone for throwing events.",
    riskLevel: "medium",
    status: "ready",
    dependencies: [
      dep("throw-athlete-access", "Athlete access", "sport", "medium"),
      dep("equipment-storage", "Equipment storage", "logistics", "medium"),
      dep("field-protection", "Field protection", "overlay", "medium"),
      dep("throw-security", "Security", "security", "high")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Overlay BOQ", note: "Sport equipment and field protection quantities" },
      { type: "Site Handbook", document: "MPA Site Handbook", note: "Warm-up operating constraints" }
    ],
    mapPosition: { top: 17, left: 8, width: 19, height: 20 }
  },
  {
    id: "MPA_CEREMONIES_COMPOUND",
    name: "Ceremonies Compound",
    shortName: "CER",
    system: "ceremonies",
    description: "Reserved operational area for ceremonies production, preparation, storage and backstage support.",
    riskLevel: "critical",
    status: "in-progress",
    dependencies: [
      dep("cer-power", "Power", "power", "critical"),
      dep("cer-security", "Security", "security", "critical"),
      dep("cer-logistics", "Logistics", "logistics", "high"),
      dep("cer-broadcast", "Broadcast", "broadcast", "high"),
      dep("schedule-control", "Schedule control", "ceremonies", "critical")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Overlay BOQ", note: "Backstage, storage and temporary compound scope" },
      { type: "PDP", document: "MPA Project Delivery Plan", note: "Ceremonies operational readiness" },
      { type: "Schedule", document: "Ceremonies Rehearsal Schedule", note: "Protected rehearsal and install windows" }
    ],
    mapPosition: { top: 9, left: 62, width: 24, height: 17 }
  },
  {
    id: "MPA_BRS_COMPOUND",
    name: "Broadcast Compound / BRS",
    shortName: "BRS",
    system: "broadcast",
    description: "Broadcast compound including HB/RHB offices, equipment storage, audio, camera and media support interfaces.",
    riskLevel: "critical",
    status: "delayed",
    dependencies: [
      dep("brs-power", "Power", "power", "critical"),
      dep("brs-cabins", "Cabins", "overlay", "high"),
      dep("cable-routes", "Cable routes", "broadcast", "critical"),
      dep("brs-security", "Security", "security", "high"),
      dep("late-change-control", "Late change control", "broadcast", "critical")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Broadcast BOQ", note: "BRS cabins, storage and technical support scope" },
      { type: "Technical Catalog", document: "Broadcast Technical Catalog", note: "HB/RHB technical interfaces" },
      { type: "Schedule", document: "Broadcast Integration Schedule", note: "Cable route and compound readiness" }
    ],
    mapPosition: { top: 30, left: 65, width: 25, height: 15 }
  },
  {
    id: "MPA_NRG_POWER_AREA",
    name: "Overlay Power Area / NRG",
    shortName: "NRG",
    system: "power",
    description: "Generator, fuel, distribution and temporary power infrastructure supporting venue overlay and operations.",
    riskLevel: "critical",
    status: "blocked",
    dependencies: [
      dep("fuel-logistics", "Fuel logistics", "logistics", "critical"),
      dep("cable-containment", "Cable containment", "power", "critical"),
      dep("fire-inspection", "Fire inspection", "hse", "high"),
      dep("weather-protection", "Weather protection", "hse", "high"),
      dep("loto", "LOTO", "power", "critical")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Power BOQ", note: "Generators, distribution and cable containment" },
      { type: "Technical Catalog", document: "Temporary Power Technical Catalog", note: "Generator and distribution specifications" },
      { type: "ERP", document: "MPA Emergency Response Plan", note: "Fuel, fire and electrical isolation controls" }
    ],
    mapPosition: { top: 53, left: 68, width: 22, height: 15 }
  },
  {
    id: "MPA_SECURITY_SCREENING",
    name: "PSA / VSA / ACP Security Screening",
    shortName: "PSA/VSA",
    system: "security",
    description: "Pedestrian, vehicle and accreditation control layers protecting secure and operational areas.",
    riskLevel: "critical",
    status: "in-progress",
    dependencies: [
      dep("fencing", "Fencing", "overlay", "critical"),
      dep("accreditation", "Accreditation", "security", "critical"),
      dep("crowd-flow", "Crowd flow", "security", "high"),
      dep("security-staffing", "Staffing", "security", "critical"),
      dep("police-coordination", "Police/security coordination", "security", "critical")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Security Overlay BOQ", note: "Screening, fencing and ACP infrastructure" },
      { type: "PDP", document: "MPA Project Delivery Plan", note: "Secure venue access strategy" },
      { type: "ERP", document: "MPA Emergency Response Plan", note: "Incident access and evacuation interface" }
    ],
    mapPosition: { top: 43, left: 7, width: 21, height: 12 }
  },
  {
    id: "MPA_LOGISTICS_ROUTE",
    name: "Logistics Route / Service Access",
    shortName: "LOG",
    system: "logistics",
    description: "Delivery, service vehicle and material movement route connecting compounds, storage and work zones.",
    riskLevel: "high",
    status: "delayed",
    dependencies: [
      dep("access-permits", "Access permits", "security", "high"),
      dep("traffic-control", "Traffic control", "logistics", "high"),
      dep("log-security", "Security", "security", "high"),
      dep("trackway", "Trackway", "overlay", "medium"),
      dep("delivery-scheduling", "Scheduling", "logistics", "high")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Logistics BOQ", note: "Trackway, route protection and service access scope" },
      { type: "Schedule", document: "MPA Integrated Delivery Schedule", note: "Delivery windows and compound access" },
      { type: "Site Handbook", document: "MPA Site Handbook", note: "Vehicle movement rules" }
    ],
    mapPosition: { top: 82, left: 7, width: 85, height: 8 }
  },
  {
    id: "MPA_ACR_VAO",
    name: "Venue Accreditation Office / ACR",
    shortName: "ACR",
    system: "security",
    description: "Venue accreditation office supporting access control and credential operations.",
    riskLevel: "medium",
    status: "ready",
    dependencies: [
      dep("acr-power", "Power", "power", "medium"),
      dep("acr-furniture", "Furniture", "overlay", "low"),
      dep("acr-it", "IT/Technology", "broadcast", "medium"),
      dep("acr-security-flow", "Security flow", "security", "medium")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Overlay BOQ", note: "VAO furniture and temporary office scope" },
      { type: "Technical Catalog", document: "Venue Technology Catalog", note: "IT and credentialing equipment assumptions" },
      { type: "Site Handbook", document: "MPA Site Handbook", note: "Accreditation operating flow" }
    ],
    mapPosition: { top: 60, left: 8, width: 17, height: 13 }
  },
  {
    id: "MPA_FNB_COLD_STORAGE",
    name: "FNB Cold Storage",
    shortName: "FNB",
    system: "logistics",
    description: "Refrigerated container and food & beverage support area.",
    riskLevel: "medium",
    status: "operational",
    dependencies: [
      dep("fnb-power", "Power", "power", "high"),
      dep("fnb-logistics-access", "Logistics access", "logistics", "medium"),
      dep("fnb-waste", "Waste management", "logistics", "medium"),
      dep("temperature-control", "Temperature control", "hse", "medium")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA FNB BOQ", note: "Refrigerated container and support area quantities" },
      { type: "ERP", document: "MPA Emergency Response Plan", note: "Food safety and power failure response" },
      { type: "Schedule", document: "MPA Integrated Delivery Schedule", note: "Cold storage commissioning window" }
    ],
    mapPosition: { top: 69, left: 54, width: 17, height: 10 }
  },
  {
    id: "MPA_CNW_WASTE_AREA",
    name: "Clean & Waste Area / CNW",
    shortName: "CNW",
    system: "logistics",
    description: "Waste storage, sorting and contractor support area.",
    riskLevel: "medium",
    status: "in-progress",
    dependencies: [
      dep("cnw-vehicle-access", "Vehicle access", "logistics", "medium"),
      dep("waste-contractor", "Waste contractor", "logistics", "medium"),
      dep("environmental-control", "Environmental control", "hse", "medium"),
      dep("site-cleanliness", "Site cleanliness", "hse", "medium")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA CNW BOQ", note: "Waste area temporary works and contractor support" },
      { type: "ERP", document: "MPA Emergency Response Plan", note: "Environmental incident response" },
      { type: "Site Handbook", document: "MPA Site Handbook", note: "Waste movement and cleanliness protocol" }
    ],
    mapPosition: { top: 70, left: 73, width: 18, height: 10 }
  },
  {
    id: "MPA_MED_CONDITIONING",
    name: "Medical Conditioning Space",
    shortName: "MED",
    system: "hse",
    description: "Athlete conditioning and medical support interface.",
    riskLevel: "high",
    status: "in-progress",
    dependencies: [
      dep("med-athlete-flow", "Athlete flow", "sport", "high"),
      dep("medical-staffing", "Medical staffing", "hse", "high"),
      dep("med-power", "Power", "power", "medium"),
      dep("privacy", "Privacy", "hse", "medium"),
      dep("emergency-response", "Emergency response", "hse", "high")
    ],
    sourceRefs: [
      commonMasterplan,
      { type: "BOQ", document: "MPA Medical BOQ", note: "Conditioning space, privacy and support scope" },
      { type: "ERP", document: "MPA Emergency Response Plan", note: "Medical response and escalation interface" },
      { type: "Site Handbook", document: "MPA Site Handbook", note: "Athlete medical access protocol" }
    ],
    mapPosition: { top: 55, left: 53, width: 13, height: 11 }
  }
];
