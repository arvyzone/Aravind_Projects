import React from 'react';
import { PILLARS } from '../constants';
import { Pillar } from '../types';

const PillarCard: React.FC<{ pillar: Pillar }> = ({ pillar }) => (
  <div className={`relative flex w-full max-w-md ${pillar.side === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center gap-4 group`}>
     {/* Connector Line (visible on large screens) */}
     <div className={`hidden lg:block h-[2px] w-12 xl:w-20 transition-all duration-500 ${pillar.side === 'left' ? 'order-2 bg-primary' : 'order-2 bg-secondary'}`} />

    <div className={`flex-1 rounded-2xl border p-2 transition-all duration-300 hover:shadow-lg ${pillar.bgColor}`} style={{ borderColor: pillar.borderColor }}>
      <div className="grid grid-cols-5 gap-2 h-full">
         {/* Icon Box */}
         <div className="col-span-1 bg-white rounded-xl flex items-center justify-center py-4">
            {pillar.icon}
         </div>
         {/* Text */}
         <div className="col-span-4 py-2 pr-2">
           <h6 className="text-lg font-bold text-dark leading-tight mb-1">{pillar.title}</h6>
           <p className="text-xs md:text-sm text-dark/80">{pillar.description}</p>
         </div>
      </div>
    </div>
  </div>
);

const Pillars: React.FC = () => {
  const leftPillars = PILLARS.filter(p => p.side === 'left');
  const rightPillars = PILLARS.filter(p => p.side === 'right');

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10 opacity-50"></div>

      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-center text-4xl md:text-5xl font-bold text-dark mb-16">
          The 6 Pillars of the Framework
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3 items-center lg:items-end z-10">
            {leftPillars.map((pillar, idx) => (
              <PillarCard key={idx} pillar={pillar} />
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-1/3 flex justify-center z-0 my-8 lg:my-0">
             <div className="relative w-[300px] h-[300px] rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                   <img src="https://picsum.photos/id/445/600/600" alt="Central Pillar" className="opacity-80 object-cover" />
                </div>
             </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3 items-center lg:items-start z-10">
            {rightPillars.map((pillar, idx) => (
              <PillarCard key={idx} pillar={pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;