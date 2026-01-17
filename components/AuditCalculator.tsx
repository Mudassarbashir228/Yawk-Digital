
import React, { useState } from 'react';
import { Calculator, Zap, ArrowRight } from 'lucide-react';

interface AuditCalculatorProps {
  onCtaClick: () => void;
}

const AuditCalculator: React.FC<AuditCalculatorProps> = ({ onCtaClick }) => {
  const [spend, setSpend] = useState(10000);
  const [roas, setRoas] = useState(3.5);

  const estimatedRevenue = spend * roas;
  const growthRevenue = estimatedRevenue * 1.45; // Simulated 45% lift

  return (
    <section className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="glass-card rounded-[48px] p-8 md:p-16 border-red-500/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <Calculator className="w-64 h-64 text-white" />
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Revenue Simulator</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
                Calculate Your <br />
                <span className="gradient-text">Growth Potential.</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our systems typically deliver a 30-60% revenue lift within the first 90 days. See what that looks like for your current numbers.
              </p>
              
              <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
                <div className="group">
                  <div className="flex justify-between mb-3 transition-colors group-focus-within:text-red-500">
                    <label className="text-white font-bold text-sm uppercase tracking-widest">Monthly Ad Spend</label>
                    <span className="text-red-500 font-black text-lg">${spend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="5000" 
                    max="500000" 
                    step="5000"
                    value={spend}
                    onChange={(e) => setSpend(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-500 transition-all"
                  />
                </div>
                
                <div className="group">
                  <div className="flex justify-between mb-3 transition-colors group-focus-within:text-red-500">
                    <label className="text-white font-bold text-sm uppercase tracking-widest">Target ROAS</label>
                    <span className="text-red-500 font-black text-lg">{roas}x</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="15" 
                    step="0.1"
                    value={roas}
                    onChange={(e) => setRoas(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-500 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96">
              <div className="bg-slate-950 p-10 rounded-[40px] border border-white/5 shadow-2xl space-y-8 hover:border-red-500/20 transition-colors">
                <div className="text-center">
                  <div className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Projected Monthly Revenue</div>
                  <div className="text-5xl font-heading font-black text-white group-hover:scale-105 transition-transform duration-500">${Math.round(growthRevenue).toLocaleString()}</div>
                  <div className="text-red-500 text-sm font-bold mt-2 animate-pulse">+${Math.round(growthRevenue - estimatedRevenue).toLocaleString()} Incremental Lift</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                    <Zap className="w-5 h-5 text-red-500" />
                    <div className="text-xs text-slate-400 leading-tight">Projected by <span className="text-white font-bold">Yawk OS™</span> Revenue Modeling</div>
                  </div>
                </div>

                <button 
                  onClick={onCtaClick}
                  className="btn-interactive shimmer-btn w-full py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all group"
                >
                  Generate My Growth Plan <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">Calculations based on 2024 benchmark data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditCalculator;
