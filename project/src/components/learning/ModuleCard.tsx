import React from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Clock, Award } from 'lucide-react';
import clsx from 'clsx';

interface ModuleCardProps {
  title: string;
  description: string;
  difficulty: 1 | 2 | 3;
  duration: string;
  skillPoints: number;
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  progress: number;
  onClick: () => void;
}

const difficultyConfig = {
  1: { label: '基础', color: 'text-green-600', bg: 'bg-green-50' },
  2: { label: '进阶', color: 'text-blue-600', bg: 'bg-blue-50' },
  3: { label: '高级', color: 'text-purple-600', bg: 'bg-purple-50' }
};

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  difficulty,
  duration,
  skillPoints,
  status,
  progress,
  onClick
}) => {
  const config = difficultyConfig[difficulty];

  return (
    <div
      onClick={status !== 'locked' ? onClick : undefined}
      className={clsx(
        'relative bg-white rounded-lg p-6 transition-all cursor-pointer',
        status === 'locked' ? 'opacity-60' : 'hover:shadow-lg',
        'border-2',
        status === 'completed' ? 'border-green-200' : 'border-gray-100'
      )}
      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
    >
      {/* Status Indicator */}
      <div className="absolute top-4 right-4">
        {status === 'locked' && <Lock className="w-5 h-5 text-gray-400" />}
        {status === 'completed' && <CheckCircle className="w-5 h-5 text-green-500" />}
      </div>

      {/* Difficulty Badge */}
      <span className={clsx(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4',
        config.color,
        config.bg
      )}>
        {config.label}
      </span>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4" />
          <span>{skillPoints} XP</span>
        </div>
      </div>

      {(status === 'in-progress' || status === 'completed') && (
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">进度</span>
            <span className="font-medium text-blue-600">{progress}%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-blue-600 rounded-full"
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;