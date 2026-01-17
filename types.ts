
// Added React import to provide access to React.ReactNode namespace
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  outcome: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  background: string;
  challenge: string;
  solution: string;
  serviceUsed: string;
  results: Metric[];
  chartData: any[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
