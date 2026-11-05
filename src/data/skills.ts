import type { SkillGroup } from "@/types/portfolio";

export const skillGroups = [
  {
    category: "Software Engineering",
    items: [{ name: "Full-Stack Development", context: "professional-focus" }],
  },
  {
    category: "Hardware & PCB Design",
    items: [{ name: "PCB Design", context: "interest" }],
  },
  {
    category: "Embedded Systems & IoT",
    items: [
      { name: "Embedded Systems", context: "interest" },
      { name: "IoT", context: "interest" },
    ],
  },
  {
    category: "Robotics & Drone Technology",
    items: [
      { name: "Robotics", context: "interest" },
      { name: "Drone Technology", context: "interest" },
    ],
  },
  {
    category: "Networking & Infrastructure",
    items: [
      { name: "Networking", context: "interest" },
      { name: "Cloud Technology", context: "interest" },
    ],
  },
] satisfies SkillGroup[];
