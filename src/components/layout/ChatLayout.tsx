import React from 'react';

interface ChatLayoutProps {
  children: React.ReactNode;
}

export const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#050b1a] text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl flex flex-col items-center gap-8">
        {children}
      </div>
    </div>
  );
};
