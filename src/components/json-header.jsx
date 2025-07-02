import { Mail, Github } from "lucide-react";

export function JsonHeader() {
  return (
    <div className="bg-gray-800 border border-gray-600 p-3 sm:p-6 mb-4 sm:mb-6">
      <div className="flex flex-col min-[550px]:flex-row items-start gap-4 min-[550px]:gap-6">
        {/* JSON Content */}
        <div className="flex-1 w-full min-w-0">
          <div className="text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base">
            {"{"}
          </div>
          <div className="ml-2 sm:ml-4 space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <div className="break-words">
              <span className="text-orange-400">"name"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"Wiktor Szydłowski"</span>
              <span className="text-white">,</span>
            </div>
            <div className="break-words">
              <span className="text-orange-400">"role"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"Computer Science Student"</span>
              <span className="text-white">,</span>
            </div>
            <div className="break-words">
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
              <div className="ml-2 sm:ml-4 space-y-1 text-xs">
                <div className="flex items-center gap-1 sm:gap-2 break-all">
                  <Mail className="h-3 w-3 text-gray-400 flex-shrink-0" />
                  <span className="text-blue-400">"email"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"lowskydev@email.com"</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 break-all">
                  <Github className="h-3 w-3 text-gray-400 flex-shrink-0" />
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
          <div className="text-gray-400 text-sm sm:text-base">{"}"}</div>
        </div>

        {/* Profile Picture - stays horizontal until 700px */}
        <div className="flex-shrink-0 w-full min-[550px]:w-auto flex justify-center min-[550px]:justify-end">
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 min-[550px]:w-32 min-[550px]:h-32 bg-gray-700 border-2 border-gray-600 rounded-lg flex items-center justify-center">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center mt-1 sm:mt-2 text-xs text-gray-500">
              // profile.png
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
