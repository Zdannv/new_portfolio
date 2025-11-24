
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
}

export const PROJECTS: Project[] = [
  // {
  //   slug: "cleanova-circle",
  //   title: "Cleanova Circle (Web App)",
  //   role: "Full-Stack Web Developer",
  //   description: "A subscription-based web application to promote the Cleannova brand, featuring an online course-like experience with exclusive video tutorials.",
  //   longDescription: "Cleanova Circle is a subscription-based web application I developed to promote the Cleannova brand. Built with Next.js and Supabase, the platform offers an online course-like experience where users can access exclusive video tutorials on cleaning and maintenance. Key features include an admin-managed authentication system, dynamic video progress tracking to save and resume playback, and secure content delivery using Row Level Security (RLS) and Signed URLs from Supabase Storage. This project demonstrates my ability to build a secure, functional, and user-friendly full-stack application with modern technology.",
  //   tags: ["Full-Stack", "Web Development", "Subscription"],
  //   technologies: [Icons.nextjs, Icons.supabase],
  //   imageId: "cleanova",
  //   galleryImageIds: ["cleanova-gallery-1", "cleanova-gallery-2", "cleanova-gallery-3"],
  //   githubUrl: "https://github.com/zaidanzha/cleanova-circle",
  //   liveDemoUrl: "https://cleanova.vercel.app/",
  // },
  {
    slug: "adibasa-app",
    title: "Adibasa (Android App)",
    role: "Full-Stack Mobile Developer",
    description: "A mobile language learning application designed to help migrant students in Surabaya learn practical Javanese.",
    longDescription: "Adibasa is a mobile language learning application designed to help migrant students in Surabaya overcome communication barriers by teaching them practical Javanese. As the lead developer and designer, I was responsible for the end-to-end UI/UX design process, from conceptualization to creating a cohesive and user-friendly interface based on User-Centered Design principles. My work included slicing the finalized prototypes into a functional front-end, ensuring a smooth and responsive user experience. Furthermore, I developed and managed the promotional materials for the application, including designing posters and producing videos to effectively communicate its value proposition to the target audience.",
    tags: ["Mobile App", "UI/UX Design", "Language Learning"],
    technologies: [Icons.flutter],
    imageId: "adibasa",
    galleryImageIds: ["adibasa-gallery-1", "adibasa-gallery-2"],
    githubUrl: "https://github.com/zaidanzha/adibasa-app",
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
    githubUrl: "https://github.com/zaidanzha/streetware",
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
    githubUrl: "https://github.com/zaidanzha/vehicare",
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
    name: "Next.js",
    validations: []
  },
  { 
    name: "UI/UX Design", 
    validations: [
      { type: 'project', title: 'Related Projects', slugs: ["adibasa-app"] },
    ]
  },
  { 
    name: "Cybersecurity", 
    validations: [
      { type: 'project', title: 'Related Projects', slugs: ["streetware-app"] },
      { type: 'experience', title: 'Related Experience', slugs: ["pens-osc", "ieee-sb-pens"] },
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
  { name: "React", validations: [] },
  { 
    name: "Supabase", 
    validations: [
      { type: 'project', title: 'Related Projects', slugs: ["streetware-app"] }
    ]
  },
  { name: "Video Editing", validations: [
      { type: 'project', title: 'Related Projects', slugs: ["adibasa-app"] }
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
        name: "Public Speaking", 
        validations: [
            { type: 'experience', title: 'Related Experience', slugs: ["osjur-pens", "efortech-dv"] },
            { type: 'youtube', title: 'Duta Pelajar Performance', url: "https://youtu.be/w_ULh5nufSI?si=da0C0Kp_DrQ1ipJ4" }
        ]
    },
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
        evidenceImageIds: []
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
        evidenceImageIds: []
    },
];

export const ACHIEVEMENTS: Achievement[] = [
    {
        title: "3rd Winner",
        description: "JA Titan Business Competition, PJI",
    },
    {
        title: "Favorite Winner",
        description: "Duta Pelajar Putra, JawaPos SMA Awards 2023",
    },
    {
        title: "Cyber Champion (CTF)",
        description: "DTS TSA 2024",
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
