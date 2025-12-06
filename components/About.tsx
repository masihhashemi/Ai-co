import React from 'react';
import { Section } from './Section';

export const About: React.FC = () => {
  return (
    <Section id="about" background="gray">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
          Why we built ParallelFoundry
        </h2>
        
        <div className="prose prose-slate prose-lg text-slate-600 mb-12">
          <p className="mb-6">
            Early-stage decision making is chaos. Founders and product teams often drown in bias, relying on gut feelings because thorough research takes too long.
          </p>
          <p>
            We believe that structure shouldn't kill speed. By combining rigorous strategic frameworks with parallel AI processing, we allow teams to validate ideas with the depth of a consulting firm—at the speed of a startup.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Clarity First</h4>
            <p className="text-sm text-slate-600">We prioritize clear thinking over hype. No buzzwords, just logic.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Evidence Based</h4>
            <p className="text-sm text-slate-600">Every claim is backed by simulated market data or logic chains.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Action Oriented</h4>
            <p className="text-sm text-slate-600">Analysis without next steps is vanity. We focus on the 'So What?'.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};