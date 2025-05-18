import { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import mockData from '../data/mockData.json';

const disclaimerPoints = [
  "Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.",
  "Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.",
  "Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.",
  "Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.",
  "Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted."
];

const TaxHarvesting = () => {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  // Extract capital gains data from the imported JSON
  const { preHarvesting, afterHarvesting } = mockData.capitalGains;

  return (
    <div className="text-white">
      <div className="flex items-center mb-4">
        <h2 className=" text-2xl font-bold mr-2">Tax Harvesting</h2>
        <a href="#" className="text-[#0F94F2] text-sm hover:underline">How it works?</a>
      </div>
      




      <div className="mb-6">
        <div className="bg-[#121D3A] border border-[#4A78FF] rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-4 cursor-pointer select-none"
            onClick={() => setDisclaimerOpen(!disclaimerOpen)}
          >
            <div className="flex items-center">
              <Info size={18} className="text-[#4A78FF] mr-2" />
              <span className="text-base font-medium text-white">Important Notes & Disclaimers</span>
            </div>
            {disclaimerOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
          {disclaimerOpen && (
            <ul className="list-disc pl-8 pr-4 pb-4 text-base text-gray-200 space-y-1">
              {disclaimerPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <PreHarvesting data={preHarvesting} />
        <AfterHarvesting data={afterHarvesting} />
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
  // const valueClass = isNegative ? 'text-red-500' : 'text-gray-300';
  return (
    <div className="flex justify-between mb-3">
      <div className="w-40">{label}</div>
      {/* <div className="flex"> */}
        <div className={cn("w-40 text-right")}>{shortTerm}</div>
        <div className={cn("w-40 text-right " )}>{longTerm}</div>
      {/* </div> */}
    </div>
  );
};

const PreHarvesting = ({ data }: { data: any }) => {
  return (
    <div className="flex-1 bg-[#171A26] rounded-lg p-5 border border-[#1e293b]">
      <div className="text-lg font-medium mb-4 text-white font-weight-600">Pre Harvesting</div>
      <div className="mb-4 text-gray-300 font-medium ">
        <div className="flex justify-between mb-2">
          {/* rgba(209, 215, 237, 1) */}
          <div className='w-40'></div>
          <div className="w-40 text-right text-base text-gray-300">Short-term</div>
          <div className="w-40 text-right text-base text-gray-300">Long-term</div>
        </div>
        <DataRow label="Profits" shortTerm={`$ ${data.shortTerm.profits}`} longTerm={`$ ${data.longTerm.profits}`} />
        <DataRow label="Losses" shortTerm={`- $ ${data.shortTerm.losses}`} longTerm={`- $ ${data.longTerm.losses}`} isNegative />
        <DataRow label="Net Capital Gains" shortTerm={`$ ${data.shortTerm.netCapitalGains}`} longTerm={`$ ${data.longTerm.netCapitalGains}`} />
      </div>
      <div className=" flex items-center pt-4">
        <div className="text-xl font-semibold text-white">Realised Capital Gains:</div>
        <div className="text-3xl font-semibold text-white pl-8">${data.realisedCapitalGains}</div>
      </div>
    </div>
  );
};

const AfterHarvesting = ({ data }: { data: any }) => {
  return (
    <div className="flex-1 rounded-lg p-5 border border-[#1e293b] relative overflow-hidden" style={{background: 'linear-gradient(135deg, #3C9AFF 2.5%, #0066FE 100.05%)'}}>
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #3C9AFF 2.5%, #0066FE 100.05%)', opacity: 1}}></div>
      <div className="relative z-10">
        <div className="text-lg font-medium mb-4 text-white">After Harvesting</div>
        <div className="mb-4 text-white">
          <div className="flex justify-between mb-2">
            <div className='w-40'></div>
            <div className="w-40 text-right text-sm text-white">Short-term</div>
            <div className="w-40 text-right text-sm text-white">Long-term</div>
          </div >
          <DataRow label="Profits" shortTerm={`$ ${data.shortTerm.profits}`} longTerm={`$ ${data.longTerm.profits}`} />
          <DataRow label="Losses" shortTerm={`- $ ${data.shortTerm.losses}`} longTerm={`- $ ${data.longTerm.losses}`} isNegative />
          <DataRow
            label="Net Capital Gains"
            shortTerm={`${data.shortTerm.netCapitalGains < 0 ? '- $' : '$'} ${Math.abs(data.shortTerm.netCapitalGains)}`}
            longTerm={`${data.longTerm.netCapitalGains < 0 ? '- $' : '$'} ${Math.abs(data.longTerm.netCapitalGains)}`}
            isNegative={data.shortTerm.netCapitalGains < 0 || data.longTerm.netCapitalGains < 0}
          />
        </div>
        <div className="flex items-center pt-4 ">
          <div className="text-xl font-semibold text-white">Effective Capital Gains:</div>
          <div className="text-3xl font-semibold ">
            {data.effectiveCapitalGains < 0 ? `- $${Math.abs(data.effectiveCapitalGains)}` : `$${data.effectiveCapitalGains}`}
          </div>
        </div>
        {/* <div className="flex items-center mt-4 bg-[#493E05] p-2 rounded">
          <span className="text-[#FFBB38] text-sm">🎉 You are going to save upto $ {data.savings}</span> */}
            <div className="flex items-center mt-4  p-2 rounded">
          <span className="text-white text-base font-medium text">🎉 You are going to save upto $ {data.savings}</span>
        </div>
      </div>
    </div>
  );
};

export default TaxHarvesting;