import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const WhyUs: React.FC = () => {
  const benefits = [
    { text: "Designed by educators with child-centered pedagogy.", highlight: "child-centered pedagogy" },
    { text: "Backed by global research and frameworks.", highlight: "global research" },
    { text: "Focused on mindset and values, not just tech.", highlight: "mindset and values" },
    { text: "Prepare the next generation to lead with AI, but remain human.", highlight: "lead with AI" }
  ];

  return (
    <section id="discover" className="py-20 bg-gradient-to-b from-secondary/10 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
           <h3 className="text-4xl md:text-5xl font-bold text-dark">Why HumainAI.sg?</h3>
           <button className="flex items-center gap-2 bg-secondary text-white px-6 py-2 rounded-full hover:bg-dark transition-colors group">
             <span>All Products</span>
             <div className="bg-white rounded-full p-1 text-secondary group-hover:text-dark">
               <ArrowUpRight className="w-4 h-4" />
             </div>
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-lg text-dark pt-2">
                 {benefit.text.split(benefit.highlight).map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="font-bold">{benefit.highlight}</span>}
                    </React.Fragment>
                 ))}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-inner border border-gray-100">
           <h4 className="text-center text-3xl font-medium mb-10">
             Unique value of <span className="text-primary font-bold">Humain</span> <span className="text-secondary font-bold">Learning</span>
           </h4>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary h-32 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <p className="text-white text-xl font-medium">Pedagogy-first</p>
              </div>
              <div className="bg-secondary h-32 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <p className="text-white text-xl font-medium">Humanity-first</p>
              </div>
              <div className="bg-primary h-32 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <p className="text-white text-xl font-medium">Reflection-first</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;