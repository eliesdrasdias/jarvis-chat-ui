import React from 'react';

interface SearchBoxProps {
  children: React.ReactNode;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ children }) => {
  return (
    <div className="w-full bg-[#0d1526] border border-slate-800 rounded-2xl p-4 shadow-xl focus-within:border-slate-700 transition-colors">
      {children}
    </div>
  );
};
