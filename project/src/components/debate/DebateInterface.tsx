import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Share2, Award, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface DebateInterfaceProps {
  topic: any;
  stance: string;
  stage: string;
  messages: any[];
  onSendMessage: (message: string) => void;
  onNextStage: () => void;
}

const DebateInterface: React.FC<DebateInterfaceProps> = ({
  topic,
  stance,
  stage,
  messages,
  onSendMessage,
  onNextStage
}) => {
  const [currentMessage, setCurrentMessage] = React.useState('');

  const handleSend = () => {
    if (!currentMessage.trim()) return;
    onSendMessage(currentMessage);
    setCurrentMessage('');
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Main Chat Area */}
      <div className="col-span-8">
        <div className="bg-white rounded-xl shadow-sm border-2 border-gray-100">
          {/* Topic Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h2>
            <div className="flex items-center gap-4">
              <span className={clsx(
                'px-3 py-1 rounded-full text-sm font-medium',
                stance === '正方' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              )}>
                {stance}
              </span>
              <span className="text-gray-600">当前阶段：{stage}</span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={clsx(
                  'max-w-[80%] p-4 rounded-xl',
                  message.role === 'user'
                    ? 'ml-auto bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                )}
              >
                {message.content}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex gap-4">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="输入你的观点..."
                className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-0"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                发送
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Panel */}
      <div className="col-span-4 space-y-6">
        {/* Stage Progress */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">阶段进度</h3>
          <button
            onClick={onNextStage}
            className="w-full py-3 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowRight className="w-5 h-5" />
            完成{stage}
          </button>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">实时表现</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">论证完整性</span>
                <span className="text-primary-600">85%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">逻辑严密性</span>
                <span className="text-primary-600">92%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
          <div className="flex justify-around">
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Award className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebateInterface;