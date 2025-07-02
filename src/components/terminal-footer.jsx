export function TerminalFooter() {
  return (
    <div className="bg-gray-800 border border-gray-600 p-3 sm:p-4">
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <div className="text-gray-300 truncate">
          $ echo "Thanks for reviewing my profile!"
        </div>
      </div>
    </div>
  );
}
