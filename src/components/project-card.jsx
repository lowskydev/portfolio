import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ name, type, description, tech, date, repoUrl }) {
  return (
    <div className="bg-gray-800 border border-gray-700 p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center gap-2">
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-bold hover:text-orange-300 hover:underline transition-colors cursor-pointer"
              >
                {name}
              </a>
            ) : (
              <span className="text-orange-400 font-bold">{name}</span>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <ExternalLink className="h-4 w-4 text-gray-400 hover:text-gray-300 transition-colors" />
              </a>
            )}
          </div>
          <div className="text-gray-400 text-sm">{type}</div>
        </div>
        <div className="text-blue-400 text-sm">{date}</div>
      </div>
      <div className="text-gray-300 text-sm mb-3">{description}</div>
      <div className="flex flex-wrap gap-2">
        {tech.map((technology, techIdx) => (
          <Badge
            key={techIdx}
            variant="outline"
            className="border-gray-500 text-green-400 hover:bg-gray-600 hover:text-green-300 font-mono text-xs"
          >
            {technology}
          </Badge>
        ))}
      </div>
    </div>
  );
}
