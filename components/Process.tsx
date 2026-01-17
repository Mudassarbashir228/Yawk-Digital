
import React from 'react';
import { Search, Map, Cpu, Zap, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Discovery & Data',
      desc: 'We audit your current ecosystem, identifying revenue leaks and UX friction points.'
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: 'Creative Strategy',
      desc: 'Bespoke design concepts and multi-channel funnels forecasted for ROI.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Full Engineering',
      desc: 'Simultaneous deployment of visual identity, ad creative, and automation workflows.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Aggressive Scale',
      desc: 'Optimization cycles driven by real-time data to maximize capital velocity.'
    }
  ];

  return (
    <section id="process" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">The Methodology</h2>
          <h3 className="text-5xl md:text-6xl font-heading font-black text-white tracking-tighter">How We Bridge The Gap.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="glass-card p-10 rounded-[40px] h-full flex flex-col items-center text-center border-white/5 hover:border-red-500/40 transition-all duration-500 relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-500 mb-8 border border-red-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                  {step.icon}
                </div>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-3 group-hover:text-red-500 transition-colors">Phase 0{i + 1}</div>
                <h4 className="text-2xl font-heading font-black text-white mb-6 tracking-tight leading-none">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{step.desc}</p>
                
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 items-center justify-center">
                    <ArrowRight className="w-12 h-12 text-slate-800 group-hover:text-red-500 transition-colors translate-x-3 group-hover:translate-x-5 duration-500" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Process;
