import { notFound } from "next/navigation";
import Image from "next/image";
import { getExperienceBySlug, getImageById, getProjectBySlug } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import { ParticleCanvas } from "@/components/particle-canvas";
import { MouseGlow } from "@/components/mouse-glow";
import { FloatingShapes } from "@/components/floating-shapes";
import { TiltCard } from "@/components/tilt-card";

type ExperiencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  const evidenceImages = experience.evidenceImageIds
    .map(getImageById)
    .filter(Boolean);

  return (
    <div className="relative min-h-screen py-12 md:py-20 overflow-hidden">
      {/* Background Systems */}
      <ParticleCanvas />
      <MouseGlow />
      <FloatingShapes />

      <div className="container relative z-10 max-w-5xl">
        <div className="mb-8">
          <Button asChild variant="ghost" className="hover:bg-white/5 hover:text-primary transition-colors" data-cursor-pointer>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        <header className="mb-12 text-center">
          <Badge className="bg-primary/10 border-primary/30 text-primary mb-2">Experience Details</Badge>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl drop-shadow-[0_2px_10px_rgba(251,146,60,0.2)]">
            {experience.role}
          </h1>
          <p className="mt-2 text-xl font-semibold text-zinc-300">
            at {experience.organization}
          </p>
          <p className="mt-1 text-sm font-mono text-primary/80">
            {experience.period}
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2 space-y-8">
            {/* Description card */}
            <section className="glass-card p-6 md:p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold mb-4 font-headline text-white border-b border-white/5 pb-2">
                Responsibilities & Description
              </h2>
              <p className="text-zinc-300 leading-relaxed text-sm">
                {experience.description}
              </p>
            </section>

            {/* Achievements card */}
            <section className="glass-card p-6 md:p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold mb-4 font-headline text-white border-b border-white/5 pb-2">
                Key Achievements
              </h2>
              <ul className="space-y-4">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mr-3.5 mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-zinc-300 text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Related projects */}
            {experience.relatedProjectSlugs && experience.relatedProjectSlugs.length > 0 && (
              <section className="glass-card p-6 md:p-8 rounded-2xl border border-white/10">
                <h2 className="text-xl font-bold mb-6 font-headline text-white border-b border-white/5 pb-2">
                  Related Projects
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {experience.relatedProjectSlugs.map(slug => {
                    const project = getProjectBySlug(slug);
                    if (!project) return null;
                    return (
                      <TiltCard key={project.slug} glowColor="rgba(251, 146, 60, 0.15)" className="bg-card/20">
                        <div className="flex flex-col h-full p-5 justify-between">
                          <div>
                            <h4 className="text-md font-bold text-white font-headline group-hover:text-primary transition-colors">{project.title}</h4>
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-2 leading-relaxed">{project.description}</p>
                          </div>
                          <div className="mt-4 pt-4 border-t border-white/5">
                            <Button asChild variant="link" size="sm" className="p-0 text-primary hover:text-primary-foreground font-semibold flex items-center gap-1" data-cursor-pointer>
                              <Link href={`/projects/${project.slug}`}>
                                View Project <ArrowRight className="ml-1 h-3.5 w-3.5" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </TiltCard>
                    );
                  })}
                </div>
              </section>
            )}
          </main>

          <aside className="space-y-8">
            {evidenceImages.length > 0 && (
              <section className="glass-card p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold mb-6 text-center font-headline text-white border-b border-white/5 pb-2">
                  Visual Evidence
                </h3>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {evidenceImages.map((image) => (
                       image && (
                        <CarouselItem key={image.id}>
                          <div className="p-1">
                            <Card className="border-0 bg-transparent overflow-hidden">
                              <CardContent className="flex aspect-[4/3] items-center justify-center p-0 relative rounded-lg overflow-hidden bg-black/40">
                                  <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover rounded-md"
                                     data-ai-hint={image.imageHint}
                                  />
                              </CardContent>
                               <div className="p-3 text-center">
                                  <p className="text-xs text-muted-foreground leading-normal">{image.description}</p>
                              </div>
                            </Card>
                          </div>
                        </CarouselItem>
                      )
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-background/80 hover:bg-primary hover:text-black border-white/10" />
                  <CarouselNext className="right-2 bg-background/80 hover:bg-primary hover:text-black border-white/10" />
                </Carousel>
              </section>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
