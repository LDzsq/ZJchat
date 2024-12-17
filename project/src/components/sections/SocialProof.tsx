import React from 'react';
import TestimonialCard from './testimonials/TestimonialCard';
import MetricCard from './metrics/MetricCard';
import { useLanguage } from '../../contexts/LanguageContext';

const SocialProof = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: '用户 A',
      role: '专业辩手',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: '你们的AI对我们辩手来说真的非常有用！十分感谢',
    },
    {
      name: '用户 B',
      role: '辩论初学者',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: '这程序太棒了！我付费也想用！',
    },
    {
      name: '用户 C',
      role: '学生',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: '希望赶紧推出更多新功能！真的很需要',
    },
  ];

  const metrics = [
    { label: t('social.metrics.users'), value: '10,00+' },
    { label: t('social.metrics.debates'), value: '1000+' },
    { label: t('social.metrics.improvement'), value: '73%' },
  ];

  return (
    <section className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="tech-line -top-4" />
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              {t('social.title')}
            </h2>
            <div className="tech-line -bottom-4" />
          </div>
          <p className="mt-4 text-xl text-secondary-600">
            {t('social.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="card tech-border group hover:border-primary-500">
              <MetricCard {...metric} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;