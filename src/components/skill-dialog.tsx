
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
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import {
  getProjectBySlug,
  getExperienceBySlug,
  getImageById,
  type Skill,
  type Project,
  type Experience,
  type Validation,
} from "@/lib/data";

interface SkillDialogProps {
  skill: Skill;
  children: React.ReactNode;
}

const getValidationItems = (validation: Validation) => {
  switch (validation.type) {
    case "project":
      return validation.slugs.map(getProjectBySlug).filter((p): p is Project => !!p);
    case "experience":
      return validation.slugs.map(getExperienceBySlug).filter((e): e is Experience => !!e);
    case "certificate":
      return validation.itemIds.map(getImageById).filter(Boolean);
    case "youtube":
      return [validation]; // Wrap in array to be iterable
    default:
      return [];
  }
};


export function SkillDialog({ skill, children }: SkillDialogProps) {

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
          {skill.validations?.map((validation) => {
            const items = getValidationItems(validation);
            if (items.length === 0) return null;

            return (
              <div key={validation.type}>
                <h3 className="text-xl font-bold mb-4">{validation.title}</h3>
                {validation.type === 'project' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {(items as Project[]).map((project) => (
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
                )}
                 {validation.type === 'experience' && (
                   <div className="grid md:grid-cols-2 gap-4">
                    {(items as Experience[]).map((exp) => (
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
                 )}
                 {validation.type === 'certificate' && (
                    <Carousel className="w-full max-w-xs mx-auto">
                      <CarouselContent>
                        {items.map((cert: any) => (
                          cert && (
                            <CarouselItem key={cert.id}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-video items-center justify-center p-2 relative">
                                      <Image
                                        src={cert.imageUrl}
                                        alt={cert.description}
                                        fill
                                        className="object-contain rounded-md"
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
                 )}
                 {validation.type === 'youtube' && (
                    <div className="flex justify-center">
                       <Button asChild>
                          <a href={(items[0] as any).url} target="_blank" rel="noopener noreferrer">
                              <Youtube className="mr-2 h-5 w-5" />
                              Watch on YouTube
                          </a>
                        </Button>
                    </div>
                 )}
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
