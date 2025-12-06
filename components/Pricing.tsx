import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Explore",
    price: "$49",
    description: "For individuals testing their first ideas.",
    features: [
      "3 Deep Dive Reports / month",
      "Market Gap Analysis",
      "Basic User Personas",
      "Standard Support"
    ],
    cta: "Start Exploring"
  },
  {
    name: "Build",
    price: "$149",
    description: "For teams iterating on active products.",
    highlighted: true,
    features: [
      "15 Deep Dive Reports / month",
      "Competitor War-gaming",
      "Synthetic User Interviews",
      "Export to PDF & Notion",
      "Priority Support"
    ],
    cta: "Get Started"
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For studios and innovation labs.",
    features: [
      "Unlimited Reports",
      "API Access",
      "Custom Agent Tuning",
      "White-label Reports",
      "Dedicated Success Manager"
    ],
    cta: "Contact Sales"
  }
];

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
          Simple, transparent pricing.
        </h2>
        <p className="text-slate-600">
          Start small and scale as your validation needs grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {tiers.map((tier, i) => (
          <div 
            key={i} 
            className={`relative p-8 rounded-2xl border ${
              tier.highlighted 
                ? 'border-slate-900 shadow-xl scale-105 z-10 bg-white' 
                : 'border-gray-200 bg-white shadow-sm'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
              <p className="text-slate-500 text-sm mt-2">{tier.description}</p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
              {tier.price !== "Custom" && <span className="text-slate-500">/mo</span>}
            </div>

            <ul className="space-y-4 mb-8">
              {tier.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <Check className="h-5 w-5 text-slate-900 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={tier.highlighted ? 'primary' : 'outline'} 
              className="w-full"
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
      
      <p className="text-center text-sm text-slate-500 mt-12">
        Studios and Enterprises? <a href="#" className="underline hover:text-slate-900">Get a custom quote</a>.
      </p>
    </Section>
  );
};