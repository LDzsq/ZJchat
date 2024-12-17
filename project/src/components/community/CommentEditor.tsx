import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, AlertCircle, Plus } from 'lucide-react';
import { CommentType, CommentTemplate, commentTemplates } from '../../types/community';
import clsx from 'clsx';

interface CommentEditorProps {
  onSubmit: (comment: {
    type: CommentType;
    content: string;
    stance: 'for' | 'against';
    targetUserId?: string;
    targetCommentId?: string;
    prerequisites?: string[];
    conclusion?: string;
  }) => void;
  targetUserId?: string;
  targetCommentId?: string;
  initialType?: CommentType;
}

const CommentEditor: React.FC<CommentEditorProps> = ({
  onSubmit,
  targetUserId,
  targetCommentId,
  initialType = 'argument'
}) => {
  const [type, setType] = useState<CommentType>(initialType);
  const [content, setContent] = useState('');
  const [stance, setStance] = useState<'for' | 'against'>('for');
  const [prerequisites, setPrerequisites] = useState<string[]>([]);
  const [conclusion, setConclusion] = useState('');
  const [showTemplate, setShowTemplate] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      type,
      content,
      stance,
      targetUserId,
      targetCommentId,
      prerequisites: type === 'argument' ? prerequisites : undefined,
      conclusion: type === 'argument' ? conclusion : undefined,
    });
    setContent('');
    setPrerequisites([]);
    setConclusion('');
  };

  const typeColors: Record<CommentType, { bg: string; text: string; border: string }> = {
    argument: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200'
    },
    rebuttal: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200'
    },
    supplement: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200'
    }
  };

  const Template: React.FC<{ template: CommentTemplate }> = ({ template }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className={clsx(
        'p-4 rounded-lg mb-4',
        typeColors[template.type].bg,
        typeColors[template.type].border,
        'border'
      )}
    >
      <h4 className={clsx('font-semibold mb-2', typeColors[template.type].text)}>
        {template.title}
      </h4>
      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
      <div className="space-y-2">
        {template.structure.map((step, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="font-medium">{index + 1}.</span>
            <span>{step}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-sm text-gray-500">
        <strong>示例：</strong> {template.example}
      </div>
    </motion.div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Comment Type Selection */}
      <div className="flex gap-2">
        {Object.entries(commentTemplates).map(([key, template]) => (
          <button
            key={key}
            type="button"
            onClick={() => setType(key as CommentType)}
            className={clsx(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              type === key
                ? `${typeColors[key as CommentType].bg} ${typeColors[key as CommentType].text}`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            {template.title}
          </button>
        ))}
      </div>

      {/* Template Toggle */}
      <button
        type="button"
        onClick={() => setShowTemplate(!showTemplate)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        {showTemplate ? (
          <>
            <MessageCircle className="w-4 h-4" />
            隐藏写作指南
          </>
        ) : (
          <>
            <AlertCircle className="w-4 h-4" />
            显示写作指南
          </>
        )}
      </button>

      {/* Template Display */}
      {showTemplate && <Template template={commentTemplates[type]} />}

      {/* Comment Form */}
      <div className="space-y-4">
        {type === 'argument' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                前提
              </label>
              <div className="space-y-2">
                {prerequisites.map((prereq, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={prereq}
                      onChange={(e) => {
                        const newPrereqs = [...prerequisites];
                        newPrereqs[index] = e.target.value;
                        setPrerequisites(newPrereqs);
                      }}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="State a prerequisite for your argument..."
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newPrereqs = prerequisites.filter((_, i) => i !== index);
                        setPrerequisites(newPrereqs);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      移除
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setPrerequisites([...prerequisites, ''])}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Plus className="w-4 h-4" />
                  添加前提
                </button>
              </div>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your {type === 'argument' ? 'Reasoning' : 'Response'}
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={commentTemplates[type].example}
          />
        </div>

        {type === 'argument' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              结论
            </label>
            <input
              type="text"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="State your conclusion..."
            />
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStance('for')}
              className={clsx(
                'px-3 py-1 rounded-full text-sm font-medium',
                stance === 'for'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              )}
            >
              支持
            </button>
            <button
              type="button"
              onClick={() => setStance('against')}
              className={clsx(
                'px-3 py-1 rounded-full text-sm font-medium',
                stance === 'against'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-700'
              )}
            >
              反对
            </button>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentEditor;