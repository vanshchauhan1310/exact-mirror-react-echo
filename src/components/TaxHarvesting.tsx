
import { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const TaxHarvesting = () => {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold mr-2">Tax Harvesting</h2>
        <a href="#" className="text-[#0F94F2] text-sm hover:underline">How it works?</a>
      </div>
      
      <div 
        className="flex items-center justify-between p-4 rounded mb-4 cursor-pointer bg-[#121826] border border-[#1e293b]"
        onClick={() => setDisclaimerOpen(!disclaimerOpen)}
      >
        <div className="flex items-center">
          <Info size={18} className="text-[#0F94F2] mr-2" />
          <span className="text-sm">Important Notes & Disclaimers</span>
        </div>
        {disclaimerOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      
      {disclaimerOpen && (
        <div className="bg-[#121826] border border-[#1e293b] p-4 rounded mb-4">
          <p className="text-sm text-gray-300">
            Tax harvesting involves selling assets at a loss to offset capital gains tax liability. This is for informational purposes only and does not constitute tax advice. Please consult with a tax professional before making any decisions.
          </p>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-4">
        <PreHarvesting />
        <AfterHarvesting />
      </div>
    </div>
  );
};

const DataRow = ({ label, shortTerm, longTerm, isNegative = false }: { 
  label: string; 
  shortTerm: string | number; 
  longTerm: string | number; 
  isNegative?: boolean;
}) => {
  const valueClass = isNegative ? 'text-red-500' : '';
  
  return (
    <div className="flex justify-between mb-3">
      <div>{label}</div>
      <div className="flex">
        <div className={cn("w-28 text-right", valueClass)}>{shortTerm}</div>
        <div className={cn("w-28 text-right", valueClass)}>{longTerm}</div>
      </div>
    </div>
  );
};

const PreHarvesting = () => {
  return (
    <div className="flex-1 bg-[#121826] rounded-lg p-5 border border-[#1e293b]">
      <div className="text-lg font-medium mb-4">Pre Harvesting</div>
      <div className="mb-4">
        <div className="flex justify-end mb-2">
          <div className="w-28 text-right text-sm text-gray-400">Short-term</div>
          <div className="w-28 text-right text-sm text-gray-400">Long-term</div>
        </div>
        <DataRow label="Profits" shortTerm="$ 1,540" longTerm="$ 1,200" />
        <DataRow label="Losses" shortTerm="- $ 743" longTerm="- $ 650" isNegative />
        <DataRow label="Net Capital Gains" shortTerm="$ 797" longTerm="$ 550" />
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-700">
        <div className="font-medium">Realised Capital Gains:</div>
        <div className="text-xl font-bold">$1,337</div>
      </div>
    </div>
  );
};

const AfterHarvesting = () => {
  return (
    <div className="flex-1 bg-[#121826] rounded-lg p-5 border border-[#1e293b] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F94F2] opacity-5"></div>
      <div className="relative z-10">
        <div className="text-lg font-medium mb-4">After Harvesting</div>
        <div className="mb-4">
          <div className="flex justify-end mb-2">
            <div className="w-28 text-right text-sm text-gray-400">Short-term</div>
            <div className="w-28 text-right text-sm text-gray-400">Long-term</div>
          </div>
          <DataRow label="Profits" shortTerm="$ 1,540" longTerm="$ 1,200" />
          <DataRow label="Losses" shortTerm="- $ 2,343" longTerm="- $ 3,650" isNegative />
          <DataRow label="Net Capital Gains" shortTerm="- $ 987" longTerm="- $ 2,450" isNegative />
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-700">
          <div className="font-medium">Effective Capital Gains:</div>
          <div className="text-xl font-bold text-red-500">- $2,353</div>
        </div>
        <div className="flex items-center mt-4 bg-[#493E05] p-2 rounded">
          <span className="text-[#FFBB38] text-sm">🔥 You are going to save upto $ 862</span>
        </div>
      </div>
    </div>
  );
};

export default TaxHarvesting;
