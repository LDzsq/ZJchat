import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import DemoSection from '../components/sections/Demo';
import UserJourney from '../components/sections/UserJourney';
import SocialProof from '../components/sections/SocialProof';
import CallToAction from '../components/sections/CallToAction';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50"
    >
      <Navbar />
      <Hero />
      <Features />
      <DemoSection />
      <UserJourney />
      <SocialProof />
      <CallToAction />
      <Footer />
    </motion.div>
  );
};

export default Home;