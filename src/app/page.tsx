import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Award,
  ChevronRight,
  Code,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PROJECTS,
  SKILLS,
  LEADERSHIP_EXPERIENCE,
  ACHIEVEMENTS,
} from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images";
import { SkillDialog } from "@/components/skill-dialog";

const profileImage = placeholderImages.find(p => p.id === "profile");

export default function HomePage() {
  return (
    <>
      <section
        id="hero"
        className="container flex flex-col md:flex-row items-center justify-between gap-12 py-20 sm:py-28 text-center md:text-left"
      >
        <div className="max-w-2xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Muhammad Zaidan Zhafiz Satrianto
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A passionate Mobile & Web Developer, Cybersecurity Enthusiast, and
            UI/UX Designer. Crafting innovative digital solutions with a focus on user-centered design and robust technology.
          </p>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button asChild variant="link" className="text-foreground">
              <a href="#projects">
                My Projects <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-x-6">
            <a href="https://github.com/zaidanzha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/muhammad-zaidan-zhafiz-satrianto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        {profileImage && (
          <Image
            src={profileImage.imageUrl}
            alt="Muhammad Zaidan Zhafiz Satrianto"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg border-4 border-primary"
            priority
          />
        )}
      </section>

      <section id="projects" className="container py-16 sm:py-20">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Project Highlights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my work, from full-stack applications to mobile apps.
          </p>
        </div>

        <div className="mt-12 space-y-24">
          {PROJECTS.map((project, index) => {
            const projectImage = placeholderImages.find(p => p.id === project.imageId);
            const isReversed = index % 2 !== 0;
            return (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="block group">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center transition-transform group-hover:scale-[1.02] duration-300 relative ${
                    isReversed ? "md:[&>*:last-child]:-order-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                     <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  {projectImage && (
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                       <Image
                          src={projectImage.imageUrl}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                          data-ai-hint={projectImage.imageHint}
                        />
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="skills" className="py-16 sm:py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            <Code className="inline-block h-8 w-8 mr-2 text-primary" />
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My proficiency in various technologies. Click a skill to see related projects and evidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill) => (
              <SkillDialog key={skill.name} skill={skill}>
                <Badge
                  className="px-4 py-2 text-sm font-medium border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  variant="outline"
                >
                  {skill.name}
                </Badge>
              </SkillDialog>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="container py-16 sm:py-20">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            <Users className="inline-block h-8 w-8 mr-2 text-primary" />
            Leadership & Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My journey in leading communities and driving initiatives.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {LEADERSHIP_EXPERIENCE.map((exp) => (
             <Link href={`/experience/${exp.slug}`} key={exp.slug} className="block group">
              <Card className="flex flex-col h-full transition-transform group-hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle>{exp.role}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{exp.organization}</CardDescription>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{exp.description}</p>
                </CardContent>
                 <CardFooter className="justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    See More <ArrowRight className="h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section id="achievements" className="py-16 sm:py-20 bg-secondary">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              <Award className="inline-block h-8 w-8 mr-2 text-primary" />
              Achievements & Competitions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Recognition and results from various competitions and awards.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((ach, index) => (
              <Card key={`${ach.title}-${index}`} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg">{ach.title}</CardTitle>
                  <CardDescription className="mt-2">{ach.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container py-16 sm:py-24 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Let's Collaborate
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team. Feel free to reach out.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="mailto:zaidanzhafiz@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              zaidanzhafiz@gmail.com
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
