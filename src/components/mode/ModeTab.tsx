import React from "react";

interface ModeTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const ModeTab: React.FC<ModeTabProps> = ({ label, active, onClick }) => {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`
        px-4 py-3 text-sm font-medium transition-all duration-200 min-h-11
        ${
          active
            ? "text-white border-b-2 border-blue-500"
            : "text-slate-400 hover:text-slate-200"
        }
      `}
    >
      {label}
    </button>
  );
};
