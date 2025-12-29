
import React from 'react';
import { SKILLS } from '../constants';

export const SkillsGrid: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((cat) => (
        <div key={cat} className="space-y-4">
          <h4 className="text-amber-500 font-mono font-bold uppercase tracking-widest text-sm border-b border-amber-500/20 pb-2">{cat}</h4>
          <div className="space-y-5">
            {SKILLS.filter(s => s.category === cat).map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                  <span className="text-xs font-mono text-amber-500/80">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute top-0 right-0 h-full w-8 bg-white/20 blur-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
