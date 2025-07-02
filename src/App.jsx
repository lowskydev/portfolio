import "./App.css";

import { useState } from "react";

import { TerminalHeader } from "./components/terminal-header";
import { TypingAnimation } from "./components/typing-animation";
import { JsonHeader } from "./components/json-header";
import { AboutSection } from "./components/about-section";
import { EducationSection } from "./components/education-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { ExperienceSection } from "./components/experience-section";
import { TerminalFooter } from "./components/terminal-footer";

import { StartupAnimation } from "./components/startup-animation";
import { ShutdownAnimation } from "./components/shutdown-animation";

function App() {
  const [showStartup, setShowStartup] = useState(true);
  const [showShutdown, setShowShutdown] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleStartupComplete = () => {
    setShowStartup(false);
  };

  const handleShutdown = () => {
    setShowShutdown(true);
  };

  const handleShutdownComplete = () => {
    setShowShutdown(false);
    setShowStartup(true);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const showMainContent = !showStartup && !showShutdown;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono relative">
      {showStartup && <StartupAnimation onComplete={handleStartupComplete} />}
      {showShutdown && (
        <ShutdownAnimation onComplete={handleShutdownComplete} />
      )}

      {showMainContent && (
        <div className="sticky top-0 z-50 bg-gray-900 pt-2 sm:pt-4">
          <div
            className={`transition-all duration-300 ${
              isMaximized
                ? "w-full px-2 sm:px-4"
                : "max-w-6xl mx-auto px-2 sm:px-4"
            }`}
          >
            <TerminalHeader
              onShutdown={handleShutdown}
              onMaximize={handleMaximize}
              isMaximized={isMaximized}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      {showMainContent && (
        <div
          className={`relative z-10 pb-2 sm:pb-4 transition-all duration-300 ${
            isMaximized
              ? "w-full px-2 sm:px-4"
              : "max-w-6xl mx-auto px-2 sm:px-4"
          }`}
        >
          <div className="bg-gray-900 border-l border-r border-b border-gray-600 p-3 sm:p-6">
            <div className="mb-4 sm:mb-6">
              <div className="text-gray-400 mb-2 text-xs sm:text-sm">
                $ cat developer_profile.json
              </div>
              <TypingAnimation text="Welcome to Wiktor Szydłowski's Developer Portfolio" />
            </div>

            <JsonHeader />

            <div className="space-y-4 sm:space-y-6">
              <AboutSection />
              <EducationSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
            </div>
          </div>

          <TerminalFooter />
        </div>
      )}
    </div>
  );
}

export default App;
