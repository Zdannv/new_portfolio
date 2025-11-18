import { Icons } from "@/components/icons";
import { placeholderImages } from "./placeholder-images";
import type { ImagePlaceholder } from "./placeholder-images";

export const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
];

export type Project = {
  slug: string;
  title: string;
  role: string;
  description: string;
  longDescription: string;
  tags: string[];
  technologies: ((props: React.SVGProps<SVGSVGElement>) => JSX.Element)[];
  imageId: string;
  galleryImageIds: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
};

export type Experience = {
    slug: string;
    role: string;
    organization: string;
    period: string;
    description: string;
    achievements: string[];
    evidenceImageIds: string[];
}

export type Skill = {
    name: string;
    relatedProjectSlugs: string[];
    relatedExperienceSlugs: string[];
    certificateImageIds: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "cleanova-circle",
    title: "Cleanova Circle",
    role: "Full-Stack Developer",
    description: "A full-stack web platform for Cleanova, an IoT-based waste management solution. Features dynamic video progress tracking and a comprehensive admin dashboard.",
    longDescription: "Cleanova Circle is a comprehensive web platform designed to support an IoT-based waste management system. As the full-stack developer, I was responsible for building the entire application using Next.js for the frontend and Supabase for the backend. Key features include a dynamic video progress tracking system that allows stakeholders to monitor the waste processing cycle in real-time, and a powerful admin dashboard for managing devices, users, and data analytics.",
    tags: ["Full-Stack", "Web Development", "IoT"],
    technologies: [Icons.nextjs, Icons.supabase],
    imageId: "cleanova",
    galleryImageIds: ["cleanova-gallery-1", "cleanova-gallery-2", "cleanova-gallery-3"],
    githubUrl: "https://github.com/zaidanzha/cleanova-circle",
    liveDemoUrl: "https://cleanova.vercel.app/",
  },
  {
    slug: "adibasa-app",
    title: "Adibasa App",
    role: "UI/UX Designer & Mobile Developer",
    description: "An Android application designed to help users learn the Javanese language. The app focuses on a user-centered design, providing an intuitive and engaging UI/UX.",
    longDescription: "Adibasa is an Android application aimed at making the process of learning the Javanese language accessible and enjoyable. My primary role was to lead the UI/UX design process, from wireframing and prototyping to final visual design. I also contributed to the development using Flutter. The core focus was on creating a user-centered experience with intuitive navigation, gamified learning modules, and a clean, modern aesthetic to keep users engaged.",
    tags: ["Mobile App", "UI/UX Design", "Android"],
    technologies: [Icons.flutter],
    imageId: "adibasa",
    galleryImageIds: ["adibasa-gallery-1", "adibasa-gallery-2"],
    githubUrl: "https://github.com/zaidanzha/adibasa-app",
  },
  {
    slug: "streetware-platform",
    title: "StreetWare Platform",
    role: "Mobile Developer & Backend Engineer",
    description: "A geolocation-based reporting application for e-government services. It enables real-time notifications and communication between citizens and government agencies.",
    longDescription: "StreetWare is a cross-platform mobile application that bridges the communication gap between citizens and local government for reporting public infrastructure issues. Built with Flutter and Supabase, it leverages geolocation for precise reporting and real-time notifications to keep all parties informed. My responsibilities included developing the Flutter application and engineering the backend infrastructure on Supabase, including the database schema and security rules.",
    tags: ["Mobile App", "E-Government", "Real-Time"],
    technologies: [Icons.flutter, Icons.supabase],
    imageId: "streetware",
    galleryImageIds: ["streetware-gallery-1", "streetware-gallery-2", "streetware-gallery-3"],
    githubUrl: "https://github.com/zaidanzha/streetware",
  },
  {
    slug: "vehicare-app",
    title: "VehiCare App",
    role: "Flutter Developer",
    description: "A vehicle management application featuring GPS tracking for real-time location monitoring and a robust system for scheduling maintenance.",
    longDescription: "VehiCare is a mobile solution for individuals and businesses to manage their vehicles effectively. The app provides real-time GPS tracking for monitoring vehicle location and a comprehensive maintenance scheduling system to ensure vehicles are always in optimal condition. As a Flutter developer, I implemented the core features, focusing on performance and a responsive user interface.",
    tags: ["Mobile App", "GPS Tracking", "Vehicle Management"],
    technologies: [Icons.flutter],
    imageId: "vehicare",
    galleryImageIds: ["vehicare-gallery-1"],
    githubUrl: "https://github.com/zaidanzha/vehicare",
  },
];

export const SKILLS: Skill[] = [
  { 
      name: "Next.js", 
      relatedProjectSlugs: ["cleanova-circle"], 
      relatedExperienceSlugs: [], 
      certificateImageIds: [],
  },
  { 
      name: "Cybersecurity", 
      relatedProjectSlugs: ["streetware-platform"], 
      relatedExperienceSlugs: ["pens-osc"],
      certificateImageIds: ["cert-dts-tsa"],
  },
  { 
      name: "UI/UX Design", 
      relatedProjectSlugs: ["adibasa-app"], 
      relatedExperienceSlugs: [], 
      certificateImageIds: [],
  },
  { name: "Mobile Development", relatedProjectSlugs: ["adibasa-app", "streetware-platform", "vehicare-app"], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Web Development", relatedProjectSlugs: ["cleanova-circle"], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Flutter", relatedProjectSlugs: ["adibasa-app", "streetware-platform", "vehicare-app"], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "React", relatedProjectSlugs: ["cleanova-circle"], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Node.js", relatedProjectSlugs: [], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Python", relatedProjectSlugs: [], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Java", relatedProjectSlugs: [], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Supabase", relatedProjectSlugs: ["cleanova-circle", "streetware-platform"], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Firebase", relatedProjectSlugs: [], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "PostgreSQL", relatedProjectSlugs: ["cleanova-circle", "streetware-platform"], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Docker", relatedProjectSlugs: [], relatedExperienceSlugs: [], certificateImageIds: [] },
  { name: "Git", relatedProjectSlugs: ["cleanova-circle", "adibasa-app", "streetware-platform", "vehicare-app"], relatedExperienceSlugs: ["pens-osc"], certificateImageIds: [] },
  { name: "Figma", relatedProjectSlugs: ["adibasa-app"], relatedExperienceSlugs: [], certificateImageIds: [] },
];

export const LEADERSHIP_EXPERIENCE: Experience[] = [
    {
        slug: "pens-osc",
        role: "Head of Research and Development",
        organization: "Open Source Community PENS",
        period: "2023 - Present",
        description: "Leading the R&D division to explore new open-source technologies, mentor members, and manage community-driven development projects. My focus is on fostering a collaborative environment for learning and innovation.",
        achievements: [
            "Initiated and led a workshop on offensive security and CTF strategies.",
            "Mentored 10+ junior members in web development and cybersecurity fundamentals.",
            "Organized a campus-wide open-source contribution day."
        ],
        evidenceImageIds: ["pens-osc-evidence-1", "pens-osc-evidence-2"]
    },
    {
        slug: "efortech",
        role: "Chief Technology Officer",
        organization: "Efortech",
        period: "2022 - 2023",
        description: "Directed the technological vision and strategy, overseeing the development of innovative tech solutions and managing the engineering team. I was responsible for the entire product lifecycle, from ideation to deployment and maintenance.",
        achievements: [
            "Led the development of 3 major product releases.",
            "Grew the engineering team from 2 to 8 members.",
            "Implemented agile methodologies, improving team productivity by 25%."
        ],
        evidenceImageIds: ["efortech-evidence-1"]
    },
    {
        slug: "sc-smaniw",
        role: "Vice President of Marketing",
        organization: "Student Company SMA Negeri 1 Waru",
        period: "2020 - 2021",
        description: "Developed and executed marketing strategies that significantly increased brand awareness and sales for the student-run company. Managed social media campaigns, partnerships, and promotional events.",
        achievements: [
            "Increased monthly sales by 50% through targeted digital marketing campaigns.",
            "Secured 3 strategic partnerships with local businesses.",
            "Awarded 'Best Marketing Strategy' at the regional student company competition."
        ],
        evidenceImageIds: []
    },
    {
        slug: "hipmi-pens",
        role: "Staff of Business and Partnership",
        organization: "HIPMI PT PENS",
        period: "2022 - 2023",
        description: "Fostered relationships with external partners to create business opportunities and collaborative events for young entrepreneurs at PENS. My role involved networking, negotiation, and event coordination.",
        achievements: [
            "Coordinated a joint seminar with a local startup incubator, attracting over 200 attendees.",
            "Established a partnership program offering mentorship from experienced entrepreneurs."
        ],
        evidenceImageIds: []
    }
];

export const ACHIEVEMENTS = [
    {
        title: "Regional Finalist",
        description: "JA Titan Business Competition",
    },
    {
        title: "Favorite Winner",
        description: "Jawa Pos SMA Awards 2020 - School Campaign",
    },
    {
        title: "Participant",
        description: "GEMASTIK XVI 2023 - Cybersecurity",
    },
    {
        title: "Participant",
        description: "Business Case Competition ITB 2022",
    },
    {
        title: "Participant",
        description: "FindIT UGM 2023 - Business Plan",
    },
    {
        title: "Participant",
        description: "Schematics ITS 2023 - Business Case",
    }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
    return PROJECTS.find(p => p.slug === slug);
};

// Helper function to get experience by slug
export const getExperienceBySlug = (slug: string): Experience | undefined => {
    return LEADERSHIP_EXPERIENCE.find(e => e.slug === slug);
};

// Helper function to get image by id
export const getImageById = (id: string): ImagePlaceholder | undefined => {
  return placeholderImages.find(p => p.id === id);
};
