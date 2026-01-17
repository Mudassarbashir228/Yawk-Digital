
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { CASE_STUDIES } from '../constants';
// Added ArrowRight to the imports from lucide-react to fix the missing name error
import { ExternalLink, BarChart3, Briefcase, Target, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

const CaseStudySection: React.FC = () => {
  return (
    <section id="results" className="py-32 bg-[#020617] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
          <div className="max-w-3xl">
            <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">Success Stories</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black text-white leading-none tracking-tighter">
              The Physics of <br />
              <span className="gradient-text">Profitable Scale.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-lg max-w-sm mb-4 leading-relaxed italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>

        <div className="space-y-48">
          {CASE_STUDIES.map((study, idx) => (
            <div key={study.id} className="relative">
              {/* Massive background number */}
              <div className="absolute -top-24 -left-12 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
                0{idx + 1}
              </div>

              <div className={`flex flex-col lg:flex-row gap-16 xl:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Side: Charts & Meta Data */}
                <div className="flex-1 w-full">
                  <div className="glass-card p-2 rounded-[48px] border-white/5 shadow-2xl overflow-hidden group">
                    <div className="p-8 md:p-12">
                      <div className="flex items-center justify-between mb-12">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                               <BarChart3 className="w-6 h-6" />
                            </div>
                            <div>
                               <div className="text-white font-black uppercase tracking-widest text-xs">Revenue Growth Velocity</div>
                               <div className="text-slate-500 text-[10px] font-bold">Verified Audit Trail 2024</div>
                            </div>
                         </div>
                         <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {study.industry}
                         </div>
                      </div>

                      <div className="h-[350px] w-full mb-12 relative">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={study.chartData}>
                            <defs>
                              <linearGradient id={`grad-${study.id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                            <XAxis 
                              dataKey="month" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{fill: '#475569', fontSize: 12, fontWeight: 700}} 
                              dy={15}
                            />
                            <YAxis hide />
                            <Tooltip 
                              cursor={{ stroke: '#ef4444', strokeWidth: 2, strokeDasharray: '5 5' }}
                              contentStyle={{backgroundColor: '#030712', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '20px', padding: '15px'}} 
                              itemStyle={{color: '#ef4444', fontWeight: 900}}
                              labelStyle={{color: '#64748b', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px'}}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="revenue" 
                              stroke="#ef4444" 
                              strokeWidth={5} 
                              fillOpacity={1} 
                              fill={`url(#grad-${study.id})`} 
                              animationDuration={2500}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        {study.results.map((res, ridx) => (
                          <div key={ridx} className="relative group/metric text-center">
                            <div className="text-3xl md:text-5xl font-heading font-black text-white mb-2 tracking-tighter group-hover/metric:text-red-500 transition-colors">
                              {res.value}{res.suffix}
                            </div>
                            <div className="text-[9px] uppercase font-bold text-slate-600 tracking-[0.2em] group-hover/metric:text-slate-400 transition-colors">{res.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/[0.02] border-t border-white/5 p-8 flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <img src={study.imageUrl} className="w-14 h-14 rounded-full object-cover border-2 border-red-500/20 grayscale group-hover:grayscale-0 transition-all duration-700" alt={study.client} />
                          <div>
                             <div className="text-white font-black">{study.client}</div>
                             <div className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{study.serviceUsed}</div>
                          </div>
                       </div>
                       <button className="btn-interactive w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all group-hover:scale-110">
                          <ExternalLink className="w-5 h-5" />
                       </button>
                    </div>
                  </div>
                </div>

                {/* Content Side: The Narrative */}
                <div className="flex-1 flex flex-col justify-center space-y-12">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-500">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Partner Success Case {study.id === 'brand-overhaul' ? '01' : '02'}</span>
                  </div>

                  <h4 className="text-4xl md:text-6xl font-heading font-black text-white leading-none tracking-tighter">
                    Re-Engineering <br />
                    <span className="text-red-500">{study.client}</span>
                  </h4>

                  <div className="space-y-10">
                    <div className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all">
                        <Briefcase className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
                      </div>
                      <div>
                        <h5 className="text-white font-black uppercase tracking-widest text-xs mb-3">Client Background</h5>
                        <p className="text-slate-400 text-lg leading-relaxed">{study.background}</p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all">
                        <Target className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
                      </div>
                      <div>
                        <h5 className="text-white font-black uppercase tracking-widest text-xs mb-3">The Problem</h5>
                        <p className="text-slate-400 text-lg leading-relaxed">{study.challenge}</p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all">
                        <Lightbulb className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
                      </div>
                      <div>
                        <h5 className="text-white font-black uppercase tracking-widest text-xs mb-3">The Solution</h5>
                        <p className="text-slate-400 text-lg leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row gap-6">
                    <button className="btn-interactive shimmer-btn px-10 py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition-all group">
                      View Full Asset Pack <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <div className="flex items-center gap-4 text-slate-500">
                       <div className="w-10 h-px bg-slate-800"></div>
                       <span className="text-[10px] font-bold uppercase tracking-widest">NDA Secured Data</span>
                    </div>
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

export default CaseStudySection;
