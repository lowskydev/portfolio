import { Mail, Github } from "lucide-react";

export function JsonHeader() {
  return (
    <div className="bg-gray-800 border border-gray-600 p-6 mb-6">
      <div className="flex items-start gap-6">
        {/* JSON Content */}
        <div className="flex-1">
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
              <span className="text-green-400">
                "Available for Internships"
              </span>
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

        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="w-34 h-34 bg-gray-700 border-2 border-gray-600 rounded-lg flex items-center justify-center">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-2 text-xs text-gray-500">
            // profile.png
          </div>
        </div>
      </div>
    </div>
  );
}
