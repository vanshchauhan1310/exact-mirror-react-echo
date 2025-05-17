
import { useState } from 'react';
import TaxHarvesting from '../components/TaxHarvesting';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 py-8">
        <TaxHarvesting />
      </div>
    </div>
  );
};

export default Index;
