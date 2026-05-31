import React from 'react';
import { Calendar, UserCheck, Award, Star, Activity, Heart, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8.5rem 0 6rem',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F9FA 50%, #EBF8F7 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Blur Spheres */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'rgba(25, 183, 165, 0.08)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'rgba(15, 76, 129, 0.06)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-content">
            <div className="badge">
              <Activity size={14} color="var(--primary-teal)" />
              <span>Premium UAE Clinical Care</span>
            </div>

            <h1
              style={{
                fontSize: '3.6rem',
                fontFamily: 'Outfit',
                fontWeight: 800,
                color: 'var(--text-dark)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                letterSpacing: '-1.5px',
              }}
            >
              Destination for <br />
              <span className="title-gradient">Expert Back Pain</span> <br />
              & Physiotherapy Care
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-body)',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
                maxWidth: '560px',
              }}
            >
              Empowering You to Move Freely, Embrace an Active Lifestyle, and Thrive Pain-Free. Experience world-class rehabilitation customized for your unique body.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem' }}>
              <a href="#appointment" className="btn btn-primary" style={{ padding: '1rem 2.25rem' }}>
                <Calendar size={20} />
                <span>Book Appointment</span>
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ padding: '1rem 2.25rem' }}>
                <span>Contact Specialist</span>
              </a>
            </div>

            {/* Google Rating Trust Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
                ))}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '0.95rem', margin: 0 }}>
                  Excellent 4.9/5 stars
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: 0 }}>
                  Based on 450+ patient reviews in UAE
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Image & Floating Badges */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            <div className="image-frame-container">
              {/* Animated Floating Medical Shapes */}
              <div className="floating-icon icon-heart animate-float" style={{ top: '15%', left: '-5%' }}>
                <Heart size={20} fill="var(--primary-teal)" color="var(--primary-teal)" />
              </div>
              <div className="floating-icon icon-activity animate-float-delayed" style={{ bottom: '15%', right: '-8%' }}>
                <Activity size={24} color="var(--primary-deep)" />
              </div>
              <div className="floating-icon icon-shield animate-float" style={{ top: '55%', left: '-12%' }}>
                <ShieldCheck size={22} color="var(--primary-teal)" />
              </div>

              {/* Main Professional Physiotherapy Image */}
              <div className="image-frame">
                <img
                  src="/hero_physio.png"
                  alt="Professional physiotherapist providing physical back rehabilitation care to a patient"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    boxShadow: 'var(--shadow-premium)',
                  }}
                />
              </div>

              {/* Floating Trust Badge 1: 10+ Years */}
              <div className="floating-badge badge-1 animate-float">
                <div className="badge-icon" style={{ background: '#FFF0F5' }}>
                  <Award size={20} color="#FF2D55" />
                </div>
                <div>
                  <h4>10+ Years</h4>
                  <p>Clinical Experience</p>
                </div>
              </div>

              {/* Floating Trust Badge 2: 60-70% Cases Solved */}
              <div className="floating-badge badge-2 animate-float-delayed">
                <div className="badge-icon" style={{ background: '#EBF8F7' }}>
                  <Activity size={20} color="var(--primary-teal)" />
                </div>
                <div>
                  <h4>60-70%</h4>
                  <p>Cases Fully Solved</p>
                </div>
              </div>

              {/* Floating Trust Badge 3: Licensed Specialists */}
              <div className="floating-badge badge-3 animate-float">
                <div className="badge-icon" style={{ background: '#EEF2F6' }}>
                  <UserCheck size={20} color="var(--primary-deep)" />
                </div>
                <div>
                  <h4>Licensed</h4>
                  <p>DHA / MOH Specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          position: relative;
          z-index: 10;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-frame-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 520px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-frame {
          width: 90%;
          height: 95%;
          border-radius: 28px;
          overflow: hidden;
          border: 4px solid var(--bg-white);
          box-shadow: var(--shadow-premium);
          background: var(--bg-light);
        }

        /* Floating Medical Icons */
        .floating-icon {
          position: absolute;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-white);
          box-shadow: var(--shadow-md);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 15;
          border: 1px solid rgba(25, 183, 165, 0.1);
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: var(--shadow-lg);
          padding: 0.8rem 1.25rem;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          z-index: 20;
          min-width: 200px;
        }

        .badge-1 {
          top: 10%;
          right: -10%;
        }

        .badge-2 {
          bottom: 30%;
          left: -15%;
        }

        .badge-3 {
          bottom: 5%;
          right: -5%;
        }

        .badge-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-badge h4 {
          font-size: 1.05rem;
          color: var(--text-dark);
          margin: 0;
          font-weight: 700;
        }

        .floating-badge p {
          font-size: 0.75rem;
          color: var(--text-light);
          margin: 0;
          font-weight: 500;
        }

        /* Responsive Layouts */
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
            text-align: center;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-content div {
            justify-content: center;
          }

          .image-frame-container {
            height: 480px;
            max-width: 420px;
            margin: 0 auto;
          }

          .badge-1 {
            right: -5%;
          }

          .badge-2 {
            left: -10%;
          }

          .badge-3 {
            right: -2%;
          }
        }

        @media (max-width: 576px) {
          .image-frame-container {
            height: 400px;
          }

          .floating-badge {
            min-width: 170px;
            padding: 0.6rem 0.9rem;
          }

          .badge-1 {
            top: 5%;
            right: -5%;
          }

          .badge-2 {
            left: -8%;
            bottom: 25%;
          }

          .badge-3 {
            bottom: 2%;
            right: -2%;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
