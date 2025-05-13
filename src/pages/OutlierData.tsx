import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OutlierData: React.FC = () => {
     const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string>('rowsAboveStandardDeviations');

  const handleApplyFilters = () => {
    console.log('Selected Filter:', selectedFilter);
  };

  return (
    <div className="bg-gray-50 flex justify-start p-4">
      <div className="max-w-4xl w-full bg-white p-6 border-0 shadow-lg rounded-xl">
      

        {/* Filter Results Card */}
        <div className="p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-md font-semibold text-gray-800 mb-3">Filter Results</h2>

          <div className="space-y-3">
            {[
              { id: 'rowsAboveStandardDeviations', label: 'Rows > Standard Deviations' },
              { id: 'removeSameTrendMonths', label: 'Remove same trend Months' },
              { id: 'removeSameTrendYearOnYear', label: 'Remove same trend year on year' },
            ].map((option) => (
              <div
                key={option.id}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
                  selectedFilter === option.id
                    ? 'bg-blue-50 border border-blue-500'
                    : 'bg-white border border-gray-300'
                }`}
                onClick={() => setSelectedFilter(option.id)}
              >
                <input
                  type="radio"
                  id={option.id}
                  name="filter"
                  value={option.id}
                  checked={selectedFilter === option.id}
                  onChange={() => setSelectedFilter(option.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor={option.id}
                  className="ml-3 text-sm font-medium text-gray-800"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          {/* Apply Button */}
          <div className="mt-4 flex justify-end">
            <button
               onClick={() =>
                navigate('/outliertable')
              }
              className="bg-blue-500 text-white px-5 py-1.5 rounded-lg shadow-sm hover:bg-blue-600 transition"

            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutlierData;
