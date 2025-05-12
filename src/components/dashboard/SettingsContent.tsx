
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { User, Bell, Lock, Globe, Monitor, Moon, Sun, Check } from 'lucide-react';

const SettingsContent: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group p-0 overflow-hidden">
          <div className="p-5 border-l-4 border-blue-500 flex items-center">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-500">
              <User className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-dashboard-800 group-hover:text-blue-500 transition-colors">Profile Settings</h3>
              <p className="text-sm text-dashboard-500">Manage your account details</p>
            </div>
          </div>
        </Card>
        
        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group p-0 overflow-hidden">
          <div className="p-5 border-l-4 border-purple-500 flex items-center">
            <div className="p-3 rounded-lg bg-purple-100 text-purple-500">
              <Bell className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-dashboard-800 group-hover:text-purple-500 transition-colors">Notifications</h3>
              <p className="text-sm text-dashboard-500">Customize notification preferences</p>
            </div>
          </div>
        </Card>
        
        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group p-0 overflow-hidden">
          <div className="p-5 border-l-4 border-green-500 flex items-center">
            <div className="p-3 rounded-lg bg-green-100 text-green-500">
              <Lock className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-dashboard-800 group-hover:text-green-500 transition-colors">Security</h3>
              <p className="text-sm text-dashboard-500">Update your security settings</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 border-0 shadow-md">
        <h3 className="text-lg font-bold text-dashboard-900 mb-6">General Settings</h3>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4 border-b border-gray-100">
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-dashboard-500" />
              <div className="ml-4">
                <h4 className="text-dashboard-800 font-medium">Language</h4>
                <p className="text-sm text-dashboard-500">Set your preferred language</p>
              </div>
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-full md:w-auto">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4 border-b border-gray-100">
            <div className="flex items-center">
              <Monitor className="h-5 w-5 text-dashboard-500" />
              <div className="ml-4">
                <h4 className="text-dashboard-800 font-medium">Theme</h4>
                <p className="text-sm text-dashboard-500">Set your preferred theme</p>
              </div>
            </div>
            <div className="flex p-1 bg-gray-100 rounded-lg">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setTheme('light')}
                className={`flex items-center ${theme === 'light' ? 'bg-white shadow-sm' : ''} rounded-md px-3 py-1.5`}
              >
                <Sun className="h-4 w-4 mr-2" />
                Light
                {theme === 'light' && <Check className="h-3 w-3 ml-2" />}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setTheme('dark')}
                className={`flex items-center ${theme === 'dark' ? 'bg-white shadow-sm' : ''} rounded-md px-3 py-1.5`}
              >
                <Moon className="h-4 w-4 mr-2" />
                Dark
                {theme === 'dark' && <Check className="h-3 w-3 ml-2" />}
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4 border-b border-gray-100">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-dashboard-500" />
              <div className="ml-4">
                <h4 className="text-dashboard-800 font-medium">Email Notifications</h4>
                <p className="text-sm text-dashboard-500">Receive email about account activity</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </Card>
    </div>
  );
};

export default SettingsContent;
