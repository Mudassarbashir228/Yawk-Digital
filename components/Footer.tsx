
import React from 'react';
import { Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <Logo className="mb-8" />
            <p className="text-slate-400 text-lg max-w-md mb-10 leading-relaxed">
              We engineer revenue systems for companies that are tired of agencies who just "do things" without moving the needle. Strategy first. Results always.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/30 hover:bg-red-500/10 hover:scale-110 hover:rotate-6 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h5>
            <ul className="space-y-4">
              {['Services', 'Results', 'Process', 'Insights', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-all flex items-center group py-1 hover:translate-x-1">
                    {item} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Legal</h5>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Client Login'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-all block py-1 hover:translate-x-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-600 text-sm font-medium">
            &copy; {new Date().getFullYear()} Yawk Digital Growth Systems. All Rights Reserved.
          </div>
          <div className="flex items-center gap-8">
            <span className="text-slate-600 text-xs font-bold uppercase tracking-widest cursor-default hover:text-slate-400 transition-colors">Designed for scale</span>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-red-500 group-hover:animate-ping"></span>
              <span className="text-slate-400 text-sm font-medium group-hover:text-red-500 transition-colors">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
