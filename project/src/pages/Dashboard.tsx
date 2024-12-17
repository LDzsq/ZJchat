import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('dashboard.welcome')}</h1>
          <p className="text-gray-600">{t('dashboard.subtitle')}</p>
        </motion.div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Learning Path Card */}
          <Link to="/learning">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative bg-white rounded-xl p-8 overflow-hidden group hover:shadow-lg transition-shadow h-full"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform" />
              
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('dashboard.learning.title')}</h2>
                  <p className="text-gray-600">{t('dashboard.learning.desc')}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{t('dashboard.learning.path')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{t('dashboard.learning.feedback')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{t('dashboard.learning.progress')}</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Community Card */}
          <Link to="/community">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-white rounded-xl p-8 overflow-hidden group hover:shadow-lg transition-shadow h-full"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform" />
              
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-purple-50 rounded-2xl">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('dashboard.community.title')}</h2>
                  <p className="text-gray-600">{t('dashboard.community.desc')}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">{t('dashboard.community.topics')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">{t('dashboard.community.expert')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">{t('dashboard.community.interact')}</span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-600 mb-1">24</div>
            <div className="text-sm text-gray-600">{t('dashboard.stats.minutes')}</div>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="text-2xl font-bold text-green-600 mb-1">3</div>
            <div className="text-sm text-gray-600">{t('dashboard.stats.courses')}</div>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
            <div className="text-sm text-gray-600">{t('dashboard.stats.discussions')}</div>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="text-2xl font-bold text-orange-600 mb-1">450</div>
            <div className="text-sm text-gray-600">{t('dashboard.stats.exp')}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;