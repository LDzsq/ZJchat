import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, ArrowRight, Plus } from 'lucide-react';
import clsx from 'clsx';

interface StanceSelectionProps {
  topic: any;
  onSelectStance: (stance: string) => void;
}

const StanceSelection: React.FC<StanceSelectionProps> = ({ topic, onSelectStance }) => {
  const [customStance, setCustomStance] = useState('');
  const [showCustomForm, setShowCustomForm] = useState(false);

  const handleCustomStance = () => {
    if (!customStance.trim()) return;
    onSelectStance(customStance);
    setCustomStance('');
    setShowCustomForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{topic.title}</h2>
        <p className="text-gray-600 mb-6">{topic.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <button
            onClick={() => onSelectStance('正方')}
            className="p-6 rounded-xl border-2 border-primary-200 hover:border-primary-500 transition-colors group"
          >
            <ThumbsUp className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">支持方</h3>
            <ul className="text-left space-y-2">
              {topic.forPoints.map((point: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <ArrowRight className="w-4 h-4 text-primary-500" />
                  {point}
                </li>
              ))}
            </ul>
          </button>

          <button
            onClick={() => onSelectStance('反方')}
            className="p-6 rounded-xl border-2 border-primary-200 hover:border-primary-500 transition-colors group"
          >
            <ThumbsDown className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">反对方</h3>
            <ul className="text-left space-y-2">
              {topic.againstPoints.map((point: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <ArrowRight className="w-4 h-4 text-primary-500" />
                  {point}
                </li>
              ))}
            </ul>
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowCustomForm(!showCustomForm)}
            className="inline-flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700"
          >
            <Plus className="w-5 h-5" />
            提出其他立场
          </button>
        </div>

        {showCustomForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 border-2 border-primary-200 rounded-xl"
          >
            <div className="space-y-4">
              <input
                type="text"
                value={customStance}
                onChange={(e) => setCustomStance(e.target.value)}
                placeholder="描述你的立场..."
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-0"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowCustomForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  取消
                </button>
                <button
                  onClick={handleCustomStance}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  确认立场
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StanceSelection;