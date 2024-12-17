import React from 'react';
import { MessageSquare, Brain, BookOpen, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '产品',
      links: [
        { label: '基础思辨能力', href: '/learning' },
        { label: 'AI辩论练习', href: '/debate-practice' },
        { label: '知识库', href: '/knowledge' },
      ],
    },
    {
      title: '社区',
      links: [
        { label: '辩题广场', href: '/community' },
        { label: '对战匹配', href: '/debate-practice' },
        { label: '思考分享', href: '/community' },
      ],
    },
  ];

  const features = [
    { icon: Brain, label: 'AI辅助思考' },
    { icon: MessageSquare, label: '实时反馈' },
    { icon: BookOpen, label: '专业知识库' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-semibold mb-4">特色功能</h3>
            <div className="space-y-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary-500" />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-white">真知AI辩论</span>
              <span className="text-sm">
                © {currentYear} 联系/加入我们：Rightzerox@outlook.com
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;