import { Folder } from "lucide-react";
import { FileHeader } from "./file-header";
import { ProjectCard } from "./project-card";

const projectsData = [
  {
    name: "Fokuso",
    type: "Frontend Application",
    description:
      "Productivity platform combining Pomodoro technique, spaced repetition learning, and intelligent task management.",
    tech: ["React", "Shadcnui", "Tailwindcss", "Vite"],
    date: "Mar-Jun 2025",
    repoUrl: "https://github.com/lowskydev/Fokuso",
  },
  {
    name: "Fokuso API",
    type: "Backend Application",
    description:
      "Django REST API backend for Fokuso productivity platform. Features spaced repetition system, focus session tracking, task management, and comprehensive analytics. ",
    tech: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
    date: "Mar-Jun 2025",
    repoUrl: "https://github.com/lowskydev/Fokuso-API",
  },
  {
    name: "Surreal DB CLI Tool",
    type: "Database CLI Application",
    description:
      "command-line interface (CLI) tool built for university coursework that implements 18 complex graph database queries using SurrealDB. The project analyzes the CommonSense Knowledge Graph (CSKG) dataset containing millions of nodes and relationships.",
    tech: ["Python", "SurrealDB"],
    date: "Apr-Jun 2025",
    repoUrl: "https://github.com/lowskydev/SurrealDB-CLI-Tool",
  },
];

export function ProjectsSection() {
  return (
    <div className="border border-gray-600">
      <FileHeader icon={Folder} filename="./projects" />
      <div className="p-4 space-y-4">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
