import React from 'react';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { Button } from './Button';
import { Section } from './Section';

export const Hero: React.FC = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32" background="white">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Public Beta Live
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
          Turn messy ideas into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
            validated thesis.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          ParallelFoundry runs multiple AI analysis workflows at once—researching markets, interviewing synthetic users, and framing problems—so you can decide with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Button size="lg" className="w-full sm:w-auto group">
            Get early access
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto group">
            <FileText className="mr-2 h-4 w-4 text-slate-500" />
            View example report
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 text-left pt-12 border-t border-slate-100 w-full">
          {[
            "Sharper problem statements",
            "Clearer target audience",
            "Market gaps mapped",
            "Solution options + risks"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};