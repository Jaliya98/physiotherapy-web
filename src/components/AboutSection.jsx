import React, { useState, useEffect } from 'react';
import { Award, ShieldAlert, Heart, Calendar } from 'lucide-react';
import useIntersection from '../hooks/useIntersection';

// Simple Counter Component to count up on intersection
function CountUp({ target, duration = 2000, suffix = '', isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, isVisible]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function AboutSection() {
  const [sectionRef, isVisible] = useIntersection({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    { target: 12500, suffix: '+', label: 'Happy Patients' },
    { target: 98, suffix: '%', label: 'Success Recoveries' },
    { target: 10, suffix: '+', label: 'Years Experience' },
    { target: 15, suffix: '+', label: 'Expert Therapists' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image of Dr. Ravi Khamar PT */}
          <div className={`about-visual reveal-left ${isVisible ? 'active' : ''}`}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '440px', margin: '0 auto' }}>
              {/* Decorative golden/teal frame backing */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '-20px',
                  right: '20px',
                  bottom: '-20px',
                  borderRadius: '24px',
                  border: '2px solid var(--primary-teal)',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
              
              {/* Doctor Image */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 5,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  background: 'var(--bg-light)',
                  border: '6px solid var(--bg-white)',
                }}
              >
                <img
                  src="/dr_ravi_khamar.png"
                  alt="Dr. Ravi Khamar PT - Chief Physiotherapist at Movement On Physio"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Experience Floating Badge */}
              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  right: '-30px',
                  background: 'var(--bg-dark-navy)',
                  color: 'var(--text-white)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  zIndex: 10,
                  maxWidth: '220px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(25, 183, 165, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-teal)',
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-white)', margin: 0, fontWeight: 700 }}>10+ Years</h4>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Clinical Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About clinic content & stats */}
          <div className={`about-content reveal-right ${isVisible ? 'active' : ''}`}>
            <div className="badge">
              <Heart size={14} color="var(--primary-teal)" />
              <span>About Dr. Ravi & Clinic</span>
            </div>

            <h2
              style={{
                fontSize: '2.5rem',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem',
                fontFamily: 'Outfit',
                fontWeight: 700,
              }}
            >
              Meet <span className="title-gradient">Dr. Ravi Khamar PT</span> <br />
              & The Vision Behind Our Clinic
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'var(--text-body)',
                marginBottom: '1.5rem',
              }}
            >
              At <strong>Movement On Physio</strong>, we provide premium, personalized physical rehabilitation treatments in a luxury medical wellness environment. Guided by chief physiotherapist <strong>Dr. Ravi Khamar PT</strong>, our clinic has established a standard of clinical excellence. We focus on diagnosing and treating the root cause of pain, rather than just masking the symptoms.
            </p>

            <blockquote
              style={{
                background: 'var(--accent-light)',
                borderLeft: '4px solid var(--primary-teal)',
                padding: '1.25rem 1.75rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '2.25rem',
              }}
            >
              <p
                style={{
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  color: 'var(--primary-deep)',
                  margin: 0,
                }}
              >
                “Empowering individuals to achieve optimal health through personalized physiotherapy care.”
              </p>
            </blockquote>

            {/* Statistics Counters */}
            <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem 2rem', marginBottom: '2.5rem' }}>
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--border-color)',
                    paddingBottom: '1rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '2.25rem',
                      fontFamily: 'Outfit',
                      fontWeight: 800,
                      color: 'var(--primary-deep)',
                      margin: 0,
                    }}
                  >
                    <CountUp target={stat.target} suffix={stat.suffix} isVisible={isVisible} />
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginTop: '2px',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a href="#appointment" className="btn btn-primary">
              <Calendar size={18} />
              <span>Consult Dr. Ravi Today</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .about-visual {
            order: 2;
          }
          
          .about-content {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
