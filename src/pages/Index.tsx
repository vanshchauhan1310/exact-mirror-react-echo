
import { useState } from 'react';
import TaxHarvesting from '../components/TaxHarvesting';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0f] flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 py-8">
        <TaxHarvesting />
      </div>
    </div>
  );
};

export default Index;
