import React from 'react';
import { Section } from './Section';
import { Target, ShieldCheck, Zap, Layers, BarChart3, Compass } from 'lucide-react';

const benefits = [
  {
    title: "Clarity on Audience",
    desc: "Define exactly who has the problem, not just who you think has it.",
    icon: <Target className="h-5 w-5" />
  },
  {
    title: "Risk Mitigation",
    desc: "Identify critical assumptions and failure modes before investing capital.",
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: "Speed to Insight",
    desc: "Weeks of research condensed into minutes of parallel processing.",
    icon: <Zap className="h-5 w-5" />
  },
  {
    title: "Solution Architecture",
    desc: "High-level mapping of potential solution components and technical feasibility.",
    icon: <Layers className="h-5 w-5" />
  },
  {
    title: "Market Sizing",
    desc: "Realistic TAM/SAM/SOM calculations based on current market data.",
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    title: "Strategic Positioning",
    desc: "Understanding where you sit in the competitive landscape.",
    icon: <Compass className="h-5 w-5" />
  }
];

export const Benefits: React.FC = () => {
  return (
    <Section background="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
          Outcomes, not just output.
        </h2>
        <p className="text-slate-600">
          We don't just generate text. We generate clarity, structure, and actionable direction.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 group">
            <div className="h-10 w-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              {b.icon}
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};