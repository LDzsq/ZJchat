import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Comment } from '../../types/community';
import CommentEditor from './CommentEditor';
import CommentDisplay from './CommentDisplay';
import clsx from 'clsx';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [showEditor, setShowEditor] = useState(false);

  const handleSubmitComment = (comment: any) => {
    console.log('New comment:', comment);
    setShowEditor(false);
  };

  const handleReply = (reply: any) => {
    console.log('New reply:', reply);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">讨论</h2>
          <button
            onClick={() => setShowEditor(!showEditor)}
            className={clsx(
              'px-4 py-2 rounded-lg font-medium transition-colors',
              showEditor
                ? 'bg-gray-100 text-gray-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            )}
          >
            {showEditor ? '取消' : '发表观点'}
          </button>
        </div>

        {/* New Comment Form */}
        <AnimatePresence>
          {showEditor && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <CommentEditor
                onSubmit={handleSubmitComment}
                initialType="argument"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Comments Display */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentDisplay
              key={comment.id}
              comment={comment}
              onReply={handleReply}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;