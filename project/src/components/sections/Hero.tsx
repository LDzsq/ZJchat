import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="relative inline-block">
              <div className="tech-line -top-4" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <div className="tech-line -bottom-4" />
            </div>
            <p className="text-xl sm:text-2xl text-gray-900">
              {t('hero.subtitle')}
            </p>
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-600 transition-colors tech-border"
            >
              {t('hero.cta')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="card tech-border">
            <div className="flex items-center gap-4 mb-4">
              <MessageSquare className="text-primary-500" />
              <h3 className="text-lg font-semibold text-gray-900">AI 思辨助手</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-900">你会如何解决这个逻辑悖论？</p>
              </div>
              <div className="bg-primary-50 p-4 ml-8">
                <p className="text-gray-900">让我们用逻辑推理一步一步地把它分解…</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={t('hero.chat.placeholder')}
                  className="input flex-1"
                />
                <button className="btn btn-primary">
                  {t('hero.chat.send')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;