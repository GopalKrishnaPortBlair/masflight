import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FuelProfitabilityResults: React.FC = () => {
     const navigate = useNavigate();
  const location = useLocation();
  const { fuelStandardDeviation, fuelPriceVariance } = location.state || {
    fuelStandardDeviation: 'N/A',
    fuelPriceVariance: 'N/A',
  };

  return (
    <div className="bg-gray-50 flex justify-center p-6">
      {/* Flex container for both cards */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl">
        
        {/* Left Card */}
        <Card className="p-8 border-0 shadow-lg rounded-xl bg-white w-full">
          <div className="mb-8">
            <div className="flex justify-between items-center p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
              <p className="text-lg font-bold text-blue-700">Current Processing Parameters</p>
              <p className="text-lg font-bold text-blue-900">
                {fuelStandardDeviation} Allowable Fuel Standard Deviations
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <span className="text-sm font-medium text-gray-800">25M Rows Uploaded</span>
              <Button className="text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                View
              </Button>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <span className="text-sm font-medium text-gray-800">10K Rows Not Uploaded</span>
              <Button className="text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                View
              </Button>
            </div>
          </div>
        </Card>

        {/* Right Card */}
        <Card className="p-8 border-0 shadow-lg rounded-xl bg-white w-full">
          <div className="mb-8">
            <div className="flex justify-between items-center p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm">
              <p className="text-lg font-bold text-green-700">Outliers</p>
              
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <span className="text-sm font-medium text-gray-800">123,100 Rows Flagged as Exceptions</span>
              <Button className="text-sm bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" 
                onClick={() =>
                    navigate('/outlierdata')
                  }
              >
                View
              </Button>
            </div>
           
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FuelProfitabilityResults;
