export type SystemKey =
  | "sport"
  | "security"
  | "power"
  | "broadcast"
  | "ceremonies"
  | "logistics"
  | "overlay"
  | "hse";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type ZoneStatus =
  | "planned"
  | "blocked"
  | "delayed"
  | "in-progress"
  | "ready"
  | "operational";

export type SourceType =
  | "PDP"
  | "BOQ"
  | "ERP"
  | "Masterplan"
  | "Schedule"
  | "Technical Catalog"
  | "Site Handbook";

export interface SourceRef {
  type: SourceType;
  document: string;
  page?: number;
  note?: string;
}

export interface MapPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface Dependency {
  id: string;
  label: string;
  system: SystemKey;
  risk: RiskLevel;
}

export interface Zone {
  id: string;
  name: string;
  shortName: string;
  system: SystemKey;
  description: string;
  riskLevel: RiskLevel;
  status: ZoneStatus;
  dependencies: Dependency[];
  sourceRefs: SourceRef[];
  mapPosition: MapPosition;
}

export type BoqPackageStatus =
  | "baseline"
  | "change-request"
  | "additional"
  | "reduced"
  | "removed"
  | "to-confirm";

export interface BoqItem {
  id: string;
  venueCode: string;
  areaCode: string;
  system: SystemKey;
  category: string;
  itemCode: string;
  itemName: string;
  uom: string;
  baselineQuantity: number;
  additionalQuantity: number;
  finalQuantity: number;
  status: BoqPackageStatus;
  linkedZoneIds: string[];
  variationNote?: string;
  operationalImpact: string;
  riskLevel: RiskLevel;
  sourceRefs: SourceRef[];
}

export type RiskCategory =
  | "schedule"
  | "weather"
  | "safety"
  | "power"
  | "security"
  | "broadcast"
  | "logistics"
  | "stakeholder"
  | "compliance";

export interface OperationalRisk {
  id: string;
  title: string;
  category: RiskCategory;
  riskLevel: RiskLevel;
  description: string;
  trigger: string;
  impact: string;
  mitigation: string;
  linkedSystemKeys: SystemKey[];
  linkedZoneIds: string[];
  linkedBoqItemIds: string[];
  sourceRefs: SourceRef[];
}

export type ControlStageStatus =
  | "not-started"
  | "blocked"
  | "in-progress"
  | "ready-for-review"
  | "completed";

export interface SiteControlStage {
  id: string;
  title: string;
  sequence: number;
  status: ControlStageStatus;
  purpose: string;
  controlPoint: string;
  requiredRecords: string[];
  linkedSystemKeys: SystemKey[];
  linkedZoneIds: string[];
  sourceRefs: SourceRef[];
}

export interface EscalationRule {
  id: string;
  trigger: string;
  level: "site" | "cluster" | "project" | "executive";
  description: string;
  requiredAction: string;
  sourceRefs: SourceRef[];
}

export type TimelineStatus =
  | "planned"
  | "blocked"
  | "delayed"
  | "at-risk"
  | "completed"
  | "to-confirm";

export interface TimelineMilestone {
  id: string;
  title: string;
  plannedDate: string;
  currentDate?: string;
  status: TimelineStatus;
  ownerSystem: SystemKey;
  description: string;
  impact?: string;
  linkedZoneIds: string[];
  linkedRiskIds: string[];
  sourceRefs: SourceRef[];
}

export interface SourceDocument {
  id: string;
  title: string;
  type: SourceType;
  fileName: string;
  version?: string;
  date?: string;
  status: "draft" | "issued" | "for-review" | "superseded" | "working";
  description: string;
  usedFor: string[];
  relatedSystemKeys: SystemKey[];
}
