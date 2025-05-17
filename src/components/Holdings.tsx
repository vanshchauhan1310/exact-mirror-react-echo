
import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bitcoin, Check, Wallet } from "lucide-react";

const Holdings = () => {
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  const toggleSelectAsset = (assetId: string) => {
    if (selectedAssets.includes(assetId)) {
      setSelectedAssets(selectedAssets.filter(id => id !== assetId));
    } else {
      setSelectedAssets([...selectedAssets, assetId]);
    }
  };

  // Mock data that matches the image exactly
  const holdingsData = [
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      icon: <Bitcoin className="text-[#F7931A]" size={20} />,
      amount: "0.93776 BTC",
      value: "$55,320.15",
      currentMarketRate: "$59,320.12/BTC",
      shortTerm: {
        value: "-$1,200",
        amount: "0.338 BTC",
        isNegative: true
      },
      longTerm: {
        value: "+$2,400",
        amount: "0.300 BTC",
        isPositive: true
      },
      amountToSell: "5.6736 ETH"
    },
    {
      id: "eth1",
      name: "Ethereum",
      symbol: "ETH",
      icon: <svg width="20" height="20" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="text-[#627EEA]">
        <path fill="#627EEA" d="M127.9611 0L125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32z" />
        <path fill="#627EEA" d="M127.962 0L0 212.32 127.962 287.959 127.962 154.158z" />
        <path fill="#627EEA" d="M127.9611 312.1866L126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866z" />
        <path fill="#627EEA" d="M127.962 416.9052L127.962 312.1852 0 236.5852z" />
        <path fill="#627EEA" d="M127.9611 287.9577L255.9211 212.3207 127.9611 154.1587z" />
        <path fill="#627EEA" d="M0.0009 212.3208L127.9609 287.9578 127.9609 154.1588z" />
      </svg>,
      amount: "5.6736 ETH",
      value: "$ 9,324.21",
      currentMarketRate: "$1,705/ETH",
      shortTerm: {
        value: "+$5,930.15",
        amount: "2.933 ETH",
        isPositive: true
      },
      longTerm: {
        value: "+$8,239.29",
        amount: "2.740 ETH",
        isPositive: true
      },
      amountToSell: "5.6736 ETH"
    },
    {
      id: "usdt1",
      name: "Tether",
      symbol: "USDT",
      icon: <Wallet className="text-[#26A17B]" size={20} />, // Changed from Tether to Wallet icon
      amount: "3096.54 USDT",
      value: "$ 3,142.21",
      currentMarketRate: "$1.015/USDT",
      shortTerm: {
        value: "-$1,200",
        amount: "2013.23 USDT",
        isNegative: true
      },
      longTerm: {
        value: "+$2,400",
        amount: "902.47 USDT",
        isPositive: true
      },
      amountToSell: "-"
    },
    {
      id: "matic",
      name: "Polygon",
      symbol: "MATIC",
      icon: <svg width="20" height="20" viewBox="0 0 38 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3 0.5L36.1 4.8C37.2 5.5 38 6.7 38 8.1V22.5C38 23.8 37.3 25.1 36.1 25.7L29.3 30C28.2 30.7 26.8 30.7 25.7 30L18.9 25.7L25.7 21.4L29.3 23.6V13.3C29.3 13.3 25.8 15.4 25.7 15.5C25.5 15.6 25.7 9.9 25.7 9.9L18.9 5.6L12.1 9.9V18.4L18.9 22.7L12.1 27C11 27.7 9.6 27.7 8.5 27L1.7 22.7C0.6 22 0 20.8 0 19.4V5C0 3.7 0.7 2.4 1.9 1.8L8.7 0.5C9.8 -0.2 11.2 -0.2 12.3 0.5L19.1 4.8L25.9 0.5C27 -0.2 28.4 -0.2 29.5 0.5H29.3Z" fill="#8247E5"/>
      </svg>,
      amount: "2210 MATIC",
      value: "$ 4,672.12",
      currentMarketRate: "$2.21/MATIC",
      shortTerm: {
        value: "-$1,200",
        amount: "686 MATIC",
        isNegative: true
      },
      longTerm: {
        value: "+$2,400",
        amount: "1420 MATIC",
        isPositive: true
      },
      amountToSell: "-"
    },
    {
      id: "eth2",
      name: "Ethereum",
      symbol: "ETH",
      icon: <svg width="20" height="20" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="text-[#627EEA]">
        <path fill="#627EEA" d="M127.9611 0L125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32z" />
        <path fill="#627EEA" d="M127.962 0L0 212.32 127.962 287.959 127.962 154.158z" />
        <path fill="#627EEA" d="M127.9611 312.1866L126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866z" />
        <path fill="#627EEA" d="M127.962 416.9052L127.962 312.1852 0 236.5852z" />
        <path fill="#627EEA" d="M127.9611 287.9577L255.9211 212.3207 127.9611 154.1587z" />
        <path fill="#627EEA" d="M0.0009 212.3208L127.9609 287.9578 127.9609 154.1588z" />
      </svg>,
      amount: "5.6736 ETH",
      value: "$ 9,324.21",
      currentMarketRate: "$1,705/ETH",
      shortTerm: {
        value: "+$5,930.15",
        amount: "2.933 ETH",
        isPositive: true
      },
      longTerm: {
        value: "+$8,239.29",
        amount: "2.740 ETH",
        isPositive: true
      },
      amountToSell: "-"
    },
    {
      id: "usdt2",
      name: "Tether",
      symbol: "USDT",
      icon: <Wallet className="text-[#26A17B]" size={20} />, // Changed from Tether to Wallet icon
      amount: "3096.54 USDT",
      value: "$ 3,142.21",
      currentMarketRate: "$1.015/USDT",
      shortTerm: {
        value: "-$1,200",
        amount: "2013.23 USDT",
        isNegative: true
      },
      longTerm: {
        value: "+$2,400",
        amount: "902.47 USDT",
        isPositive: true
      },
      amountToSell: "-"
    }
  ];

  return (
    <div className="w-full bg-[#0F1118] border border-[#1E2134] rounded-lg overflow-hidden">
      <div className="p-4 border-b border-[#1E2134]">
        <h3 className="text-white text-base font-medium">Holdings</h3>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader className="bg-[#141722]">
            <TableRow className="hover:bg-transparent border-b border-[#1E2134]">
              <TableHead className="text-xs text-gray-400 font-normal w-6">
                <Checkbox 
                  className="border-gray-500"
                  checked={selectedAssets.length === holdingsData.length} 
                  onCheckedChange={() => {
                    if (selectedAssets.length === holdingsData.length) {
                      setSelectedAssets([]);
                    } else {
                      setSelectedAssets(holdingsData.map(asset => asset.id));
                    }
                  }}
                />
              </TableHead>
              <TableHead className="text-xs text-gray-400 font-normal">Asset</TableHead>
              <TableHead className="text-xs text-gray-400 font-normal text-right">
                <div>Holdings</div>
                <div className="text-[10px]">Current Market Rate</div>
              </TableHead>
              <TableHead className="text-xs text-gray-400 font-normal text-right">Total Current Value</TableHead>
              <TableHead className="text-xs text-gray-400 font-normal text-right">Short-term</TableHead>
              <TableHead className="text-xs text-gray-400 font-normal text-right">Long-Term</TableHead>
              <TableHead className="text-xs text-gray-400 font-normal text-right">Amount to Sell</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdingsData.map((asset) => (
              <TableRow 
                key={asset.id}
                className={`hover:bg-[#141722] border-b border-[#1E2134] ${selectedAssets.includes(asset.id) ? 'bg-[#141722]' : ''}`}
              >
                <TableCell className="w-6">
                  <div className="flex items-center justify-center">
                    {asset.id === "eth1" ? (
                      <div className="h-4 w-4 rounded bg-[#6896F9] flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    ) : (
                      <Checkbox 
                        className="border-gray-500"
                        checked={selectedAssets.includes(asset.id)} 
                        onCheckedChange={() => toggleSelectAsset(asset.id)}
                      />
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {asset.icon}
                    <div>
                      <div className="text-white text-sm">{asset.name}</div>
                      <div className="text-gray-500 text-xs">{asset.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="text-white text-sm">{asset.amount}</div>
                  <div className="text-gray-500 text-xs">{asset.currentMarketRate}</div>
                </TableCell>
                <TableCell className="text-white text-sm text-right">
                  {asset.value}
                </TableCell>
                <TableCell className="text-right">
                  <div className={`text-sm ${asset.shortTerm.isNegative ? 'text-red-500' : 'text-green-500'}`}>
                    {asset.shortTerm.value}
                  </div>
                  <div className="text-gray-500 text-xs">{asset.shortTerm.amount}</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className={`text-sm ${asset.longTerm.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.longTerm.value}
                  </div>
                  <div className="text-gray-500 text-xs">{asset.longTerm.amount}</div>
                </TableCell>
                <TableCell className="text-white text-sm text-right">
                  {asset.amountToSell}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="p-4 flex justify-start">
        <a href="#" className="text-[#0F94F2] text-sm hover:underline">View all</a>
      </div>
    </div>
  );
};

export default Holdings;
