
import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart as BarChartIcon, PieChart, LineChart, Calendar, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReportingContent: React.FC = () => {
  const reports = [
    { 
      title: 'Sales Report', 
      type: 'Bar Chart', 
      icon: <BarChartIcon className="h-6 w-6 text-white" />,
      bgColor: 'from-blue-500 to-blue-600',
      description: 'Monthly sales performance'
    },
    { 
      title: 'Customer Segments', 
      type: 'Pie Chart', 
      icon: <PieChart className="h-6 w-6 text-white" />,
      bgColor: 'from-purple-500 to-purple-600',
      description: 'Customer demographic data'
    },
    { 
      title: 'Revenue Trends', 
      type: 'Line Chart', 
      icon: <LineChart className="h-6 w-6 text-white" />,
      bgColor: 'from-green-500 to-green-600',
      description: 'Annual revenue analysis'
    },
    { 
      title: 'Monthly Overview', 
      type: 'Calendar', 
      icon: <Calendar className="h-6 w-6 text-white" />,
      bgColor: 'from-orange-500 to-orange-600',
      description: 'Monthly activity dashboard'
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
            <div className={`p-6 bg-gradient-to-r ${report.bgColor}`}>
              <div className="p-3 bg-white/20 rounded-lg w-fit">
                {report.icon}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-dashboard-800 group-hover:text-primary transition-colors">{report.title}</h3>
              <p className="text-sm text-dashboard-500 mt-1">{report.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Report</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-dashboard-900">Monthly Revenue</h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-64 p-4 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <LineChart className="h-12 w-12 text-blue-400" />
            <p className="ml-4 text-dashboard-500">Revenue trend visualization</p>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outline" size="sm" className="text-sm">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </Card>
        
        <Card className="p-6 border-0 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-dashboard-900">Customer Segments</h3>
            <Button variant="link" size="sm" className="text-primary">View Details</Button>
          </div>
          <div className="h-64 p-4 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <PieChart className="h-12 w-12 text-purple-400" />
            <p className="ml-4 text-dashboard-500">Customer segments visualization</p>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outline" size="sm" className="text-sm">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </Card>
      </div>

      <Card className="p-6 border-0 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-dashboard-900">Sales Performance</h3>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">Export</Button>
            <Button size="sm">Generate Report</Button>
          </div>
        </div>
        <div className="h-80 p-4 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <BarChartIcon className="h-12 w-12 text-green-400" />
          <p className="ml-4 text-dashboard-500">Sales performance visualization</p>
        </div>
      </Card>
    </div>
  );
};

export default ReportingContent;
