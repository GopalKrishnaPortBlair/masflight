import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import DashboardContent from '@/components/dashboard/DashboardContent';
import FilesContent from '@/components/dashboard/FilesContent';
import ReportingContent from '@/components/dashboard/ReportingContent';
import SettingsContent from '@/components/dashboard/SettingsContent';
import FuelProfitabilityResults from './FuelProfitabilityResults';
import OutlierData from './OutlierData';
import OutlierTable from './OutlierTable';

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const location = useLocation();

  // Set active page based on URL path
  useEffect(() => {
    const path = location.pathname.split('/').pop() || 'dashboard';
    if (['dashboard', 'files', 'reporting', 'settings', 'fuel-profitability-results', 'outlierdata','outliertable'].includes(path)) {
      setActivePage(path);
    }
  }, [location]);

  const getPageTitle = () => {
    switch (activePage) {
      case 'dashboard':
        return 'Dashboard';
      case 'files':
        return 'Fuel Profitability Analysis';
      case 'fuel-profitability-results':
          return 'Fuel Profitability Analysis Results';
      case 'outlierdata':
            return 'Outlier Data';
      case 'reporting':
        return 'Reporting Tools';
      case 'settings':
        return 'Settings';
        case 'outliertable':
        return 'Outlier Table';
      default:
        return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardContent />;
      case 'files':
        return <FilesContent />;
        case 'fuel-profitability-results':
        return <FuelProfitabilityResults />;
        case 'outlierdata':
          return <OutlierData />;
          case 'outliertable':
            return <OutlierTable />;
      case 'reporting':
        return <ReportingContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={
            <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text animate-fade-in">
              {getPageTitle()}
            </h1>
          } 
        />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-0">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
