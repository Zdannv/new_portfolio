
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge";
import {
  getProjectBySlug,
  getExperienceBySlug,
  getImageById,
  type Skill,
  type Project,
  type Experience,
} from "@/lib/data";

interface SkillDialogProps {
  skill: Skill;
  children: React.ReactNode;
}

export function SkillDialog({ skill, children }: SkillDialogProps) {
  const relatedProjects = skill.relatedProjectSlugs
    .map(getProjectBySlug)
    .filter((p): p is Project => !!p);

  const relatedExperience = skill.relatedExperienceSlugs
    .map(getExperienceBySlug)
    .filter((e): e is Experience => !!e);
  
  const certificates = skill.certificateImageIds
    .map(getImageById)
    .filter((img) => !!img);


  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-primary mb-4">
            Validation for: {skill.name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-8">
          {relatedProjects.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Related Projects</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedProjects.map((project) => (
                  <Link href={`/projects/${project.slug}`} key={project.slug}>
                    <Card className="hover:bg-accent/50 transition-colors">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedExperience.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Related Experience</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedExperience.map((exp) => (
                  <Link href={`/experience/${exp.slug}`} key={exp.slug}>
                    <Card className="hover:bg-accent/50 transition-colors">
                      <CardHeader>
                        <CardTitle>{exp.role}</CardTitle>
                        <CardDescription>{exp.organization}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {certificates.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Relevant Certificates</h3>
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {certificates.map((cert) => (
                    cert && (
                      <CarouselItem key={cert.id}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-video items-center justify-center p-2 relative">
                                <Image
                                  src={cert.imageUrl}
                                  alt={cert.description}
                                  fill
                                  className="object-cover rounded-md"
                                  data-ai-hint={cert.imageHint}
                                />
                            </CardContent>
                             <div className="p-2 text-center">
                                <p className="text-xs text-muted-foreground">{cert.description}</p>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
