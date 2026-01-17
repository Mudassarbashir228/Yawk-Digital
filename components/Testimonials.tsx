
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">Client Resonance</h2>
            <h3 className="text-5xl font-heading font-black text-white leading-[1.1] mb-8 tracking-tighter">
              A Record Of <br /><span className="gradient-text">Absolute Value.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We partner with visionary founders who demand ROI over optics. Our results are verifiable, aggressive, and sustainable.
            </p>
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/res${i}/50/50`} className="w-12 h-12 rounded-full border-4 border-[#030712] grayscale hover:grayscale-0 transition-all duration-500" alt="Client" />
                ))}
              </div>
              <div>
                <div className="text-white font-black text-xl">50+ Brands</div>
                <div className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em]">Scale Unlocked</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-12 rounded-[48px] relative group hover:-translate-y-4 transition-all duration-700">
                <Quote className="absolute top-10 right-10 w-16 h-16 text-white/5 group-hover:text-red-500/10 transition-colors" />
                
                <div className="flex gap-1 mb-8">
                   {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-red-500 fill-red-500" />)}
                </div>

                <p className="text-xl text-slate-300 italic mb-12 relative z-10 leading-relaxed group-hover:text-white transition-colors">"{t.content}"</p>
                
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <img src={t.avatar} className="w-16 h-16 rounded-full object-cover relative z-10 border-2 border-white/10 group-hover:border-red-500 transition-colors" alt={t.name} />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg">{t.name}</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
