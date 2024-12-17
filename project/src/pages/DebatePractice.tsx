import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TopicCreation from '../components/debate/TopicCreation';
import StanceSelection from '../components/debate/StanceSelection';
import DebateInterface from '../components/debate/DebateInterface';
import DebateReview from '../components/debate/DebateReview';
import StageProgress from '../components/debate/StageProgress';

type DebateStage = '选择辩题' | '选择立场' | '立论' | '质询' | '反驳' | '结辩' | '复盘';
type Message = { role: 'user' | 'ai'; content: string };

const stages: DebateStage[] = ['选择辩题', '选择立场', '立论', '质询', '反驳', '结辩', '复盘'];

const topics = [
  {
    id: '1',
    title: '在没有充分证据的情况下，对他人进行涉及社会道德底线的身份指控或公开怀疑，是否应该被允许？',
    description: '类似的案件还有张薇事件、清华学姐事件、朱军事件等。这些事件中，女性在缺乏确凿证据的情况下，对男性提出性骚扰或性侵害的指控，导致男性承受巨大的心理压力和网络暴力，甚至对其职业生涯造成严重打击。同样地，当男性毫无根据地指责女性为"卖淫者"时，也会对女性的身心健康造成严重伤害，令其承受巨大的心理压力。',
    category: '法理辩',
    participants: 128,
    forPoints: ['维护个人权益', '防止二次伤害', '保护弱势群体'],
    againstPoints: ['防止恶意诽谤', '维护社会秩序', '保护个人名誉']
  },
  {
    id: '2',
    title: '人工智能是否应该被赋予法律人格？',
    description: '随着AI技术的快速发展，AI系统的自主决策能力和社会影响力不断提升，是否应该赋予其相应的法律地位和责任成为一个重要议题。',
    category: '科技伦理',
    participants: 256,
    forPoints: ['明确责任主体', '促进AI发展', '保护相关权益'],
    againstPoints: ['技术尚不成熟', '难以界定责任', '可能产生道德风险']
  }
];

const DebatePractice = () => {
  const [stage, setStage] = useState<DebateStage>('选择辩题');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [stance, setStance] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleTopicSelect = (topic: any) => {
    setSelectedTopic(topic);
    setStage('选择立场');
  };

  const handleCreateTopic = (topic: any) => {
    setSelectedTopic(topic);
    setStage('选择立场');
  };

  const handleStanceSelect = (selectedStance: string) => {
    setStance(selectedStance);
    setStage('立论');
    setMessages([{
      role: 'ai',
      content: '请开始你的立论。记住要论点明确，论据充分，逻辑严密。'
    }]);
  };

  const handleSendMessage = (message: string) => {
    setMessages([
      ...messages,
      { role: 'user', content: message },
      { role: 'ai', content: 'AI的回应...' } // This would be replaced with actual AI response
    ]);
  };

  const handleNextStage = () => {
    const currentIndex = stages.indexOf(stage);
    if (currentIndex < stages.length - 1) {
      setStage(stages[currentIndex + 1]);
    }
  };

  const getStageContent = () => {
    switch (stage) {
      case '选择辩题':
        return (
          <TopicCreation
            onSelectTopic={handleTopicSelect}
            onCreateTopic={handleCreateTopic}
            existingTopics={topics}
          />
        );
      case '选择立场':
        return (
          <StanceSelection
            topic={selectedTopic}
            onSelectStance={handleStanceSelect}
          />
        );
      case '立论':
      case '质询':
      case '反驳':
      case '结辩':
        return (
          <DebateInterface
            topic={selectedTopic}
            stance={stance!}
            stage={stage}
            messages={messages}
            onSendMessage={handleSendMessage}
            onNextStage={handleNextStage}
          />
        );
      case '复盘':
        return (
          <DebateReview
            topic={selectedTopic}
            stance={stance!}
            performance={{
              logic: 85,
              clarity: 92,
              evidence: 78,
              overall: 85
            }}
            suggestions={[
              '论证过程中可以多运用具体的数据和案例来支持观点',
              '在反驳对方论点时，建议更多关注核心论据而非细枝末节',
              '结辩环节可以更好地总结双方论点的主要分歧'
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <StageProgress currentStage={stage} stages={stages} />
        {getStageContent()}
      </div>
    </div>
  );
};

export default DebatePractice;