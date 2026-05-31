import React from 'react';
import { Activity, Shield, Disc, Scissors, Zap, Wind } from 'lucide-react';
import useIntersection from '../hooks/useIntersection';

export default function Treatments() {
  const [ref, isVisible] = useIntersection({ triggerOnce: true, threshold: 0.1 });

  const treatments = [
    {
      title: 'Kinesio Taping Therapy',
      icon: <Scissors size={24} />,
      desc: 'Applying elastic therapeutic tape to provide support, reduce inflammation, improve local circulation, and facilitate muscle recovery.',
      badge: 'Pain Relief',
    },
    {
      title: 'Dry Needle Therapy',
      icon: <Wind size={24} />,
      desc: 'Inserting thin, sterile monofilament needles into myofascial trigger points to deactivate tight knots, resolve spasms, and relieve tension.',
      badge: 'Muscular Release',
    },
    {
      title: 'Electro Therapy (IFT)',
      icon: <Zap size={24} />,
      desc: 'Utilizing Interferential Current (IFT) to penetrate deep tissues, blocking pain transmitters, reducing swelling, and speeding cellular repair.',
      badge: 'Deep Tissue',
    },
    {
      title: 'Ultrasound Therapy',
      icon: <Activity size={24} />,
      desc: 'Applying high-frequency sound waves to generate deep thermal energy, expanding elasticity of joints, tendons, and relaxing stiff muscles.',
      badge: 'Thermal Healing',
    },
    {
      title: 'Manual Therapy',
      icon: <Shield size={24} />,
      desc: 'Hands-on clinical manipulations, soft-tissue mobilization, and joint adjustments to increase range of motion and realign structural posture.',
      badge: 'Hands-on Specialist',
    },
    {
      title: 'Vertigo Physiotherapy',
      icon: <Disc size={24} />,
      desc: 'Vestibular rehabilitation exercise and Epley canalith maneuvers to re-sync brain balance centers and eliminate chronic dizziness.',
      badge: 'Vestibular Rehab',
    },
  ];

  return (
    <section
      id="treatments"
      ref={ref}
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F9FA 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Visual background details */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'rgba(25, 183, 165, 0.04)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
          <div className="badge" style={{ margin: '0 auto 1rem' }}>
            <Activity size={14} color="var(--primary-teal)" />
            <span>Advanced Care modalities</span>
          </div>
          <h2>Our Specialized Treatments</h2>
          <p>
            Combining state-of-the-art electro-physical equipment with hands-on clinical mastery to accelerate your path to recovery.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="treatments-grid">
          {treatments.map((treatment, idx) => (
            <div
              key={idx}
              className={`treatment-card glass reveal ${isVisible ? 'active' : ''}`}
              style={{
                transitionDelay: `${idx * 80}ms`,
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 2.25rem',
                border: '1px solid rgba(25, 183, 165, 0.12)',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div>
                {/* Header elements inside card */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <div
                    className="treatment-icon-container"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'var(--primary-deep)',
                      color: 'var(--text-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(15, 76, 129, 0.15)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {treatment.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--primary-teal)',
                      background: 'var(--accent-light)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(25, 183, 165, 0.15)',
                    }}
                  >
                    {treatment.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontFamily: 'Outfit',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    marginBottom: '1rem',
                  }}
                >
                  {treatment.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  {treatment.desc}
                </p>
              </div>

              {/* Action/Indicator footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--primary-teal)',
                  borderTop: '1px solid rgba(15, 76, 129, 0.05)',
                  paddingTop: '1.25rem',
                  marginTop: 'auto',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--primary-teal)',
                  }}
                />
                <span>Evidence-Based Practice</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .treatments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .treatments-grid {
            grid-template-columns: 1fr;
          }
        }

        .treatment-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.95) !important;
          border-color: rgba(25, 183, 165, 0.4) !important;
          box-shadow: var(--shadow-premium) !important;
        }

        .treatment-card:hover .treatment-icon-container {
          background: var(--primary-teal);
          transform: rotate(10deg) scale(1.08);
          box-shadow: 0 8px 16px rgba(25, 183, 165, 0.25);
        }
      `}</style>
    </section>
  );
}
