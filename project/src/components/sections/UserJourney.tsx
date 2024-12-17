import React from 'react';
import { TrendingUp, Award, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const UserJourney = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="tech-line -top-4" />
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              {t('journey.title')}
            </h2>
            <div className="tech-line -bottom-4" />
          </div>
          <p className="mt-4 text-xl text-secondary-600">
            {t('journey.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1: Foundation */}
          <div className="card tech-border group hover:border-primary-500">
            <div className="relative mb-6">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white flex items-center justify-center font-bold">
                1
              </div>
              <TrendingUp className="w-12 h-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">
              {t('journey.foundation.title')}
            </h3>
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
                alt="Learning Foundation"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            <p className="text-secondary-600">
              {t('journey.foundation.desc')}
            </p>
          </div>

          {/* Step 2: Practice */}
          <div className="card tech-border group hover:border-primary-500">
            <div className="relative mb-6">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white flex items-center justify-center font-bold">
                2
              </div>
              <Award className="w-12 h-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">
              {t('journey.practice.title')}
            </h3>
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Practice Sessions"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            <p className="text-secondary-600">
              {t('journey.practice.desc')}
            </p>
          </div>

          {/* Step 3: Community */}
          <div className="card tech-border group hover:border-primary-500">
            <div className="relative mb-6">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white flex items-center justify-center font-bold">
                3
              </div>
              <Users className="w-12 h-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">
              {t('journey.join.title')}
            </h3>
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Community Engagement"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            <p className="text-secondary-600">
              {t('journey.join.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;