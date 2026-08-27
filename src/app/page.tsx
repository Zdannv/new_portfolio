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
  Terminal,
  ExternalLink,
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

import { ParticleCanvas } from "@/components/particle-canvas";
import { TiltCard } from "@/components/tilt-card";
import { FloatingShapes } from "@/components/floating-shapes";
import { MouseGlow } from "@/components/mouse-glow";

const profileImage = placeholderImages.find(p => p.id === "profile");

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background Systems */}
      <ParticleCanvas />
      <MouseGlow />
      <FloatingShapes />

      {/* Hero Section */}
      <section
        id="hero"
        className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-24 md:py-32"
      >
        <div className="max-w-2xl text-left">
          <Badge className="mb-4 bg-primary/10 border-primary/30 text-primary px-3 py-1 font-semibold animate-pulse-slow">
            ✨ Available for Opportunities
          </Badge>
          <h1 className="font-headline text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Hi, I am <br />
            <span className="text-gradient drop-shadow-[0_2px_10px_rgba(251,146,60,0.25)]">
              Muhammad Zaidan
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
            A passionate Informatics Engineering student with a strong interest in software development, computer networks, and cybersecurity. Eager to apply my skills and learn within collaborative, forward-thinking teams.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/95 shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-transform duration-300 hover:scale-105" data-cursor-pointer>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 transition-transform duration-300 hover:scale-105" data-cursor-pointer>
              <a href="#projects">
                My Projects <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <a href="https://github.com/Zdannv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200" data-cursor-pointer>
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-zaidan-zhafiz-satrianto-a42a95389/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200" data-cursor-pointer>
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
             <a href="https://instagram.com/zdann_v" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200" data-cursor-pointer>
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive 3D Showcase */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full lg:w-auto">
          {/* Profile Image with 3D Border Glow */}
          {profileImage && (
            <div className="relative group animate-float-slow">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-amber-500 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-background bg-card">
                <Image
                  src={profileImage.imageUrl}
                  alt="Muhammad Zaidan Zhafiz Satrianto"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          )}

          {/* Interactive Developer Terminal Mockup */}
          <div className="w-full md:w-80 glass-card rounded-lg overflow-hidden border border-white/10 shadow-2xl animate-float-medium" style={{ animationDelay: "-2s" }}>
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-muted-foreground/80 font-mono">zaidan@showcase:~</span>
              <Terminal className="w-3.5 h-3.5 text-muted-foreground/60" />
            </div>
            <div className="p-4 font-mono text-xs leading-relaxed space-y-3 text-left">
              <div>
                <span className="text-primary">$</span> <span className="text-white">whoami</span>
                <p className="text-zinc-400 mt-1">Muhammad Zaidan Zhafiz Satrianto</p>
              </div>
              <div>
                <span className="text-primary">$</span> <span className="text-white">cat status.md</span>
                <p className="text-amber-400 mt-1">Informatics Engineering Student</p>
              </div>
              <div>
                <span className="text-primary">$</span> <span className="text-white">skills --core</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  <Badge variant="outline" className="text-[10px] py-0 border-white/10 text-zinc-300">Software</Badge>
                  <Badge variant="outline" className="text-[10px] py-0 border-white/10 text-zinc-300">Networks</Badge>
                  <Badge variant="outline" className="text-[10px] py-0 border-white/10 text-zinc-300">Cybersec</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Highlights Section */}
      <section id="projects" className="container relative z-10 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 border-primary/30 text-primary mb-2">Portfolio</Badge>
          <h2 className="font-headline text-3xl sm:text-5xl font-black tracking-tight">
            Project Highlights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated showcase of my engineering work, spanning robust web applications and native solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => {
            const projectImage = placeholderImages.find(p => p.id === project.imageId);
            return (
              <TiltCard key={project.slug} className="flex flex-col h-full bg-card/25" glowColor="rgba(251, 146, 60, 0.15)">
                <div className="flex flex-col h-full">
                  {projectImage && (
                    <Link href={`/projects/${project.slug}`} className="relative aspect-[4/3] overflow-hidden block group">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={projectImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-xs font-semibold text-white flex items-center gap-1">
                          View details <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  )}
                  <CardHeader className="p-6">
                    <CardTitle className="font-headline text-xl text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow px-6 pb-2">
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                     <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/5 border border-white/5 text-zinc-300 text-[10px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                  </CardContent>
                  <CardFooter className="justify-end p-6 pt-2">
                    <Button asChild variant="ghost" size="sm" className="hover:text-primary transition-all" data-cursor-pointer>
                      <Link href={`/projects/${project.slug}`}>
                        Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-24 bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 border-primary/30 text-primary mb-2">My Journey</Badge>
            <h2 className="font-headline text-3xl sm:text-5xl font-black tracking-tight">
              Work & Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional history, side gigs, and administrative roles showing leadership capacity.
            </p>
          </div>

          {/* Interactive Timeline Layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-white/5 -translate-x-1/2" />

            {LEADERSHIP_EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.slug} 
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "" : "md:flex-row-reverse"
                  } items-stretch justify-between mb-12 last:mb-0 w-full pl-10 md:pl-0`}
                >
                  {/* Glowing Node Point */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_rgba(251,146,60,0.8)] -translate-x-1/2 top-6 z-20 animate-pulse" />

                  {/* Card Container (45% width) */}
                  <div className="w-full md:w-[45%] z-10">
                    <TiltCard glowColor="rgba(251, 146, 60, 0.1)" className="h-full">
                      <Link href={`/experience/${exp.slug}`} className="block p-6 hover:no-underline h-full" data-cursor-pointer>
                        <div className="flex flex-col gap-2 h-full justify-between">
                          <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <span className="text-[10px] font-semibold text-primary font-mono bg-primary/10 px-2.5 py-0.5 rounded-full">
                                {exp.period}
                              </span>
                              {exp.tag && (
                                <Badge 
                                  variant={exp.tag === 'Side Job' ? 'outline' : exp.tag === 'Job Experience' ? 'default' : 'secondary'} 
                                  className={`text-[10px] px-2 py-0.5 font-bold shadow-sm ${
                                    exp.tag === 'Side Job' 
                                      ? 'border-primary/50 text-primary bg-primary/10' 
                                      : exp.tag === 'Job Experience' 
                                      ? 'bg-primary text-black hover:bg-primary' 
                                      : 'bg-white/5 border border-white/5 text-zinc-300'
                                  }`}
                                >
                                  {exp.tag}
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-lg font-bold text-white font-headline">{exp.role}</h3>
                            <span className="text-sm font-semibold text-primary/80">{exp.organization}</span>
                            <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 mt-2">{exp.description}</p>
                          </div>
                          
                          <div className="flex items-center gap-1 text-xs font-semibold text-primary mt-4 pt-2 border-t border-white/5">
                            See More <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </TiltCard>
                  </div>

                  {/* Empty space/balanced spacer for larger screens */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical & Soft Skills Section */}
      <section id="skills" className="relative z-10 py-24 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container max-w-5xl">
          <div className="grid gap-16 md:grid-cols-2">
            
            {/* Technical Skills Box */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-white">Technical Stack</h3>
                  <p className="text-xs text-muted-foreground">My primary technologies</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Proficiency across various platforms. Click a badge below to view projects and credentials validating the skill.
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <SkillDialog key={skill.name} skill={skill}>
                    <Badge
                      className="px-3.5 py-1.5 text-xs font-medium border-white/10 bg-white/5 text-zinc-300 hover:bg-primary hover:text-black hover:border-primary transition-all duration-200 cursor-pointer hover:scale-105"
                      variant="outline"
                      data-cursor-pointer
                    >
                      {skill.name}
                    </Badge>
                  </SkillDialog>
                ))}
              </div>
            </div>

            {/* Soft Skills Box */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-white">Interpersonal</h3>
                  <p className="text-xs text-muted-foreground">Soft skills & communication</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Skills developed from managing organization committees and liaison tasks. Click for details.
              </p>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((skill) => (
                  <SkillDialog key={skill.name} skill={skill}>
                    <Badge
                      className="px-3.5 py-1.5 text-xs font-medium border-white/10 bg-white/5 text-zinc-300 hover:bg-primary hover:text-black hover:border-primary transition-all duration-200 cursor-pointer hover:scale-105"
                      variant="outline"
                      data-cursor-pointer
                    >
                      {skill.name}
                    </Badge>
                  </SkillDialog>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative z-10 py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 border-primary/30 text-primary mb-2">Awards</Badge>
            <h2 className="font-headline text-3xl sm:text-5xl font-black tracking-tight">
              Achievements
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Certifications, competitive placements, and active participations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {ACHIEVEMENTS.map((ach, index) => {
              const Icon = ach.type === "win" ? Award : Star;
              const isFeatured = index === 0 && ach.imageIds && ach.imageIds.length > 0;
              const featuredImages = isFeatured ? ach.imageIds!.map(id => placeholderImages.find(p => p.id === id)).filter(Boolean) : [];

              const cardContent = (
                <div className={`relative flex ${isFeatured ? "flex-col md:flex-row md:items-center text-left" : "flex-col text-center"} h-full`}>
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
                  <div className={`${isFeatured ? "md:w-[55%] p-2 md:p-6 flex flex-col h-full justify-center" : "flex flex-col h-full p-6"}`}>
                    <CardHeader className={`${isFeatured ? "pb-2 p-4" : "p-0 mb-4"}`}>
                      {!isFeatured ? (
                         <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                           <Icon className="h-6 w-6 text-primary animate-pulse-slow" />
                         </div>
                      ) : (
                        <div className="mb-3">
                           <Badge variant="default" className="shadow-sm font-semibold bg-primary text-black hover:bg-primary">
                              <Award className="w-3 h-3 mr-1 inline-block" />
                              Grand Finalist Highlight
                           </Badge>
                        </div>
                      )}
                      <CardTitle className={`text-lg font-headline ${isFeatured ? "text-xl md:text-2xl font-bold text-white" : "text-white mt-4"}`}>
                        {ach.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow p-0 px-4 md:px-0">
                      <CardDescription className={`mt-2 text-zinc-400 text-sm ${isFeatured ? "text-base md:text-md leading-relaxed" : ""}`}>
                        {ach.description}
                      </CardDescription>
                    </CardContent>
                    {(ach.url || ach.imageIds) && (
                      <CardFooter className={`p-4 pb-2 md:pb-4 flex-wrap gap-2 ${isFeatured ? "justify-start pt-4 px-0" : "justify-center mt-6 px-0"}`}>
                        {ach.url && (
                          <Button variant={isFeatured ? "default" : "outline"} size="sm" asChild className={isFeatured ? "bg-primary text-black hover:bg-primary/90" : "border-white/10 hover:bg-white/5"} data-cursor-pointer>
                            <a href={ach.url} target="_blank" rel="noopener noreferrer">
                              Watch Video
                            </a>
                          </Button>
                        )}
                        {ach.imageIds && ach.imageIds.length > 0 && (
                          <AchievementDialog achievement={ach}>
                             <Button variant="outline" size="sm" className="font-semibold border-primary/30 text-primary hover:bg-primary hover:text-black transition-colors" data-cursor-pointer>
                                {isFeatured ? "Gallery" : "Evidence"}
                             </Button>
                          </AchievementDialog>
                        )}
                      </CardFooter>
                    )}
                  </div>
                </div>
              );

              return (
                <TiltCard key={`${ach.title}-${index}`} className={`h-full ${isFeatured ? "md:col-span-2 lg:col-span-3" : ""}`} glowColor={ach.type === 'win' ? "rgba(251, 146, 60, 0.15)" : "rgba(255,255,255,0.05)"}>
                  {cardContent}
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container relative z-10 py-24 text-center">
        <TiltCard className="max-w-3xl mx-auto p-12 bg-card/25 border-white/10 relative overflow-hidden" glowColor="rgba(251, 146, 60, 0.25)">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <h2 className="font-headline text-3xl sm:text-5xl font-black tracking-tight">
            Let's Collaborate
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-md text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, internship opportunities, coding collaborations, or networks. Feel free to reach out directly.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/95 shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-transform duration-300 hover:scale-105" data-cursor-pointer>
              <a href="mailto:zaidanzhafifsatrianto@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                zaidanzhafifsatrianto@gmail.com
              </a>
            </Button>
          </div>
        </TiltCard>
      </section>
    </div>
  );
}
