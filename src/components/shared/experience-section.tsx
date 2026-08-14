import { experienceData } from "@/data/experience";
import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative border-l-2 border-blue-500/20 pl-8">
          {experienceData.map((item) => (
            <div key={item.id} className="mb-10 relative">
              {/* Timeline Dot with Icon */}
              <div className="absolute -left-[41px] bg-[#0a0a0a] border-2 border-blue-500/50 rounded-full p-2 text-blue-400 flex items-center justify-center">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4" />
                ) : (
                  <GraduationCap className="w-4 h-4" />
                )}
              </div>

              {/* Content Card */}
              <div className="group bg-[#111111] border border-white/5 rounded-3xl p-6 transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-300 font-medium mb-3">{item.organization}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

