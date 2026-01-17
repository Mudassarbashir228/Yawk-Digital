
import React from 'react';
import { NICHES } from '../constants';
import { ChevronRight } from 'lucide-react';

const IndustryFocus: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Vertical Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black text-white">Who We Scale.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NICHES.map((niche, i) => (
            <div key={i} className="group glass-card p-8 rounded-[32px] border border-white/5 hover:border-red-500/30 hover:-translate-y-3 transition-all duration-500 cursor-pointer shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 group-hover:bg-red-500/20 transition-all">
                {niche.icon}
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-2">{niche.title}</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{niche.desc}</p>
              
              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-red-500/10 group-hover:bg-red-500/5 transition-all">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Average Results</div>
                <div className="text-2xl font-heading font-black text-red-500">{niche.metric}</div>
              </div>
              
              <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-red-500 transition-all">
                View Specialized Strategy <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryFocus;
