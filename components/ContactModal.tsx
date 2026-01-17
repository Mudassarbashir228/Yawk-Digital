
import React, { useState } from 'react';
import { X, Calendar, ArrowRight, ShieldCheck, Mail, User, Globe, Loader2, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', website: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-end backend processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      onSuccess();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative glass-card w-full max-w-xl rounded-[48px] p-8 md:p-14 border-red-500/20 shadow-2xl animate-zoom-in overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/5 text-slate-500 hover:text-white transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {isDone ? (
          <div className="text-center py-10 animate-fade-in">
             <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8 border border-green-500/20">
                <CheckCircle2 className="w-12 h-12" />
             </div>
             <h3 className="text-4xl font-heading font-black text-white mb-6 uppercase tracking-tight">Protocol Initiated</h3>
             <p className="text-slate-400 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
               Your brief has been ingested by our strategy department. A senior analyst will reach out within 24 business hours.
             </p>
             <button onClick={onClose} className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-red-500 hover:text-white transition-colors">
               Return to Platform
             </button>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Phase 01: Connection</h2>
              <h3 className="text-4xl font-heading font-black text-white tracking-tighter leading-tight">
                Request Custom <br />
                <span className="gradient-text">Revenue Strategy.</span>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      required
                      type="text" 
                      placeholder="Marcus Aurelius"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full bg-white/5 border-2 border-white/5 rounded-2xl p-5 pl-14 text-white focus:border-red-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-4">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      required
                      type="email" 
                      placeholder="ceo@company.com"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full bg-white/5 border-2 border-white/5 rounded-2xl p-5 pl-14 text-white focus:border-red-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-4">Company Website</label>
                <div className="relative">
                  <Globe className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    required
                    type="url" 
                    placeholder="https://company.com"
                    value={form.website}
                    onChange={e => setForm({...form, website: e.target.value})}
                    className="w-full bg-white/5 border-2 border-white/5 rounded-2xl p-5 pl-14 text-white focus:border-red-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-4">Context / Objective</label>
                <textarea 
                  placeholder="Describe your current bottleneck..."
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-white/5 border-2 border-white/5 rounded-3xl p-6 text-white focus:border-red-500 outline-none transition-all min-h-[120px]"
                />
              </div>

              <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl">
                 <ShieldCheck className="w-5 h-5 text-red-500" />
                 <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Encrypted Transmission. 100% Data Sovereignty Guaranteed.</p>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-interactive btn-primary-glow w-full py-6 bg-red-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest text-lg shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" /> Verifying Credentials...
                  </>
                ) : (
                  <>
                    Initialize Strategy Protocol <ArrowRight className="w-6 h-6" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
