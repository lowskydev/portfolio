export function FileHeader({
  icon: Icon,
  filename,
  iconColor = "text-orange-400",
  additionalIcon: AdditionalIcon,
  additionalIconColor = "text-gray-400",
}) {
  return (
    <div className="bg-gray-800 px-4 py-2 border-b border-gray-600 flex items-center gap-2">
      <Icon className={`h-4 w-4 ${iconColor}`} />
      <span className="text-gray-300">{filename}</span>
      {AdditionalIcon && (
        <AdditionalIcon className={`h-4 w-4 ml-auto ${additionalIconColor}`} />
      )}
    </div>
  );
}
