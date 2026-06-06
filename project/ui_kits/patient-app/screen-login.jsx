/* VitaCare Plus — Login screen (animated radial bg + decorative circles + logo). */

function LoginScreen({ onLogin }) {
  const [mobile, setMobile] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const doLogin = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 900);
  };
  const demo = () => { setMobile('9999999999'); setPass('Demo@1234'); setTimeout(doLogin, 150); };

  return (
    <div style={{ minHeight: '100%', position: 'relative', background: 'radial-gradient(120% 90% at 25% 8%, var(--primary-surface) 0%, var(--bg) 60%)', overflow: 'hidden' }}>
      {/* decorative circles */}
      <div style={{ position: 'absolute', top: -100, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(37,99,235,0.12)' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(13,148,136,0.10)' }} />

      <div style={{ position: 'relative', padding: '52px 24px 32px', display: 'flex', flexDirection: 'column' }}>
        {/* logo */}
        <div style={{ textAlign: 'center', marginBottom: 40, animation: 'vcpop .8s cubic-bezier(.2,1.3,.4,1) both' }}>
          <div style={{ width: 72, height: 72, borderRadius: 'var(--r-2xl)', background: 'var(--grad-primary)', boxShadow: '0 8px 20px rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="favorite" size={36} fill={1} color="#fff" />
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.5, marginTop: 12 }}>VitaCare Plus</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', letterSpacing: 0.5 }}>Premium Healthcare</div>
        </div>

        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.2 }}>Welcome back</div>
        <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 6 }}>Sign in to continue your health journey</div>

        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Field label="Mobile Number" icon="phone" prefix="+91" value={mobile} onChange={setMobile} placeholder="9876543210" />
          <Field label="Password" icon="lock" type="password" value={pass} onChange={setPass} placeholder="Enter your password" />
        </div>

        <div style={{ textAlign: 'right', marginTop: 12 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)', cursor: 'pointer' }}>Forgot Password?</span>
        </div>

        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Button variant="primary" size="lg" fullWidth loading={loading} onClick={doLogin}>Sign In</Button>
          <Button variant="outlined" fullWidth onClick={demo}>Demo: Login as Patient</Button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32, fontSize: 13, color: 'var(--text-secondary)' }}>
          Don't have an account? <span style={{ color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}>Register</span>
        </div>
      </div>
    </div>
  );
}

function Field({ label, icon, prefix, type, value, onChange, placeholder }) {
  const [focus, setFocus] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const isPw = type === 'password';
  return (
    <label style={{ display: 'block' }}>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 6 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 50, padding: '0 14px', background: 'var(--bg)', borderRadius: 'var(--r-lg)', border: `${focus ? 2 : 1}px solid ${focus ? 'var(--primary)' : 'var(--border)'}`, transition: 'border var(--dur-medium)' }}>
        <Icon name={icon} size={20} color="var(--text-secondary)" />
        {prefix && <span style={{ fontSize: 14, fontWeight: 600 }}>{prefix}</span>}
        <input
          value={value} onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          type={isPw && !show ? 'password' : 'text'} placeholder={placeholder}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-primary)', minWidth: 0 }}
        />
        {isPw && <Icon name={show ? 'visibility' : 'visibility_off'} size={20} color="var(--text-secondary)" style={{ cursor: 'pointer' }} onClick={() => setShow(!show)} />}
      </div>
    </label>
  );
}

Object.assign(window, { LoginScreen });
