import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, Reply, Flag, MessageCircle, LightbulbIcon, PlusCircle } from 'lucide-react';
import { Comment, CommentType } from '../../types/community';
import clsx from 'clsx';
import CommentEditor from './CommentEditor';

interface CommentDisplayProps {
  comment: Comment;
  level?: number;
  onReply: (reply: any) => void;
}

const typeStyles: Record<CommentType, { Icon: React.ElementType }> = {
  argument: {
    Icon: LightbulbIcon
  },
  rebuttal: {
    Icon: Reply
  },
  supplement: {
    Icon: PlusCircle
  }
};

const CommentDisplay: React.FC<CommentDisplayProps> = ({
  comment,
  level = 0,
  onReply
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const maxLevel = 3;

  const commentType = comment.type && typeStyles[comment.type] ? comment.type : 'argument';
  const { Icon } = typeStyles[commentType];

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => (
      <p key={index} className={clsx(
        'text-gray-700',
        index < content.split('\n').length - 1 && 'mb-4'
      )}>
        {paragraph}
      </p>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm mb-4 w-full border border-gray-200"
    >
      <div className="p-4">
        {/* Comment Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <img
              src={comment.author.avatar}
              alt={comment.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-medium text-gray-900">{comment.author.name}</div>
              <div className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 bg-gray-100 text-gray-600">
            <Icon className="w-4 h-4" />
            <span className="capitalize">{commentType}</span>
          </div>
        </div>

        {/* Comment Content */}
        <div className="space-y-3">
          {commentType === 'argument' && comment.prerequisites && (
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">前提：</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {comment.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-3">
            <div className="space-y-4">
              {formatContent(comment.content)}
            </div>
          </div>

          {commentType === 'argument' && comment.conclusion && (
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-sm font-medium text-gray-700 mb-1">结论：</h4>
              <p className="text-gray-700">{comment.conclusion}</p>
            </div>
          )}
        </div>

        {/* Comment Actions */}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={clsx(
              'flex items-center gap-1 text-sm',
              isLiked ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'
            )}
          >
            <ThumbsUp className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} />
            <span>{comment.likes + (isLiked ? 1 : 0)}</span>
          </button>

          {level < maxLevel && (
            <button
              onClick={() => setIsReplying(!isReplying)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600"
            >
              <Reply className="w-4 h-4" />
              <span>回应</span>
            </button>
          )}

          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600">
            <Flag className="w-4 h-4" />
            <span>收藏</span>
          </button>
        </div>

        {/* Reply Form */}
        {isReplying && (
          <div className="mt-4">
            <CommentEditor
              onSubmit={(reply) => {
                onReply(reply);
                setIsReplying(false);
              }}
              targetUserId={comment.author.id}
              targetCommentId={comment.id}
              initialType="rebuttal"
            />
          </div>
        )}

        {/* Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-200">
            {comment.replies.map((reply) => (
              <CommentDisplay
                key={reply.id}
                comment={reply}
                level={level + 1}
                onReply={onReply}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommentDisplay;