import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-center text-4xl md:text-5xl font-bold text-dark mb-16">
          Meet Our Expert Team
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4 bg-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-20"
                />
                <div className={`absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 ${member.color}`}>
                  <p className="text-center text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {member.description}
                  </p>
                </div>
              </div>
              <h6 className="text-xl font-bold text-center text-dark">{member.name}</h6>
              <p className="text-center text-graytext">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;