import React from 'react';
import { ToggleButton } from '../ui/ToggleButton';
import { SendButton } from '../ui/SendButton';

interface SearchControlsProps {
  deepThinking: boolean;
  onDeepThinkingToggle: () => void;
  smartSearch: boolean;
  onSmartSearchToggle: () => void;
  canSend: boolean;
  onSend: () => void;
}

export const SearchControls: React.FC<SearchControlsProps> = ({
  deepThinking,
  onDeepThinkingToggle,
  smartSearch,
  onSmartSearchToggle,
  canSend,
  onSend
}) => {
  return (
    <div className="flex items-center justify-between mt-2 pt-2">
      <div className="flex flex-wrap gap-2">
        <ToggleButton
          label="Pensamento profundo"
          active={deepThinking}
          onClick={onDeepThinkingToggle}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v8" />
              <path d="m4.93 10.93 1.41 1.41" />
              <path d="M2 18h2" />
              <path d="M20 18h2" />
              <path d="m19.07 10.93-1.41 1.41" />
              <path d="M22 22H2" />
              <path d="m8 22 4-10 4 10" />
            </svg>
          }
        />
        <ToggleButton
          label="Pesquisa Inteligente"
          active={smartSearch}
          onClick={onSmartSearchToggle}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          }
        />
      </div>
      <SendButton disabled={!canSend} onClick={onSend} />
    </div>
  );
};
