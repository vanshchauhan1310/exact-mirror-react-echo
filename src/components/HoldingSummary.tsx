
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HoldingSummary = () => {
  // Sample data for the chart
  const chartData = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 14000 },
    { name: 'Mar', value: 10000 },
    { name: 'Apr', value: 15000 },
    { name: 'May', value: 18000 },
    { name: 'Jun', value: 20000 },
    { name: 'Jul', value: 22000 }
  ];

  // Holdings summary data
  const holdingsTotal = {
    totalValue: "$81,782.90",
    netGain: "+$14,569.44",
    percentGain: "+21.7%"
  };

  return (
    <div className="mt-6">
      <Card className="bg-[#0F1118] border border-[#1E2134] text-white overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:w-1/3 border-b md:border-b-0 md:border-r border-[#1E2134]">
              <h3 className="text-base font-medium mb-4">Holdings Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Total Value</div>
                  <div className="text-2xl font-semibold">{holdingsTotal.totalValue}</div>
                </div>
                
                <div className="flex space-x-8">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Net Gain</div>
                    <div className="text-xl text-green-500 font-medium">{holdingsTotal.netGain}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">%</div>
                    <div className="text-xl text-green-500 font-medium">{holdingsTotal.percentGain}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 20,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E2134" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#666' }}
                  />
                  <YAxis 
                    hide={true}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#141722',
                      borderColor: '#1E2134',
                      color: 'white'
                    }}
                    labelStyle={{ color: 'white' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0F94F2" 
                    fill="url(#colorValue)" 
                    strokeWidth={2} 
                  />
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0F94F2" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0F94F2" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HoldingSummary;
