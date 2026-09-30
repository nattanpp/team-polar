
import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { RoversSection } from './components/RoversSection';
import { GentooSection } from './components/GentooSection';
import { IceCubeSection } from './components/IceCubeSection';
import { StorySection } from './components/StorySection';
import { MissionSection } from './components/MissionSection';
import { TeamSection } from './components/TeamSection';
import { PartnersSection } from './components/PartnersSection';
import { PressSection } from './components/PressSection';
import { JoinSection } from './components/JoinSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageTab;
      const validTabs: PageTab[] = [
        'home', 'rovers', 'gentoo', 'ice-cube', 'story', 'mission',
        'team', 'partners', 'press', 'join', 'contact'
      ];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E293B] selection:bg-[#7CBDE8] selection:text-[#0B132B] overflow-x-clip">
      
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      
      <main className="flex-1 w-full">
        <div className="transition-opacity duration-150">
          {activeTab === 'home' && <HomeSection onNavigate={handleSelectTab} />}
          {activeTab === 'gentoo' && <GentooSection />}
          {activeTab === 'ice-cube' && <IceCubeSection />}
          {activeTab === 'rovers' && <RoversSection onNavigate={handleSelectTab} />}
          {activeTab === 'story' && <StorySection />}
          {activeTab === 'mission' && <MissionSection />}
          {activeTab === 'team' && <TeamSection />}
          {activeTab === 'partners' && <PartnersSection />}
          {activeTab === 'press' && <PressSection />}
          {activeTab === 'join' && <JoinSection />}
          {activeTab === 'contact' && <ContactSection />}
        </div>
      </main>

      
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
