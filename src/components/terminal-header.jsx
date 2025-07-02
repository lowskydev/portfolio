"use client";

import { Terminal, Square } from "lucide-react";
import { useState, useEffect } from "react";

export function TerminalHeader({ onShutdown, onMaximize, isMaximized }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRedButtonClick = () => {
    if (onShutdown) {
      onShutdown();
    }
  };

  const handleGreenButtonClick = () => {
    if (onMaximize) {
      onMaximize();
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-600 rounded-t-lg p-4 mb-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button
              onClick={handleRedButtonClick}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer group relative"
              title="Close"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-0.5 bg-red-900 transform rotate-45 absolute"></div>
                <div className="w-2 h-0.5 bg-red-900 transform -rotate-45 absolute"></div>
              </div>
            </button>
            <div
              className="w-3 h-3 bg-gray-500 rounded-full"
              title="Minimize (disabled)"
            ></div>
            <button
              onClick={handleGreenButtonClick}
              className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer group relative"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Square className="w-2 h-2 text-green-900" />
              </div>
            </button>
          </div>
          <Terminal className="h-4 w-4 ml-4 text-gray-300" />
          <span className="text-sm text-gray-300">lowskydev@portfolio:~$</span>
        </div>
        <div className="text-sm text-gray-400">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
