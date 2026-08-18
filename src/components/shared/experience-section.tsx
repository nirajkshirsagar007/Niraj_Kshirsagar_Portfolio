import { experienceData } from "@/data/experience";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative border-l-2 border-primary/20 pl-6 ml-4 md:ml-0 md:pl-8">
          {experienceData.map((item, index) => (
            <div key={item.id} className="mb-10 relative">
              {/* Timeline Dot with Icon */}
              <div className="absolute -left-[41px] md:-left-[49px] bg-background border-2 border-primary rounded-full p-2 text-primary flex items-center justify-center">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                ) : (
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                )}
              </div>

              {/* Content Card */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {item.date}
                    </span>
                  </div>
                  <CardDescription className="text-base font-medium mt-1">
                    {item.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
