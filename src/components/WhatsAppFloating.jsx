import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  return (
    <>
      <a
        href="https://wa.me/97143456789"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
          zIndex: 999,
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
        className="whatsapp-float animate-wiggle"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="#FFFFFF" color="#25D366" />
      </a>

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0); }
          15% { transform: rotate(-10deg) scale(1.08); }
          30% { transform: rotate(12deg) scale(1.08); }
          45% { transform: rotate(-8deg) scale(1.08); }
          60% { transform: rotate(8deg) scale(1.08); }
          75% { transform: rotate(-4deg) scale(1.08); }
          90% { transform: rotate(4deg) scale(1.08); }
        }

        .animate-wiggle {
          animation: wiggle 5s ease-in-out infinite;
        }

        .whatsapp-float:hover {
          background-color: #128C7E !important;
          transform: translateY(-5px) scale(1.1) !important;
          box-shadow: 0 12px 30px rgba(18, 140, 126, 0.4) !important;
        }
      `}</style>
    </>
  );
}
