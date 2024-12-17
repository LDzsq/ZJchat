import React from 'react';
import { ExternalLink } from 'lucide-react';

const DemoBanner = () => {
  return (
    <div className="bg-gray-100 text-gray-600 text-sm py-4 px-4 text-center">
      <span>注：这是一个产品最终形态的演示版本。</span>
      <a 
        href="https://debateai.cn" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 ml-2"
      >
        访问已上线MVP
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default DemoBanner;