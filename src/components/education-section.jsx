import { File } from "lucide-react";
import { FileHeader } from "./file-header";

export function EducationSection() {
  return (
    <div className="border border-gray-600">
      <FileHeader
        icon={File}
        filename="education.c"
        iconColor="text-blue-400"
      />
      <div className="p-3 sm:p-4">
        <div className="text-gray-500 text-xs sm:text-sm mb-2">
          // Education Configuration
        </div>
        <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4">
          <div className="text-gray-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <div className="flex-1">
                <div className="text-orange-400 font-bold text-sm sm:text-base">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  AGH University of Science and Technology, Poland
                  <div className="text-xs text-gray-500">
                    // Program taught in English
                  </div>
                </div>
              </div>
              <div className="text-left sm:text-right text-xs sm:text-sm flex-shrink-0">
                <div className="text-blue-400">Expected: February 2027</div>
                <div className="text-gray-400">GPA: 4.8/5.0</div>
              </div>
            </div>
            <div className="text-xs sm:text-sm mt-3 sm:mt-4">
              <div className="text-gray-500">/* Relevant Coursework */</div>
              <div className="text-green-400 break-words">
                ['Data Structures & Algorithms', 'OOP', 'Unix Systems', 'Deep
                Learning', 'Database Systems', 'Networks', 'Web Dev']
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
