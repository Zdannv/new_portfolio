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

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const galleryImages = project.galleryImageIds
    .map(getImageById)
    .filter(Boolean);

  return (
    <div className="container py-12 md:py-20">
       <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg font-semibold text-muted-foreground">
          My Role: {project.role}
        </p>
      </header>

      <section className="mb-12">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image) => (
              image && (
                <CarouselItem key={image.id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="rounded-lg object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </section>

      <section className="max-w-3xl mx-auto">
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-headline">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
            {project.githubUrl && (
                <Button asChild size="lg">
                    <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2"/>
                        GitHub Repository
                    </Link>
                </Button>
            )}
            {project.liveDemoUrl && (
                <Button asChild size="lg" variant="outline">
                    <Link href={project.liveDemoUrl} target="_blank">
                        <PlayCircle className="mr-2" />
                        Live Demo
                    </Link>
                </Button>
            )}
        </div>
      </section>
    </div>
  );
}
