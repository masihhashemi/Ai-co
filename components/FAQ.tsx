import React, { useState } from 'react';
import { Section } from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Who is ParallelFoundry for?",
    answer: "We serve founders, product managers, and corporate strategists who need to rigorously validate new ideas, features, or market opportunities quickly."
  },
  {
    question: "Do I need to be an AI expert?",
    answer: "Not at all. You provide the business context and ideas in plain English; our system handles the prompting, agent orchestration, and synthesis."
  },
  {
    question: "What do I need to provide to get value?",
    answer: "Just a clear description of your idea, the problem you think you're solving, and any specific constraints. The more context you give, the sharper the output."
  },
  {
    question: "Does this replace customer interviews?",
    answer: "It augments them. Our 'synthetic users' help you identify the right questions to ask real humans and spot obvious flaws before you leave the building."
  },
  {
    question: "Can I export the results?",
    answer: "Yes. All reports can be exported as clean PDFs, Markdown files, or Notion pages to share with your team or stakeholders."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">
          Common Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};