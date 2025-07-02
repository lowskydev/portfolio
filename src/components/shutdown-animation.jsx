"use client";

import { useState, useEffect } from "react";

const shutdownMessages = [
  { text: "$ sudo shutdown -h now", delay: 40, type: "command" },
  {
    text: "Broadcast message from alex@alex-dev",
    delay: 60,
    type: "broadcast",
  },
  {
    text: "The system is going down for halt NOW!",
    delay: 40,
    type: "broadcast",
  },
  { text: "", delay: 60, type: "spacer" },
  { text: "Stopping user profile services", delay: 30, type: "service" },
  { text: "Stopping desktop environment", delay: 25, type: "service" },
  { text: "Stopping cron daemon", delay: 20, type: "service" },
  { text: "Stopping SSH daemon", delay: 15, type: "service" },
  { text: "Stopping network interface", delay: 40, type: "service" },
  { text: "Stopping system logging daemon", delay: 20, type: "service" },
  { text: "Unmounting local filesystems", delay: 30, type: "service" },
  { text: "Stopping udev device manager", delay: 25, type: "service" },
  { text: "Unloading kernel modules", delay: 35, type: "service" },
  { text: "", delay: 40, type: "spacer" },
  { text: "Sending SIGTERM to all processes", delay: 60, type: "system" },
  { text: "Sending SIGKILL to all processes", delay: 40, type: "system" },
  { text: "Syncing filesystems", delay: 50, type: "system" },
  { text: "Remounting root filesystem read-only", delay: 40, type: "system" },
  { text: "", delay: 60, type: "spacer" },
  { text: "System halted.", delay: 500, type: "final" },
  { text: "Power off.", delay: 500, type: "final" },
  { text: "", delay: 500, type: "loading" },
];

export function ShutdownAnimation({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine < shutdownMessages.length) {
      const message = shutdownMessages[currentLine];
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, message]);
        setCurrentLine((prev) => prev + 1);
      }, message.delay);

      return () => clearTimeout(timer);
    } else {
      // Animation complete - fade to black
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        onComplete();
      }, 300);

      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, onComplete]);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    const container = document.getElementById("shutdown-container");
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
      case "broadcast":
        return "text-yellow-400";
      case "service":
        return "text-gray-300";
      case "system":
        return "text-blue-400";
      case "final":
        return "text-red-400";
      case "spacer":
        return "text-gray-300";
      default:
        return "text-gray-300";
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-900 z-50 font-mono text-gray-300 overflow-hidden transition-opacity duration-1000 ${
        isComplete ? "opacity-0" : "opacity-100"
      }`}
    >
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

      {/* Shutdown messages starting from top, horizontally centered */}
      <div
        id="shutdown-container"
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
