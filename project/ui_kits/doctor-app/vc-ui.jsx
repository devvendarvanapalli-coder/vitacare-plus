/* VitaCare Plus — Doctor UI kit primitives
 * Self-contained clone of components/core/* plus doctor-specific widgets.
 * Mirrors Flutter app styling 1:1. Iconify must be loaded before this file. */

// ── Shared icon helper ───────────────────────────────────────────────────────
const VC_FILLED = new Set(['trending_up','trending_down','trending_flat','add','arrow_back',
  'chevron_right','close','sos','logout','wifi_calling_3','workspace_premium']);

function vcIcon(name, fill) {
  const base = name.replace(/_/g, '-');
  const filled = fill || VC_FILLED.has(name);
  return `material-symbols:${base}${filled ? '-rounded' : '-outline-rounded'}`;
}

function Icon({ name, size = 22, fill = false, color = 'currentColor', style = {}, onClick }) {
  return (
    <span className="iconify" data-icon={vcIcon(name, fill)} onClick={onClick}
      style={{ fontSize: size, lineHeight: 0, color, flexShrink: 0, display: 'inline-flex', ...style }} />
  );
}

// ── Primitives ───────────────────────────────────────────────────────────────
function Button({ children, variant = 'primary', size = 'md', fullWidth, loading, disabled, leadingIcon, trailingIcon, onClick, style = {} }) {
  const [p, setP] = React.useState(false);
  const off = disabled || loading;
  const H = { sm: 40, md: 52, lg: 54 }[size];
  const fills = {
    primary:  { background: 'var(--grad-primary)', color: '#fff', boxShadow: 'var(--shadow-primary)' },
    secondary:{ background: 'var(--grad-teal)', color: '#fff' },
    danger:   { background: 'var(--grad-sos)', color: '#fff', boxShadow: 'var(--shadow-sos)' },
    outlined: { background: 'transparent', color: 'var(--primary)', border: '1.5px solid var(--primary)' },
    ghost:    { background: 'transparent', color: 'var(--primary)' },
  }[variant];
  return (
    <button onClick={off ? undefined : onClick}
      onPointerDown={() => setP(true)} onPointerUp={() => setP(false)} onPointerLeave={() => setP(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        width: fullWidth ? '100%' : 'auto', height: H, padding: '0 24px',
        borderRadius: 'var(--r-lg)', border: 'none', fontFamily: 'var(--font-sans)',
        fontSize: size === 'sm' ? 14 : 15, fontWeight: 600, letterSpacing: 'var(--ls-button)',
        cursor: off ? 'default' : 'pointer', WebkitTapHighlightColor: 'transparent',
        transition: 'transform var(--dur-fast) var(--ease-std)',
        transform: p && !off ? 'scale(0.97)' : 'scale(1)',
        ...(off ? { background: 'rgba(15,23,42,0.12)', color: 'rgba(15,23,42,0.38)', boxShadow: 'none' } : fills),
        ...style,
      }}>
      {loading ? <span style={{ width:18,height:18,border:'2px solid rgba(255,255,255,0.4)',borderTopColor:'#fff',borderRadius:'50%',display:'inline-block',animation:'vcspin .7s linear infinite' }}/> :
        <>{leadingIcon && <Icon name={leadingIcon} size={18}/>}<span>{children}</span>{trailingIcon && <Icon name={trailingIcon} size={18}/>}</>}
    </button>
  );
}

function Card({ children, gradient, padding = 16, radius = 16, onClick, style = {} }) {
  const [p, setP] = React.useState(false);
  const press = typeof onClick === 'function';
  const grads = { primary:'var(--grad-primary)', teal:'var(--grad-teal)', gold:'var(--grad-gold)', sos:'var(--grad-sos)' };
  const glow  = { primary:'var(--shadow-primary)', teal:'0 4px 16px rgba(13,148,136,.3)', gold:'var(--shadow-gold)', sos:'var(--shadow-sos)' };
  return (
    <div onClick={onClick}
      onPointerDown={() => press && setP(true)} onPointerUp={() => setP(false)} onPointerLeave={() => setP(false)}
      style={{ borderRadius:radius, padding, boxSizing:'border-box',
        background: gradient ? grads[gradient] : 'var(--card)',
        color: gradient ? '#fff' : 'var(--text-primary)',
        boxShadow: gradient ? glow[gradient] : 'var(--shadow-card)',
        cursor: press ? 'pointer' : 'default', WebkitTapHighlightColor:'transparent',
        transition:'transform var(--dur-base) var(--ease-std)',
        transform: p && press ? 'scale(0.98)' : 'scale(1)',
        ...style,
      }}>
      {children}
    </div>
  );
}

function Badge({ children, status = 'info', dot = true, style = {} }) {
  const c = { info:'var(--primary)', success:'var(--success)', normal:'var(--success)', warning:'var(--warning)', critical:'var(--error)', error:'var(--error)', gold:'var(--gold)' }[status] || 'var(--primary)';
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:5, padding:'4px 10px', borderRadius:'var(--r-pill)', background:`color-mix(in srgb, ${c} 10%, transparent)`, color:c, fontSize:11, fontWeight:600, whiteSpace:'nowrap', ...style }}>
      {dot && <span style={{ width:6, height:6, borderRadius:'50%', background:c }} />}
      {children}
    </span>
  );
}

function Avatar({ initials = 'U', src, size = 42, shape = 'squircle', gradient = 'primary', style = {} }) {
  const grads = { primary:'var(--grad-primary)', teal:'var(--grad-teal)', gold:'var(--grad-gold)' };
  return (
    <div style={{ width:size, height:size, borderRadius: shape==='circle' ? '50%' : 'var(--r-lg)',
      background: src ? `center/cover url(${src})` : grads[gradient],
      color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
      fontWeight:700, fontSize:size*0.34, flexShrink:0, overflow:'hidden', ...style }}>
      {!src && (initials||'U')}
    </div>
  );
}

function Chip({ children, selected, color = 'primary', onClick, style = {} }) {
  const c = color==='secondary' ? 'var(--secondary)' : 'var(--primary)';
  return (
    <button onClick={onClick} style={{ appearance:'none', fontFamily:'var(--font-sans)', fontSize:13, fontWeight:500, padding:'8px 14px', borderRadius:'var(--r-pill)', cursor:'pointer', transition:'all var(--dur-medium) var(--ease-std)', background: selected ? `color-mix(in srgb, ${c} 10%, transparent)` : 'var(--surface)', border:`${selected?1.5:1}px solid ${selected ? c : 'var(--border)'}`, color: selected ? c : 'var(--text-primary)', WebkitTapHighlightColor:'transparent', ...style }}>
      {children}
    </button>
  );
}

function Input({ label, value, onChange, placeholder, type='text', helper, error, leadingIcon, trailingIcon, disabled=false, style={} }) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--border)';
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6, fontFamily:'var(--font-sans)', ...style }}>
      {label && <label style={{ fontSize:13, fontWeight:600, color: error ? 'var(--error)' : 'var(--text-primary)' }}>{label}</label>}
      <div style={{ display:'flex', alignItems:'center', gap:8, height:52, padding:'0 14px', borderRadius:'var(--r-lg)', border:`1.5px solid ${borderColor}`, background: disabled ? 'rgba(15,23,42,0.04)' : 'var(--surface)', transition:'border-color var(--dur-medium) var(--ease-std)', boxSizing:'border-box' }}>
        {leadingIcon && <Icon name={leadingIcon} size={20} color={focused ? 'var(--primary)' : 'var(--text-secondary)'} />}
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ flex:1, border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-sans)', fontSize:15, color:'var(--text-primary)' }} />
        {trailingIcon && <Icon name={trailingIcon} size={20} color="var(--text-secondary)" />}
      </div>
      {(helper||error) && <span style={{ fontSize:12, color: error ? 'var(--error)' : 'var(--text-secondary)' }}>{error||helper}</span>}
    </div>
  );
}

function SectionHeader({ title, action, onAction }) {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <span style={{ fontSize:18, fontWeight:600 }}>{title}</span>
      {action && <button onClick={onAction} style={{ appearance:'none', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-sans)', fontSize:12, fontWeight:600, color:'var(--primary)' }}>{action}</button>}
    </div>
  );
}

// ── Doctor-specific components ───────────────────────────────────────────────
function QuickStat({ value, label, color = 'var(--primary)' }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', padding:'12px 8px', background:'var(--card)', borderRadius:'var(--r-card)', boxShadow:'var(--shadow-card)' }}>
      <span style={{ fontSize:24, fontWeight:800, letterSpacing:-0.5, color, fontVariantNumeric:'tabular-nums' }}>{value}</span>
      <span style={{ fontSize:11, fontWeight:500, color:'var(--text-secondary)', marginTop:2, textAlign:'center' }}>{label}</span>
    </div>
  );
}

function AppointmentCard({ patient, initials, specialty, time, timeLabel = '', type = 'video', status = 'upcoming', onTap }) {
  const statusMap = { upcoming:['info','Upcoming'], done:['success','Done'], pending:['warning','Pending'] };
  const [st, stLabel] = statusMap[status] || statusMap.upcoming;
  return (
    <Card onClick={onTap} style={{ display:'flex', alignItems:'center', gap:12 }}>
      <Avatar initials={initials} size={46} gradient={status==='done' ? 'teal' : 'primary'} />
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:14, fontWeight:700, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{patient}</div>
        <div style={{ fontSize:12, color:'var(--text-secondary)' }}>{specialty}</div>
        <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:5 }}>
          <Icon name="schedule" size={12} color="var(--text-secondary)" />
          <span style={{ fontSize:11, fontWeight:600, color:'var(--primary)' }}>{time}</span>
          {timeLabel && <span style={{ fontSize:11, color:'var(--text-secondary)' }}>{timeLabel}</span>}
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6 }}>
        <Badge status={st} dot={false}>{stLabel}</Badge>
        <div style={{ display:'flex', alignItems:'center', gap:4 }}>
          <Icon name={type==='video' ? 'videocam' : 'local_hospital'} size={14} color="var(--text-secondary)" fill />
          <span style={{ fontSize:11, color:'var(--text-secondary)' }}>{type==='video' ? 'Video' : 'In-Clinic'}</span>
        </div>
      </div>
    </Card>
  );
}

function PatientRow({ initials, name, age, gender, conditions = [], lastVisit, metricLabel, metricValue, gradient = 'primary', onTap }) {
  return (
    <Card onClick={onTap} style={{ display:'flex', alignItems:'center', gap:12 }}>
      <Avatar initials={initials} size={46} gradient={gradient} />
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ fontSize:14, fontWeight:700 }}>{name}</span>
          <span style={{ fontSize:12, color:'var(--text-secondary)' }}>{age} · {gender}</span>
        </div>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:4 }}>
          {conditions.map(c => <Badge key={c} status="info" dot={false} style={{ fontSize:10, padding:'2px 8px' }}>{c}</Badge>)}
        </div>
        {lastVisit && <div style={{ fontSize:11, color:'var(--text-secondary)', marginTop:4 }}>Last visit: {lastVisit}</div>}
      </div>
      {metricLabel && (
        <div style={{ textAlign:'right', flexShrink:0 }}>
          <div style={{ fontSize:16, fontWeight:800, letterSpacing:-0.5, fontVariantNumeric:'tabular-nums' }}>{metricValue}</div>
          <div style={{ fontSize:10, color:'var(--text-secondary)' }}>{metricLabel}</div>
        </div>
      )}
      <Icon name="chevron_right" size={18} color="var(--text-hint)" />
    </Card>
  );
}

function VitalTile({ label, value, unit, icon, color }) {
  return (
    <div style={{ flex:1, minWidth:0, background:'var(--card)', borderRadius:'var(--r-card)', padding:'12px 10px', boxShadow:'var(--shadow-card)', display:'flex', flexDirection:'column', gap:4 }}>
      <div style={{ display:'flex', alignItems:'center', gap:6 }}>
        <div style={{ width:28, height:28, borderRadius:'var(--r-md)', background:`color-mix(in srgb, ${color} 12%, transparent)`, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Icon name={icon} size={15} color={color} fill />
        </div>
        <span style={{ fontSize:10, fontWeight:600, color:'var(--text-secondary)' }}>{label}</span>
      </div>
      <div style={{ display:'flex', alignItems:'flex-end', gap:2, marginTop:2 }}>
        <span style={{ fontSize:20, fontWeight:800, letterSpacing:-0.5, lineHeight:1, fontVariantNumeric:'tabular-nums' }}>{value}</span>
        <span style={{ fontSize:10, color:'var(--text-secondary)', paddingBottom:2 }}>{unit}</span>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Button, Card, Badge, Avatar, Chip, Input, SectionHeader, QuickStat, AppointmentCard, PatientRow, VitalTile });
