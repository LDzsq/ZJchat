import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ModuleScroll from '../components/learning/ModuleScroll';
import PathHeader from '../components/learning/PathHeader';
import { basicPath, intermediatePath, advancedPath } from '../data/learningPaths';

const LearningPath = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const allModules = [...basicPath.modules, ...intermediatePath.modules, ...advancedPath.modules];
  const totalModules = allModules.length;
  const completedModules = allModules.filter(m => m.status === 'completed').length;
  const totalXP = allModules.reduce((sum, module) => sum + module.skillPoints, 0);

  const handleModuleClick = (moduleId: string) => {
    navigate(`/learning/${moduleId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('learning.title')}</h1>
          <p className="text-gray-600">{t('learning.subtitle')}</p>
        </div>

        <PathHeader
          totalModules={totalModules}
          completedModules={completedModules}
          totalXP={totalXP}
        />

        <div className="space-y-6">
          <ModuleScroll
            title={t('learning.basic')}
            modules={basicPath.modules}
            onModuleClick={handleModuleClick}
          />

          <ModuleScroll
            title={t('learning.intermediate')}
            modules={intermediatePath.modules}
            onModuleClick={handleModuleClick}
          />

          <ModuleScroll
            title={t('learning.advanced')}
            modules={advancedPath.modules}
            onModuleClick={handleModuleClick}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LearningPath;