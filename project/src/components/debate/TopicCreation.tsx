import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface TopicCreationProps {
  onSelectTopic: (topic: any) => void;
  onCreateTopic: (topic: any) => void;
  existingTopics: any[];
}

const TopicCreation: React.FC<TopicCreationProps> = ({
  onSelectTopic,
  onCreateTopic,
  existingTopics
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreateTopic = () => {
    if (!searchQuery.trim()) return;
    
    const newTopic = {
      id: Date.now().toString(),
      title: searchQuery,
      description: '',
      category: '自定义',
      participants: 0,
      forPoints: ['支持观点1', '支持观点2', '支持观点3'],
      againstPoints: ['反对观点1', '反对观点2', '反对观点3']
    };
    
    onCreateTopic(newTopic);
    setSearchQuery('');
  };

  const handleSelectTopic = (topic: any) => {
    onSelectTopic(topic);
  };

  const filteredTopics = existingTopics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索或输入新辩题..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0"
            />
          </div>
          <button
            onClick={handleCreateTopic}
            className="px-6 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            创建辩题
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">热门辩题</h3>
      <div className="grid gap-4">
        {filteredTopics.map((topic) => (
          <motion.button
            key={topic.id}
            onClick={() => handleSelectTopic(topic)}
            className="w-full text-left p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border-2 border-gray-100"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700">
                {topic.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
            <p className="text-gray-600">{topic.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TopicCreation;