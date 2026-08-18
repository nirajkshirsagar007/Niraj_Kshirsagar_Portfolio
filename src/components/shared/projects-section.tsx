"use client";

import { useState, useMemo } from "react";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(projectsData.map(p => p.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Selected Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent backend and full-stack engineering projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                key={project.id} 
                className={`group relative flex flex-col justify-between bg-[#111111] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 p-8 ${
                  index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Subtle top gradient glow on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-white/5 hover:bg-white/10 text-gray-300 border-none transition-transform duration-300 group-hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto relative z-10">
                  {project.github && (
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`rounded-full ${buttonVariants({ variant: "outline", size: "sm" })} bg-black/50 border-white/10 hover:bg-white hover:text-black`}
                    >
                      <Code className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  )}
                  {project.link && (
                    <Link 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`rounded-full ${buttonVariants({ size: "sm" })} bg-blue-400 text-black hover:bg-blue-300 font-semibold`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
