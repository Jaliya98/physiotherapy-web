import React from 'react';
import { Activity, Shield, ArrowRight, Disc, Heart, RefreshCw, Zap } from 'lucide-react';
import useIntersection from '../hooks/useIntersection';

export default function Specialties() {
  const [ref, isVisible] = useIntersection({ triggerOnce: true, threshold: 0.1 });

  const specialtyItems = [
    {
      title: 'Back & Neck Pain Treatment',
      icon: <Activity size={24} className="specialty-icon-svg" />,
      desc: 'Expert manual decompression, postural correction, and customized spine exercises to alleviate chronic pain and restore agility.',
    },
    {
      title: 'Knee Pain Rehabilitation',
      icon: <Zap size={24} className="specialty-icon-svg" />,
      desc: 'Targeted strengthening of knee-supporting muscles, joint mobilization, and gait analysis to recover active mobility and shock absorption.',
    },
    {
      title: 'Shoulder Pain Therapy',
      icon: <RefreshCw size={24} className="specialty-icon-svg" />,
      desc: 'Treating rotator cuff tears, frozen shoulder, and impingements with precise passive-to-active movement training protocols.',
    },
    {
      title: 'Sports Injury Recovery',
      icon: <Heart size={24} className="specialty-icon-svg" />,
      desc: 'For elite and amateur athletes. Accelerating tissue repair, optimizing biomechanics, and ensuring safe return-to-sport training.',
    },
    {
      title: 'Vertigo & Dizziness Physio',
      icon: <Disc size={24} className="specialty-icon-svg" />,
      desc: 'Specialized vestibular therapy maneuvers that recalibrate inner-ear balance sensors to permanently resolve spinning sensations.',
    },
    {
      title: 'Post Surgery Rehabilitation',
      icon: <Shield size={24} className="specialty-icon-svg" />,
      desc: 'Gentle progressive recovery programs for joint replacements, ligament repairs, and fracture fixations following orthopedic surgery.',
    },
  ];

  return (
    <section id="specialties" ref={ref} className="section-padding" style={{ backgroundColor: 'var(--bg-light)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
          <div className="badge" style={{ margin: '0 auto 1rem' }}>
            <Activity size={14} color="var(--primary-teal)" />
            <span>Our Expertise</span>
          </div>
          <h2>Quick Specialties</h2>
          <p>
            Providing targeted physical therapies tailored to your specific musculoskeletal, neuromuscular, and injury-recovery goals.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="specialties-grid">
          {specialtyItems.map((item, idx) => (
            <div
              key={idx}
              className={`specialty-card reveal ${isVisible ? 'active' : ''}`}
              style={{
                transitionDelay: `${idx * 100}ms`,
                background: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div>
                {/* Icon Container */}
                <div
                  className="icon-container"
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    background: 'var(--accent-light)',
                    color: 'var(--primary-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.75rem',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'Outfit',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    marginBottom: '1rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.6,
                    marginBottom: '1.75rem',
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <a
                href="#appointment"
                className="learn-more-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--primary-deep)',
                  marginTop: 'auto',
                }}
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="arrow-icon" style={{ transition: 'transform 0.3s ease' }} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .specialties-grid {
            grid-template-columns: 1fr;
          }
        }

        .specialty-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(25, 183, 165, 0.3) !important;
        }

        .specialty-card:hover .icon-container {
          background: var(--primary-teal);
          color: var(--bg-white);
          transform: scale(1.1);
        }

        .specialty-card:hover .learn-more-link {
          color: var(--primary-teal);
        }

        .specialty-card:hover .arrow-icon {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
}
