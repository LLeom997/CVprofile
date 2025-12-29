import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative space-y-12">

      {/* Vertical Timeline Line */}
      <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-amber-500 via-amber-500/20 to-transparent"></div>

      {EXPERIENCES.map((exp, index) => (
        <div key={index} className="relative pl-16 group">

          {/* Dot */}
          <div className="absolute left-3 top-1 w-6 h-6 rounded-full border-4 border-[#0f172a] bg-amber-500 group-hover:scale-125 transition-transform duration-300 z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>

          {/* Experience Card */}
          <div className="glass-card p-6 rounded-2xl group-hover:bg-white/5 transition-colors duration-300">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-title font-bold text-white group-hover:text-amber-400 transition-colors">
                  {exp.role}
                </h3>

                <div className="flex items-center gap-4 mt-2 text-sm text-slate-400 font-header uppercase tracking-tight">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Date Badge */}
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-mono text-sm border border-amber-500/20 whitespace-nowrap">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-300 leading-relaxed text-[15px] font-corporate"
                >
                  <span className="text-amber-500 mt-1.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      ))}
    </div>
  );
};
