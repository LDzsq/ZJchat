import React from 'react';
import { Brain, Gamepad, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.desc'),
    },
    {
      icon: Gamepad,
      title: t('features.gamified.title'),
      description: t('features.gamified.desc'),
    },
    {
      icon: Users,
      title: t('features.community.title'),
      description: t('features.community.desc'),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="tech-line -top-4" />
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              {t('features.title')}
            </h2>
            <div className="tech-line -bottom-4" />
          </div>
          <p className="mt-4 text-xl text-secondary-600">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card tech-border group hover:border-primary-500 transition-colors"
            >
              <div className="relative">
                <feature.icon className="w-16 h-16 text-primary-500 mb-6" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;