import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Specialties from './components/Specialties';
import AboutSection from './components/AboutSection';
import Treatments from './components/Treatments';
import WhyChooseUs from './components/WhyChooseUs';
import RecoveryShowcase from './components/RecoveryShowcase';
import Testimonials from './components/Testimonials';
import AppointmentCTA from './components/AppointmentCTA';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

function App() {
  // Simple IntersectionObserver trigger to toggle active class for fade-in animations on scroll
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 80; // trigger point in pixels from bottom of viewport

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Initial call to reveal elements already in viewport on load
    handleScrollReveal();

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Specialties />
        <AboutSection />
        <Treatments />
        <WhyChooseUs />
        <RecoveryShowcase />
        <Testimonials />
        <AppointmentCTA />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}

export default App;
