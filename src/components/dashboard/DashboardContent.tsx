import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart, ArrowUpRight, ArrowDownRight, Users, FileText, DollarSign, Activity } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tooltip } from '@/components/ui/tooltip';

const DashboardContent: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,548',
      change: '+16%',
      trend: 'up',
      icon: <Users className="h-5 w-5" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Active Files',
      value: '1,237',
      change: '+5.4%',
      trend: 'up',
      icon: <FileText className="h-5 w-5" />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Revenue',
      value: '$45,558',
      change: '-2.5%',
      trend: 'down',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Activity',
      value: '92.6%',
      change: '+10.6%',
      trend: 'up',
      icon: <Activity className="h-5 w-5" />,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-dashboard-500">{stat.title}</p>
                <p className="text-2xl font-bold text-dashboard-900 mt-2">{stat.value}</p>
              </div>
              <Tooltip content={stat.title}>
                <div
                  className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg text-white shadow-sm group-hover:scale-105 transition-transform`}
                >
                  {stat.icon}
                </div>
              </Tooltip>
            </div>
            <div className="mt-4 flex items-center">
              {stat.trend === 'up' ? (
                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stat.change} since last month
              </span>
            </div>
            <Progress value={Math.random() * 100} className="h-1.5 mt-4 bg-gray-100" />
          </Card>
        ))}
      </div>

      {/* Activity Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow duration-300 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-dashboard-900">Activity Overview</h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-80">
            {/* Replace with a chart component */}
            <BarChart className="h-full w-full text-dashboard-400" />
          </div>
        </Card>

        {/* Recent Activities */}
        <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-bold text-dashboard-900 mb-6">Recent Activities</h3>
          <div className="space-y-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-start pb-5 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Users className="h-4 w-4" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-dashboard-800">New user registered</p>
                  <p className="text-xs text-dashboard-500 mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
