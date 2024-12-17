import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ModuleCard from './ModuleCard';
import { Module } from '../../types/learning';

interface ModuleScrollProps {
  title: string;
  modules: Module[];
  onModuleClick: (moduleId: string) => void;
}

const ModuleScroll: React.FC<ModuleScrollProps> = ({ title, modules, onModuleClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-white rounded-lg p-8 mb-8"
      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto pb-4 -mx-8 px-8 scrollbar-hide"
      >
        <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
          {modules.map((module) => (
            <motion.div
              key={module.id}
              className="w-[320px] flex-shrink-0"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ModuleCard
                title={module.title}
                description={module.description}
                difficulty={module.difficulty}
                duration={module.duration}
                skillPoints={module.skillPoints}
                status={module.status}
                progress={module.progress}
                onClick={() => onModuleClick(module.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ModuleScroll;