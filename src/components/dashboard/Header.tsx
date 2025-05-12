
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-dashboard-800 to-dashboard-600 bg-clip-text text-transparent">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="search" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-64 bg-gray-50 transition-all duration-200"
          />
        </div>
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-dashboard-600" />
          <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>
        
        <div className="flex items-center space-x-3 ml-2 border-l pl-4 border-gray-100">
          <div className="bg-gradient-to-tr from-primary/80 to-primary text-white rounded-full p-1.5 shadow-sm">
            <User className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-dashboard-700">John Doe</p>
            <p className="text-xs text-dashboard-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
