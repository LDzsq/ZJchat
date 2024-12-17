import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, TrendingUp, Clock, Filter, Swords } from 'lucide-react';
import CreateDebateModal from '../components/community/CreateDebateModal';
import DebateCard from '../components/community/DebateCard';
import { debates } from '../data/debates';
import { Link } from 'react-router-dom';

const Community = () => {
  const [activeTab, setActiveTab] = useState<'hot' | 'latest'>('hot');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDebates = debates.filter(debate => {
    const searchLower = searchQuery.toLowerCase();
    return (
      debate.title.toLowerCase().includes(searchLower) ||
      debate.summary.toLowerCase().includes(searchLower) ||
      debate.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  const sortedDebates = [...filteredDebates].sort((a, b) => {
    if (activeTab === 'hot') {
      if (a.isHot && !b.isHot) return -1;
      if (!a.isHot && b.isHot) return 1;
      return b.commentsCount - a.commentsCount;
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            在这里展开思维交锋
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            你的思考，是世界的财富
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              发起新话题
            </button>
            <Link
              to="/debate-practice"
              className="bg-primary-50 text-primary-600 px-8 py-4 rounded-xl text-lg font-medium hover:bg-primary-100 transition-colors inline-flex items-center gap-2"
            >
              <Swords className="w-5 h-5" />
              AI对战匹配
            </Link>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索话题..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:ring-0 transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('hot')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'hot'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              热门
            </button>
            <button
              onClick={() => setActiveTab('latest')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'latest'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Clock className="w-5 h-5" />
              最新
            </button>
            <button className="p-3 rounded-xl bg-white text-gray-700 hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Debate List */}
        <div className="space-y-4 pb-8">
          {sortedDebates.map((debate) => (
            <motion.div
              key={debate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <DebateCard debate={debate} />
            </motion.div>
          ))}
        </div>

        {/* Create Debate Modal */}
        <CreateDebateModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Community;