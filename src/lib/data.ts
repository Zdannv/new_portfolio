
import { Icons } from "@/components/icons";
import { placeholderImages } from "./placeholder-images";
import type { ImagePlaceholder } from "./placeholder-images";

export const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
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
  playStoreUrl?: string;
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

export type Validation = 
    | { type: 'project'; title: string; slugs: string[] }
    | { type: 'experience'; title: string; slugs: string[] }
    | { type: 'certificate'; title: string; itemIds: string[] }
    | { type: 'youtube'; title: string; url: string };

export type Skill = {
    name: string;
    validations?: Validation[];
}

export type Achievement = {
  title: string;
  description: string;
  type: 'win' | 'participation';
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "adibasa-app",
    title: "Adibasa (Mobile & Web App Ecosystem)",
    role: "Full-Stack Developer & AI Integrator",
    description: "An AI-powered language learning ecosystem with a gamified mobile app (Flutter) and a management web app (Next.js) to revive interest in the Javanese language.",
    longDescription: "Adibasa is a comprehensive language learning ecosystem designed to address the declining interest in the Javanese language among the younger generation. As the lead developer, I was responsible for building core application features, including the interactive gamified lesson system, a competitive leaderboard, and user profile management. It combines a gamified learning system with AI-driven conversation practice. The core of Adibasa includes an Interactive Gamified Lesson feature using a Spaced Repetition System (SRS) to make learning vocabulary and sentence structure engaging. To complement this, an AI Chatbot powered by Google's Gemini 1.5 API allows users to practice real-world conversations in various Javanese speech levels (Ngoko, Krama). The AI is orchestrated via a FastAPI backend, enabling contextual and culturally nuanced dialogues. The entire system is built on a Clean Architecture pattern, with a Flutter mobile app for learners and a Next.js web app for administrative purposes, all supported by Firebase for backend services like authentication, database, and notifications.",
    tags: ["Mobile App", "Web App", "AI", "Gamification", "Full-Stack", "Next.js", "React", "Firebase", "Gemini API"],
    technologies: [Icons.flutter, Icons.nextjs, Icons.supabase],
    imageId: "adibasa",
    galleryImageIds: ["adibasa-gallery-1", "adibasa-gallery-2"],
    githubUrl: "https://github.com/Zdannv/adibasa-app",
    liveDemoUrl: "https://adibasa.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adibasa.app&pcampaignid=web_share",
  },
  {
    slug: "streetware-app",
    title: "StreetWare (Android App)",
    role: "Product Owner",
    description: "An e-government app that enables citizens to report damaged roads and public facilities using geolocation and photo evidence.",
    longDescription: "As Product Owner, I led the development of StreetWare, a mobile e-government application built with Flutter and Supabase that enables citizens to report damaged roads and public facilities in Surabaya. The app features geolocation-based reporting, photo evidence upload, and real-time notifications, with role-based access allowing government officials to verify and update report statuses directly within the mobile platform, enhancing transparency and public participation in infrastructure maintenance.",
    tags: ["Mobile App", "E-Government", "Product Owner"],
    technologies: [Icons.flutter, Icons.supabase],
    imageId: "streetware",
    galleryImageIds: ["streetware-gallery-1", "streetware-gallery-2"],
    githubUrl: "https://github.com/Zdannv/streetware",
  },
  {
    slug: "vehicare-app",
    title: "VehiCare (Android App)",
    role: "Product Owner",
    description: "A vehicle maintenance application featuring autonomous GPS-based maintenance scheduling and a nearby workshop finder.",
    longDescription: "As Product Owner, I conceptualized VehiCare, a vehicle maintenance application designed to simplify car care. This innovative app uses GPS tracking to autonomously schedule maintenance reminders, features a robust nearby workshop finder, and provides a wealth of tips to help users extend their vehicle's lifespan. This project showcases my ability to create an all-in-one, user-friendly solution that combines smart technology with practical vehicle management.",
    tags: ["Mobile App", "GPS Tracking", "Product Owner"],
    technologies: [Icons.flutter],
    imageId: "vehicare",
    galleryImageIds: ["vehicare-gallery-1", "vehicare-gallery-2"],
    githubUrl: "https://github.com/Zdannv/vehicare",
  },
];

export const SKILLS: Skill[] = [
    { 
        name: "Flutter", 
        validations: [
            { type: 'project', title: 'Related Projects', slugs: ["adibasa-app", "streetware-app", "vehicare-app"] }
        ]
    },
    {
        name: "Java & Kotlin",
        validations: [
            { type: 'project', title: 'Android Development Projects', slugs: ["adibasa-app", "streetware-app", "vehicare-app"] },
        ]
    },
    { 
        name: "Next.js",
        validations: [
           { type: 'project', title: 'Related Projects', slugs: ["adibasa-app"] }
        ]
    },
    { 
        name: "React", 
        validations: [
          { type: 'project', title: 'Related Projects', slugs: ["adibasa-app"] }
        ]
    },
    {
        name: "HTML & CSS",
        validations: [
            { type: 'project', title: 'Web Projects', slugs: ["adibasa-app"] }
        ]
    },
    {
        name: "JavaScript & TypeScript",
        validations: [
          { type: 'project', title: 'Related Projects', slugs: ["adibasa-app"] }
        ]
    },
    {
        name: "Tailwind CSS",
        validations: [
          { type: 'project', title: 'Related Projects', slugs: ["adibasa-app"] }
        ]
    },
    { 
        name: "UI/UX Design", 
        validations: [
          { type: 'project', title: 'Related Projects', slugs: ["adibasa-app", "streetware-app", "vehicare-app"] },
        ]
    },
    { 
        name: "Cybersecurity", 
        validations: [
          { type: 'experience', title: 'Related Experience', slugs: ["pens-osc"] },
          { type: 'certificate', title: 'Relevant Certificates', itemIds: ["cert-dts-tsa"] },
        ]
    },
    { 
        name: "Computer Network", 
        validations: [
          { type: 'experience', title: 'Related Experience', slugs: ["pens-osc"] },
          { type: 'certificate', title: 'Relevant Certificates', itemIds: ["cert-jna"] }
        ]
    },
    { 
        name: "Firebase", 
        validations: [
          { type: 'project', title: 'Related Projects', slugs: ["adibasa-app"] }
        ]
    },
    { 
        name: "Supabase", 
        validations: [
          { type: 'project', title: 'Related Projects', slugs: ["streetware-app"] }
        ]
    },
    { 
        name: "Video Editing", 
        validations: [
            { type: 'youtube', title: 'Duta Pelajar Performance', url: "https://youtu.be/w_ULh5nufSI?si=da0C0Kp_DrQ1ipJ4" }
        ]
    },
];


export const SOFT_SKILLS: Skill[] = [
    { 
        name: "Leadership", 
        validations: [
            { type: 'experience', title: 'Related Experience', slugs: ["pens-osc", "hipmi-pens"] }
        ]
    },
    {
        name: "Communication",
        validations: [
            { type: 'experience', title: 'Related Experience', slugs: ["pens-osc", "efortech-dv", "osjur-pens"] }
        ]
    },
    { 
        name: "Public Speaking", 
        validations: [
            { type: 'experience', title: 'Related Experience', slugs: ["osjur-pens", "efortech-dv"] },
            { type: 'youtube', title: 'Duta Pelajar Performance', url: "https://youtu.be/w_ULh5nufSI?si=da0C0Kp_DrQ1ipJ4" }
        ]
    },
    {
        name: "Problem Solving",
        validations: [
            { type: 'project', title: 'Related Projects', slugs: ["streetware-app", "vehicare-app", "adibasa-app"] }
        ]
    },
    {
        name: "Critical Thinking",
        validations: [
             { type: 'project', title: 'Related Projects', slugs: ["streetware-app", "vehicare-app"] }
        ]
    },
    {
        name: "Adaptability",
        validations: [
            { type: 'experience', title: 'Related Experience', slugs: ["pens-osc", "ieee-sb-pens", "hipmi-pens"] }
        ]
    },
    {
        name: "Creativity",
        validations: [
            { type: 'project', title: 'Related Projects', slugs: ["adibasa-app"] }
        ]
    }
];


export const LEADERSHIP_EXPERIENCE: Experience[] = [
    {
        slug: "pens-osc",
        role: "Vice President",
        organization: "Open Source Community PENS",
        period: "2023 - Now",
        description: "Organized and led events promoting open source technologies, taught topics like networking and cybersecurity, and represented the community to new students.",
        achievements: [
            "Organized and led events promoting open source technologies.",
            "Taught various topics including networking, Linux, and cybersecurity to new members.",
            "Represented the community during Pekan Komunitas and introduced it to new students.",
        ],
        evidenceImageIds: ["pens-osc-evidence-1", "pens-osc-evidence-2"]
    },
    {
        slug: "hipmi-pens",
        role: "Vice Head of Division 1",
        organization: "HIPMI PT PENS",
        period: "2025 - Now",
        description: "Developing membership SOPs, creating leadership training programs, and maintaining relationships between members.",
        achievements: [
            "Develop membership SOPs (recruitment, database, validation).",
            "Create a cadre development/leadership training program.",
            "Maintain relationships between members and ensure active participation."
        ],
        evidenceImageIds: []
    },
    {
        slug: "ieee-sb-pens",
        role: "Staff of Membership & Development Team",
        organization: "IEEE Student Branch PENS",
        period: "2025 - Now",
        description: "Fostering a better team environment, conducting internal webinars, and ensuring member connectivity.",
        achievements: [
             "Conducting Internal Webinar and various IEEE Events",
             "Making sure that the member are always connected to each other"
        ],
        evidenceImageIds: ["ieee-cert"]
    },
    {
        slug: "efortech-dv",
        role: "Trainer",
        organization: "Efortech Data Visualization",
        period: "2024 - Now",
        description: "Conducted training for Kediri Regional Development Planning Agency (BAPPEDA Kediri) on developing information system dashboards using Tableau.",
        achievements: [
            "Trained government agency staff on data visualization and dashboard development.",
            "Delivered technical material on Tableau for information system implementation."
        ],
        evidenceImageIds: ["efortech-evidence-1", "efortech-evidence-2"]
    },
     {
        slug: "osjur-pens",
        role: "Officer Liaison",
        organization: "Ospek Jurusan Informatika & Sains Data PENS",
        period: "2023",
        description: "Acted as the primary point of contact between the orientation committee and academic instructors, coordinating schedules and logistics.",
        achievements: [
            "Coordinated schedules, communication, and event logistics involving faculty participation.",
            "Ensured smooth collaboration between the committee’s agenda and academic requirements."
        ],
        evidenceImageIds: ["osjur-cert"]
    },
];

export const ACHIEVEMENTS: Achievement[] = [
    {
        title: "3rd Winner",
        description: "JA Titan Business Competition, PJI",
        type: "win"
    },
    {
        title: "Top 16 Finalist",
        description: "Duta Pelajar Putra, JawaPos SMA Awards 2023",
        type: "win",
        url: "https://youtu.be/w_ULh5nufSI?si=da0C0Kp_DrQ1ipJ4",
    },
    {
        title: "Cyber Champion (CTF)",
        description: "DTS TSA CTF 2024 (Participation)",
        type: "participation"
    },
    {
      title: "Participant",
      description: "Gemastik 2024 – Cyber Security CTF",
      type: "participation"
    },
    {
      title: "Participant",
      description: "Gemastik 2025 – Desain Pengalam Pengguna",
      type: "participation"
    },
    {
      title: "Participant",
      description: "Fasilkom UI/UX Competition 2024",
      type: "participation"
    },
    {
      title: "Participant",
      description: "Technofair 2024 – Capture The Flag",
      type: "participation"
    },
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

    

    
