import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Brain } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-dark pt-16 pb-6 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
               <Brain className="h-8 w-8 text-dark" />
               <span className="text-2xl font-bold">{BRAND_NAME}</span>
            </div>
            <p className="text-graytext max-w-xs">
              Unlock knowledge with expert-led online courses.
            </p>
          </div>

          <div className="col-span-3 flex flex-col lg:flex-row justify-end gap-12">
            <div>
               <h6 className="text-xl font-bold mb-6">Connect</h6>
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-dark" />
                    <span>+91 8130023688</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-dark" />
                    <a href="mailto:hi@humainlearning.ai" className="hover:underline">hi@humainlearning.ai</a>
                  </div>
                  <a href="#" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-dark to-transparent mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-graytext">
          <p>2025 © {BRAND_NAME} . All rights reserved.</p>
          <a href="#" className="hover:text-dark transition-colors mt-2 md:mt-0">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;