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
      <div className="p-4">
        <div className="text-gray-500 text-sm mb-2">
          // Education Configuration
        </div>
        <div className="bg-gray-800 border border-gray-700 p-4">
          <div className="text-gray-300">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-orange-400 font-bold">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-gray-400">
                  AGH University of Science and Technology, Poland
                  <div className="text-sm text-gray-500">
                    // Program taught in English
                  </div>
                </div>
              </div>
              <div className="text-right text-s">
                <div className="text-blue-400">Expected: February 2027</div>
                <div className="text-gray-400">GPA: 4.8/5.0</div>
              </div>
            </div>
            <div className="text-s mt-4">
              <div className="text-gray-500">/* Relevant Coursework */</div>
              <div className="text-green-400">
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
