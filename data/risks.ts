export type RiskLevel = "Low" | "Medium" | "High" | "Severe";

export type Risk = {
  name: string;
  owner: string;
  probability: number;
  impact: number;
  level: RiskLevel;
  mitigation: string;
};

export const risks: Risk[] = [
  {
    name: "Delayed Site Access",
    owner: "Venue Delivery",
    probability: 4,
    impact: 5,
    level: "Severe",
    mitigation: "Hold phased access plan with protected critical path areas."
  },
  {
    name: "Typhoon",
    owner: "HSE",
    probability: 3,
    impact: 5,
    level: "High",
    mitigation: "Trigger weather stop-work thresholds and secure temporary assets."
  },
  {
    name: "Heat Stress",
    owner: "Medical",
    probability: 4,
    impact: 4,
    level: "High",
    mitigation: "Deploy shade, hydration, welfare checks, and adjusted shift timing."
  },
  {
    name: "Power Failure",
    owner: "Power",
    probability: 2,
    impact: 5,
    level: "High",
    mitigation: "Validate generator redundancy and switch-over procedures."
  },
  {
    name: "SIMOPS Collision",
    owner: "Site Management",
    probability: 3,
    impact: 4,
    level: "High",
    mitigation: "Run daily coordination board and hard exclusion windows."
  },
  {
    name: "Security Freeze",
    owner: "Security",
    probability: 2,
    impact: 4,
    level: "Medium",
    mitigation: "Pre-clear essential work packs and define emergency access rules."
  },
  {
    name: "Broadcast Late Changes",
    owner: "Broadcast Ops",
    probability: 4,
    impact: 3,
    level: "High",
    mitigation: "Lock decision gates and maintain controlled change register."
  }
];
