import React, { useRef, useEffect } from "react";

interface SearchTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchTextarea: React.FC<SearchTextareaProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={1}
      className="w-full bg-transparent text-white placeholder-slate-500 resize-none outline-none text-base md:text-lg min-h-11 max-h-100 py-2"
      aria-label="Mensagem para o Jarvis"
    />
  );
};
