import { File } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FileHeader } from "./file-header";

const skillsData = [
  {
    category: "languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "Rust", "JavaScript"],
  },
  {
    category: "frameworks",
    skills: ["Django", "Flask", "React"],
  },
  {
    category: "tools",
    skills: ["Git", "Docker", "Linux", "PostgreSQL", "Neo4j"],
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
      <FileHeader
        icon={File}
        filename="skills.json"
        iconColor="text-blue-400"
      />
      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {skillsData.map((section, idx) => (
            <div key={idx}>
              <div className="text-orange-400 mb-2 sm:mb-3 text-sm sm:text-base">
                "{section.category}": [
              </div>
              <div className="ml-2 sm:ml-4 flex flex-wrap gap-1 sm:gap-2">
                {section.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    className="bg-gray-700 text-green-400 border-gray-500 hover:bg-gray-600 font-mono text-xs"
                  >
                    "{skill}"
                  </Badge>
                ))}
              </div>
              <div className="text-orange-400 mt-1 sm:mt-2 text-sm sm:text-base">
                ]
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
