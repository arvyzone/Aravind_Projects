import React from 'react';
import { User, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-lightbg">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-dark mb-12">
          Trusted by Students, Parents, and Educators
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-graytext" />
                </div>
                <div>
                  <h6 className="font-bold text-dark">{t.name}</h6>
                  <p className="text-sm text-graytext">{t.role}</p>
                </div>
              </div>
              
              <div className="h-[1px] w-full bg-gray-100 mb-4" />
              
              <div className="flex gap-1 mb-3">
                 {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />)}
              </div>
              
              <p className="text-dark leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;