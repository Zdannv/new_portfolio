import { notFound } from "next/navigation";
import Image from "next/image";
import { getExperienceBySlug, getImageById, getProjectBySlug } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
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
          {experience.role}
        </h1>
        <p className="mt-2 text-xl font-semibold text-muted-foreground">
          at {experience.organization}
        </p>
        <p className="mt-1 text-base text-muted-foreground/80">
          {experience.period}
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
        <main className="md:col-span-2">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 font-headline">
              Responsibilities & Description
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-headline">
              Key Achievements
            </h2>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </section>

          {experience.relatedProjectSlugs && experience.relatedProjectSlugs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4 font-headline">
                Related Projects
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {experience.relatedProjectSlugs.map(slug => {
                  const project = getProjectBySlug(slug);
                  if (!project) return null;
                  return (
                    <Card key={project.slug} className="group">
                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" size="sm" className="p-0 text-primary">
                          <Link href={`/projects/${project.slug}`}>
                            View Project <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}
        </main>
        <aside>
          {evidenceImages.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left font-headline">
                Visual Evidence
              </h3>
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {evidenceImages.map((image) => (
                     image && (
                      <CarouselItem key={image.id}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-[4/3] items-center justify-center p-0 relative">
                                <Image
                                  src={image.imageUrl}
                                  alt={image.description}
                                  fill
                                  className="object-cover rounded-md"
                                   data-ai-hint={image.imageHint}
                                />
                            </CardContent>
                             <div className="p-2 text-center">
                                <p className="text-xs text-muted-foreground">{image.description}</p>
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
        </aside>
      </div>
    </div>
  );
}
