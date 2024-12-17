import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import LearningPath from './pages/LearningPath';
import ModuleDetail from './pages/ModuleDetail';
import DebatePractice from './pages/DebatePractice';
import KnowledgeBase from './pages/KnowledgeBase';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import DebateDetail from './pages/DebateDetail';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="learning" element={<LearningPath />} />
              <Route path="learning/:moduleId" element={<ModuleDetail />} />
              <Route path="debate-practice" element={<DebatePractice />} />
              <Route path="knowledge" element={<KnowledgeBase />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="community" element={<Community />} />
              <Route path="community/debate/:debateId" element={<DebateDetail />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;