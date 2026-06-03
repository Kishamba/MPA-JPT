import type { SystemKey } from "@/data/types";

export type SystemStatus = "Nominal" | "Watch" | "Critical";

export type SiteSystem = {
  key: SystemKey;
  name: string;
  owner: string;
  status: SystemStatus;
  readiness: number;
  detail: string;
};

export const systems: SiteSystem[] = [
  {
    key: "power",
    name: "Power & Utilities",
    owner: "Infrastructure",
    status: "Watch",
    readiness: 82,
    detail: "Temporary power, water, drainage, and utility tie-ins."
  },
  {
    key: "security",
    name: "Security",
    owner: "Venue Security",
    status: "Nominal",
    readiness: 91,
    detail: "Perimeter, screening, access control, and lockdown readiness."
  },
  {
    key: "broadcast",
    name: "Broadcast & Media",
    owner: "Broadcast Ops",
    status: "Watch",
    readiness: 76,
    detail: "Camera positions, compounds, commentary, mixed zone, and cable paths."
  },
  {
    key: "ceremonies",
    name: "Ceremonies",
    owner: "Ceremonies",
    status: "Nominal",
    readiness: 88,
    detail: "Field of play transitions, rehearsals, show power, and staging."
  },
  {
    key: "sport",
    name: "Athlete Operations",
    owner: "Sport",
    status: "Nominal",
    readiness: 94,
    detail: "Athlete flow, warm-up zones, changing rooms, and sport services."
  },
  {
    key: "logistics",
    name: "Logistics",
    owner: "Logistics",
    status: "Watch",
    readiness: 79,
    detail: "Load-in routes, laydown areas, material handling, and deliveries."
  },
  {
    key: "overlay",
    name: "Overlay",
    owner: "Overlay Delivery",
    status: "Nominal",
    readiness: 86,
    detail: "Temporary structures, fencing, wayfinding, fit-out, and site furniture."
  },
  {
    key: "hse",
    name: "HSE & Emergency",
    owner: "HSE",
    status: "Critical",
    readiness: 68,
    detail: "Medical response, evacuation, weather protocols, and incident command."
  }
];
