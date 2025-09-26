import React, { useEffect } from 'react';
import AOS from 'aos';
import Hero from './components/Hero';
import CoupleInfo from './components/CoupleInfo';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import RsvpForm from './components/RsvpForm';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="bg-cream text-text-main font-sans overflow-x-hidden">
      <main>
        <Hero />
        <CoupleInfo />
        <EventDetails />
        <Gallery />
        <RsvpForm />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default App;