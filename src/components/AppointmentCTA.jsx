import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare, MapPin, Clock, CheckCircle } from 'lucide-react';
import useIntersection from '../hooks/useIntersection';

export default function AppointmentCTA() {
  const [ref, isVisible] = useIntersection({ triggerOnce: true, threshold: 0.1 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: 'Back & Neck Pain',
    date: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out your Name and Phone Number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section
      id="appointment"
      ref={ref}
      className="section-padding"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F9FA 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          className={`appointment-banner reveal ${isVisible ? 'active' : ''}`}
          style={{
            background: 'var(--bg-dark-navy)',
            borderRadius: 'var(--radius-lg)',
            padding: '4rem',
            color: 'var(--text-white)',
            boxShadow: 'var(--shadow-premium)',
            border: '1px solid rgba(25, 183, 165, 0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle decoration bubbles */}
          <div
            style={{
              position: 'absolute',
              top: '-15%',
              right: '-10%',
              width: '350px',
              height: '350px',
              background: 'rgba(25, 183, 165, 0.15)',
              borderRadius: '50%',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />

          <div className="appointment-grid">
            {/* Left: Contact Info and timings */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2.5rem' }}>
              <div>
                <h2
                  style={{
                    color: 'var(--text-white)',
                    fontSize: '2.5rem',
                    fontFamily: 'Outfit',
                    fontWeight: 700,
                    marginBottom: '1rem',
                  }}
                >
                  Book Your Appointment Today
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '480px' }}>
                  Take the first step towards pain-free movement. Select a preferred date and our clinical specialist will call you immediately to confirm.
                </p>
              </div>

              {/* Quick Logistics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-teal)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-white)' }}>Clinic Location</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Sheikh Zayed Road, Dubai, UAE</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-teal)' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-white)' }}>Clinic Timing</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Mon - Sat: 8:00 AM - 9:00 PM | Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Call Actions */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+97143456789" className="btn btn-teal" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                  <Phone size={18} />
                  <span>Call +971 4 345 6789</span>
                </a>
                <a href="https://wa.me/97143456789" className="btn btn-secondary" style={{ border: 'none', background: '#25D366', color: '#FFFFFF', padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div style={{ background: 'var(--bg-dark-card)', borderRadius: '16px', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'var(--shadow-lg)' }}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle size={56} color="var(--primary-teal)" style={{ margin: '0 auto 1.5rem', display: 'block' }} />
                  <h3 style={{ color: 'var(--text-white)', fontSize: '1.5rem', fontFamily: 'Outfit', marginBottom: '0.75rem' }}>
                    Request Submitted!
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.name}</strong>. Our clinical specialist will call you at <strong>{formData.phone}</strong> within 15 minutes to finalize your consultation timing.
                  </p>
                  <button
                    onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', specialty: 'Back & Neck Pain', date: '' }); }}
                    className="btn btn-secondary"
                    style={{ marginTop: '1.5rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'Outfit', color: 'var(--text-white)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                    Request Consultation
                  </h3>

                  {/* Name field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Tariq Al-Mansoori"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.8rem 1rem', color: 'var(--text-white)', fontSize: '0.95rem', outline: 'none' }}
                      className="form-input"
                    />
                  </div>

                  {/* Phone field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.8rem 1rem', color: 'var(--text-white)', fontSize: '0.95rem', outline: 'none' }}
                      className="form-input"
                    />
                  </div>

                  {/* Specialty Dropdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Specialty Needed</label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      style={{ background: '#0F2A4A', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.8rem 1rem', color: 'var(--text-white)', fontSize: '0.95rem', outline: 'none' }}
                      className="form-input"
                    >
                      <option value="Back & Neck Pain">Back & Neck Pain</option>
                      <option value="Knee Pain Rehab">Knee Pain Rehab</option>
                      <option value="Shoulder Pain Therapy">Shoulder Pain Therapy</option>
                      <option value="Sports Injury Recovery">Sports Recovery</option>
                      <option value="Vertigo & Dizziness">Vertigo / Vestibular</option>
                      <option value="Post Surgery Rehab">Post Surgery Rehab</option>
                    </select>
                  </div>

                  {/* Date field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.8rem 1rem', color: 'var(--text-white)', fontSize: '0.95rem', outline: 'none' }}
                      className="form-input"
                    />
                  </div>

                  <button type="submit" className="btn btn-teal" style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem' }}>
                    <Calendar size={18} />
                    <span>Confirm Free Consultation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .appointment-banner {
          position: relative;
        }
        
        .appointment-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4.5rem;
          align-items: center;
          position: relative;
          z-index: 5;
        }

        .form-input:focus {
          border-color: var(--primary-teal) !important;
          box-shadow: 0 0 8px rgba(25, 183, 165, 0.25);
        }

        @media (max-width: 991px) {
          .appointment-banner {
            padding: 2.5rem !important;
          }
          
          .appointment-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}
