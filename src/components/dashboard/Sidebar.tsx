import React from 'react';
import { Link } from 'react-router-dom';
import { Home, File, BarChart, Settings, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type MenuItem = {
  id: string;
  name: string;
  icon: React.ReactNode;
  path: string;
  gradientColors: string;
};

const menuItems: MenuItem[] = [
  { 
    id: 'dashboard', 
    name: 'Dashboard', 
    icon: <Home className="h-5 w-5" />,
    path: '/',
    gradientColors: 'from-blue-400 to-indigo-500'
  },
  { 
    id: 'files', 
    name: 'Files', 
    icon: <File className="h-5 w-5" />,
    path: '/files',
    gradientColors: 'from-emerald-400 to-teal-500'
  },
  { 
    id: 'reporting', 
    name: 'Reporting Tools', 
    icon: <BarChart className="h-5 w-5" />,
    path: '/reporting',
    gradientColors: 'from-amber-400 to-orange-500'
  },
  { 
    id: 'settings', 
    name: 'Settings', 
    icon: <Settings className="h-5 w-5" />,
    path: '/settings',
    gradientColors: 'from-purple-400 to-violet-500'
  }
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  activePage: string;
  setActivePage: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  collapsed, 
  setCollapsed, 
  activePage, 
  setActivePage 
}) => {
  return (
    <div 
      className={cn(
        "bg-sidebar h-screen transition-all duration-300 flex flex-col border-r border-sidebar-border shadow-sm",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="relative">
            <h2 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
              MAS FLIGHT 
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 rounded-lg blur-md"></div>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-2 rounded-lg bg-sidebar-accent hover:bg-sidebar-accent/80 text-sidebar-accent-foreground transition-colors",
            collapsed && "mx-auto"
          )}
        >
          <ArrowLeft className={cn(
            "h-5 w-5 transition-transform",
            collapsed && "rotate-180"
          )} />
        </button>
      </div>

      <nav className="flex-1 py-6">
        <ul className="space-y-3 px-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group",
                  activePage === item.id
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/30 hover:text-sidebar-accent-foreground"
                )}
                onClick={() => setActivePage(item.id)}
              >
                <span
                  className={cn(
                    "inline-flex items-center justify-center p-2 rounded-md transition-transform duration-200 group-hover:scale-110 group-hover:shadow-lg",
                    activePage === item.id
                      ? `bg-gradient-to-br ${item.gradientColors} text-white shadow-md scale-110`
                      : "text-gray-500 group-hover:text-sidebar-accent-foreground"
                  )}
                  style={{
                    boxShadow: activePage === item.id ? '0 4px 10px rgba(0, 0, 0, 0.2)' : undefined,
                  }}
                >
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className="ml-3 transition-all group-hover:font-semibold">
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Link
          to="/"
          className={cn(
            "flex items-center px-4 py-3 text-sm font-medium rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-all duration-200"
          )}
        >
          <span className="inline-flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-500 p-2 rounded-md text-white shadow-sm">
            <ArrowLeft className="h-5 w-5" />
          </span>
          {!collapsed && <span className="ml-3">Back</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
