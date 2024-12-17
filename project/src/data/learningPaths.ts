import { LearningPath } from '../types/learning';

export const basicPath: LearningPath = {
  id: 'basic',
  title: '基础思辨能力',
  modules: [
    {
      id: 'argument-building',
      title: '论证构建',
      description: '学习构建具有清晰前提和结论的有力论证',
      difficulty: 1,
      duration: '30分钟',
      skillPoints: 100,
      prerequisites: [],
      icon: 'Brain',
      status: 'available',
      progress: 0
    },
    {
      id: 'logical-fallacies',
      title: '谬误识别',
      description: '掌握识别和避免常见逻辑谬误的技巧',
      difficulty: 1,
      duration: '45分钟',
      skillPoints: 150,
      prerequisites: ['argument-building'],
      icon: 'Target',
      status: 'locked',
      progress: 0
    },
    {
      id: 'evidence-evaluation',
      title: '证据分析',
      description: '发展评估和权衡不同类型证据的能力',
      difficulty: 1,
      duration: '40分钟',
      skillPoints: 125,
      prerequisites: ['argument-building'],
      icon: 'Scale',
      status: 'locked',
      progress: 0
    },
    {
      id: 'critical-reading',
      title: '批判性阅读',
      description: '学习分析和评估书面论证的技巧',
      difficulty: 1,
      duration: '35分钟',
      skillPoints: 120,
      prerequisites: ['argument-building'],
      icon: 'BookOpen',
      status: 'locked',
      progress: 0
    },
    {
      id: 'basic-logic',
      title: '基础逻辑',
      description: '理解逻辑推理的基本原理',
      difficulty: 1,
      duration: '50分钟',
      skillPoints: 160,
      prerequisites: ['argument-building', 'logical-fallacies'],
      icon: 'Lightbulb',
      status: 'locked',
      progress: 0
    }
  ]
};

export const intermediatePath: LearningPath = {
  id: 'intermediate',
  title: '进阶思维训练',
  modules: [
    {
      id: 'complex-arguments',
      title: '复杂论证',
      description: '处理多层次论证和复杂推理链',
      difficulty: 2,
      duration: '60分钟',
      skillPoints: 200,
      prerequisites: ['argument-building', 'logical-fallacies'],
      icon: 'GitBranch',
      status: 'locked',
      progress: 0
    },
    {
      id: 'debate-strategies',
      title: '辩论技巧',
      description: '学习结构化辩论和讨论的有效策略',
      difficulty: 2,
      duration: '50分钟',
      skillPoints: 175,
      prerequisites: ['complex-arguments'],
      icon: 'MessageSquare',
      status: 'locked',
      progress: 0
    },
    {
      id: 'cognitive-biases',
      title: '认知偏差',
      description: '识别和克服推理中的常见认知偏差',
      difficulty: 2,
      duration: '55分钟',
      skillPoints: 185,
      prerequisites: ['basic-logic'],
      icon: 'Brain',
      status: 'locked',
      progress: 0
    },
    {
      id: 'statistical-reasoning',
      title: '统计推理',
      description: '运用统计概念加强论证和分析',
      difficulty: 2,
      duration: '65分钟',
      skillPoints: 220,
      prerequisites: ['evidence-evaluation'],
      icon: 'BarChart',
      status: 'locked',
      progress: 0
    },
    {
      id: 'argument-mapping',
      title: '论证图谱',
      description: '分析复杂论证结构的可视化技巧',
      difficulty: 2,
      duration: '45分钟',
      skillPoints: 160,
      prerequisites: ['complex-arguments'],
      icon: 'Network',
      status: 'locked',
      progress: 0
    }
  ]
};

export const advancedPath: LearningPath = {
  id: 'advanced',
  title: '专业思维方法',
  modules: [
    {
      id: 'system-thinking',
      title: '系统思维',
      description: '理解和分析复杂系统及其相互作用',
      difficulty: 3,
      duration: '75分钟',
      skillPoints: 300,
      prerequisites: ['complex-arguments', 'debate-strategies'],
      icon: 'Puzzle',
      status: 'locked',
      progress: 0
    },
    {
      id: 'formal-logic',
      title: '形式逻辑',
      description: '深入学习逻辑系统和形式推理方法',
      difficulty: 3,
      duration: '80分钟',
      skillPoints: 320,
      prerequisites: ['basic-logic', 'complex-arguments'],
      icon: 'Code',
      status: 'locked',
      progress: 0
    },
    {
      id: 'research-methods',
      title: '研究方法',
      description: '专业研究技巧和方法论分析',
      difficulty: 3,
      duration: '70分钟',
      skillPoints: 280,
      prerequisites: ['statistical-reasoning', 'evidence-evaluation'],
      icon: 'Search',
      status: 'locked',
      progress: 0
    },
    {
      id: 'ethical-reasoning',
      title: '伦理推理',
      description: '分析伦理论证和困境的高级框架',
      difficulty: 3,
      duration: '85分钟',
      skillPoints: 340,
      prerequisites: ['system-thinking'],
      icon: 'Shield',
      status: 'locked',
      progress: 0
    },
    {
      id: 'expert-synthesis',
      title: '专家综合',
      description: '掌握整合多个视角和方法论的艺术',
      difficulty: 3,
      duration: '90分钟',
      skillPoints: 360,
      prerequisites: ['system-thinking', 'formal-logic', 'research-methods'],
      icon: 'Star',
      status: 'locked',
      progress: 0
    }
  ]
};