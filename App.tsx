
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, X } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import IndustryFocus from './components/IndustryFocus';
import Services from './components/Services';
import CaseStudySection from './components/CaseStudySection';
import AuditCalculator from './components/AuditCalculator';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GrowthPlanModal from './components/GrowthPlanModal';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isGrowthPlanOpen, setIsGrowthPlanOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleGrowthPlanOpen = () => setIsGrowthPlanOpen(true);
  const handleContactOpen = () => setIsContactOpen(true);

  const handleSuccess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const target = document.querySelector(targetId);
          if (target) {
            window.scrollTo({
              top: (target as HTMLElement).offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] selection:bg-red-500/30">
      <Navigation onCtaClick={handleGrowthPlanOpen} />
      
      <main>
        <Hero onCtaClick={handleGrowthPlanOpen} />
        <TrustBar />
        
        <IndustryFocus />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="results">
          <CaseStudySection />
        </div>

        <AuditCalculator onCtaClick={handleGrowthPlanOpen} />
        
        <div id="process">
          <Process />
        </div>
        
        <div id="why-different" className="py-32 bg-[#020617] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-red-500 mb-6">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-black uppercase tracking-[0.3em] text-xs">The Showcase Advantage</span>
                </div>
                <h3 className="text-6xl md:text-7xl font-heading font-black text-white leading-none tracking-tighter mb-10">
                  We Build Your <br />
                  <span className="gradient-text">Unfair Advantage.</span>
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed mb-12">
                  Our own platform is a testament to our engineering. We bridge the gap between creative resonance and capital velocity.
                </p>
                <div className="space-y-6">
                  {[
                    { label: 'Creative Engineering', val: 'Conversion-first visual systems' },
                    { label: 'Data Sovereignty', val: 'You own 100% of the systems we build' },
                    { label: 'Revenue Ops', val: 'End-to-end CRM & Sales automation' }
                  ].map(item => (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{item.label}</h4>
                        <p className="text-slate-500 text-sm">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="glass-card p-12 rounded-[50px] border-white/5 hover:border-red-500/30 transition-all group">
                  <h4 className="text-5xl font-heading font-black text-white mb-4 group-hover:gradient-text transition-all">01</h4>
                  <h5 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Psychology First</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">We reverse engineer customer behavior to build marketing that doesn't feel like marketing.</p>
                </div>
                <div className="glass-card p-12 rounded-[50px] border-white/5 hover:border-purple-500/30 transition-all translate-y-8 group">
                  <h4 className="text-5xl font-heading font-black text-white mb-4 group-hover:gradient-text transition-all">02</h4>
                  <h5 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Capital Velocity</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">Our focus is shorten the gap between the first click and the closed-won deal.</p>
                </div>
                <div className="glass-card p-12 rounded-[50px] border-white/5 hover:border-red-500/30 transition-all group">
                  <h4 className="text-5xl font-heading font-black text-white mb-4 group-hover:gradient-text transition-all">03</h4>
                  <h5 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Brand Equity</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">We build legendary visual languages that command premium pricing and long-term trust.</p>
                </div>
                <div className="glass-card p-12 rounded-[50px] border-white/5 hover:border-purple-500/30 transition-all translate-y-8 group">
                  <h4 className="text-5xl font-heading font-black text-white mb-4 group-hover:gradient-text transition-all">04</h4>
                  <h5 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Infinite Scale</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">Modular systems built to handle $1M+ in monthly spend without breaking a sweat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
        
        <section id="insights" className="py-32 bg-[#030712]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-24">
              <div className="max-w-xl">
                <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">Growth Intelligence</h2>
                <h3 className="text-5xl md:text-6xl font-heading font-black text-white tracking-tighter leading-none">The Lab Report.</h3>
              </div>
              <button className="text-slate-400 hover:text-white font-bold transition-all flex items-center gap-2 group text-sm uppercase tracking-[0.2em]">
                Read All Insights <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { 
                  title: 'Designing for Desire: The Neuro-Visual Framework', 
                  cat: 'Branding', 
                  img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
                  badge: 'Must Read'
                },
                { 
                  title: 'Full-Stack Performance: Beyond Meta Ad Funnels', 
                  cat: 'Ads', 
                  img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                  badge: null
                },
                { 
                  title: 'The 2024 Conversion Architecture Audit', 
                  cat: 'Web Dev', 
                  img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
                  badge: null
                }
              ].map((post, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="rounded-[40px] overflow-hidden mb-8 relative aspect-[16/11] border border-white/5 shadow-2xl">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt={post.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-6 left-6 flex gap-2">
                      <div className="px-4 py-1.5 bg-red-600 text-white font-black text-[10px] uppercase tracking-widest rounded-full transition-transform group-hover:scale-110">{post.cat}</div>
                      {post.badge && (
                        <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-widest rounded-full border border-white/10">
                          {post.badge}
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/20 rounded-[40px] transition-all duration-500"></div>
                  </div>
                  <h4 className="text-2xl font-heading font-black text-white mb-4 group-hover:gradient-text transition-all leading-tight">{post.title}</h4>
                  <div className="flex items-center gap-3">
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Article — 8 min read</div>
                    <div className="w-1 h-1 rounded-full bg-slate-800"></div>
                    <div className="text-red-500/60 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-red-500 transition-colors">Read Protocol</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA 
          onPlanClick={handleGrowthPlanOpen} 
          onStrategyClick={handleContactOpen}
        />
      </main>

      <Footer />

      <GrowthPlanModal 
        isOpen={isGrowthPlanOpen} 
        onClose={() => setIsGrowthPlanOpen(false)} 
        onSuccess={handleSuccess}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSuccess={handleSuccess}
      />

      {/* Global Toast Success Notification */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] animate-slide-in-right">
          <div className="bg-white text-slate-950 px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20 backdrop-blur-xl">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <div className="flex flex-col">
              <span className="font-black uppercase tracking-widest text-[10px]">Transmission Success</span>
              <span className="text-sm font-bold">Data received. Initializing Revenue OS™...</span>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-4 text-slate-400 hover:text-slate-900">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
