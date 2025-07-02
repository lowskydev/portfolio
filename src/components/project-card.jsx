import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ name, type, description, tech, date, repoUrl }) {
  return (
    <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-bold hover:text-orange-300 hover:underline transition-colors cursor-pointer text-sm sm:text-base break-words"
              >
                {name}
              </a>
            ) : (
              <span className="text-orange-400 font-bold text-sm sm:text-base break-words">
                {name}
              </span>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex-shrink-0"
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 hover:text-gray-300 transition-colors" />
              </a>
            )}
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">{type}</div>
        </div>
        <div className="text-blue-400 text-xs sm:text-sm flex-shrink-0">
          {date}
        </div>
      </div>
      <div className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
        {description}
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2">
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
