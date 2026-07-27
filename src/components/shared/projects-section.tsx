import { projectsData } from "@/data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here is a selection of some of my recent work. This section dynamically renders data from a TypeScript array!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-4 pt-4 border-t">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}>
                    <Code className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                )}
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "sm" })}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
