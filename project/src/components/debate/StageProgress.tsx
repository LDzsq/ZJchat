import React from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

interface StageProgressProps {
  currentStage: string;
  stages: string[];
}

const StageProgress: React.FC<StageProgressProps> = ({ currentStage, stages }) => {
  const currentIndex = stages.indexOf(currentStage);

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-3 mb-6">
      <h2 className="text-2xl font-bold text-gray-900">{currentStage}</h2>
      <div className="flex items-center gap-2">
        {stages.map((stage, index) => (
          <React.Fragment key={stage}>
            <div
              className={clsx(
                'w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors',
                index < currentIndex
                  ? 'bg-primary-500 border-primary-500 text-white'
                  : index === currentIndex
                  ? 'border-primary-500 text-primary-500'
                  : 'border-gray-200 text-gray-400'
              )}
            >
              {index < currentIndex ? (
                <Check className="w-4 h-4" />
              ) : (
                <span className="text-sm">{index + 1}</span>
              )}
            </div>
            {index < stages.length - 1 && (
              <div
                className={clsx(
                  'w-4 h-0.5',
                  index < currentIndex
                    ? 'bg-primary-500'
                    : 'bg-gray-200'
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StageProgress;