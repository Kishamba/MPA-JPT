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
