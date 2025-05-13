import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const FilesContent: React.FC = () => {
  const navigate = useNavigate();
  const [fuelStandardDeviation, setFuelStandardDeviation] = useState('');
  const [fuelPriceVariance, setFuelPriceVariance] = useState('');

  return (
    <div className="p-6 space-y-8">
      <Card className="p-6 border-0 shadow-md rounded-lg bg-white max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-dashboard-900">Set Rules</h3>
        </div>
        <div className="space-y-6">
          {/* Allowable Fuel Standard Deviation */}
          <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="relative">
              <input
                type="radio"
                id="fuel-standard-deviation"
                name="fuel-rule"
                className="peer hidden"
              />
              <label
                htmlFor="fuel-standard-deviation"
                className="flex items-center justify-center w-6 h-6 border-2 border-blue-500 rounded-full peer-checked:bg-blue-500 peer-checked:border-blue-500 transition"
              >
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </label>
            </div>
            <label
              htmlFor="fuel-standard-deviation"
              className="text-sm font-medium text-dashboard-800 ml-4 flex-1"
            >
              Allowable Fuel Standard Deviation
            </label>
            <input
              type="text"
              placeholder="Enter value"
              value={fuelStandardDeviation}
              onChange={(e) => setFuelStandardDeviation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-40"
            />
          </div>

          {/* Allowable Fuel Price Variance */}
          <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="relative">
              <input
                type="radio"
                id="fuel-price-variance"
                name="fuel-rule"
                className="peer hidden"
              />
              <label
                htmlFor="fuel-price-variance"
                className="flex items-center justify-center w-6 h-6 border-2 border-blue-500 rounded-full peer-checked:bg-blue-500 peer-checked:border-blue-500 transition"
              >
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </label>
            </div>
            <label
              htmlFor="fuel-price-variance"
              className="text-sm font-medium text-dashboard-800 ml-4 flex-1"
            >
              Allowable Fuel Price Variance
            </label>
            <input
              type="text"
              placeholder="Enter value"
              value={fuelPriceVariance}
              onChange={(e) => setFuelPriceVariance(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-40"
            />
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-6 border-t border-gray-200 pt-4 text-right">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={() =>
              navigate('/fuel-profitability-results', {
                state: { fuelStandardDeviation, fuelPriceVariance },
              })
            }
          >
            Upload File
          </button>
        </div>
      </Card>
    </div>
  );
};

export default FilesContent;
