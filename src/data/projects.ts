import type { Project } from "@/types/portfolio";

const reviewItems = [
  "Personal role and contribution",
  "Project dates and outcomes",
  "Additional approved screenshots or supporting material",
];

export const projects = [
  {
    id: "internship-linkage-management-system",
    title: "Internship Linkage Management System",
    category: "Software Engineering",
    summary:
      "A web-based system designed to connect students, universities, and companies through student and admin portals, internship postings, application tracking, evaluations, and complaint and communication flows.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "EJS", "JavaScript", "CSS3"],
    highlights: [
      "Student portal and admin dashboard",
      "Internship postings and application tracking",
      "Evaluation and complaint/communication workflows",
    ],
    repositoryUrl:
      "https://github.com/binicode-ai/internship-linkage-management-system",
    reviewItems,
  },
  {
    id: "ai-network-guardian",
    title: "AI Network Guardian",
    category: "Networking / AI",
    summary:
      "A network monitoring project with a telemetry collector, PostgreSQL storage, a FastAPI API, and a React dashboard for host health, measurements, and alerts.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "psycopg",
      "React",
      "Vite",
      "Recharts",
      "Uvicorn",
      "python-dotenv",
    ],
    highlights: [
      "Collector records ping reachability, packet loss, latency, and DNS resolution",
      "Rule-based alerts cover unreachable hosts, packet loss, high latency, and DNS failures",
      "Dashboard reads health, hosts, measurements, and alerts from the API",
    ],
    verificationNote:
      "The inspected source implements threshold-based rules. No AI/ML model or AI/ML dependency was found in the repository files inspected.",
    repositoryUrl: "https://github.com/binicode-ai/ai-network-guardian",
    reviewItems,
  },
  {
    id: "institutional-inter-networking",
    title: "Inter-Networking of Multiple Institutions",
    category: "Networking & Infrastructure",
    summary: "Inter-networking of multiple institutions.",
    reviewItems,
  },
  {
    id: "harvard-mini-computer",
    title: "Harvard Architecture Mini Computer",
    category: "Hardware & PCB Design",
    summary: "Mini computer based on a Harvard architecture.",
    reviewItems,
  },
  {
    id: "four-way-traffic-controller",
    title: "Four-Way Traffic Light Controller",
    category: "Embedded Systems & IoT",
    summary: "Four-way traffic light controller.",
    reviewItems,
  },
  {
    id: "agricultural-quadcopter-research",
    title: "Agricultural Quadcopter Drone Research",
    category: "Robotics & Drone Technology",
    summary: "Research into agricultural quadcopter drones.",
    status: "research",
    reviewItems,
  },
] satisfies Project[];
