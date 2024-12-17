import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import clsx from 'clsx';
import { useLanguage } from '../contexts/LanguageContext';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

const Pricing = () => {
  const { t } = useLanguage();

  const pricingTiers: PricingTier[] = [
    {
      name: t('pricing.free.name'),
      price: '$0',
      description: t('pricing.free.desc'),
      icon: Star,
      features: t('pricing.free.features') as string[],
      buttonText: t('pricing.free.button')
    },
    {
      name: t('pricing.pro.name'),
      price: '$19/mo',
      description: t('pricing.pro.desc'),
      icon: Zap,
      features: t('pricing.pro.features') as string[],
      highlighted: true,
      buttonText: t('pricing.pro.button')
    },
    {
      name: t('pricing.ultra.name'),
      price: '$49/mo',
      description: t('pricing.ultra.desc'),
      icon: Crown,
      features: t('pricing.ultra.features') as string[],
      buttonText: t('pricing.ultra.button')
    }
  ];

  const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => {
    const { name, price, description, icon: Icon, features, highlighted, buttonText } = tier;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={clsx(
          'relative rounded-2xl p-8 flex flex-col h-full',
          highlighted
            ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-xl'
            : 'bg-white text-gray-900 shadow-lg'
        )}
      >
        {highlighted && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            {t('pricing.popular')}
          </div>
        )}

        <div className="flex items-center gap-4 mb-6">
          <Icon className={clsx('w-8 h-8', highlighted ? 'text-primary-200' : 'text-primary-600')} />
          <div>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className={clsx('text-sm', highlighted ? 'text-primary-100' : 'text-gray-600')}>
              {description}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">{price}</span>
            {price !== '$0' && (
              <span className={clsx('ml-2', highlighted ? 'text-primary-100' : 'text-gray-500')}>
                {t('pricing.perMonth')}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className={clsx(
                  'w-5 h-5 mt-0.5',
                  highlighted ? 'text-primary-200' : 'text-primary-600'
                )} />
                <span className={highlighted ? 'text-primary-50' : 'text-gray-600'}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <button
            className={clsx(
              'w-full py-3 px-6 rounded-lg font-semibold transition-all',
              highlighted
                ? 'bg-white text-primary-600 hover:bg-primary-50'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            )}
          >
            {buttonText}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              tier={tier}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            {t('pricing.guarantee')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;