import React from 'react';
import { Swords, Trophy, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DemoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="tech-line -top-4" />
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              真知思辨社区
            </h2>
            <div className="tech-line -bottom-4" />
          </div>
          <p className="mt-4 text-xl text-secondary-600">
            在这里遇见志同道合的思考者
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Battle Matching */}
          <div className="card tech-border group hover:border-primary-500">
            <Swords className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">
              辩论对战匹配
            </h3>
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="https://th.bing.com/th/id/R.4470bcb95fcfcb55f0abb8ce24a97a70?rik=epQR6s7i1n5OnQ&pid=ImgRaw&r=0"
                alt="AI Battle Interface"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            <p className="text-secondary-600">
              智能匹配对手，实时对战，让你的思维火花不断迸发
            </p>
          </div>

          {/* Social Ranking */}
          <div className="card tech-border group hover:border-primary-500">
            <Trophy className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">
              社交排位机制
            </h3>
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="https://th.bing.com/th/id/R.c66d8d32d99893e3102d303962629713?rik=jYJ9OKX2lp%2fSAg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f44939%2fgoods_water_44939_698_698_.png&ehk=ZnMw8tj2mh07p4TUuVpuCccjusHUrJKVyuRbU1nCci4%3d&risl=&pid=ImgRaw&r=0"
                alt="Ranking System"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            <p className="text-secondary-600">
              展示你的思维实力，在排行榜上一较高下
            </p>
          </div>

          {/* Share Thoughts */}
          <div className="card tech-border group hover:border-primary-500">
            <MessageSquare className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">
              交流你的思考
            </h3>
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Community Discussion"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            <p className="text-secondary-600">
              分享你的观点，与其他思考者碰撞思维火花
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;