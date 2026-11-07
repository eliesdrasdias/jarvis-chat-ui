import React from "react";

interface ToggleButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  label,
  active,
  onClick,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`
        flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-colors min-h-11
        ${
          active
            ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
            : "bg-transparent text-slate-400 border border-slate-700 hover:bg-slate-800"
        }
      `}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {label}
    </button>
  );
};
