
import React from 'react';
import { Card } from '@/components/ui/card';
import { File as FileIcon, Folder, Download, MoreHorizontal, Search, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FilesContent: React.FC = () => {
  const folders = [
    { name: 'Documents', count: 145, icon: <Folder className="h-10 w-10 text-blue-500" />, color: 'bg-blue-100' },
    { name: 'Images', count: 342, icon: <Folder className="h-10 w-10 text-purple-500" />, color: 'bg-purple-100' },
    { name: 'Videos', count: 65, icon: <Folder className="h-10 w-10 text-orange-500" />, color: 'bg-orange-100' },
    { name: 'Downloads', count: 89, icon: <Folder className="h-10 w-10 text-green-500" />, color: 'bg-green-100' },
  ];

  const recentFiles = [
    { name: 'Annual Report 2023.pdf', size: '4.5 MB', updatedAt: 'Today', type: 'PDF' },
    { name: 'Project Presentation.pptx', size: '2.3 MB', updatedAt: 'Yesterday', type: 'PPTX' },
    { name: 'Budget Overview.xlsx', size: '1.8 MB', updatedAt: 'May 10, 2023', type: 'XLSX' },
    { name: 'Client Meeting Notes.docx', size: '567 KB', updatedAt: 'May 5, 2023', type: 'DOCX' },
    { name: 'Project Requirements.pdf', size: '2.1 MB', updatedAt: 'Apr 28, 2023', type: 'PDF' },
  ];

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'PDF':
        return <FileIcon className="h-6 w-6 text-red-500" />;
      case 'DOCX':
        return <FileIcon className="h-6 w-6 text-blue-500" />;
      case 'XLSX':
        return <FileIcon className="h-6 w-6 text-green-500" />;
      case 'PPTX':
        return <FileIcon className="h-6 w-6 text-orange-500" />;
      default:
        return <FileIcon className="h-6 w-6 text-dashboard-400" />;
    }
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="search" 
            placeholder="Search files..." 
            className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-64 bg-gray-50"
          />
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Upload className="h-4 w-4 mr-2" /> Upload File
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {folders.map((folder, index) => (
          <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="flex flex-col items-center text-center">
              <div className={`p-6 rounded-xl ${folder.color} mb-4 group-hover:scale-110 transition-all duration-300`}>
                {folder.icon}
              </div>
              <h3 className="text-lg font-bold text-dashboard-800">{folder.name}</h3>
              <p className="text-sm text-dashboard-500 mt-1">{folder.count} files</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-0 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-dashboard-900">Recent Files</h3>
          <Button variant="outline" size="sm" className="text-dashboard-600">
            View All
          </Button>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-100">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 font-medium text-dashboard-500 text-sm">Name</th>
                <th className="px-6 py-3 font-medium text-dashboard-500 text-sm">Size</th>
                <th className="px-6 py-3 font-medium text-dashboard-500 text-sm">Last Modified</th>
                <th className="px-6 py-3 font-medium text-dashboard-500 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentFiles.map((file, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-gray-100 mr-3">
                        {getFileIcon(file.type)}
                      </div>
                      <span className="font-medium text-dashboard-800">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-dashboard-500">{file.size}</td>
                  <td className="px-6 py-4 text-dashboard-500">{file.updatedAt}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-dashboard-500 hover:text-dashboard-700">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-dashboard-500 hover:text-dashboard-700">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default FilesContent;
