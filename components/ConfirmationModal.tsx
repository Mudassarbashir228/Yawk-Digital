
import React from 'react';
import { X, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm,
  title = "Unlock Your Growth Roadmap",
  description = "You are requesting a deep-dive audit. Please ensure you have access to your primary ad accounts or CRM for the most accurate diagnostic."
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-500 animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative glass-card w-full max-w-lg rounded-[48px] p-8 md:p-14 border-red-500/30 shadow-[0_0_100px_rgba(239,68,68,0.15)] animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/5 text-slate-500 hover:text-white transition-all hover:rotate-90 duration-500"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center text-red-500 mx-auto mb-10 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
            <Calendar className="w-10 h-10" />
          </div>

          <h3 className="text-4xl font-heading font-black text-white mb-6 tracking-tighter leading-tight">
            {title}
          </h3>
          
          <p className="text-slate-400 leading-relaxed mb-12 text-lg">
            {description}
          </p>

          <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-5 mb-12 flex items-center gap-4 text-left">
            <ShieldCheck className="w-6 h-6 text-red-500 shrink-0" />
            <p className="text-[11px] uppercase font-black text-slate-300 tracking-[0.2em] leading-relaxed">
              Active Protocol: We only onboard 3 clients per month to maintain elite standards.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="btn-interactive shimmer-btn w-full py-6 bg-red-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-red-500 hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] transition-all group text-xl"
            >
              Confirm Appointment <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={onClose}
              className="w-full py-4 text-slate-500 hover:text-white font-bold transition-all text-xs uppercase tracking-[0.3em] hover:-translate-y-1 active:scale-95"
            >
              Cancel & Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
