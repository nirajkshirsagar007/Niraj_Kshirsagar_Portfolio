export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: "advayur",
    title: "Advayur — Ayurvedic Catalog Platform",
    description: "A full-stack Ayurvedic platform designed to provide customers with a smooth product discovery and shopping experience. Features product management, Cloudinary media, MongoDB data management, an intelligent FAQ chatbot, and multilingual architecture (English, Hindi, Marathi).",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Cloudinary", "Tailwind CSS"],
    github: "https://github.com/nirajkshirsagar007/advayur-catalog",
    link: "https://advayurnaturals-git-develop-team-niraj.vercel.app/en",
  },
  {
    id: "portfolio",
    title: "Interactive Next.js Portfolio V2",
    description: "A modern, highly interactive portfolio featuring a premium glassmorphic design system, custom SVG animations, a fluid particle background, Web3Forms contact integration, and responsive App Router architecture.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "SVG Animations"],
    github: "https://github.com/nirajkshirsagar007/Niraj_Kshirsagar_Portfolio",
    link: "https://niraj-kshirsagar-portfolio-tan.vercel.app/",
  },
  {
    id: "1",
    title: "Mini Grocery Store Management System",
    description: "Backend-based grocery store management system featuring layered architecture, secure JWT authentication, and robust REST APIs with Swagger documentation.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Maven", "JWT"],
    github: "https://github.com/nirajkshirsagar007/MiniGrocery",
  },
  {
    id: "2",
    title: "EduTrack Management Portal",
    description: "Classroom and student management system built with Spring Boot and MongoDB, featuring CRUD APIs and a Java-based client interface.",
    technologies: ["Java", "Spring Boot", "MongoDB", "REST APIs"],
    github: "https://github.com/nirajkshirsagar007/EduTrack-Classroom-Student-Management-Portal",
  },
  {
    id: "3",
    title: "Customized DBMS",
    description: "Menu-driven Database Management System supporting CRUD operations and aggregate functions using in-memory Java Collections.",
    technologies: ["Java", "Collections Framework", "OOP"],
    github: "https://github.com/nirajkshirsagar007/Customised-Database-Management-System-DBMS-",
  },
  {
    id: "4",
    title: "Generalized Data Structures Library",
    description: "Reusable implementations of linear and non-linear data structures, including BSTs and sorting algorithms, built with C++ templates.",
    technologies: ["C++", "Templates", "Data Structures"],
    github: "https://github.com/nirajkshirsagar007/Generalized-Data-Structures-Library-",
  },
];
