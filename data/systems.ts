export type SystemStatus = "Nominal" | "Watch" | "Critical";

export type SiteSystem = {
  name: string;
  owner: string;
  status: SystemStatus;
  readiness: number;
  detail: string;
};

export const systems: SiteSystem[] = [
  {
    name: "Power & Utilities",
    owner: "Infrastructure",
    status: "Watch",
    readiness: 82,
    detail: "Temporary power, water, drainage, and utility tie-ins."
  },
  {
    name: "Security",
    owner: "Venue Security",
    status: "Nominal",
    readiness: 91,
    detail: "Perimeter, screening, access control, and lockdown readiness."
  },
  {
    name: "Broadcast & Media",
    owner: "Broadcast Ops",
    status: "Watch",
    readiness: 76,
    detail: "Camera positions, compounds, commentary, mixed zone, and cable paths."
  },
  {
    name: "Ceremonies",
    owner: "Ceremonies",
    status: "Nominal",
    readiness: 88,
    detail: "Field of play transitions, rehearsals, show power, and staging."
  },
  {
    name: "Athlete Operations",
    owner: "Sport",
    status: "Nominal",
    readiness: 94,
    detail: "Athlete flow, warm-up zones, changing rooms, and sport services."
  },
  {
    name: "Logistics",
    owner: "Logistics",
    status: "Watch",
    readiness: 79,
    detail: "Load-in routes, laydown areas, material handling, and deliveries."
  },
  {
    name: "Overlay",
    owner: "Overlay Delivery",
    status: "Nominal",
    readiness: 86,
    detail: "Temporary structures, fencing, wayfinding, fit-out, and site furniture."
  },
  {
    name: "HSE & Emergency",
    owner: "HSE",
    status: "Critical",
    readiness: 68,
    detail: "Medical response, evacuation, weather protocols, and incident command."
  }
];
