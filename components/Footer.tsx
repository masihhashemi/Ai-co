import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Ready to clarify your vision?</h2>
            <p className="text-slate-400">Stop guessing. Start validating today.</p>
          </div>
          <div className="flex-shrink-0">
             <Button className="bg-white text-slate-900 hover:bg-gray-100 border-none">
               Get early access
             </Button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-white rounded-sm"></div>
            <span className="text-lg font-bold tracking-tight">ParallelFoundry</span>
          </div>

          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-slate-500">
            &copy; 2025 ParallelFoundry. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};