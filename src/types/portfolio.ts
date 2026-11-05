export type ProjectCategory =
  | "Software Engineering"
  | "Hardware & PCB Design"
  | "Embedded Systems & IoT"
  | "Robotics & Drone Technology"
  | "Networking & Infrastructure"
  | "Networking / AI";

export type SkillGroup = {
  category: ProjectCategory;
  items: {
    name: string;
    context: "professional-focus" | "interest";
  }[];
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  status?: "research";
  technologies?: string[];
  highlights?: string[];
  verificationNote?: string;
  repositoryUrl?: string;
  reviewItems: string[];
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  period?: string;
  details: string[];
};

export type EducationEntry = {
  program: string;
  specialization: string;
  institution?: string;
  period?: string;
};

export type CertificationEntry = {
  name: string;
  issuer: string;
  date?: string;
};
