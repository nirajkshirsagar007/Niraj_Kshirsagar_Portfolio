export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Backend & Languages",
    skills: ["Java", "Spring Boot", "Spring Security", "C", "C++", "Python", "REST APIs", "JWT"],
  },
  {
    title: "Frontend (Learning)",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB (NoSQL)"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git & GitHub", "Maven", "Postman", "Swagger/OpenAPI", "Agile & Waterfall", "Tomcat"],
  },
];
