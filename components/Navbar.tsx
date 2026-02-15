import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Brain } from 'lucide-react';
import { NAV_LINKS, BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative top-0 w-full z-50 bg-white">
      <nav className="mx-auto w-full md:max-w-[90vw] px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            {/* Logo placeholder - using Brain icon as in the original */}
            <Brain className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold tracking-tighter text-dark">{BRAND_NAME}</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="relative text-base font-medium text-dark hover:text-black group py-2"
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: link.color }}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:flex items-center gap-2 rounded-full border-2 border-dark py-1 pr-1 pl-4 hover:bg-dark hover:text-white transition-colors duration-300 group">
            <span className="font-semibold">Request A Callback</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-white group-hover:bg-white group-hover:text-dark transition-colors duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 border border-dark rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6 text-dark" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b px-6 py-4">
          <span className="text-xl font-bold">{BRAND_NAME}</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-dark" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 py-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-xl font-medium text-dark"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="mt-4 flex items-center justify-center gap-2 rounded-full border-2 border-dark py-2 pr-2 pl-6 w-full">
            <span className="font-semibold">Request A Callback</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-white">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;