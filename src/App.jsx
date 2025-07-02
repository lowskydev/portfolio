import "./App.css";

import { TerminalHeader } from "./components/terminal-header";
import { TypingAnimation } from "./components/typing-animation";
import { JsonHeader } from "./components/json-header";
import { AboutSection } from "./components/about-section";
// import { EducationSection } from "./components/education-section";
// import { SkillsSection } from "./components/skills-section"
// import { ProjectsSection } from "./components/projects-section"
// import { ExperienceSection } from "./components/experience-section"
// import { TerminalFooter } from "./components/terminal-footer"

function App() {
  "use client";

  return (
    <div className="min-h-screentext-gray-300 font-mono relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto p-4">
        <TerminalHeader />

        <div className="bg-gray-900 border-l border-r border-gray-600 p-6">
          <div className="mb-6">
            <div className="text-gray-400 mb-2">
              $ cat developer_profile.json
            </div>
            <TypingAnimation text="Welcome to Wiktor Szydłowski Developer Portfolio" />
          </div>

          <JsonHeader />

          <div className="space-y-6">
            <AboutSection />
            {/* <EducationSection /> */}
            {/* <SkillsSection /> */}
            {/* <ProjectsSection /> */}
            {/* <ExperienceSection /> */}
          </div>
        </div>

        {/* <TerminalFooter /> */}
      </div>
    </div>
  );
}

export default App;
