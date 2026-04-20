
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
  MessageCircle,
  Star,
  Instagram,
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
  SOFT_SKILLS,
  LEADERSHIP_EXPERIENCE,
  ACHIEVEMENTS,
} from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images";
import { SkillDialog } from "@/components/skill-dialog";
import { AchievementDialog } from "@/components/achievement-dialog";

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
            A passionate Informatics Engineering student with a strong interest in software development, computer networks, and cybersecurity. Eager to apply my skills and learn within collaborative, forward-thinking teams.
          </p>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-cursor-pointer>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button asChild variant="link" className="text-foreground" data-cursor-pointer>
              <a href="#projects">
                My Projects <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-x-6">
            <a href="https://github.com/Zdannv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" data-cursor-pointer>
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-zaidan-zhafiz-satrianto-a42a95389/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" data-cursor-pointer>
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
             <a href="https://instagram.com/zdann_v" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" data-cursor-pointer>
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => {
            const projectImage = placeholderImages.find(p => p.id === project.imageId);
            return (
              <Card key={project.slug} className="flex flex-col overflow-hidden group">
                {projectImage && (
                  <Link href={`/projects/${project.slug}`} className="relative aspect-[4/3] overflow-hidden block">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </Link>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                   <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button asChild variant="ghost" size="sm" data-cursor-pointer>
                    <Link href={`/projects/${project.slug}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
      
      <section id="experience" className="container py-16 sm:py-20 bg-secondary">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            <Users className="inline-block h-8 w-8 mr-2 text-primary" />
            Work & Leadership
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey and experience in leading communities.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {LEADERSHIP_EXPERIENCE.map((exp) => (
             <Link href={`/experience/${exp.slug}`} key={exp.slug} className="block group" data-cursor-pointer>
              <Card className="flex flex-col h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription className="font-semibold text-primary mt-1">{exp.organization}</CardDescription>
                    </div>
                    {exp.tag && (
                      <Badge 
                        variant={exp.tag === 'Side Job' ? 'outline' : exp.tag === 'Job Experience' ? 'default' : 'secondary'} 
                        className={`whitespace-nowrap px-3 py-1 text-xs font-bold shadow-sm ${exp.tag === 'Side Job' ? 'border-primary text-primary bg-primary/10' : ''}`}
                      >
                        {exp.tag}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="line-clamp-3">{exp.description}</p>
                </CardContent>
                 <CardFooter className="justify-end">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    See More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section id="skills" className="py-16 sm:py-20">
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
                  className="px-4 py-2 text-sm font-medium border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer hover:scale-105"
                  variant="outline"
                  data-cursor-pointer
                >
                  {skill.name}
                </Badge>
              </SkillDialog>
            ))}
          </div>
        </div>
      </section>
      
      <section id="soft-skills" className="py-16 sm:py-20">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            <MessageCircle className="inline-block h-8 w-8 mr-2 text-primary" />
            Soft Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My interpersonal and professional abilities. Click a skill for validation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SOFT_SKILLS.map((skill) => (
              <SkillDialog key={skill.name} skill={skill}>
                <Badge
                  className="px-4 py-2 text-sm font-medium border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer hover:scale-105"
                  variant="outline"
                  data-cursor-pointer
                >
                  {skill.name}
                </Badge>
              </SkillDialog>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 sm:py-20">
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
             {ACHIEVEMENTS.map((ach, index) => {
              const Icon = ach.type === "win" ? Award : Star;
              const isFeatured = index === 0 && ach.imageIds && ach.imageIds.length > 0;
              const featuredImages = isFeatured ? ach.imageIds!.map(id => placeholderImages.find(p => p.id === id)).filter(Boolean) : [];

              const cardContent = (
                <Card className={`relative flex ${isFeatured ? "flex-col md:flex-row md:items-center text-left" : "flex-col text-center"} h-full hover:shadow-xl transition-all duration-300 ${isFeatured ? 'bg-primary/5 border-primary/30 border-2' : 'hover:scale-105'}`} data-cursor-pointer>
                  {isFeatured && featuredImages.length > 0 && (
                    <div className="md:w-[45%] relative aspect-video md:aspect-[4/3] rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex overflow-hidden self-stretch">
                       <div className={`${featuredImages.length > 1 ? 'w-2/3 h-full pr-1' : 'w-full h-full'} relative`}>
                          <Image
                              src={featuredImages[0]!.imageUrl}
                              alt={ach.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                              data-ai-hint={featuredImages[0]!.imageHint}
                           />
                       </div>
                       {featuredImages.length > 1 && (
                         <div className="w-1/3 flex flex-col h-full gap-1">
                            {featuredImages.slice(1, 3).map((img) => (
                              <div key={img!.id} className="relative flex-1">
                                <Image
                                  src={img!.imageUrl}
                                  alt={ach.title}
                                  fill
                                  className="object-cover transition-transform duration-500 hover:scale-105"
                                  data-ai-hint={img!.imageHint}
                                />
                              </div>
                            ))}
                         </div>
                       )}
                    </div>
                  )}
                  <div className={`${isFeatured ? "md:w-[55%] p-2 md:p-6 flex flex-col h-full justify-center" : "flex flex-col h-full"}`}>
                    <CardHeader className={`${isFeatured ? "pb-2" : ""}`}>
                      {!isFeatured ? (
                         <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                           <Icon className="h-6 w-6 text-primary" />
                         </div>
                      ) : (
                        <div className="mb-3">
                           <Badge variant="default" className="shadow-sm font-semibold bg-primary text-primary-foreground">
                              <Award className="w-3 h-3 mr-1 inline-block" />
                              Grand Finalist Highlight
                           </Badge>
                        </div>
                      )}
                      <CardTitle className={`text-lg ${isFeatured ? "text-xl md:text-2xl font-bold font-headline" : ""}`}>
                        {ach.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className={`mt-2 ${isFeatured ? "text-base md:text-lg text-foreground/80 leading-relaxed" : ""}`}>
                        {ach.description}
                      </CardDescription>
                    </CardContent>
                    {(ach.url || ach.imageIds) && (
                      <CardFooter className={`${isFeatured ? "justify-start pt-2" : "justify-center"}`}>
                        {ach.url && (
                          <Button variant={isFeatured ? "default" : "link"} size={isFeatured ? "sm" : "default"} asChild className={isFeatured ? "mr-3" : ""}>
                            <a href={ach.url} target="_blank" rel="noopener noreferrer">
                              Watch Video
                            </a>
                          </Button>
                        )}
                        {ach.imageIds && ach.imageIds.length > 0 && (
                          <AchievementDialog achievement={ach}>
                             <Button variant={isFeatured ? "outline" : "link"} size={isFeatured ? "sm" : "default"} className={isFeatured ? "font-semibold border-primary/50 hover:bg-primary hover:text-primary-foreground transition-colors" : ""} data-cursor-pointer>
                               {isFeatured ? "View Documentation Gallery" : "View Evidence"}
                             </Button>
                          </AchievementDialog>
                        )}
                      </CardFooter>
                    )}
                  </div>
                </Card>
              );

              return (
                <div key={`${ach.title}-${index}`} className={`h-full ${isFeatured ? "md:col-span-2 lg:col-span-3 mb-4" : ""}`}>
                  {cardContent}
                </div>
              );
            })}
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
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-cursor-pointer>
            <a href="mailto:zaidanzhafifsatrianto@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              zaidanzhafifsatrianto@gmail.com
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
