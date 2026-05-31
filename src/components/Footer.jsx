import React from 'react';
import { Activity, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-dark-navy)',
        color: 'rgba(255, 255, 255, 0.7)',
        padding: '6rem 0 2rem',
        borderTop: '1px solid rgba(25, 183, 165, 0.1)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Footer Top Grid */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr repeat(3, 0.9fr)', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Col 1: Branding */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-deep) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Activity size={20} color="#ffffff" />
              </div>
              <div>
                <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem', color: '#ffffff', display: 'block', lineHeight: 1 }}>
                  Movement On
                </span>
                <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.7rem', color: 'var(--primary-teal)', display: 'block', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '2px' }}>
                  Physiotherapy
                </span>
              </div>
            </a>
            
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.6)' }}>
              A premium, DHA-licensed clinic in Dubai delivering expert manual therapy, sports injury rehabilitation, and targeted joint recovery in a state-of-the-art wellness facility.
            </p>

            {/* Social media links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                  href: 'https://facebook.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                  href: 'https://instagram.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  href: 'https://linkedin.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  ),
                  href: 'https://youtube.com',
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'Outfit', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              {[
                { name: 'Home Care', href: '#home' },
                { name: 'Specialties', href: '#specialties' },
                { name: 'Meet Dr. Ravi', href: '#about' },
                { name: 'Our Treatments', href: '#treatments' },
                { name: 'Patient Results', href: '#results' },
                { name: 'Book Appointment', href: '#appointment' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link-hover" style={{ transition: 'color 0.3s' }}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'Outfit', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Specialties</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              {[
                'Back & Neck Pain Care',
                'Knee Pain Rehabilitation',
                'Shoulder Pain Therapy',
                'Sports Injury Recovery',
                'Vertigo & Dizziness',
                'Post Surgery Rehab',
              ].map((item, idx) => (
                <li key={idx} style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ color: '#ffffff', fontFamily: 'Outfit', fontSize: '1.1rem', marginBottom: '0.25rem', fontWeight: 600 }}>Get In Touch</h4>
            
            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', alignItems: 'flex-start' }}>
              <MapPin size={18} className="footer-accent-icon" style={{ color: 'var(--primary-teal)', flexShrink: 0, marginTop: '2px' }} />
              <span>Premium Medical Block, Sheikh Zayed Road, Dubai, UAE</span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', alignItems: 'center' }}>
              <Phone size={18} className="footer-accent-icon" style={{ color: 'var(--primary-teal)', flexShrink: 0 }} />
              <a href="tel:+97143456789" className="footer-link-hover">+971 4 345 6789</a>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', alignItems: 'center' }}>
              <Mail size={18} className="footer-accent-icon" style={{ color: 'var(--primary-teal)', flexShrink: 0 }} />
              <a href="mailto:info@movementonphysio.com" className="footer-link-hover">info@movementonphysio.com</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Block */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem' }}>
          <span>
            © {currentYear} <strong>Movement On Physiotherapy & Rehabilitation Clinic</strong>. Licensed by DHA. All Rights Reserved.
          </span>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" className="footer-link-hover">Privacy Policy</a>
            <a href="#terms" className="footer-link-hover">Terms of Service</a>
            
            {/* Scroll back to top button */}
            <a
              href="#home"
              onClick={handleScrollTop}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(25, 183, 165, 0.12)',
                color: 'var(--primary-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              className="scroll-top-btn"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .social-icon-btn:hover {
          background: var(--primary-teal) !important;
          color: var(--text-white) !important;
          border-color: var(--primary-teal) !important;
          transform: translateY(-3px);
        }

        .footer-link-hover:hover {
          color: var(--primary-teal) !important;
        }

        .scroll-top-btn:hover {
          background: var(--primary-teal) !important;
          color: var(--bg-white) !important;
          transform: translateY(-3px);
        }

        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
