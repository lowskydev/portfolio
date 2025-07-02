export function ExperienceCard({ role, company, date, tasks }) {
  return (
    <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
        <div className="flex-1">
          <div className="text-orange-400 font-bold text-sm sm:text-base break-words">
            {role}
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">{company}</div>
        </div>
        <div className="text-blue-400 text-xs sm:text-sm flex-shrink-0">
          {date}
        </div>
      </div>
      <div className="text-gray-300 text-xs sm:text-sm space-y-1">
        {tasks.map((task, taskIdx) => (
          <div key={taskIdx} className="flex items-start gap-2">
            <span className="text-gray-500 flex-shrink-0 text-xs sm:text-sm">
              &gt;
            </span>
            <span className="leading-relaxed">{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
