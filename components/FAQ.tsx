import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-12">
        
        {/* Left Header */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h3 className="text-4xl font-bold text-dark">Frequently Asked Questions</h3>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors group">
            <span>View All Questions</span>
            <div className="bg-white rounded-full p-1 text-primary group-hover:text-secondary">
               <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Right Accordion */}
        <div className="w-full lg:w-2/3">
           <div className="rounded-3xl border border-gray-200 p-6 bg-gradient-to-tr from-orange-50 to-white">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="border-b border-primary/30 last:border-0 relative">
                   {openIndex === idx && (
                     <div className="absolute left-0 top-6 bottom-6 w-1 bg-secondary rounded-full" />
                   )}
                   <button 
                     onClick={() => toggle(idx)}
                     className="w-full flex items-center justify-between py-6 px-4 text-left focus:outline-none"
                   >
                     <span className="text-lg font-bold text-dark">{item.question}</span>
                     <ChevronDown className={`w-6 h-6 text-dark transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                   </button>
                   
                   <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 text-graytext">
                        {item.answer}
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;