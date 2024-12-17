import React from 'react';
import { User, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-bold text-blue-600">
            CriticalAI
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <div className="text-sm text-gray-600">Overall Progress:</div>
              <div className="font-semibold text-blue-600">23%</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={20} className="text-gray-600" />
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-gray-500">Level 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;