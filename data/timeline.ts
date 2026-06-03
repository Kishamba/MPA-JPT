export type MilestoneStatus = "Complete" | "Active" | "Pending";

export type Milestone = {
  name: string;
  date: string;
  status: MilestoneStatus;
};

export const timeline: Milestone[] = [
  { name: "Site Access", date: "T-180", status: "Complete" },
  { name: "Building Permit", date: "T-150", status: "Complete" },
  { name: "Power On", date: "T-90", status: "Active" },
  { name: "Site Handover", date: "T-60", status: "Pending" },
  { name: "Bump In", date: "T-45", status: "Pending" },
  { name: "Security Sweep", date: "T-10", status: "Pending" },
  { name: "Competition Start", date: "T", status: "Pending" },
  { name: "Bump Out", date: "T+14", status: "Pending" }
];
