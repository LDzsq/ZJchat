import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import DemoBanner from './DemoBanner';
import TrainingHeader from './TrainingHeader';
import Breadcrumb from '../navigation/Breadcrumb';
import { useBreadcrumbs } from '../../hooks/useBreadcrumbs';

const Layout = () => {
  const location = useLocation();
  const breadcrumbItems = useBreadcrumbs();
  
  const isHomePage = location.pathname === '/';
  const isTrainingSection = ['/learning', '/debate-practice', '/knowledge'].some(
    path => location.pathname.startsWith(path)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {isHomePage ? (
        <>
          <Navbar />
          <DemoBanner />
        </>
      ) : (
        <>
          {isTrainingSection ? (
            <>
              <TrainingHeader />
              <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                  <Breadcrumb items={breadcrumbItems} />
                </div>
              </div>
              <div className="mt-4">
                <DemoBanner />
              </div>
            </>
          ) : (
            <>
              <Breadcrumb items={breadcrumbItems} />
              <DemoBanner />
            </>
          )}
        </>
      )}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={isHomePage ? '' : 'pt-20'}
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default Layout;