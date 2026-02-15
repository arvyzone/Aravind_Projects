import React from 'react';

export interface NavLink {
  label: string;
  href: string;
  color: string;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'primary' | 'secondary';
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
  borderColor: string;
  bgColor: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}