import React from "react";

interface SendButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export const SendButton: React.FC<SendButtonProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label="Enviar mensagem"
      className={`
        p-3 rounded-full transition-all duration-200 min-w-11 min-h-11 flex items-center justify-center
        ${
          disabled
            ? "bg-slate-700 text-slate-500 cursor-not-allowed"
            : "bg-white text-black hover:bg-slate-200 active:scale-95"
        }
      `}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  );
};
