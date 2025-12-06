import React from 'react';
import { Section } from './Section';
import { Lightbulb, Network, FileOutput, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "1. Capture Context",
    description: "Dump your raw idea, constraints, and assumptions. No structured format required—just get it out of your head."
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "2. Parallel Analysis",
    description: "Our system deploys autonomous agents to research competitors, simulate user interviews, and map business models simultaneously."
  },
  {
    icon: <FileOutput className="h-6 w-6" />,
    title: "3. Strategic Synthesis",
    description: "Receive a comprehensive, evidence-backed strategy document highlighting the most viable path forward."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" background="gray">
      <div className="mb-16 md:text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Intelligent strategy, simplified.
        </h2>
        <p className="text-lg text-slate-600">
          We strip away the complexity of early-stage validation. You bring the spark, we provide the oxygen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10 transform scale-x-90" />

        {steps.map((step, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow duration-300">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full border border-gray-100 shadow-sm z-10">
               <div className="bg-slate-50 p-3 rounded-full text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                 {step.icon}
               </div>
             </div>
             
             <div className="mt-8 text-center">
               <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
               <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
             </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
          <span>Output: A professional 15-page strategy memo</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Section>
  );
};