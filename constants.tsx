
import React from 'react';
import { 
  Code2, 
  Palette, 
  Share2, 
  TrendingUp, 
  Fingerprint, 
  Layers,
  Database,
  Globe,
  Zap,
  Shield,
  Target,
  BarChart3,
  Briefcase,
  Star,
  Cpu
} from 'lucide-react';
import { Service, CaseStudy, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'We build high-performance, conversion-first digital architectures. Blazing fast, SEO-optimized Next.js engines designed to turn visitors into capital.',
    outcome: 'High-Performance Digital Hubs',
    icon: <Code2 className="w-6 h-6 text-red-500" />,
    tags: ['Next.js', 'E-commerce', 'Headless CMS', 'Web3']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Premium visual assets designed for emotional resonance. From high-converting ad creative to sophisticated 3D product renders.',
    outcome: 'Billion-Dollar Aesthetic',
    icon: <Palette className="w-6 h-6 text-purple-500" />,
    tags: ['Brand Identity', 'UGC Creative', '3D Motion', 'Print']
  },
  {
    id: 'social-media',
    title: 'Social Marketing',
    description: 'Algorithmic growth strategies focused on community building and viral feedback loops that turn attention into brand equity.',
    outcome: 'Organic Authority & Trust',
    icon: <Share2 className="w-6 h-6 text-red-500" />,
    tags: ['Viral Content', 'Influencer Ops', 'Community Management']
  },
  {
    id: 'ads-mgmt',
    title: 'Ads Management',
    description: 'Capital velocity through ROI engineering. We deploy aggressive scaling systems across Meta, Google, and TikTok with surgical precision.',
    outcome: 'Predictable Revenue Scale',
    icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
    tags: ['Media Buying', 'Retargeting', 'Funnel Optimization']
  },
  {
    id: 'branding',
    title: 'Branding & Strategy',
    description: 'Beyond logos. We build legendary visual languages and positioning frameworks that command authority in saturated markets.',
    outcome: 'Unmistakable Market Presence',
    icon: <Fingerprint className="w-6 h-6 text-red-500" />,
    tags: ['Visual Identity', 'Voice & Tone', 'Market Positioning']
  },
  {
    id: 'growth-systems',
    title: 'Revenue Systems',
    description: 'The "Digital Brain" for your brand. Custom CRM automation and sales workflows that eliminate friction and human error.',
    outcome: 'Automated Profitability',
    icon: <Layers className="w-6 h-6 text-purple-500" />,
    tags: ['HubSpot/GHL', 'API Automation', 'Workflow Engineering']
  }
];

export const NICHES = [
  { 
    title: 'SaaS & Tech', 
    icon: <Database className="w-5 h-5" />, 
    metric: '4.2x LTV:CAC', 
    desc: 'Engineering low-friction demos and automated product-led growth pipelines.' 
  },
  { 
    title: 'D2C Brands', 
    icon: <TrendingUp className="w-5 h-5" />, 
    metric: '8.4x Average ROAS', 
    desc: 'Scaling e-commerce from high-intent search to complete social dominance.' 
  },
  { 
    title: 'Professional Services', 
    icon: <Globe className="w-5 h-5" />, 
    metric: '60% More Bookings', 
    desc: 'Authority-based marketing for high-end consultants and enterprise firms.' 
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'brand-overhaul',
    client: 'Apex Fintech',
    industry: 'Financial Services',
    background: 'Apex Fintech was a legacy financial advisory firm struggling to appeal to a younger, tech-savvy demographic of high-net-worth investors.',
    challenge: 'A dated visual identity, high cost-per-acquisition (CPA), and a zero-conversion website that felt like a brochure from 1998.',
    solution: 'Full visual rebranding paired with a conversion-optimized Next.js web architecture and a targeted paid search dominance campaign.',
    serviceUsed: 'Branding + Web Dev + Ads',
    results: [
      { label: 'Growth', value: '312', suffix: '%' },
      { label: 'CPA Reduction', value: '45', suffix: '%' },
      { label: 'ROAS', value: '8.4', suffix: 'x' }
    ],
    chartData: [
      { month: 'Jan', revenue: 4000 },
      { month: 'Feb', revenue: 6500 },
      { month: 'Mar', revenue: 8000 },
      { month: 'Apr', revenue: 15000 },
      { month: 'May', revenue: 22000 },
      { month: 'Jun', revenue: 35000 },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2426'
  },
  {
    id: 'd2c-scale',
    client: 'Lumina Wellness',
    industry: 'Consumer Goods',
    background: 'A premium skincare brand with great products but stagnant growth on social channels and poor retention metrics.',
    challenge: 'Ad fatigue was killing their margins, and their Shopify store had a bounce rate of over 65% on product pages.',
    solution: 'Engineered a "Content Engine" for high-velocity social ads and redesigned the e-commerce UX using high-end 3D graphics and social proof triggers.',
    serviceUsed: 'Graphic Design + Social + Web Dev',
    results: [
      { label: 'Revenue Lift', value: '240', suffix: '%' },
      { label: 'Retention', value: '52', suffix: '%' },
      { label: 'Conversion', value: '4.8', suffix: '%' }
    ],
    chartData: [
      { month: 'Jan', revenue: 12000 },
      { month: 'Feb', revenue: 14000 },
      { month: 'Mar', revenue: 28000 },
      { month: 'Apr', revenue: 42000 },
      { month: 'May', revenue: 68000 },
      { month: 'Jun', revenue: 95000 },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2426'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Thorne',
    role: 'CEO',
    company: 'Elevate Group',
    content: 'Yawk Digital transformed our brand from "just another vendor" to an industry leader. Their design-first approach combined with data is lethal.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Lumina Skin',
    content: 'The level of creative mastery and conversion engineering here is unmatched. They built a system that works while we sleep.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const CLIENT_LOGOS = [
  { label: 'Growth', color: 'from-emerald-400 to-cyan-500', icon: <TrendingUp className="w-4 h-4" /> },
  { label: 'Impact', color: 'from-orange-400 to-rose-500', icon: <Zap className="w-4 h-4" /> },
  { label: 'Authority', color: 'from-blue-400 to-indigo-500', icon: <Shield className="w-4 h-4" /> },
  { label: 'Scale', color: 'from-purple-400 to-fuchsia-500', icon: <Target className="w-4 h-4" /> },
  { label: 'Capital', color: 'from-amber-300 to-yellow-500', icon: <BarChart3 className="w-4 h-4" /> },
  { label: 'Legacy', color: 'from-slate-300 to-slate-500', icon: <Briefcase className="w-4 h-4" /> },
  { label: 'Venture', color: 'from-red-400 to-orange-500', icon: <Star className="w-4 h-4" /> },
  { label: 'Summit', color: 'from-cyan-300 to-blue-500', icon: <Cpu className="w-4 h-4" /> }
];
