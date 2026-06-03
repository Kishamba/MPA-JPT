export type ZoneSystem =
  | "power"
  | "security"
  | "broadcast"
  | "ceremonies"
  | "logistics"
  | "sport"
  | "hse"
  | "overlay";

export type ZoneRiskLevel = "low" | "medium" | "high" | "critical";

export type ZoneStatus = "ready" | "in-progress" | "blocked" | "watch";

export type VenueZone = {
  id: string;
  name: string;
  system: ZoneSystem;
  description: string;
  riskLevel: ZoneRiskLevel;
  dependencies: string[];
  status: ZoneStatus;
  mapPosition: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
};

export const zones: VenueZone[] = [
  {
    id: "MPA_MAIN_STADIUM",
    name: "Main Stadium / FOP",
    system: "sport",
    description: "Main field of play and stadium operational core for athletics, ceremonies and Games-time activity.",
    riskLevel: "high",
    dependencies: ["Security perimeter", "Power", "Broadcast", "Ceremonies", "Athlete flow"],
    status: "in-progress",
    mapPosition: { top: 23, left: 30, width: 29, height: 28 }
  },
  {
    id: "MPA_TRAINING_AREA",
    name: "Training Area / Track & Jump Warm-up",
    system: "sport",
    description: "Athlete warm-up and preparation area for track and jumping events.",
    riskLevel: "high",
    dependencies: ["Athlete access", "Security screening", "Medical", "Power"],
    status: "in-progress",
    mapPosition: { top: 58, left: 25, width: 27, height: 16 }
  },
  {
    id: "MPA_THROWING_AREA",
    name: "Throwing Events Warm-up Area",
    system: "sport",
    description: "Dedicated warm-up and preparation zone for throwing events.",
    riskLevel: "medium",
    dependencies: ["Athlete access", "Equipment storage", "Field protection", "Security"],
    status: "watch",
    mapPosition: { top: 17, left: 8, width: 19, height: 20 }
  },
  {
    id: "MPA_CEREMONIES_COMPOUND",
    name: "Ceremonies Compound",
    system: "ceremonies",
    description: "Reserved operational area for ceremonies production, preparation, storage and backstage support.",
    riskLevel: "critical",
    dependencies: ["Power", "Security", "Logistics", "Broadcast", "Schedule control"],
    status: "in-progress",
    mapPosition: { top: 9, left: 62, width: 24, height: 17 }
  },
  {
    id: "MPA_BRS_COMPOUND",
    name: "Broadcast Compound / BRS",
    system: "broadcast",
    description: "Broadcast compound including HB/RHB offices, equipment storage, audio, camera and media support interfaces.",
    riskLevel: "critical",
    dependencies: ["Power", "Cabins", "Cable routes", "Security", "Late change control"],
    status: "watch",
    mapPosition: { top: 30, left: 65, width: 25, height: 15 }
  },
  {
    id: "MPA_NRG_POWER_AREA",
    name: "Overlay Power Area / NRG",
    system: "power",
    description: "Generator, fuel, distribution and temporary power infrastructure supporting venue overlay and operations.",
    riskLevel: "critical",
    dependencies: ["Fuel logistics", "Cable containment", "Fire inspection", "Weather protection", "LOTO"],
    status: "blocked",
    mapPosition: { top: 53, left: 68, width: 22, height: 15 }
  },
  {
    id: "MPA_SECURITY_SCREENING",
    name: "PSA / VSA / ACP Security Screening",
    system: "security",
    description: "Pedestrian, vehicle and accreditation control layers protecting secure and operational areas.",
    riskLevel: "critical",
    dependencies: ["Fencing", "Accreditation", "Crowd flow", "Staffing", "Police/security coordination"],
    status: "in-progress",
    mapPosition: { top: 43, left: 7, width: 21, height: 12 }
  },
  {
    id: "MPA_LOGISTICS_ROUTE",
    name: "Logistics Route / Service Access",
    system: "logistics",
    description: "Delivery, service vehicle and material movement route connecting compounds, storage and work zones.",
    riskLevel: "high",
    dependencies: ["Access permits", "Traffic control", "Security", "Trackway", "Scheduling"],
    status: "watch",
    mapPosition: { top: 82, left: 7, width: 85, height: 8 }
  },
  {
    id: "MPA_ACR_VAO",
    name: "Venue Accreditation Office / ACR",
    system: "security",
    description: "Venue accreditation office supporting access control and credential operations.",
    riskLevel: "medium",
    dependencies: ["Power", "Furniture", "IT/Technology", "Security flow"],
    status: "ready",
    mapPosition: { top: 60, left: 8, width: 17, height: 13 }
  },
  {
    id: "MPA_FNB_COLD_STORAGE",
    name: "FNB Cold Storage",
    system: "logistics",
    description: "Refrigerated container and food & beverage support area.",
    riskLevel: "medium",
    dependencies: ["Power", "Logistics access", "Waste management", "Temperature control"],
    status: "watch",
    mapPosition: { top: 69, left: 54, width: 17, height: 10 }
  },
  {
    id: "MPA_CNW_WASTE_AREA",
    name: "Clean & Waste Area / CNW",
    system: "logistics",
    description: "Waste storage, sorting and contractor support area.",
    riskLevel: "medium",
    dependencies: ["Vehicle access", "Waste contractor", "Environmental control", "Site cleanliness"],
    status: "in-progress",
    mapPosition: { top: 70, left: 73, width: 18, height: 10 }
  },
  {
    id: "MPA_MED_CONDITIONING",
    name: "Medical Conditioning Space",
    system: "hse",
    description: "Athlete conditioning and medical support interface.",
    riskLevel: "high",
    dependencies: ["Athlete flow", "Medical staffing", "Power", "Privacy", "Emergency response"],
    status: "in-progress",
    mapPosition: { top: 55, left: 53, width: 13, height: 11 }
  }
];
