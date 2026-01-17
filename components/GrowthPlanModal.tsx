
import React, { useState, useMemo, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Layout, Megaphone, Target, Palette, Box, Layers, Zap, DollarSign, Calendar, FileText, Sparkles, Building2, TrendingUp, Search, ShieldCheck } from 'lucide-react';

interface GrowthPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const GrowthPlanModal: React.FC<GrowthPlanModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<Step>(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [formData, setFormData] = useState({
    services: [] as string[],
    businessType: '',
    goal: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    whatsapp: ''
  });

  // Reset modal state on open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsAnalyzing(false);
    }
  }, [isOpen]);

  const isStepValid = useMemo(() => {
    switch(step) {
      case 1: return formData.services.length > 0;
      case 2: return !!formData.businessType;
      case 3: return !!formData.goal;
      case 4: return !!formData.budget;
      case 5: return !!formData.timeline;
      case 6: return !!formData.name && !!formData.email;
      default: return true;
    }
  }, [step, formData]);

  const finalOutcome = useMemo(() => {
    const isHighBudget = formData.budget === '$10,000+';
    const isUrgent = formData.timeline === 'Immediately' || formData.timeline === 'Within 30 days';
    
    if (isHighBudget && isUrgent) return 'BOOK_CALL';
    if (formData.timeline === 'Just researching') return 'GET_AUDIT';
    return 'EMAIL_PROPOSAL';
  }, [formData]);

  if (!isOpen) return null;

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const nextStep = () => {
    if (step === 6) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setStep(7);
        if (onSuccess) onSuccess();
      }, 3000);
    } else {
      setStep(prev => Math.min(prev + 1, totalSteps) as Step);
    }
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step);

  const renderStep = () => {
    if (isAnalyzing) {
      return (
        <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
          <div className="relative w-24 h-24 mb-10">
            <div className="absolute inset-0 rounded-full border-4 border-red-500/10 border-t-red-500 animate-spin"></div>
            <div className="absolute inset-4 rounded-full border-4 border-purple-500/10 border-b-purple-500 animate-spin-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <div className="space-y-3 text-center">
            <h3 className="text-xl font-black text-white tracking-tight uppercase">Revenue OS™ Diagnostic</h3>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">Ingesting Brand Physics...</p>
          </div>
          <div className="mt-12 w-full max-w-xs space-y-4">
             <div className="flex justify-between text-[8px] font-black text-slate-700 uppercase tracking-widest">
                <span>Saving to Secure DB</span>
                <span className="text-red-500">Active</span>
             </div>
             <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 animate-[typing_2s_ease-in-out_infinite]" style={{ width: '100%' }}></div>
             </div>
             <div className="text-[9px] text-slate-600 text-center font-bold">Transmitting lead data to strategy department...</div>
          </div>
        </div>
      );
    }

    switch(step) {
      case 1:
        return (
          <div className="space-y-6 animate-slide-in-right">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">What do you need help with?</h3>
              <p className="text-slate-400 text-sm italic">Select the pillars of your growth engine.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'web', icon: <Layout />, label: 'Web Dev', sub: 'Conversion Engines' },
                { id: 'ads', icon: <Megaphone />, label: 'Ads Mgmt', sub: 'Capital Velocity' },
                { id: 'social', icon: <Target />, label: 'Social', sub: 'Brand Trust' },
                { id: 'branding', icon: <Palette />, label: 'Branding', sub: 'Market Authority' },
                { id: 'design', icon: <Box />, label: 'Design', sub: 'Visual Assets' },
                { id: 'systems', icon: <Layers />, label: 'Systems', sub: 'CRM & Automation' },
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleServiceToggle(opt.label)}
                  className={`flex flex-col items-center p-6 rounded-3xl border-2 transition-all group ${
                    formData.services.includes(opt.label)
                      ? 'bg-red-500/10 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className={`w-10 h-10 mb-4 rounded-xl flex items-center justify-center transition-all ${
                    formData.services.includes(opt.label) ? 'bg-red-500 text-white' : 'bg-white/5 group-hover:bg-white/10'
                  }`}>
                    {opt.icon}
                  </div>
                  <span className="font-black text-[10px] uppercase tracking-widest">{opt.label}</span>
                  <span className="text-[9px] opacity-40 mt-1">{opt.sub}</span>
                </button>
              ))}
            </div>
            <button
              onClick={nextStep}
              disabled={!isStepValid}
              className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 mt-4 disabled:opacity-20 transition-all uppercase tracking-widest text-sm hover:bg-red-500 hover:text-white"
            >
              Continue Configuration <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-slide-in-right">
             <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Describe your business</h3>
              <p className="text-slate-400 text-sm italic">Tailoring strategy to industry physics.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {['E-commerce', 'SaaS', 'Local Business', 'Personal Brand', 'Startup', 'Agency'].map(type => (
                <button
                  key={type}
                  onClick={() => { setFormData(d => ({ ...d, businessType: type })); nextStep(); }}
                  className={`w-full p-6 rounded-2xl border-2 flex items-center justify-between transition-all group ${
                    formData.businessType === type ? 'bg-red-500/10 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.1)]' : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Building2 className={`w-5 h-5 transition-opacity ${formData.businessType === type ? 'text-red-500 opacity-100' : 'opacity-40'}`} />
                    <span className="font-bold">{type}</span>
                  </div>
                  {formData.businessType === type && <Check className="w-5 h-5 text-red-500" />}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-slide-in-right">
             <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Primary Objective</h3>
              <p className="text-slate-400 text-sm italic">Calibrating the revenue target.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {['Increase Revenue', 'Generate More Leads', 'Build a Strong Brand', 'Launch New Product', 'Fix Low Conversions', 'Automation'].map(goal => (
                <button
                  key={goal}
                  onClick={() => { setFormData(d => ({ ...d, goal })); nextStep(); }}
                  className={`w-full p-5 rounded-2xl border-2 flex items-center justify-between transition-all ${
                    formData.goal === goal ? 'bg-red-500/10 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.1)]' : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <span className="font-bold">{goal}</span>
                  {formData.goal === goal && <Check className="w-5 h-5 text-red-500" />}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-slide-in-right">
             <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Investment Level</h3>
              <p className="text-slate-400 text-sm italic">Selecting the appropriate Protocol Tier.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Under $1,000', plan: 'Lite Protocol', feature: 'Basic Funnel Audit' },
                { label: '$1,000 – $3,000', plan: 'Growth Tier', feature: 'Ad Creative + Retargeting' },
                { label: '$3,000 – $10,000', plan: 'Scale Tier', feature: 'Full System Engineering' },
                { label: '$10,000+', plan: 'Elite Protocol', feature: 'Dedicated Growth Department' }
              ].map(tier => (
                <button
                  key={tier.label}
                  onClick={() => { setFormData(d => ({ ...d, budget: tier.label })); nextStep(); }}
                  className={`w-full p-6 rounded-2xl border-2 flex items-center justify-between transition-all text-left group ${
                    formData.budget === tier.label ? 'bg-red-500/10 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.1)]' : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <div className={`p-3 rounded-xl ${formData.budget === tier.label ? 'bg-red-500 text-white' : 'bg-white/5 group-hover:bg-white/10'}`}>
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-red-500 tracking-widest">{tier.plan}</div>
                      <div className="font-bold text-lg">{tier.label} <span className="text-slate-500 font-normal text-xs ml-2">/mo</span></div>
                      <div className="text-[10px] text-slate-500 mt-1">{tier.feature}</div>
                    </div>
                  </div>
                  {formData.budget === tier.label && <Check className="w-5 h-5 text-red-500" />}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-slide-in-right">
             <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Timeline</h3>
              <p className="text-slate-400 text-sm italic">Determining capital velocity requirements.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {['Immediately', 'Within 30 days', 'In 1–3 months', 'Just researching'].map(time => (
                <button
                  key={time}
                  onClick={() => { setFormData(d => ({ ...d, timeline: time })); nextStep(); }}
                  className={`w-full p-6 rounded-2xl border-2 flex items-center justify-between transition-all ${
                    formData.timeline === time ? 'bg-red-500/10 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.1)]' : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Calendar className={`w-5 h-5 transition-opacity ${formData.timeline === time ? 'text-red-500 opacity-100' : 'opacity-40'}`} />
                    <span className="font-bold">{time}</span>
                  </div>
                  {formData.timeline === time && <Check className="w-5 h-5 text-red-500" />}
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 animate-slide-in-right">
             <div className="text-center">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Final Protocol</h3>
              <p className="text-slate-400 text-sm italic">Connecting your data to our senior analysts.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                  className="w-full bg-white/5 border-white/10 border-2 rounded-2xl p-5 text-white focus:border-red-500 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Business Email</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                  className="w-full bg-white/5 border-white/10 border-2 rounded-2xl p-5 text-white focus:border-red-500 transition-all outline-none"
                />
              </div>
            </div>
            <button
              onClick={nextStep}
              disabled={!isStepValid}
              className="btn-interactive shimmer-btn w-full py-6 bg-red-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 disabled:opacity-30 disabled:pointer-events-none uppercase tracking-widest text-lg shadow-2xl"
            >
              Initialize Analysis <Sparkles className="w-5 h-5" />
            </button>
          </div>
        );
      case 7:
        return (
          <div className="space-y-10 text-center animate-zoom-in">
             <div className="w-20 h-20 bg-green-500/10 rounded-3xl flex items-center justify-center text-green-500 mx-auto mb-6 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
                <Check className="w-10 h-10" />
             </div>
             
             <div>
                <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase tracking-tight">Sequence Engineered</h3>
                <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
                  Our Revenue OS™ has calibrated a specialized path for your <strong>{formData.businessType}</strong> model.
                </p>
             </div>

             <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] space-y-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl pointer-events-none"></div>
                {finalOutcome === 'BOOK_CALL' && (
                  <>
                    <div className="flex items-center gap-4 text-red-500 font-black uppercase text-xs tracking-widest">
                       <TrendingUp className="w-5 h-5" /> Scaling Protocol Active
                    </div>
                    <p className="text-slate-400 text-sm">Your profile meets our <strong>Tier-1 Performance Standards</strong>. We have generated an immediate scaling strategy.</p>
                    <button className="btn-interactive shimmer-btn w-full py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 group uppercase tracking-widest text-sm">
                       Secure Priority Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                    </button>
                  </>
                )}
                {finalOutcome === 'EMAIL_PROPOSAL' && (
                  <>
                    <div className="flex items-center gap-4 text-purple-500 font-black uppercase text-xs tracking-widest">
                       <FileText className="w-5 h-5" /> Roadmap Engineered
                    </div>
                    <p className="text-slate-400 text-sm">Our analysts are compiling a 12-month revenue forecast based on your input. Expect it via email within 4 hours.</p>
                    <button onClick={onClose} className="w-full py-5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors uppercase tracking-widest text-sm">
                       Transmission Received
                    </button>
                  </>
                )}
                {finalOutcome === 'GET_AUDIT' && (
                  <>
                    <div className="flex items-center gap-4 text-blue-500 font-black uppercase text-xs tracking-widest">
                       <Search className="w-5 h-5" /> Diagnostic Prepared
                    </div>
                    <p className="text-slate-400 text-sm">Download our proprietary <strong>Conversion Leak Checklist</strong> to find immediate friction points in your current ecosystem.</p>
                    <button className="btn-interactive w-full py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
                       Download Toolkit <FileText className="w-5 h-5" />
                    </button>
                  </>
                )}
             </div>
             
             <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 font-black uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-green-500/40" />
                Transmission Protocol Secure (YAWK-{(Math.random()*9000 + 1000).toFixed(0)})
             </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl transition-opacity animate-fade-in" onClick={onClose} />
      
      <div className="relative glass-card w-full max-w-xl rounded-[48px] p-8 md:p-14 border-red-500/20 shadow-2xl animate-zoom-in">
        {!isAnalyzing && step < 7 && (
          <button onClick={onClose} className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/5 text-slate-600 hover:text-white transition-all">
            <X className="w-6 h-6" />
          </button>
        )}

        {step < totalSteps && !isAnalyzing && (
          <div className="absolute top-0 left-0 w-full p-2">
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-600 to-purple-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="mt-4">
          {renderStep()}
        </div>

        {step > 1 && step < totalSteps && !isAnalyzing && (
          <div className="mt-10 flex items-center justify-between">
            <button onClick={prevStep} className="flex items-center gap-2 text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
            </button>
            {/* Step 1 has its own Next button inside its block, other steps have it here or auto-advance */}
            {step < 6 && step !== 1 && (
              <button 
                onClick={nextStep} 
                disabled={!isStepValid}
                className="flex items-center gap-2 text-red-500 hover:text-white disabled:opacity-20 text-[10px] font-black uppercase tracking-widest transition-colors group"
              >
                Next Step <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        )}

        {step === 7 && (
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/5 text-slate-600 hover:text-white transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default GrowthPlanModal;
