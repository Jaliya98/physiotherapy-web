import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, Phone, Calendar } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'About Clinic', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Results', href: '#results' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.4s ease',
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
          backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
          WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15, 76, 129, 0.05)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-deep) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: scrolled ? 'var(--shadow-sm)' : '0 4px 12px rgba(25, 183, 165, 0.25)',
              }}
            >
              <Activity size={22} color="#ffffff" style={{ animation: 'scroll-glow 3s infinite ease-in-out' }} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  letterSpacing: '-0.5px',
                  color: scrolled ? 'var(--primary-deep)' : 'var(--primary-deep)',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                Movement On
              </span>
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--primary-teal)',
                  display: 'block',
                  marginTop: '2px',
                }}
              >
                Physiotherapy
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-only">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    color: 'var(--text-dark)',
                    position: 'relative',
                    padding: '0.5rem 0',
                  }}
                  className="nav-link-hover"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-only">
            <a
              href="tel:+97140000000"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--primary-deep)',
              }}
            >
              <Phone size={16} />
              <span>+971 4 345 6789</span>
            </a>
            <a href="#appointment" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              <Calendar size={16} />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--primary-deep)',
            }}
            className="mobile-trigger"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: mobileMenuOpen ? 0 : '-100%',
          width: '80%',
          maxWidth: '360px',
          height: '100vh',
          background: 'var(--bg-white)',
          zIndex: 999,
          boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
          transition: 'right 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
          padding: '8rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  display: 'block',
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
          <a
            href="tel:+97143456789"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--primary-deep)',
            }}
          >
            <Phone size={18} />
            <span>+971 4 345 6789</span>
          </a>
          <a
            href="#appointment"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.8rem' }}
          >
            <Calendar size={18} />
            <span>Book Appointment</span>
          </a>
        </div>
      </div>

      {/* Global CSS overrides for desktop/mobile responsive nav links */}
      <style>{`
        @media (min-width: 992px) {
          .mobile-trigger { display: none !important; }
        }
        @media (max-width: 991px) {
          .desktop-only { display: none !important; }
          .mobile-trigger { display: block !important; }
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--primary-teal);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover {
          color: var(--primary-teal) !important;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
