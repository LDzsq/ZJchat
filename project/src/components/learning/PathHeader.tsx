import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PathHeaderProps {
  totalModules: number;
  completedModules: number;
  totalXP: number;
}

const PathHeader: React.FC<PathHeaderProps> = ({ totalModules, completedModules, totalXP }) => {
  const progress = (completedModules / totalModules) * 100;
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-white rounded-lg p-8 mb-8"
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-tr-[80px] -z-10" />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg transform rotate-6">
            <div className="transform -rotate-6">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-600 mb-1">{t('learning.progress')}</h3>
            <p className="text-2xl font-bold text-gray-900">
              {completedModules}/{totalModules}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg transform -rotate-6">
            <div className="transform rotate-6">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-600 mb-1">{t('learning.exp')}</h3>
            <p className="text-2xl font-bold text-gray-900">{totalXP}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg transform rotate-6">
            <div className="transform -rotate-6">
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-600 mb-1">{t('learning.next')}</h3>
            <p className="text-sm text-gray-900">{t('learning.complete')}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between text-sm mb-3">
          <span className="font-medium text-gray-600">{t('learning.overall')}</span>
          <span className="font-bold text-blue-600">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-blue-600 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PathHeader;