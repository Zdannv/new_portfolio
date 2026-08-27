import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, PlayCircle, ArrowLeft } from "lucide-react";
import { getProjectBySlug, getImageById } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { ParticleCanvas } from "@/components/particle-canvas";
import { MouseGlow } from "@/components/mouse-glow";
import { FloatingShapes } from "@/components/floating-shapes";
import { TiltCard } from "@/components/tilt-card";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3.86 2.14a.5.5 0 0 0-.86.43v18.86a.5.5 0 0 0 .86.43l16-9.43a.5.5 0 0 0 0-.86Z"/>
        <path d="M3 21V3l11 4-5.5 3Z"/>
    </svg>
);

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const galleryImages = project.galleryImageIds
    .map(getImageById)
    .filter(Boolean);

  return (
    <div className="relative min-h-screen py-12 md:py-20 overflow-hidden">
      {/* Background Systems */}
      <ParticleCanvas />
      <MouseGlow />
      <FloatingShapes />

      <div className="container relative z-10 max-w-4xl">
        <div className="mb-8">
          <Button asChild variant="ghost" className="hover:bg-white/5 hover:text-primary transition-colors" data-cursor-pointer>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        <header className="mb-12 text-center">
          <Badge className="bg-primary/10 border-primary/30 text-primary mb-2">Project Details</Badge>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl drop-shadow-[0_2px_10px_rgba(251,146,60,0.2)]">
            {project.title}
          </h1>
          <p className="mt-2 text-lg font-semibold text-zinc-400">
            My Role: {project.role}
          </p>
        </header>

        {/* Interactive Gallery */}
        {galleryImages.length > 0 && (
          <section className="mb-12">
            <TiltCard glowColor="rgba(251, 146, 60, 0.1)" className="p-2 bg-card/25">
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image) => (
                    image && (
                      <CarouselItem key={image.id}>
                        <div className="p-1">
                          <Card className="border-0 bg-transparent">
                            <CardContent className="flex aspect-video items-center justify-center p-0 relative rounded-lg overflow-hidden">
                              <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="rounded-lg object-contain bg-black/40"
                                data-ai-hint={image.imageHint}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-background/80 hover:bg-primary hover:text-black border-white/10" />
                <CarouselNext className="right-4 bg-background/80 hover:bg-primary hover:text-black border-white/10" />
              </Carousel>
            </TiltCard>
          </section>
        )}

        {/* Project Description & Stack */}
        <section className="glass-card rounded-2xl p-8 border border-white/10">
          <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-headline text-white border-b border-white/5 pb-2">About the Project</h2>
              <p className="text-zinc-300 leading-relaxed text-sm whitespace-pre-line">{project.longDescription}</p>
          </div>

          <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-zinc-300 hover:border-primary/50 transition-colors">
                        {tag}
                      </Badge>
                  ))}
              </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12 pt-6 border-t border-white/5">
              {project.githubUrl && (
                  <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 transition-transform duration-300 hover:scale-105" data-cursor-pointer>
                      <Link href={project.githubUrl} target="_blank">
                          <Github className="mr-2 h-5 w-5"/>
                          GitHub Repository
                      </Link>
                  </Button>
              )}
              {project.liveDemoUrl && (
                  <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5 hover:text-primary transition-all duration-300 hover:scale-105" data-cursor-pointer>
                      <Link href={project.liveDemoUrl} target="_blank">
                          <PlayCircle className="mr-2 h-5 w-5" />
                          Live Demo Website
                      </Link>
                  </Button>
              )}
              {project.playStoreUrl && (
                  <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5 hover:text-primary transition-all duration-300 hover:scale-105" data-cursor-pointer>
                      <Link href={project.playStoreUrl} target="_blank">
                          <PlayStoreIcon className="mr-2 h-5 w-5" />
                          Get on Google Play
                      </Link>
                  </Button>
              )}
          </div>
        </section>
      </div>
    </div>
  );
}
