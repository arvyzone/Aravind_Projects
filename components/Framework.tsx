import React from 'react';
import { FRAMEWORK_TEXT } from '../constants';

const Framework: React.FC = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10 flex justify-center">
        <div className="relative">
             {/* Simulating the background image behind the text box */}
             <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[3rem] -z-10 rotate-1 opacity-50 blur-sm"></div>
             
             <div className="bg-white rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset] p-8 md:p-12 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
                  Humain AI Literacy Framework
                </h3>
                <p className="text-lg text-dark leading-relaxed">
                  {FRAMEWORK_TEXT}
                </p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Framework;