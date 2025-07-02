"use client";

import { useState, useEffect } from "react";

const startupMessages = [
  { text: "BIOS Version 2.1.4", delay: 50, type: "bios" },
  { text: "Memory Test: 16384MB", delay: 100, type: "hardware" },
  { text: "CPU: Intel Core i7-12700K @ 3.60GHz", delay: 50, type: "hardware" },
  { text: "Initializing hardware components...", delay: 80, type: "init" },
  { text: "Loading kernel modules", delay: 40, type: "service" },
  { text: "Starting udev device manager", delay: 30, type: "service" },
  { text: "Mounting local filesystems", delay: 35, type: "service" },
  { text: "Starting system logging daemon", delay: 25, type: "service" },
  { text: "Starting network interface", delay: 50, type: "service" },
  { text: "Starting SSH daemon", delay: 20, type: "service" },
  { text: "Starting cron daemon", delay: 15, type: "service" },
  { text: "Loading user profile services", delay: 30, type: "service" },
  { text: "Starting desktop environment", delay: 40, type: "service" },
  { text: "Initializing terminal session", delay: 25, type: "service" },
  { text: "", delay: 60, type: "spacer" },
  { text: "DevOS Linux 3.14.159 (tty1)", delay: 40, type: "login" },
  { text: "", delay: 20, type: "spacer" },
  { text: "wiktor-szydłowski login: lowskydev", delay: 80, type: "login" },
  { text: "Password: ", delay: 60, type: "login" },
  {
    text: "Last login: Wen July  2 21:31:42 2025 from 192.168.1.100",
    delay: 40,
    type: "login",
  },
  { text: "", delay: 20, type: "spacer" },
  { text: "$ whoami", delay: 60, type: "command" },
  { text: "wiktor_szydłowski", delay: 30, type: "output" },
  { text: "$ cd /home/lowskydev/portfolio", delay: 40, type: "command" },
  { text: "$ ls -la", delay: 50, type: "command" },
  { text: "total 42", delay: 20, type: "output" },
  {
    text: "drwxr-xr-x  8 lowskydev lowskydev 4096 Dec  7 19:30 .",
    delay: 15,
    type: "output",
  },
  {
    text: "drwxr-xr-x  3 lowskydev lowskydev 4096 Dec  7 19:30 ..",
    delay: 15,
    type: "output",
  },
  {
    text: "-rw-r--r--  1 lowskydev lowskydev 2048 Dec  7 19:30 about.js",
    delay: 15,
    type: "output",
  },
  {
    text: "-rw-r--r--  1 lowskydev lowskydev 1024 Dec  7 19:30 education.js",
    delay: 15,
    type: "output",
  },
  {
    text: "-rw-r--r--  1 lowskydev lowskydev 3072 Dec  7 19:30 projects.json",
    delay: 15,
    type: "output",
  },
  {
    text: "-rw-r--r--  1 lowskydev lowskydev 1536 Dec  7 19:30 skills.json",
    delay: 15,
    type: "output",
  },
  { text: "$ cat developer_profile.json", delay: 500, type: "command" },
  { text: "Loading portfolio interface...", delay: 500, type: "loading" },
  { text: "", delay: 1000, type: "loading" },
];

export function StartupAnimation({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine < startupMessages.length) {
      const message = startupMessages[currentLine];
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, message]);
        setCurrentLine((prev) => prev + 1);
      }, message.delay);

      return () => clearTimeout(timer);
    } else {
      // Animation complete
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        onComplete();
      }, 200);

      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, onComplete]);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    const container = document.getElementById("startup-container");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [displayedLines]);

  const getLineContent = (message) => {
    if (message.type === "service") {
      return (
        <div className="flex items-center">
          <span className="flex-1">{message.text}...</span>
          <span className="text-green-400 font-bold ml-4">[ OK ]</span>
        </div>
      );
    }
    return message.text;
  };

  const getLineColor = (message) => {
    switch (message.type) {
      case "command":
        return "text-orange-400";
      case "output":
        return "text-gray-400";
      case "service":
        return "text-gray-300";
      case "bios":
      case "hardware":
        return "text-blue-400";
      case "login":
        return message.text.includes("Password")
          ? "text-gray-500"
          : "text-gray-300";
      case "loading":
        return "text-green-400";
      case "init":
        return "text-gray-300";
      case "spacer":
        return "text-gray-300";
      default:
        return "text-gray-300";
    }
  };

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 font-mono text-gray-300 overflow-hidden">
      {/* Matrix-style background effect matching main theme */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-500 text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      {/* Boot messages starting from top, horizontally centered */}
      <div
        id="startup-container"
        className="relative z-10 h-full overflow-y-auto p-4 pb-16 flex justify-center"
      >
        <div className="w-full max-w-4xl text-xs sm:text-sm leading-relaxed">
          {displayedLines.map((message, index) => (
            <div
              key={index}
              className={`mb-1 ${getLineColor(message)} break-words`}
            >
              {getLineContent(message)}
              {index === displayedLines.length - 1 &&
                message.type !== "spacer" && (
                  <span className="animate-pulse ml-1 text-gray-300">█</span>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
