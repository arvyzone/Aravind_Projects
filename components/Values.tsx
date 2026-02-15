import React from 'react';
import { WHO_WE_ARE_TEXT, VALUE_CARDS } from '../constants';

const Values: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-dark">Who We Are</h3>
          <p className="text-lg text-graytext leading-relaxed">
            {WHO_WE_ARE_TEXT}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUE_CARDS.map((card, index) => (
            <div 
              key={index}
              className={`relative h-[250px] rounded-2xl p-6 overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2 duration-300 ${
                card.color === 'primary' ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              {/* Inner card with glass effect */}
              <div className="absolute inset-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 flex flex-col justify-between">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {card.icon}
                </div>
                <div>
                  <h6 className="text-lg font-bold text-white mb-2 leading-tight">
                    {card.title}
                  </h6>
                  <p className="text-sm text-white/90 font-light leading-snug">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;