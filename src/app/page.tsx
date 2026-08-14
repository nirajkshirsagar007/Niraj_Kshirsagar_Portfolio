import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ProjectsSection } from "@/components/shared/projects-section";
import { SkillsSection } from "@/components/shared/skills-section";
import { ExperienceSection } from "@/components/shared/experience-section";
import { ContactSection } from "@/components/shared/contact-section";
import { FadeIn } from "@/components/animations/fade-in";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex items-center py-32 overflow-hidden">

        {/* Video Layer - Blended into background */}
        <div className="absolute right-0 lg:right-[5%] top-1/2 -translate-y-1/2 w-full lg:w-[700px] h-[700px] -z-20 flex justify-center lg:justify-end items-center opacity-40 lg:opacity-100 pointer-events-none">
          {/* Subtle background glow behind the video */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>
          
          <div className="relative w-[400px] h-[500px] lg:w-[600px] lg:h-[700px]">
            <video
              src="/profile.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{
                maskImage: "radial-gradient(ellipse at center, black 50%, transparent 90%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 90%)"
              }}
            />
          </div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        {/* Text Layer - Left Aligned */}
        <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
          <div className="w-full max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <FadeIn delay={0.1}>
              <div className="w-full flex justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/40 text-sm font-medium text-gray-200 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Available for Work
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter lg:text-[7rem] mb-6 leading-none text-white drop-shadow-xl">
                Hi, I'm
                <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-none">Niraj Kshirsagar</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-200 tracking-tight mb-8 drop-shadow-md">
                Full Stack Developer
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-12 drop-shadow-md lg:px-0">
                I build robust, high-performance RESTful APIs using Java, Spring Boot, and PostgreSQL. Exploring the modern web with React and Next.js.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 z-10 relative justify-center lg:justify-start w-full">
                <Link
                  href="#projects"
                  className={`rounded-full px-8 py-6 text-lg ${buttonVariants({ variant: "outline", size: "lg" })} bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 group`}
                >
                  View Projects
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="#contact"
                  className={`rounded-full px-8 py-6 text-lg ${buttonVariants({ variant: "outline", size: "lg" })} bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 group`}
                >
                  Contact Me
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <FadeIn delay={0.1}>
        <SkillsSection />
      </FadeIn>

      <FadeIn delay={0.1}>
        <ExperienceSection />
      </FadeIn>

      <FadeIn delay={0.1}>
        <ProjectsSection />
      </FadeIn>

      <FadeIn delay={0.1}>
        <ContactSection />
      </FadeIn>
    </>
  );
}
