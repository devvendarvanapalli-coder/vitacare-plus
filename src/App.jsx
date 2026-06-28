import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './components/Icon';

const TILES = [
  {
    path: '/patient',
    icon: 'favorite',
    iconColor: '#2563EB',
    title: 'Patient App',
    description: 'Medication tracking, appointments, health modules, and emergency SOS.',
    tag: 'Mobile',
  },
  {
    path: '/doctor',
    icon: 'medical_services',
    iconColor: '#0D9488',
    title: 'Doctor App',
    description: 'Clinical dashboard for managing schedules, patients, and prescriptions.',
    tag: 'Mobile',
  },
  {
    path: '/admin',
    icon: 'admin_panel_settings',
    iconColor: '#6366F1',
    title: 'Admin Dashboard',
    description: 'Platform management, user analytics, and revenue overview.',
    tag: 'Web',
  },
];

export default function App() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'var(--font-sans)' }}>
      {/* Top bar */}
      <div style={{ borderBottom: '1px solid rgba(15,23,42,0.07)', padding: '0 32px', height: 56, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="favorite" size={16} fill={1} color="#fff" />
        </div>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.2 }}>VitaCare Plus</span>
        <span style={{ marginLeft: 8, fontSize: 11, fontWeight: 500, color: '#94A3B8', padding: '2px 8px', borderRadius: 999, border: '1px solid #E2E8F0' }}>v1.0</span>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '80px 32px 48px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(37,99,235,0.18)', background: 'rgba(37,99,235,0.05)', fontSize: 12, fontWeight: 500, color: '#2563EB', marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', opacity: 0.7 }} />
          Design System · Healthcare Platform
        </div>

        <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1.5, color: '#0F172A', lineHeight: 1.1, margin: '0 0 16px' }}>
          Premium Healthcare<br />for India
        </h1>
        <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.65, margin: 0, maxWidth: 480, marginInline: 'auto' }}>
          A unified platform for patients, doctors, and administrators. Built with React + Vite.
        </p>
      </div>

      {/* Tiles */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 32px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
        {TILES.map((tile) => (
          <button
            key={tile.path}
            onClick={() => navigate(tile.path)}
            style={{
              appearance: 'none', background: '#fff', border: '1px solid rgba(15,23,42,0.09)',
              borderRadius: 14, padding: 22, cursor: 'pointer', textAlign: 'left',
              transition: 'border-color 0.15s, box-shadow 0.15s',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = tile.iconColor; e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.06)`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(15,23,42,0.09)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `color-mix(in srgb, ${tile.iconColor} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={tile.icon} size={20} color={tile.iconColor} fill={1} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 500, color: '#94A3B8', padding: '3px 8px', borderRadius: 999, border: '1px solid #E2E8F0' }}>{tile.tag}</span>
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#0F172A', marginBottom: 6 }}>{tile.title}</div>
            <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.55 }}>{tile.description}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 18, fontSize: 13, fontWeight: 500, color: tile.iconColor }}>
              Open <Icon name="arrow_forward" size={14} color={tile.iconColor} />
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(15,23,42,0.07)', padding: '20px 32px', textAlign: 'center', fontSize: 12, color: '#94A3B8' }}>
        VitaCare Plus · Built with React + Vite
      </div>
    </div>
  );
}
