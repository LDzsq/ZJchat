import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../../types/navigation';
import { useLanguage } from '../../contexts/LanguageContext';
import clsx from 'clsx';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { t } = useLanguage();

  const getTranslatedLabel = (id: string): string => {
    return t(`breadcrumb.${id}`) as string;
  };

  return (
    <nav className="flex items-center h-12">
      <div className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            )}
            <Link
              to={item.path}
              className={clsx(
                'flex items-center gap-2 px-2 py-1 rounded-md transition-colors',
                item.isActive
                  ? 'bg-primary-50 text-primary-700 font-medium'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50/50'
              )}
            >
              {index === 0 && <Home className="w-4 h-4" />}
              {getTranslatedLabel(item.id)}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;