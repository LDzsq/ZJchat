export interface DebatePost {
  id: string;
  title: string;
  summary: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  tags: string[];
  participantsCount: number;
  commentsCount: number;
  createdAt: string;
  images?: string[];
  isHot?: boolean;
}

export type CommentType = 'argument' | 'rebuttal' | 'supplement';

export interface Comment {
  id: string;
  type: CommentType;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: string;
  stance: 'for' | 'against';
  likes: number;
  replies?: Comment[];
  targetUserId?: string; // For rebuttals
  targetCommentId?: string; // For rebuttals and supplements
  prerequisites?: string[]; // For arguments
  conclusion?: string; // For arguments
}

export interface CommentTemplate {
  type: CommentType;
  title: string;
  description: string;
  structure: string[];
  example: string;
}

export const commentTemplates: Record<CommentType, CommentTemplate> = {
  argument: {
    type: 'argument',
    title: '提出论点',
    description: '清晰地阐述你的立场和论证',
    structure: [
      '明确表达你的主要立场',
      '列出关键前提或假设',
      '展示你的推理过程',
      '得出清晰的结论'
    ],
    example: '我认为[立场]，因为[理由]。考虑到[前提]，我们可以得出[结论]。'
  },
  rebuttal: {
    type: 'rebuttal',
    title: '反驳论点',
    description: '针对性地质疑他人论点中的问题',
    structure: [
      '指出具体的论点',
      '找出逻辑漏洞或错误',
      '提供反证',
      '说明为什么原结论不成立'
    ],
    example: '虽然[用户]认为[观点]，但这忽略了[反驳点]。证据表明[解释]。'
  },
  supplement: {
    type: 'supplement',
    title: '补充论证',
    description: '用额外证据加强现有论点',
    structure: [
      '引用原始论点',
      '引入新的支持证据',
      '解释如何强化原观点',
      '巩固结论'
    ],
    example: '基于[用户]关于[主题]的论点，[补充证据]进一步证明了[结论]。'
  }
};