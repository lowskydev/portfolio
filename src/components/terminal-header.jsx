"use client";

import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export function TerminalHeader() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-800 border border-gray-600 rounded-t-lg p-4 mb-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
