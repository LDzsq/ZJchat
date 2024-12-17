import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrainingMenu, setShowTrainingMenu] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const trainingLinks = [
    { path: '/learning', label: '基础思辨能力' },
    { path: '/debate-practice', label: 'AI辩论练习' },
    { path: '/knowledge', label: '知识库' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b-2 border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">真知AI辩论</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                onMouseEnter={() => setShowTrainingMenu(true)}
                onMouseLeave={() => setShowTrainingMenu(false)}
                className={clsx(
                  'nav-link flex items-center gap-1',
                  location.pathname.startsWith('/learning') || 
                  location.pathname.startsWith('/debate-practice') || 
                  location.pathname.startsWith('/knowledge') 
                    ? 'active' 
                    : ''
                )}
              >
                {t('nav.features')}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showTrainingMenu && (
                <div 
                  className="absolute top-full left-0 w-48 py-2 bg-white rounded-lg shadow-lg border border-gray-100"
                  onMouseEnter={() => setShowTrainingMenu(true)}
                  onMouseLeave={() => setShowTrainingMenu(false)}
                >
                  {trainingLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/community" 
              className={`nav-link ${
                location.pathname.startsWith('/community') ? 'active' : ''
              }`}
            >
              {t('nav.community')}
            </Link>
            <Link 
              to="/pricing" 
              className="nav-link"
            >
              {t('nav.pricing')}
            </Link>
            <LanguageSwitcher />
            <Link 
              to="/dashboard" 
              className="btn btn-primary"
            >
              {t('nav.trial')}
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-secondary-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {trainingLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link block"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/community"
                className={`nav-link block ${
                  location.pathname.startsWith('/community') ? 'active' : ''
                }`}
              >
                {t('nav.community')}
              </Link>
              <Link 
                to="/pricing"
                className="nav-link block"
              >
                {t('nav.pricing')}
              </Link>
              <LanguageSwitcher />
              <Link 
                to="/dashboard" 
                className="btn btn-primary w-full"
              >
                {t('nav.trial')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;