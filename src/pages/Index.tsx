
import { useState } from 'react';
import TaxHarvesting from '../components/TaxHarvesting';
import Holdings from '../components/Holdings';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 py-8 space-y-6">
        <TaxHarvesting />
        <Holdings />
      </div>
    </div>
  );
};

export default Index;
