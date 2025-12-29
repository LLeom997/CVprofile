
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, icon }) => (
  <div className="mb-10 group">
    <div className="flex items-center gap-4 mb-2">
      {icon && <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 group-hover:scale-110 transition-transform">{icon}</div>}
      <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase font-header italic">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-amber-500/50 to-transparent"></div>
    </div>
    {subtitle && <p className="text-slate-400 font-medium ml-12 font-header tracking-wide">{subtitle}</p>}
  </div>
);
