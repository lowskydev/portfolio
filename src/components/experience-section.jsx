import { File } from "lucide-react";
import { FileHeader } from "./file-header";
import { ExperienceCard } from "./experience-card";

const experienceData = [
  {
    role: "Technical Skills Development",
    company: "Personal Projects",
    date: "2022-Present",
    tasks: [
      "Mastered multiple programming languages: Python, Java, C/C++, JavaScript, Rust",
      "Developed proficiency in modern frameworks: Django, React, Flask",
      "Gained experience with databases: PostgreSQL, Neo4j, SurrealDB",
      "Applied software engineering principles in personal and academic projects",
    ],
  },
  //   {
  //     role: "Software Engineer Intern",
  //     company: "Google",
  //     date: "Jan 2023-Present",
  //     tasks: [
  //       "Contributed to the development of internal tools",
  //       "Implemented new features in the codebase",
  //       "Collaborated with cross-functional teams to deliver high-quality software",
  //     ],
  //   },
];

export function ExperienceSection() {
  return (
    <div className="border border-gray-600">
      <FileHeader
        icon={File}
        filename="experience.log"
        iconColor="text-blue-400"
      />
      <div className="p-4 space-y-4">
        {experienceData.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}
