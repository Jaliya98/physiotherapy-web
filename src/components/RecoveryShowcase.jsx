import React, { useState } from 'react';
import { Activity, ShieldCheck, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import useIntersection from '../hooks/useIntersection';

export default function RecoveryShowcase() {
  const [ref, isVisible] = useIntersection({ triggerOnce: true, threshold: 0.1 });
  const [recoveryProgress, setRecoveryProgress] = useState(75); // default progress 75%

  // Compute values based on slider progress (0 to 100)
  const painScore = Math.max(0, Math.min(10, Math.round(8 - (recoveryProgress / 100) * 8)));
  const rangeOfMotion = Math.round(45 + (recoveryProgress / 100) * 100); // 45 to 145 deg
  const muscleActivation = Math.round(20 + (recoveryProgress / 100) * 80); // 20% to 100%
  const stabilityScore = Math.round(35 + (recoveryProgress / 100) * 60); // 35% to 95%

  const getMobilityGrade = (progress) => {
    if (progress < 30) return { label: 'Highly Restricted', color: '#EF4444' };
    if (progress < 70) return { label: 'Moderate Mobility', color: '#F59E0B' };
    return { label: 'Optimal Fluid Recovery', color: 'var(--primary-teal)' };
  };

  const grade = getMobilityGrade(recoveryProgress);

  return (
    <section id="results" ref={ref} className="section-padding" style={{ backgroundColor: 'var(--bg-white)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
          <div className="badge" style={{ margin: '0 auto 1rem' }}>
            <Activity size={14} color="var(--primary-teal)" />
            <span>Interactive recovery metrics</span>
          </div>
          <h2>Joint Recovery & Range of Motion</h2>
          <p>
            Drag the recovery slider below to visualize how targeted physiotherapy restores joint mechanics, resolves muscle spasms, and permanently reduces pain scores.
          </p>
        </div>

        {/* Showcase Dashboard */}
        <div
          className={`dashboard-container reveal ${isVisible ? 'active' : ''}`}
          style={{
            background: 'var(--bg-light)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-color)',
          }}
        >
          <div className="dashboard-grid">
            {/* Left Column: Interactive Joint/Dial controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <RefreshCw size={18} className="animate-spin-delayed" style={{ color: 'var(--primary-teal)' }} />
                  <span>Clinical Recovery Simulator</span>
                </h3>

                {/* Slider bar */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontWeight: 700, fontSize: '0.9rem' }}>
                    <span style={{ color: '#EF4444' }}>Before Therapy (0%)</span>
                    <span style={{ color: 'var(--primary-teal)' }}>Fully Restored (100%)</span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={recoveryProgress}
                    onChange={(e) => setRecoveryProgress(Number(e.target.value))}
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '4px',
                      background: '#E2E8F0',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                    className="slider-input"
                  />

                  <div style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 800, color: 'var(--primary-deep)', fontSize: '1.1rem' }}>
                    Rehabilitation Progress: {recoveryProgress}%
                  </div>
                </div>

                {/* SVG Dial/Graph Display */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '180px' }}>
                  {/* Outer circle track */}
                  <svg width="180" height="180" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="50" cy="50" r="42" stroke="#E2E8F0" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke={grade.color}
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="263.8"
                      strokeDashoffset={263.8 - (263.8 * recoveryProgress) / 100}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.1s ease, stroke 0.3s ease' }}
                    />
                  </svg>

                  {/* Centered statistics inside dial */}
                  <div style={{ position: 'absolute', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1 }}>
                      {rangeOfMotion}°
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginTop: '4px' }}>
                      Knee Flexion ROM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Result Metrics Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Patient Mobility Report
                </h3>

                {/* Grid of changing attributes */}
                <div className="report-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2rem' }}>
                  {/* Metric 1: Pain index */}
                  <div style={{ background: 'var(--bg-white)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase' }}>Active Pain Index</span>
                    <h4 style={{ fontSize: '1.8rem', fontFamily: 'Outfit', color: painScore > 5 ? '#EF4444' : painScore > 2 ? '#F59E0B' : 'var(--primary-teal)', margin: '4px 0 0' }}>
                      {painScore} <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>/ 10</span>
                    </h4>
                  </div>

                  {/* Metric 2: Muscle activation */}
                  <div style={{ background: 'var(--bg-white)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase' }}>Muscle Activation</span>
                    <h4 style={{ fontSize: '1.8rem', fontFamily: 'Outfit', color: 'var(--primary-deep)', margin: '4px 0 0' }}>
                      {muscleActivation}%
                    </h4>
                  </div>

                  {/* Metric 3: Stability score */}
                  <div style={{ background: 'var(--bg-white)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase' }}>Gait Stability</span>
                    <h4 style={{ fontSize: '1.8rem', fontFamily: 'Outfit', color: 'var(--primary-deep)', margin: '4px 0 0' }}>
                      {stabilityScore}%
                    </h4>
                  </div>

                  {/* Metric 4: Recovery classification */}
                  <div style={{ background: 'var(--bg-white)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase' }}>Mobility Grade</span>
                    <h4 style={{ fontSize: '1.05rem', fontFamily: 'Outfit', color: grade.color, fontWeight: 800, margin: '10px 0 0', lineHeight: 1.2 }}>
                      {grade.label}
                    </h4>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', background: 'rgba(25, 183, 165, 0.08)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(25, 183, 165, 0.2)' }}>
                  <ShieldCheck size={20} color="var(--primary-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.9rem', color: 'var(--primary-deep)', margin: 0, fontWeight: 500 }}>
                    <strong>Clinical Insights:</strong> Standard physical rehab achieves up to a 98% reduction in muscle hypertonia (knots) and increases joint capsule elasticity, unlocking full range of motion.
                  </p>
                </div>
              </div>

              <a href="#appointment" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                <span>Achieve Fluid Movement</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3.5rem;
          align-items: center;
        }

        .slider-input::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--primary-teal);
          border: 3px solid var(--bg-white);
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: transform 0.2s;
        }
        
        .slider-input::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          background: var(--primary-deep);
        }

        @media (max-width: 991px) {
          .dashboard-container {
            padding: 2rem !important;
          }
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .report-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
