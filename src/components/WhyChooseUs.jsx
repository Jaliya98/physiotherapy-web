import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Compass, Laptop, Award, Activity } from 'lucide-react';
import useIntersection from '../hooks/useIntersection';

export default function WhyChooseUs() {
  const [ref, isVisible] = useIntersection({ triggerOnce: true, threshold: 0.1 });

  const reasons = [
    {
      title: 'Personalized Treatment Plans',
      icon: <Compass size={24} />,
      desc: 'No generic treatment templates. We perform thorough biomechanical diagnostics to design a program tailored to your unique anatomical goals.',
    },
    {
      title: 'Expert Licensed Therapists',
      icon: <UserCheck size={24} />,
      desc: 'Our team comprises highly qualified, DHA-licensed professionals who undergo regular advanced training in global orthopedic care.',
    },
    {
      title: 'Advanced Therapy Equipment',
      icon: <Laptop size={24} />,
      desc: 'Equipped with state-of-the-art electrotherapy (IFT), therapeutic ultrasound, and modern gym setups to ensure precision healing.',
    },
    {
      title: 'Holistic Recovery Approach',
      icon: <Activity size={24} />,
      desc: 'We address muscle weakness, nerve path pathways, lifestyle mechanics, and nutrition to build long-term, lasting structural wellness.',
    },
    {
      title: 'Patient-Centered Care',
      icon: <HeartHandshake size={24} />,
      desc: 'Your pain thresholds, comfort levels, and sports/professional aspirations are our priority. We walk you through every step of your therapy.',
    },
    {
      title: 'Modern Rehabilitation Techniques',
      icon: <Award size={24} />,
      desc: 'Leveraging highly effective, evidence-based practices like Dry Needling, Kinesio Taping, joint adjustments, and spinal mobilization.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-dark-navy)',
        color: 'var(--text-white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background Blurs */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'rgba(25, 183, 165, 0.1)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(15, 76, 129, 0.15)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <div className={`section-header reveal ${isVisible ? 'active' : ''}`} style={{ marginBottom: '5rem' }}>
          <div
            className="badge"
            style={{
              margin: '0 auto 1rem',
              background: 'rgba(25, 183, 165, 0.12)',
              border: '1px solid rgba(25, 183, 165, 0.3)',
              color: 'var(--primary-teal)',
            }}
          >
            <ShieldCheck size={14} color="var(--primary-teal)" />
            <span>Why Movement On</span>
          </div>
          <h2 style={{ color: 'var(--text-white)' }}>Why UAE Patients Choose Us</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            We combine high-end clinical tools with localized, premium hospitality to provide patients with an unmatched physical therapy journey.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`reason-card reveal ${isVisible ? 'active' : ''}`}
              style={{
                transitionDelay: `${idx * 80}ms`,
                background: 'var(--bg-dark-card)',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
              }}
            >
              {/* Icon Holder */}
              <div
                className="reason-icon-holder"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(25, 183, 165, 0.15)',
                  color: 'var(--primary-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(25, 183, 165, 0.25)',
                }}
              >
                {reason.icon}
              </div>

              <h3
                style={{
                  color: 'var(--text-white)',
                  fontSize: '1.25rem',
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  marginBottom: '0.85rem',
                }}
              >
                {reason.title}
              </h3>

              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.925rem',
                  lineHeight: 1.6,
                }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .reasons-grid {
            grid-template-columns: 1fr;
          }
        }

        .reason-card:hover {
          transform: translateY(-8px);
          background: #113158 !important;
          border-color: rgba(25, 183, 165, 0.3) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25), 0 0 25px rgba(25, 183, 165, 0.1) !important;
        }

        .reason-card:hover .reason-icon-holder {
          background: var(--primary-teal);
          color: var(--text-white);
          transform: scale(1.1);
          box-shadow: var(--shadow-glow-teal);
        }
      `}</style>
    </section>
  );
}
