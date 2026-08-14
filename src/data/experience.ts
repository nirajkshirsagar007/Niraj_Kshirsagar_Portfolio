export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "work" | "education";
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Software Development Intern",
    organization: "SolveAll Solutions Pvt. Ltd",
    date: "February 2026 – Present",
    description: "Developing scalable backend solutions and RESTful APIs using Java, Spring Boot, Spring Security, JWT, and PostgreSQL.",
    type: "work",
  },
  {
    id: "2",
    title: "Master of Computer Applications (MCA)",
    organization: "Mes IMCC, Pune (Savitribai Phule Pune University)",
    date: "Completed",
    description: "Graduated with Distinction (7.92 CGPA). Built foundational knowledge in advanced software engineering, data structures, and database management.",
    type: "education",
  },
  {
    id: "3",
    title: "Bachelor of Science (BSc)",
    organization: "Y.C. College Karad (Shivaji University, Kolhapur)",
    date: "Completed",
    description: "Graduated with A+ Grade (74.92%). Focused on concepts and problem-solving.",
    type: "education",
  },
];
