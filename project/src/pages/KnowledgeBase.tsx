import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, History, Clock, Bookmark, Share2, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import clsx from 'clsx';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video' | 'course';
  source: string;
  rating: number;
  saved: boolean;
}

interface SearchHistory {
  id: string;
  query: string;
  timestamp: string;
}

interface DebateHistory {
  id: string;
  title: string;
  timestamp: string;
  stance: string;
}

const KnowledgeBase = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState<'simple' | 'deep'>('simple');

  // Mock data
  const searchHistory: SearchHistory[] = [
    {
      id: '1',
      query: '逻辑谬误',
      timestamp: '2024-03-10 14:30',
    },
    {
      id: '2',
      query: '论证方法',
      timestamp: '2024-03-09 16:45',
    },
  ];

  const debateHistory: DebateHistory[] = [
    {
      id: '1',
      title: '在没有充分证据的情况下，对他人进行涉及社会道德底线的身份指控或公开怀疑，是否应该被允许？',
      timestamp: '2024-03-10',
      stance: '反方',
    },
    {
      id: '2',
      title: '人工智能是否应该被赋予法律人格？',
      timestamp: '2024-03-09',
      stance: '正方',
    },
  ];

  const resources: Resource[] = [
    {
      id: '1',
      title: '批判性思维的基本原则',
      description: '探索批判性思维的核心概念和应用方法',
      category: '基础理论',
      type: 'article',
      source: '哈佛大学',
      rating: 4.8,
      saved: false,
    },
    {
      id: '2',
      title: '逻辑谬误分析方法',
      description: '学习识别和避免常见的逻辑谬误',
      category: '逻辑推理',
      type: 'video',
      source: '斯坦福大学',
      rating: 4.9,
      saved: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('knowledge.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0"
              />
            </div>
            <button className="px-6 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors">
              搜索
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setSearchMode('simple')}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                searchMode === 'simple'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              简洁搜索
            </button>
            <button
              onClick={() => setSearchMode('deep')}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                searchMode === 'deep'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              深度搜索
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-8">
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">搜索结果</h2>
              <div className="space-y-6">
                {resources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-6 p-4 rounded-xl border-2 border-gray-100 hover:border-primary-200 transition-colors"
                  >
                    <div className="p-4 bg-primary-50 rounded-lg">
                      <BookOpen className="w-8 h-8 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
                          <p className="text-sm text-gray-500">{resource.source}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors">
                            <Bookmark className="w-5 h-5" fill={resource.saved ? 'currentColor' : 'none'} />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <button className="text-primary-500 hover:text-primary-600 flex items-center gap-1">
                        查看详情
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Search History */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">搜索历史</h3>
                <History className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {searchHistory.map((item) => (
                  <button
                    key={item.id}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <Clock className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">{item.query}</div>
                      <div className="text-sm text-gray-500">{item.timestamp}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Debate History */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">辩论历史</h3>
                <History className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {debateHistory.map((debate) => (
                  <div
                    key={debate.id}
                    className="p-4 rounded-lg border-2 border-gray-100 hover:border-primary-200 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={clsx(
                        'px-2 py-1 rounded-full text-sm font-medium',
                        debate.stance === '正方' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      )}>
                        {debate.stance}
                      </span>
                      <span className="text-sm text-gray-500">{debate.timestamp}</span>
                    </div>
                    <p className="text-gray-900 font-medium line-clamp-2">{debate.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;