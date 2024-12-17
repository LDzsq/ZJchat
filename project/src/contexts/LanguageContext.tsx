import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    'nav.features': 'Training',
    'nav.community': 'Community',
    'nav.pricing': 'Pricing',
    'nav.login': 'Login',
    'nav.trial': 'Free Trial',
    
    'training.nav.foundation': 'Foundation Skills',    
    'training.nav.debate': 'AI Debate',    
    'training.nav.knowledge': 'Knowledge Base',
    'learning.title': 'Foundation Training',    
    'learning.subtitle': 'Enhance your critical thinking through systematic learning',    
    'learning.basic': 'Basic Skills',    
    'learning.intermediate': 'Intermediate Skills',    
    'learning.advanced': 'Advanced Skills',    
    'learning.progress': 'Learning Progress',    
    'learning.exp': 'Experience',    
    'learning.next': 'Next Goal',    
    'learning.complete': 'Complete Basic Skills Training',    
    'learning.overall': 'Overall Progress',

    'debate.search': 'Search topics...',    
    'debate.select': 'Select a topic to begin',    
    'debate.input': 'Enter your thoughts...',    
    'debate.send': 'Send',    
    'debate.feedback.title': 'Real-time Feedback',    
    'debate.feedback.logic': 'Logic',    
    'debate.feedback.clarity': 'Clarity',    
    'debate.feedback.evidence': 'Evidence Support',    
    'debate.suggestions.title': 'Improvement Suggestions',    
    'debate.suggestions.logic': 'Try to strengthen your logical connections',    
    'debate.suggestions.clarity': 'Consider making your points more concise',

    'knowledge.search': 'Search knowledge base...',    
    'knowledge.categories': 'Categories',    
    'knowledge.all': 'All',    
    'knowledge.saved': 'Saved',    
    'knowledge.recent': 'Recent',

    'breadcrumb.home': 'Home',
    'breadcrumb.dashboard': 'Dashboard',
    'breadcrumb.learning': 'Debate Training',
    'breadcrumb.community': 'Community',
    'breadcrumb.debate': 'Debate Details',
    'breadcrumb.pricing': 'Pricing',

    'hero.title': 'Master Critical Thinking with AI-Powered Training',
    'hero.subtitle': 'Enhance your analytical skills through interactive AI debates and personalized learning paths.',
    'hero.cta': 'Get Started Free',
    'hero.chat.placeholder': 'Type your response...',
    'hero.chat.send': 'Send',

    'features.title': 'Powerful Features for Enhanced Learning',
    'features.subtitle': 'Experience a new way of developing critical thinking skills',
    'features.ai.title': 'AI Training Module',
    'features.ai.desc': 'Advanced multi-agent system that adapts to your learning style.',
    'features.gamified.title': 'Gamified Learning',
    'features.gamified.desc': 'Track progress through interactive challenges and earn rewards.',
    'features.community.title': 'Community Ecosystem',
    'features.community.desc': 'Connect with peers and share insights to enhance learning.',

    'journey.title': 'Your Learning Journey',
    'journey.subtitle': 'A clear path to mastering critical thinking',
    'journey.foundation.title': 'Build Foundation',
    'journey.foundation.desc': 'Master the fundamentals through structured lessons.',
    'journey.practice.title': 'Practice & Achieve',
    'journey.practice.desc': 'Apply skills in real-world scenarios and earn achievements.',
    'journey.join.title': 'Join Community',
    'journey.join.desc': 'Connect with peers and participate in group discussions.',

    'social.title': 'User Reviews',
    'social.subtitle': 'See what our users have to say',
    'social.metrics.users': 'Active Users',
    'social.metrics.debates': 'Debates Completed',
    'social.metrics.improvement': 'Avg. Skill Improvement',

    'cta.title': 'Start Your Critical Thinking Journey Today',
    'cta.subtitle': 'Join thousands of learners who have transformed their analytical abilities.',
    'cta.features': [
      'Personalized AI Training',
      'Interactive Debate System',
      'Progress Analytics',
      'Community Support'
    ],
    'cta.form.title': 'Get Started Free',
    'cta.form.email': 'Email Address',
    'cta.form.name': 'Full Name',
    'cta.form.button': 'Start Free Trial',
    'cta.form.note': 'No credit card required • 14-day free trial',

    'pricing.title': 'Choose Your Learning Journey',
    'pricing.subtitle': 'Select the plan that best fits your needs',
    'pricing.popular': 'Most Popular',
    'pricing.perMonth': 'per month',
    'pricing.guarantee': 'All plans include a 14-day money-back guarantee',

    'pricing.free.name': 'Free',
    'pricing.free.desc': 'Perfect for getting started',
    'pricing.free.button': 'Get Started',
    'pricing.free.features': [
      'Access to basic learning modules',
      'Core critical thinking exercises',
      'Basic progress tracking',
      'Community forum access',
      'Limited AI interactions'
    ],

    'pricing.pro.name': 'Pro',
    'pricing.pro.desc': 'Advanced features for serious learners',
    'pricing.pro.button': 'Start Pro Trial',
    'pricing.pro.features': [
      'Everything in Free, plus:',
      'Advanced learning modules',
      'Unlimited AI debate sessions',
      'Detailed analytics dashboard',
      'Priority community support',
      'Custom learning paths',
      'Progress certificates'
    ],

    'pricing.ultra.name': 'Ultra',
    'pricing.ultra.desc': 'Maximum power for professional development',
    'pricing.ultra.button': 'Contact Sales',
    'pricing.ultra.features': [
      'Everything in Pro, plus:',
      'Expert-led workshops',
      'Personal AI mentor',
      'Team collaboration tools',
      'Custom module creation',
      'API access',
      'White-label options',
      'Priority feature access'
    ],

    'dashboard.welcome': 'Welcome back, thinker',
    'dashboard.subtitle': 'Let us continue to improve our critical thinking skills today',
    'dashboard.learning.title': 'Learning Center',
    'dashboard.learning.desc': 'Improve thinking skills through AI-assisted learning',
    'dashboard.learning.path': 'Personalized learning path',
    'dashboard.learning.feedback': 'AI assistant real-time feedback',
    'dashboard.learning.progress': 'Detailed progress tracking',
    'dashboard.community.title': 'Community Discussion',
    'dashboard.community.desc': 'Communicate with other learners',
    'dashboard.community.topics': 'Hot debate topics',
    'dashboard.community.expert': 'Expert Reviews Guidance',
    'dashboard.community.interact': 'Real-time interactive discussions',
    'dashboard.stats.minutes': 'Learn minutes today',
    'dashboard.stats.courses': 'Course completed',
    'dashboard.stats.discussions': 'Participate in discussions',
    'dashboard.stats.exp': 'Experience value obtained',

    'community.participants': 'Participants',
    'community.comments': 'Comments'
  },
  zh: {
    'nav.features': '训练',
    'nav.community': '社区',
    'nav.pricing': '定价',
    'nav.login': '登录',
    'nav.trial': '免费试用',
      
    'training.nav.foundation': '基础训练',    
    'training.nav.debate': 'AI辩论',    
    'training.nav.knowledge': '知识库',
    'learning.title': '基础训练',    
    'learning.subtitle': '通过系统化的学习提升你的批判性思维能力',    
    'learning.basic': '基础技能',    
    'learning.intermediate': '进阶技能',    
    'learning.advanced': '专业技能',    
    'learning.progress': '学习进度',    
    'learning.exp': '经验值',    
    'learning.next': '下一目标',    
    'learning.complete': '完成基础技能训练',    
    'learning.overall': '总体进度',

    'debate.search': '搜索辩题...',    
    'debate.select': '请选择一个辩题开始',    
    'debate.input': '输入你的观点...',    
    'debate.send': '发送',    
    'debate.feedback.title': '实时反馈',    
    'debate.feedback.logic': '逻辑性',    
    'debate.feedback.clarity': '清晰度',    
    'debate.feedback.evidence': '论据支持',    
    'debate.suggestions.title': '改进建议',    
    'debate.suggestions.logic': '尝试加强你的逻辑连接',    
    'debate.suggestions.clarity': '考虑让你的观点更简洁',

    'knowledge.search': '搜索知识库...',    
    'knowledge.categories': '分类',    
    'knowledge.all': '全部',    
    'knowledge.saved': '已保存',    
    'knowledge.recent': '最近',  

    'breadcrumb.home': '首页',
    'breadcrumb.dashboard': '产品',
    'breadcrumb.learning': '训练',
    'breadcrumb.community': '社区',
    'breadcrumb.debate': '辩题页',
    'breadcrumb.pricing': '定价',

    'hero.title': '在这里开始思辨之旅，与万千思考者一起探寻真知',
    'hero.subtitle': '用AI点亮你的思考力!',
    'hero.cta': '免费开始（DEMO）',
    'hero.chat.placeholder': '输入你的回答...',
    'hero.chat.send': '发送',

    'features.title': '用AI帮助你思考，而不是代替',
    'features.subtitle': '体验发展批判性思维的全新方式',
    'features.ai.title': 'AI训练模块',
    'features.ai.desc': '适应你学习风格的高级多智能体系统',
    'features.gamified.title': '游戏化学习',
    'features.gamified.desc': '无处不在的反馈与激励帮你热情满满',
    'features.community.title': 'AI命题搜索',
    'features.community.desc': '获得专业、可信的系统化命题信息。',

    'journey.title': '你的学习之旅',
    'journey.subtitle': '掌握批判性思维的清晰路径',
    'journey.foundation.title': '构建基础',
    'journey.foundation.desc': '通过结构化课程掌握基础知识',
    'journey.practice.title': '实践与成就',
    'journey.practice.desc': '在真实场景中应用技能并获得成就',
    'journey.join.title': '加入社区',
    'journey.join.desc': '与同伴连接并参与小组讨论',

    'social.title': '用户好评不断',
    'social.subtitle': '看看用户们怎么说',
    'social.metrics.users': '活跃用户',
    'social.metrics.debates': '完成的辩论',
    'social.metrics.improvement': '平均技能提升',

    'cta.title': '今天就开始你的批判性思维之旅',
    'cta.subtitle': '加入数千名已经提升分析能力的学习者',
    'cta.features': [
      '个性化AI训练',
      '互动式辩论系统',
      '全方位能力分析',
      '交流你的思考'
    ],
    'cta.form.title': '登记加入等待列表（仅展示）',
    'cta.form.email': '邮箱地址',
    'cta.form.name': '昵称',
    'cta.form.button': '确认（勿点）',
    'cta.form.note': '我们将在产品正式上线后第一时间通知您！',

    'pricing.title': '选择你的学习之旅',
    'pricing.subtitle': '选择最适合你需求的方案',
    'pricing.popular': '最受欢迎',
    'pricing.perMonth': '每月',
    'pricing.guarantee': '所有方案都包含14天退款保证',

    'pricing.free.name': '免费版',
    'pricing.free.desc': '完美的入门选择',
    'pricing.free.button': '开始使用',
    'pricing.free.features': [
      '访问基础学习模块',
      '核心批判性思维练习',
      '基础进度追踪',
      '社区论坛访问',
      '有限的AI互动'
    ],

    'pricing.pro.name': '专业版',
    'pricing.pro.desc': '为认真学习者提供的高级功能',
    'pricing.pro.button': '开始专业版试用',
    'pricing.pro.features': [
      '包含免费版全部功能，以及：',
      '高级学习模块',
      '无限AI辩论课程',
      '详细分析仪表板',
      '优先社区支持',
      '自定义学习路径',
      '进度证书'
    ],

    'pricing.ultra.name': '旗舰版',
    'pricing.ultra.desc': '为专业发展提供最强大的功能',
    'pricing.ultra.button': '联系销售',
    'pricing.ultra.features': [
      '包含专业版全部功能，以及：',
      '专家指导工作坊',
      '个人AI导师',
      '团队协作工具',
      '自定义模块创建',
      'API访问',
      '白标选项',
      '优先功能访问'
    ],

    'dashboard.welcome': '欢迎回来，思考者',
    'dashboard.subtitle': '今天让我们继续提升批判性思维能力',
    'dashboard.learning.title': '思辨训练系统',
    'dashboard.learning.desc': '通过AI辅助学习提升思维能力',
    'dashboard.learning.path': '基础思辨能力学习',
    'dashboard.learning.feedback': 'AI模拟辩论练习',
    'dashboard.learning.progress': '专业知识库支持',
    'dashboard.community.title': '社区讨论',
    'dashboard.community.desc': '与其他学习者交流思维火花',
    'dashboard.community.topics': '热门辩论话题',
    'dashboard.community.expert': '专家点评指导',
    'dashboard.community.interact': '实时互动讨论',
    'dashboard.stats.minutes': '今日学习分钟',
    'dashboard.stats.courses': '完成的课程',
    'dashboard.stats.discussions': '参与的讨论',
    'dashboard.stats.exp': '获得的经验值',

    'community.participants': '参与讨论',
    'community.comments': '思考'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'zh'; // Changed default to 'zh'
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string | string[] => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);