import React from 'react';
import { ModeTab } from './ModeTab';

interface ModeTabsProps {
  activeMode: 'rapido' | 'especialista';
  onModeChange: (mode: 'rapido' | 'especialista') => void;
}

export const ModeTabs: React.FC<ModeTabsProps> = ({ activeMode, onModeChange }) => {
  return (
    <div role="tablist" className="flex gap-4">
      <ModeTab 
        label="Rápido" 
        active={activeMode === 'rapido'} 
        onClick={() => onModeChange('rapido')} 
      />
      <ModeTab 
        label="Especialista" 
        active={activeMode === 'especialista'} 
        onClick={() => onModeChange('especialista')} 
      />
    </div>
  );
};
