import React from 'react';
import { MISSION_TEXT } from '../constants';

const Purpose: React.FC = () => {
  return (
    <div className="bg-[#aac291]/50 py-16">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-0 text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark">Our Purpose</h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-dark">
          {MISSION_TEXT}
        </p>
      </div>
    </div>
  );
};

export default Purpose;