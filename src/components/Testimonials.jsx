import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Heart } from 'lucide-react';
import useIntersection from '../hooks/useIntersection';

export default function Testimonials() {
  const [ref, isVisible] = useIntersection({ triggerOnce: true, threshold: 0.1 });
  const [activeSlide, setActiveSlide] = useState(0);

  const reviews = [
    {
      name: 'Tariq Al-Mansoori',
      location: 'Dubai Marina, UAE',
      condition: 'Chronic L4-L5 Herniated Disc',
      avatarGradient: 'linear-gradient(135deg, #0F4C81 0%, #1D3557 100%)',
      initials: 'TA',
      quote: 'I suffered from back stiffness for three years and had given up playing golf entirely. Dr. Ravi designed a specialized manual therapy and structural strengthening program for me. Within six weeks, I was moving freely and returned to the golf course completely pain-free. Absolutely world-class care!',
      rating: 5,
    },
    {
      name: 'Sarah Mitchell',
      location: 'Abu Dhabi, UAE',
      condition: 'Runner’s Knee & Ligament Strain',
      avatarGradient: 'linear-gradient(135deg, #19B7A5 0%, #139082 100%)',
      initials: 'SM',
      quote: 'Training for the Dubai Marathon was interrupted by intense knee joint pain. The sports rehabilitation and ultrasound therapies here worked wonders. They analyzed my gait biomechanics and corrected my footing. I completed my marathon and set a new personal record!',
      rating: 5,
    },
    {
      name: 'Fatima Al-Hashimi',
      location: 'Jumeirah, Dubai',
      condition: 'Post-Op Knee Replacement Rehab',
      avatarGradient: 'linear-gradient(135deg, #FFB800 0%, #E0A100 100%)',
      initials: 'FA',
      quote: 'Following my knee replacement, I was highly anxious about walking. The patience and expertise of the physical therapists at Movement On Physio were outstanding. Their progressive, gentle approach took me from crutches to climbing stairs confidently. Best clinic in Dubai.',
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #F5F9FA 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
          <div className="badge" style={{ margin: '0 auto 1rem' }}>
            <Heart size={14} color="var(--primary-teal)" />
            <span>Success Stories</span>
          </div>
          <h2>Stories of Full Recovery</h2>
          <p>
            Real feedback from premium patients who recovered their mobility, athletic performance, and active lifestyles through our personalized care.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={`carousel-wrapper reveal ${isVisible ? 'active' : ''}`}
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            background: 'var(--bg-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '4rem 3rem 3rem',
            boxShadow: 'var(--shadow-premium)',
            border: '1px solid rgba(15, 76, 129, 0.05)',
          }}
        >
          {/* Quote mark decorator */}
          <div
            style={{
              position: 'absolute',
              top: '2.5rem',
              left: '3rem',
              color: 'rgba(25, 183, 165, 0.08)',
              zIndex: 1,
            }}
          >
            <Quote size={80} fill="currentColor" stroke="none" />
          </div>

          {/* Active Review Card */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Rating stars & verified badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {[...Array(reviews[activeSlide].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#EBF8F7', color: 'var(--primary-teal)', padding: '0.35rem 0.85rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700 }}>
                  <CheckCircle2 size={14} />
                  <span>Verified Recovery Case</span>
                </div>
              </div>

              {/* Quote narrative text */}
              <p
                style={{
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: 'var(--text-dark)',
                  marginBottom: '2.5rem',
                  fontWeight: 500,
                  transition: 'opacity 0.3s ease',
                }}
              >
                “{reviews[activeSlide].quote}”
              </p>
            </div>

            {/* Author Profile block */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Styled initial Avatar */}
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: reviews[activeSlide].avatarGradient,
                    color: 'var(--text-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Outfit',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {reviews[activeSlide].initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', margin: 0, fontWeight: 700 }}>
                    {reviews[activeSlide].name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '2px 0 0' }}>
                    {reviews[activeSlide].location}
                  </p>
                </div>
              </div>

              {/* Patient Diagnosis */}
              <div style={{ background: 'var(--bg-light)', padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', display: 'block', letterSpacing: '0.5px' }}>
                  Successfully Treated For:
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-deep)' }}>
                  {reviews[activeSlide].condition}
                </span>
              </div>
            </div>
          </div>

          {/* Carousel Side Controls */}
          <div
            className="carousel-controls"
            style={{
              position: 'absolute',
              bottom: '3rem',
              right: '3rem',
              display: 'flex',
              gap: '0.75rem',
              zIndex: 10,
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-white)',
                color: 'var(--primary-deep)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              className="carousel-btn"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-white)',
                color: 'var(--primary-deep)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              className="carousel-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              style={{
                width: activeSlide === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: activeSlide === idx ? 'var(--primary-teal)' : '#D0D6DC',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .carousel-btn:hover {
          background: var(--primary-deep) !important;
          color: var(--text-white) !important;
          border-color: var(--primary-deep) !important;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .carousel-wrapper {
            padding: 3rem 1.5rem !important;
          }
          
          .carousel-controls {
            position: static !important;
            margin-top: 2rem;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
