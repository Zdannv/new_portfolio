import { Icons } from "@/components/icons";

export const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
];

export const PROJECTS = [
  {
    title: "Cleanova Circle",
    description: "A full-stack web platform for Cleanova, an IoT-based waste management solution. Features dynamic video progress tracking for waste processing and a comprehensive admin dashboard for monitoring.",
    tags: ["Full-Stack", "Web Development", "IoT"],
    technologies: [Icons.nextjs, Icons.supabase],
    imageId: "cleanova",
  },
  {
    title: "Adibasa App",
    description: "An Android application designed to help users learn the Javanese language. The app focuses on a user-centered design, providing an intuitive and engaging UI/UX for an effective learning experience.",
    tags: ["Mobile App", "UI/UX Design", "Android"],
    technologies: [Icons.flutter],
    imageId: "adibasa",
  },
  {
    title: "StreetWare Platform",
    description: "A geolocation-based reporting application for e-government services. It enables real-time notifications and communication between citizens and government agencies, built with Flutter and Supabase for a seamless cross-platform experience.",
    tags: ["Mobile App", "E-Government", "Real-Time"],
    technologies: [Icons.flutter, Icons.supabase],
    imageId: "streetware",
  },
  {
    title: "VehiCare App",
    description: "A vehicle management application featuring GPS tracking for real-time location monitoring and a robust system for scheduling maintenance, helping users keep their vehicles in optimal condition.",
    tags: ["Mobile App", "GPS Tracking", "Vehicle Management"],
    technologies: [Icons.flutter],
    imageId: "vehicare",
  },
];

export const SKILLS = [
  "Mobile Development",
  "Web Development",
  "Cybersecurity",
  "UI/UX Design",
  "Flutter",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "Java",
  "Supabase",
  "Firebase",
  "PostgreSQL",
  "Docker",
  "Git",
  "Figma",
];

export const LEADERSHIP_EXPERIENCE = [
    {
        role: "Head of Research and Development",
        organization: "Open Source Community PENS",
        period: "2023 - Present",
        description: "Leading the R&D division to explore new open-source technologies, mentor members, and manage community-driven development projects."
    },
    {
        role: "Chief Technology Officer",
        organization: "Efortech",
        period: "2022 - 2023",
        description: "Directed the technological vision and strategy, overseeing the development of innovative tech solutions and managing the engineering team."
    },
    {
        role: "Vice President of Marketing",
        organization: "Student Company SMA Negeri 1 Waru",
        period: "2020 - 2021",
        description: "Developed and executed marketing strategies that significantly increased brand awareness and sales for the student-run company."
    },
    {
        role: "Staff of Business and Partnership",
        organization: "HIPMI PT PENS",
        period: "2022 - 2023",
        description: "Fostered relationships with external partners to create business opportunities and collaborative events for young entrepreneurs at PENS."
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
