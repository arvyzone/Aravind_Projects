import React from 'react';
import { PenTool, Code, Zap } from 'lucide-react';

const Toolkit: React.FC = () => {
  return (
    <section id="technologies" className="bg-lightbg py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-dark mb-4">AI Tool Kit</h3>
          <p className="text-lg text-graytext">
            We bring the best AI tools into one place so you can learn, create, and explore without the overwhelm.
          </p>
        </div>

        {/* Visual Representation - Concentric Circles */}
        <div className="relative flex justify-center items-center h-[500px] md:h-[600px]">
          
          {/* Outer Circle */}
          <div className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border border-primary/50 bg-[#F1F8EB] flex items-center justify-center">
             {/* Floating Icons on Outer Ring */}
             <div className="absolute top-10 left-10 p-3 bg-white rounded-lg shadow-sm animate-bounce duration-[3000ms]">
                <PenTool className="text-primary w-6 h-6" />
             </div>
             <div className="absolute bottom-20 right-10 p-3 bg-white rounded-lg shadow-sm animate-pulse">
                <Zap className="text-secondary w-6 h-6" />
             </div>
          </div>

          {/* Middle Circle */}
          <div className="absolute w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-secondary/50 bg-[#FFE5D0] flex items-center justify-center">
             <div className="absolute top-5 right-1/2 translate-x-1/2 p-2 bg-white rounded-lg shadow-sm">
                <Code className="text-dark w-5 h-5" />
             </div>
          </div>

          {/* Inner Circle */}
          <div className="absolute w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full border border-primary bg-[#DAE5CF] flex items-center justify-center shadow-inner">
             <div className="text-center p-4">
               <h4 className="text-xl font-bold text-dark">HumainAI</h4>
               <p className="text-xs text-dark/70">Curated Tools</p>
             </div>
          </div>

          {/* Floating Cards (Desktop Only) */}
          <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border-l-4 border-primary max-w-xs">
            <h5 className="font-bold text-lg mb-1">Creativity Tools</h5>
            <p className="text-sm text-graytext">Turn ideas into images, music, and stories.</p>
          </div>
          <div className="hidden lg:block absolute right-10 top-1/3 bg-white p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-xs">
            <h5 className="font-bold text-lg mb-1">No-Code Builders</h5>
            <p className="text-sm text-graytext">Design websites and apps without coding.</p>
          </div>

        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 md:hidden gap-4 mt-8">
           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
              <h5 className="font-bold text-lg mb-2">Creativity Tools</h5>
              <p className="text-graytext">Turn ideas into images, music, and stories.</p>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary">
              <h5 className="font-bold text-lg mb-2">Productivity Boosters</h5>
              <p className="text-graytext">Smarter study hacks and research help.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;