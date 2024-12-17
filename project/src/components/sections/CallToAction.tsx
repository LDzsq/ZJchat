import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-black space-y-8">
            <div className="relative inline-block">
              <div className="tech-line -top-4" />
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black">
                {t('cta.title')}
              </h2>
              <div className="tech-line -bottom-4" />
            </div>
            <p className="text-xl text-black">
              {t('cta.subtitle')}
            </p>
            <ul className="space-y-4">
              {t('cta.features').map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-300" />
                  <span className="text-lg text-black">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card tech-border">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">{t('cta.form.title')}</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-900 mb-1">
                  {t('cta.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-900 mb-1">
                  {t('cta.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="John Doe"
                />
              </div>
              <button className="btn btn-primary w-full group flex items-center justify-center gap-2 text-lg">
                {t('cta.form.button')}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-secondary-900 text-center">
                {t('cta.form.note')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;