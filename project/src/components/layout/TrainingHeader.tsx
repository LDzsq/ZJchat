import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, MessageSquare, BookOpen, Bell, User, Crown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import clsx from 'clsx';

const TrainingHeader = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navigationItems = [
    {
      path: '/learning',
      icon: Brain,
      label: t('training.nav.foundation'),
    },
    {
      path: '/debate-practice',
      icon: MessageSquare,
      label: t('training.nav.debate'),
    },
    {
      path: '/knowledge',
      icon: BookOpen,
      label: t('training.nav.knowledge'),
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm border-b-2 border-secondary-200 z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            真知AI辩论
          </Link>
          <div className="h-6 w-px bg-secondary-200 mx-4" />
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={clsx(
                  'nav-link flex items-center gap-2',
                  location.pathname === path && 'active'
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/pricing"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-colors"
          >
            <Crown className="w-5 h-5" />
            <span>升级VIP</span>
          </Link>
          <div className="hidden md:flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">等级:</span>
            <span className="font-semibold text-primary-600">12</span>
          </div>
          <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full" />
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden md:block">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">1,250 XP</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TrainingHeader;