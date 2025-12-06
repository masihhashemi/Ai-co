import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/90 backdrop-blur-md border-gray-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <div className="h-6 w-6 bg-slate-900 rounded-sm"></div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              ParallelFoundry
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Sign in
            </a>
            <Button size="sm">Get early access</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-medium text-slate-900 border-b border-gray-100 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <a href="#" className="text-lg font-medium text-slate-600 text-center">
              Sign in
            </a>
            <Button size="lg" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Get early access
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};