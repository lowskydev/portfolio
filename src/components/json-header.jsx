import { Mail, Phone, Github } from "lucide-react";

export function JsonHeader() {
  return (
    <div className="bg-gray-800 border border-gray-600 p-6 mb-6">
      <div className="text-gray-400 mb-4">{"{"}</div>
      <div className="ml-4 space-y-2">
        <div>
          <span className="text-orange-400">"name"</span>
          <span className="text-white">: </span>
          <span className="text-green-400">"Wiktor Szydłowski"</span>
          <span className="text-white">,</span>
        </div>
        <div>
          <span className="text-orange-400">"role"</span>
          <span className="text-white">: </span>
          <span className="text-green-400">"Computer Science Student"</span>
          <span className="text-white">,</span>
        </div>
        <div>
          <span className="text-orange-400">"status"</span>
          <span className="text-white">: </span>
          <span className="text-green-400">"Available for Internships"</span>
          <span className="text-white">,</span>
        </div>
        <div>
          <span className="text-orange-400">"contact"</span>
          <span className="text-white">: {"{"}</span>
          <div className="ml-4 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-gray-400" />
              <span className="text-blue-400">"email"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">lowskydev@email.com"</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-3 w-3 text-gray-400" />
              <span className="text-blue-400">"github"</span>
              <span className="text-white">: </span>
              <a
                href="https://github.com/lowskydev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 hover:underline transition-colors"
              >
                "github.com/lowskydev"
              </a>
            </div>
          </div>
          <span className="text-white">{"}"}</span>
        </div>
      </div>
      <div className="text-gray-400">{"}"}</div>
    </div>
  );
}
