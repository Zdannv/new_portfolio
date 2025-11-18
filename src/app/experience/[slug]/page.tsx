import { notFound } from "next/navigation";
import Image from "next/image";
import { getExperienceBySlug, getImageById } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ExperiencePageProps = {
  params: {
    slug: string;
  };
};

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    notFound();
  }

  const evidenceImages = experience.evidenceImageIds
    .map(getImageById)
    .filter(Boolean);

  return (
    <div className="container py-12 md:py-20">
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
