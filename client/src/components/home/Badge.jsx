import { Zap } from "lucide-react";

const Badge = ({ children, Icon = Zap, iconColor = "text-green-600" }) => {
  const IconProp = Icon;
  return (
    <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 border border-green-200 rounded-full px-4 py-2">
      <IconProp className={`w-4 h-4 ${iconColor}`} />
      <span>{children}</span>
    </div>
  );
};

export default Badge;
