
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="border-y border-white/5 py-14 relative overflow-hidden bg-slate-950/40">
      {/* Background glowing accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-0 animate-reveal-fade" style={{ animationDelay: '100ms' }}>
          Social Proof: Trusted by Market Leaders
        </p>
        
        {/* Infinite Marquee with Fading Edges */}
        <div className="relative flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap gap-10 md:gap-20 items-center py-4">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((item, index) => (
              <div 
                key={`${item.label}-${index}`} 
                className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-card border-white/5 opacity-0 animate-logo-entrance grayscale hover:grayscale-0 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-700 cursor-default select-none relative group/logo"
                style={{ 
                  animationDelay: `${(index % CLIENT_LOGOS.length) * 150}ms`,
                }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/logo:opacity-10 blur-2xl transition-opacity duration-700 rounded-full`}></div>
                
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
                
                <span className="text-xl md:text-2xl font-heading font-black tracking-tighter text-white group-hover/logo:text-transparent group-hover/logo:bg-clip-text group-hover/logo:bg-gradient-to-r group-hover/logo:from-white group-hover/logo:to-slate-400 transition-all">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle background decorative accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent pointer-events-none"></div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes logo-entrance {
          0% { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          100% { 
            opacity: 0.6; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-logo-entrance {
          animation: logo-entrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
