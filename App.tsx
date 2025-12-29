
import React from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MessageCircle, 
  MapPin, 
  Download,
  Terminal,
  Layers,
  Award,
  BookOpen,
  Anchor
} from 'lucide-react';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsGrid } from './components/SkillsGrid';
import { SectionHeader } from './components/SectionHeader';
import { CONTACT_DATA, EDUCATION, COMPETENCY_ICONS } from './constants';

const App: React.FC = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen blueprint-bg selection:bg-amber-500 selection:text-white">
      {/* Background decoration - hidden in print */}
      <div className="fixed inset-0 pointer-events-none opacity-20 no-print">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar - Contact & Profile Info */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-12 space-y-8">
              {/* Profile Card */}
              <div className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500"></div>
                
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/30 transition-colors no-print"></div>
                  <img
                     src="https://drive.google.com/uc?export=download&id=1zubSrIzZBA8Pwm8DvOiDvtn9D86vNDkR"
                    alt="Maitreya Gokhale"
                    className="w-48 h-48 rounded-full object-cover border-4 border-amber-500/50 relative shadow-2xl transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/400/400';
                    }}
                  />
                </div>

                <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter italic print:text-[#0f172a] font-header">
                  Maitreya <span className="text-amber-500">Gokhale</span>
                </h1>
                <p className="text-slate-400 font-mono text-sm tracking-wide mb-6 uppercase">
                  Mechanical Design Engineer
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-mono uppercase border border-amber-500/20">
                     <Layers className="w-3 h-3" /> 5+ Years Exp
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono uppercase border border-blue-500/20">
                     <MapPin className="w-3 h-3" /> Pune, India
                   </div>
                </div>

                <button 
                  onClick={handleDownload}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-[#0f172a] font-bold rounded-2xl transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 group no-print font-header tracking-wider"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  DOWNLOAD RESUME (PDF)
                </button>
              </div>

              {/* Contact Grid */}
              <div className="glass-card rounded-3xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest font-mono mb-4 px-2">Connectivity</h3>
                <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-500 transition-colors print:bg-slate-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm truncate text-slate-300 font-mono print:text-slate-800">{CONTACT_DATA.email}</span>
                </a>
                <a href={`tel:${CONTACT_DATA.phone}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-500 transition-colors print:bg-slate-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-slate-300 font-mono print:text-slate-800">{CONTACT_DATA.phone}</span>
                </a>
                <a href={CONTACT_DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors print:bg-slate-100">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-slate-300 font-mono print:text-slate-800">LinkedIn Profile</span>
                </a>
              </div>

              {/* Languages */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest font-mono mb-4 px-2">Languages</h3>
                <div className="space-y-3">
                  {['English (Fluent)', 'Hindi (Native)', 'Marathi (Native)', 'Japanese (Beginner)'].map((lang) => (
                    <div key={lang} className="flex items-center justify-between px-2">
                      <span className="text-sm text-slate-300 print:text-slate-800">{lang.split(' ')[0]}</span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">{lang.split(' ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* About Section */}
            <section id="about">
              <SectionHeader 
                title="The Engineer" 
                subtitle="Mechanical Engineering and AI driven Product Building" 
                icon={<Terminal className="w-6 h-6" />} 
              />
              <div className="glass-card p-8 rounded-3xl leading-relaxed text-slate-300 text-lg print:text-slate-800">
                <p className="font-corporate text-[17px] leading-relaxed mb-8">
                  Mechanical Design Engineer with more than five years of experience delivering production-ready chassis and packaging systems across consumer appliances and industrial machinery. Specialized in New Product Development, structural simulation, DFMEA, and tolerance analysis, with full lifecycle ownership from concept through validation and SOP release. Demonstrated record of reducing cost, resolving late-stage design risks, and converting complex requirements into reliable, scalable, and manufacturable hardware through effective cross-functional leadership.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(COMPETENCY_ICONS).map(([key, icon]) => (
                    <div 
                      key={key} 
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-amber-500/5 border border-white/5 transition-all print:border-slate-200"
                    >
                      <div className="mt-1">{icon}</div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 print:text-[#0f172a] font-header uppercase tracking-wider">{key}</h4>
                        <div className="h-0.5 w-8 bg-amber-500/50"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience">
              <SectionHeader title="Mission History" subtitle="Professional Journey and Major Milestones" icon={<Anchor className="w-6 h-6" />} />
              <ExperienceTimeline />
            </section>

            {/* Skills Section */}
            <section id="skills">
              <SectionHeader title="Technical Arsenal" subtitle="Tools and Methodologies used to Build & Validate" icon={<Award className="w-6 h-6" />} />
              <div className="glass-card p-8 rounded-3xl">
                <SkillsGrid />
              </div>
            </section>

            {/* Education Section */}
            <section id="education">
              <SectionHeader title="Academic Base" subtitle="Foundations in Design Engineering" icon={<BookOpen className="w-6 h-6" />} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-3xl group hover:border-amber-500/30 transition-all print:border-slate-200">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-[#0f172a] transition-colors print:bg-amber-50">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 uppercase">{edu.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 print:text-[#0f172a] font-header">{edu.degree}</h3>
                    <p className="text-slate-400 text-sm mb-2 print:text-slate-600 font-header">{edu.school}</p>
                    {edu.grade && <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-amber-500 border border-white/10 print:border-amber-200 font-mono">{edu.grade}</span>}
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-12 pb-8 border-t border-white/5 text-center no-print">
              <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
                Built with React & Precision | Maitreya Gokhale &copy; 2025
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
