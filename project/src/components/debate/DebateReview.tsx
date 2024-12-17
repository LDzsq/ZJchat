import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Download, MessageSquare, Award, ArrowRight, BookOpen, Brain, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { basicPath } from '../../data/learningPaths';

interface DebateReviewProps {
  topic: any;
  stance: string;
  performance: {
    logic: number;
    clarity: number;
    evidence: number;
    overall: number;
  };
  suggestions: string[];
}

const DebateReview: React.FC<DebateReviewProps> = ({
  topic,
  stance,
  performance,
  suggestions
}) => {
  // Find relevant training modules based on performance
  const recommendedModules = basicPath.modules.filter(module => {
    if (performance.logic < 80 && module.id === 'argument-building') return true;
    if (performance.evidence < 80 && module.id === 'evidence-evaluation') return true;
    if (performance.clarity < 80 && module.id === 'critical-reading') return true;
    return false;
  });

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">辩论复盘</h2>
          
          {/* Performance Overview */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">总体表现</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {performance.overall}%
                </div>
                <div className="text-sm text-gray-600">综合评分</div>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">A</div>
                <div className="text-sm text-gray-600">表现等级</div>
              </div>
            </div>
          </div>

          {/* Detailed Metrics */}
          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-900">逻辑性</span>
                <span className="text-primary-600">{performance.logic}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${performance.logic}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-900">清晰度</span>
                <span className="text-primary-600">{performance.clarity}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${performance.clarity}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-900">论据支持</span>
                <span className="text-primary-600">{performance.evidence}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${performance.evidence}%` }}
                />
              </div>
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">改进建议</h3>
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <ArrowRight className="w-5 h-5 text-primary-500 mt-0.5" />
                  <p className="text-gray-700">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Side Actions */}
      <div className="col-span-4 space-y-6">
        <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">快捷操作</h3>
          <div className="space-y-4">
            <button className="w-full py-3 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              分享结果
            </button>
            <button className="w-full py-3 px-4 bg-white text-primary-600 border-2 border-primary-500 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              下载报告
            </button>
            <Link
              to="/community"
              className="w-full py-3 px-4 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              在社区继续讨论
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">获得成就</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 text-center">
              <Award className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-sm text-gray-600">逻辑大师</div>
            </div>
            <div className="p-3 text-center">
              <MessageSquare className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-sm text-gray-600">辩论新星</div>
            </div>
            <div className="p-3 text-center">
              <Award className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-sm text-gray-600">思维精英</div>
            </div>
          </div>
        </div>

        {/* Training Recommendations */}
        {recommendedModules.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 border-2 border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">推荐训练课程</h3>
            <div className="space-y-4">
              {recommendedModules.map((module) => (
                <Link
                  key={module.id}
                  to={`/learning/${module.id}`}
                  className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                >
                  <div className="p-3 bg-white rounded-lg">
                    {module.icon === 'Brain' && <Brain className="w-6 h-6 text-primary-600" />}
                    {module.icon === 'Target' && <Target className="w-6 h-6 text-primary-600" />}
                    {module.icon === 'BookOpen' && <BookOpen className="w-6 h-6 text-primary-600" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{module.title}</h4>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-600 ml-auto" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DebateReview;