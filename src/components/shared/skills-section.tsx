"use client";

import { skillsData } from "@/data/skills";
import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa";

type IconKey = keyof typeof Si | keyof typeof Fa;

function resolveIcon(name: string): React.ElementType | null {
  if (name in Si) return Si[name as keyof typeof Si] as React.ElementType;
  if (name in Fa) return Fa[name as keyof typeof Fa] as React.ElementType;
  return null;
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="group relative bg-[#111111] border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full" />

              <h3 className="text-lg font-bold text-white mb-6 group-hover:text-blue-400 transition-colors relative z-10">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => {
                  const IconComponent = resolveIcon(skill.icon);
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-full px-4 py-2 transition-all duration-200 cursor-default group/skill"
                    >
                      {IconComponent && (
                        <IconComponent
                          style={{ color: skill.color }}
                          className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover/skill:scale-125"
                        />
                      )}
                      <span className="text-sm text-gray-300 font-medium whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
