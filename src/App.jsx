import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './components/Icon';
import { Card } from './components/Card';

const TILES = [
  {
    path: '/patient',
    icon: 'favorite',
    iconColor: '#2563EB',
    gradient: 'primary',
    title: 'Patient App',
    description: 'Mobile health companion with medication tracking, appointments, and health modules.',
  },
  {
    path: '/doctor',
    icon: 'medical_services',
    iconColor: '#0D9488',
    gradient: 'teal',
    title: 'Doctor App',
    description: 'Clinical dashboard for managing schedules, patients, and prescriptions.',
  },
  {
    path: '/admin',
    icon: 'admin_panel_settings',
    iconColor: '#7C3AED',
    gradient: null,
    title: 'Admin Dashboard',
    description: 'Full-screen web dashboard for platform management, users, and analytics.',
  },
];

export default function App() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      background: 'radial-gradient(120% 90% at 25% 8%, var(--primary-surface) 0%, var(--bg) 60%)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: -120, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(37,99,235,0.10)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(13,148,136,0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', right: '15%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(37,99,235,0.06)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '64px 24px 80px' }}>
        {/* Logo + header */}
        <div style={{ textAlign: 'center', marginBottom: 56, animation: 'vcpop .8s cubic-bezier(.2,1.3,.4,1) both' }}>
          <div style={{
            width: 80, height: 80, borderRadius: 'var(--r-2xl)',
            background: 'var(--grad-primary)',
            boxShadow: '0 12px 28px rgba(37,99,235,0.35)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 20,
          }}>
            <Icon name="favorite" size={40} fill={1} color="#fff" />
          </div>
          <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1, color: 'var(--text-primary)', lineHeight: 1.1 }}>
            VitaCare Plus
          </div>
          <div style={{ fontSize: 16, color: 'var(--text-secondary)', marginTop: 10, letterSpacing: 0.2 }}>
            Premium Healthcare Design System
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '6px 14px', borderRadius: 'var(--r-pill)', background: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)' }} />
              DESIGN SYSTEM v1.0
            </span>
          </div>
        </div>

        {/* App tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {TILES.map((tile) => (
            <Card
              key={tile.path}
              onClick={() => navigate(tile.path)}
              padding={24}
              radius={20}
              style={{ animation: 'vcpop .8s cubic-bezier(.2,1.3,.4,1) both' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 'var(--r-xl)',
                  background: `color-mix(in srgb, ${tile.iconColor} 12%, transparent)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon name={tile.icon} size={26} color={tile.iconColor} fill={1} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.3, color: 'var(--text-primary)' }}>
                    {tile.title}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 20px', minHeight: 60 }}>
                {tile.description}
              </p>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 14, fontWeight: 700, color: tile.iconColor,
              }}>
                Launch <Icon name="arrow_forward" size={16} color={tile.iconColor} />
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 60, fontSize: 12, color: 'var(--text-hint)' }}>
          VitaCare Plus Design System · Built with React + Vite
        </div>
      </div>
    </div>
  );
}
