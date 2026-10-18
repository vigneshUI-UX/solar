import React from 'react';
import Navbar from './components/Navbar';
import AuroraBackground from './components/AuroraBackground';
import CinematicScroller from './components/CinematicScroller';
import ContentSections from './components/ContentSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="scroll-container">
      <Navbar />
      <AuroraBackground />
      <CinematicScroller />
      <ContentSections />
      <Footer />
    </div>
  );
}