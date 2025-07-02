export function ExperienceCard({ role, company, date, tasks }) {
  return (
    <div className="bg-gray-800 border border-gray-700 p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-orange-400 font-bold">{role}</div>
          <div className="text-gray-400">{company}</div>
        </div>
        <div className="text-blue-400 text-sm">{date}</div>
      </div>
      <div className="text-gray-300 text-sm space-y-1">
        {tasks.map((task, taskIdx) => (
          <div key={taskIdx} className="flex items-start gap-2">
            <span className="text-gray-500 flex-shrink-0">&gt;</span>
            <span>{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
