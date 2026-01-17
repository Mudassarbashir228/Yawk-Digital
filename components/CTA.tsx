
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onPlanClick: () => void;
  onStrategyClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onPlanClick, onStrategyClick }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto glass-card rounded-[48px] p-12 md:p-24 text-center border-red-500/20 shadow-2xl overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 leading-tight tracking-tight">
            Ready to Build a <br />
            <span className="gradient-text">Scalable Revenue System?</span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            We only partner with a select number of clients per quarter to ensure absolute excellence. If your brand is ready to command the market, let’s talk.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onPlanClick}
              className="btn-interactive btn-primary-glow shimmer-btn w-full sm:w-auto px-12 py-6 bg-white text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all text-xl shadow-xl shadow-white/5"
            >
              <Sparkles className="w-5 h-5" /> Build My Growth Plan
            </button>
            <button 
              onClick={onStrategyClick}
              className="btn-interactive w-full sm:w-auto px-12 py-6 bg-transparent text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/5 border border-white/10 transition-all text-lg group"
            >
              Request Custom Strategy <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <span className="text-xl font-heading font-black text-white tracking-tighter hover:scale-110 transition-transform cursor-default">Google Premier Partner</span>
            <span className="text-xl font-heading font-black text-white tracking-tighter hover:scale-110 transition-transform cursor-default">Meta Ads Specialist</span>
            <span className="text-xl font-heading font-black text-white tracking-tighter hover:scale-110 transition-transform cursor-default">HubSpot Elite</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
