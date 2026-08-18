export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Backend & Languages",
    skills: [
      { name: "Java", icon: "FaCoffee", color: "#f89820" },
      { name: "Spring Boot", icon: "SiSpringboot", color: "#6db33f" },
      { name: "Spring Security", icon: "SiSpringsecurity", color: "#6db33f" },
      { name: "Python", icon: "SiPython", color: "#3776ab" },
      { name: "C++", icon: "SiCplusplus", color: "#00599c" },
      { name: "REST APIs", icon: "SiOpenapiinitiative", color: "#6ba539" },
      { name: "JWT", icon: "SiJsonwebtokens", color: "#d63aff" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "SiHtml5", color: "#e34f26" },
      { name: "CSS3", icon: "SiCss3", color: "#1572b6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#f7df1e" },
      { name: "React", icon: "SiReact", color: "#61dafb" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06b6d4" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169e1" },
      { name: "MySQL", icon: "SiMysql", color: "#4479a1" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47a248" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "SiGit", color: "#f05032" },
      { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
      { name: "Maven", icon: "SiApachemaven", color: "#c71a36" },
      { name: "Postman", icon: "SiPostman", color: "#ff6c37" },
      { name: "Swagger", icon: "SiSwagger", color: "#85ea2d" },
      { name: "Tomcat", icon: "SiApachetomcat", color: "#f8dc75" },
    ],
  },
];
