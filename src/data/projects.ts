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
