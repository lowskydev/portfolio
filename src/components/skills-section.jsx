import { File } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FileHeader } from "./file-header";

const skillsData = [
  {
    category: "languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "frameworks",
    skills: ["React", "Node.js", "Express.js", "Next.js", "Django", "Flask"],
  },
  {
    category: "tools",
    skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Linux"],
  },
  {
    category: "other",
    skills: [
      "Agile/Scrum",
      "REST APIs",
      "Unit Testing",
      "CI/CD",
      "Responsive Design",
    ],
  },
];

export function SkillsSection() {
  return (
    <div className="border border-gray-600">
      <FileHeader icon={File} filename="skills.json" iconColor="text-red-400" />
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((section, idx) => (
            <div key={idx}>
              <div className="text-orange-400 mb-3">
                "{section.category}": [
              </div>
              <div className="ml-4 flex flex-wrap gap-2">
                {section.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    className="bg-gray-700 text-green-400 border-gray-500 hover:bg-gray-600 font-mono text-xs"
                  >
                    "{skill}"
                  </Badge>
                ))}
              </div>
              <div className="text-orange-400 mt-2">]</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
