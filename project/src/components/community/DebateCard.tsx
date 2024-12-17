import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, TrendingUp } from 'lucide-react';
import { DebatePost } from '../../types/community';
import { useLanguage } from '../../contexts/LanguageContext';

interface DebateCardProps {
  debate: DebatePost;
}

const DebateCard: React.FC<DebateCardProps> = ({ debate }) => {
  const { language, t } = useLanguage();

  return (
    <Link
      to={`/community/debate/${debate.id}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <div className="flex items-start gap-4">
        <img
          src={debate.author.avatar}
          alt={debate.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-semibold text-gray-900">{debate.title}</h3>
            {debate.isHot && (
              <span className="flex items-center gap-1 text-sm text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" />
                {t('community.hot')}
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">{debate.summary}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {debate.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {debate.participantsCount} {t('community.participants')}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              {debate.commentsCount} {t('community.comments')}
            </span>
            <span>
              {new Date(debate.createdAt).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DebateCard;