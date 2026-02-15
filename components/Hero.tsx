import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_TEXT } from '../constants';
import { FeaturesSectionWithHoverEffects } from './ui/feature-section-with-hover-effects';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-10 pb-20">
      {/* Background Gradients simulating the fades */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] -z-10 -translate-x-1/2" />

      <div className="mx-auto w-full max-w-7xl px-6 mb-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-tight tracking-tight text-dark">
            {HERO_TEXT.headline}
          </h1>
          <p className="text-xl text-graytext md:max-w-[80%] mx-auto">
            {HERO_TEXT.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-primary text-white flex items-center justify-between sm:justify-start gap-3 rounded-full py-1.5 pr-1.5 pl-6 group transition-all hover:shadow-lg">
              <span className="font-semibold text-lg">For Students</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </button>
            
            <button className="w-full sm:w-auto bg-secondary text-white flex items-center justify-between sm:justify-start gap-3 rounded-full py-1.5 pr-1.5 pl-6 group transition-all hover:shadow-lg">
              <span className="font-semibold text-lg">For Teachers</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6">
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
};

export default Hero;