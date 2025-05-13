import React from 'react';

const OutlierTable: React.FC = () => {
  const outlierData = [
    { id: 1, name: 'Flight A', deviation: '3.5', trend: 'High' },
    { id: 2, name: 'Flight B', deviation: '2.8', trend: 'Moderate' },
    { id: 3, name: 'Flight C', deviation: '4.1', trend: 'High' },
    { id: 4, name: 'Flight D', deviation: '1.9', trend: 'Low' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-start p-6">
      <div className="max-w-6xl w-full">
        {/* Card */}
        <div className="bg-white p-8 border-0 shadow-lg rounded-xl">
        
          <p className="text-sm text-gray-600 mb-6">
            Below is the tabular representation of the outlier data based on the applied filter.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">
                    ID
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">
                    Name
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">
                    Deviation
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-800">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody>
                {outlierData.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">
                      {row.id}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">
                      {row.name}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">
                      {row.deviation}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700">
                      {row.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutlierTable;