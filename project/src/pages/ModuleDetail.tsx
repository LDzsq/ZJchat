import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { basicPath, intermediatePath, advancedPath } from '../data/learningPaths';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  
  const allModules = [
    ...basicPath.modules,
    ...intermediatePath.modules,
    ...advancedPath.modules,
  ];
  
  const module = allModules.find(m => m.id === moduleId);
  
  if (!module) {
    return <Navigate to="/learning" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4"
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{module.title}</h1>
        <p className="text-gray-600 mb-6">{module.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">Duration</div>
            <div className="text-lg font-medium">{module.duration}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">Skill Points</div>
            <div className="text-lg font-medium text-blue-600">{module.skillPoints} XP</div>
          </div>
        </div>

        {/* Module content will be added here */}
        <div className="text-center text-gray-500">
          Module content is under development
        </div>
      </div>
    </motion.div>
  );
};

export default ModuleDetail;