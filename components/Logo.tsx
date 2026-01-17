
import React from 'react';

const Logo: React.FC<{ className?: string; iconOnly?: boolean }> = ({ className = "h-8", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-500">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bottom Purple Path */}
          <path d="M40 70 C40 90 85 85 85 60 C85 45 70 35 60 30 L40 70Z" fill="#7c3aed" />
          {/* Top Red Path */}
          <path d="M40 10 L40 70 L80 35 C85 30 70 15 65 10 L40 10Z" fill="#ef4444" />
          {/* Subtle overlap/shadow for realism */}
          <path d="M40 70 L60 30 L80 35 L40 70Z" fill="black" fillOpacity="0.1" />
        </svg>
      </div>
      {!iconOnly && (
        <div className="flex flex-col -space-y-1">
          <span className="text-2xl font-heading font-black tracking-tight text-white leading-none">
            YAWK
          </span>
          <span className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase leading-none ml-0.5">
            DIGITAL
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
