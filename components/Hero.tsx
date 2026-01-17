
import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="hero-glow"></div>
      
      {/* Background visual element - Enhanced Graphics */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none select-none overflow-hidden hidden lg:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-red-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-0 text-[40rem] font-black text-red-500 opacity-5 leading-none select-none pointer-events-none -mr-40 rotate-12">Y</div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-widest mb-10 animate-fade-in opacity-0" style={{ animation: 'fade-in 1s forwards' }}>
            <Star className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span className="opacity-80">The New Standard in Growth Marketing</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-black text-white leading-[0.9] mb-12 tracking-tighter">
            <span className="block opacity-0 animate-reveal-mask" style={{ animationDelay: '0.2s' }}>
              Scale Beyond
            </span>
            <span className="block opacity-0 animate-reveal-mask" style={{ animationDelay: '0.6s' }}>
              The <span className="gradient-text typewriter">Noise.</span>
            </span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <p className="text-xl md:text-3xl text-slate-400 mb-12 leading-tight max-w-2xl mx-auto lg:mx-0 opacity-0 animate-reveal-mask" style={{ animationDelay: '1.8s' }}>
                Engineering <span className="text-white font-medium">high-velocity revenue systems</span> for brands that refuse to be second best.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 justify-center lg:justify-start opacity-0 animate-reveal-mask" style={{ animationDelay: '2s' }}>
                <button 
                  onClick={onCtaClick}
                  className="btn-interactive btn-primary-glow shimmer-btn w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-red-600 to-purple-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:from-red-500 hover:to-purple-500 transition-all group text-xl shadow-lg shadow-red-500/20"
                >
                  Get Your Growth Plan <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="btn-interactive w-full sm:w-auto px-10 py-6 bg-white/5 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10 group text-lg">
                  <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" /> Watch Process
                </button>
              </div>

              <div className="flex items-center gap-10 justify-center lg:justify-start opacity-0 transition-all hover:opacity-100 animate-reveal-mask" style={{ animationDelay: '2.2s' }}>
                <div className="flex items-center gap-3 text-xs font-black text-white tracking-widest uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]"></div>
                  Ad Spend: $25M+/Mo
                </div>
                <div className="w-px h-6 bg-white/10"></div>
                <div className="flex items-center gap-3 text-xs font-black text-white tracking-widest uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#8b5cf6]"></div>
                  Average Lift: 142%
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-80 glass-card p-8 rounded-[40px] border-red-500/20 rotate-3 translate-y-8 hover:rotate-0 transition-all duration-1000 cursor-default shadow-[0_40px_100px_rgba(0,0,0,0.6)] opacity-0 animate-reveal-mask" style={{ animationDelay: '2.4s' }}>
               <div className="flex justify-between items-center mb-8">
                  <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Growth Engine</div>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
               </div>
               <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="space-y-2 group">
                      <div className="flex justify-between text-[8px] font-black text-slate-600 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
                        <span>Optimization Phase {i}</span>
                        <span>{70 + (i * 10)}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-purple-600 transition-all duration-[2s]" style={{ width: `${60 + (i * 10)}%` }}></div>
                      </div>
                    </div>
                  ))}
               </div>
               <div className="mt-10 pt-6 border-t border-white/5">
                  <div className="text-4xl font-heading font-black text-white tracking-tighter">+$2.4M</div>
                  <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mt-1">Incremental Revenue</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
