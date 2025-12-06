import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}