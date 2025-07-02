import { Folder, Code } from "lucide-react";
import { FileHeader } from "./file-header";

export function AboutSection() {
  return (
    <div className="border border-gray-600">
      <FileHeader icon={Folder} filename="./about" additionalIcon={Code} />
      <div className="p-4">
        <div className="text-gray-500 text-sm mb-2">/* Summary */</div>
        <div className="text-gray-300 leading-relaxed">
          <span className="text-gray-400">const</span>{" "}
          <span className="text-orange-400">developer</span> = {"{"}
          <div className="ml-4 mt-2">
            <div>
              <span className="text-blue-400">passion</span>:{" "}
              <span className="text-green-400">
                'Software Development & Problem Solving'
              </span>
              ,
            </div>
            <div>
              <span className="text-blue-400">experience</span>:{" "}
              <span className="text-green-400">
                ['Full-stack Development', 'Data Structures', 'Algorithms']
              </span>
              ,
            </div>
            <div>
              <span className="text-blue-400">seeking</span>:{" "}
              <span className="text-green-400">'Internship Opportunities'</span>
              ,
            </div>
            <div>
              <span className="text-blue-400">goal</span>:{" "}
              <span className="text-green-400">
                'Contributing to innovative tech projects'
              </span>
            </div>
          </div>
          <div className="mt-2">{"};"}</div>
        </div>
      </div>
    </div>
  );
}
