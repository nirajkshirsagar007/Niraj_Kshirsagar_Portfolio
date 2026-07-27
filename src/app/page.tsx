import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProjectsSection } from "@/components/shared/projects-section";
import { SkillsSection } from "@/components/shared/skills-section";
import { ExperienceSection } from "@/components/shared/experience-section";
import { ContactSection } from "@/components/shared/contact-section";
import { FadeIn } from "@/components/animations/fade-in";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] py-20 text-center">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl mb-6">
            Hi, I'm <span className="text-primary">Niraj Kshirsagar</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Java Backend Developer
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 px-4">
            I build scalable RESTful applications using Java, Spring Boot, and PostgreSQL. Currently expanding my full-stack skills with React and Next.js.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="flex gap-4">
            <Link href="#projects" className={buttonVariants({ size: "lg" })}>
              View Projects
            </Link>
            <Link href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Contact Me
            </Link>
          </div>
        </FadeIn>
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
