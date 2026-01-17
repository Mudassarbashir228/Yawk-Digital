
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">Our Capabilities</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black text-white leading-none tracking-tighter">
              A Full-Spectrum <br />
              <span className="gradient-text">Design & Growth Lab.</span>
            </h3>
          </div>
          <p className="text-slate-400 text-lg max-w-sm lg:mb-4 leading-relaxed border-l border-red-500/20 pl-6">
            We don't just provide services; we engineer brand leverage. Every pixel and line of code is measured against your bottom line.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`glass-card p-10 rounded-[40px] group border-white/5 hover:border-red-500/30 transition-all duration-700 flex flex-col justify-between ${
                index % 3 === 1 ? 'lg:-translate-y-8' : ''
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 group-hover:from-red-500/20 group-hover:to-purple-500/20 transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10">{service.icon}</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-slate-700 group-hover:text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <h4 className="text-3xl font-heading font-black text-white mb-6 group-hover:gradient-text transition-all">{service.title}</h4>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-red-500"></div>
                    <p className="text-red-500 font-black text-[10px] uppercase tracking-widest">
                      Primary Outcome: <span className="text-white ml-1">{service.outcome}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
