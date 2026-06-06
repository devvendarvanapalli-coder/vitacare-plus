/* VitaCare Plus — Admin dashboard: Users screen (patients + doctors) */

const PATIENTS = [
  { name:'Rohan Kapoor',  phone:'+91 98765 43210', conditions:['Diabetes','Hypertension'], plan:'Gold',     lastActive:'Today',      status:'active' },
  { name:'Anjali Mehta',  phone:'+91 91234 56789', conditions:['Anemia','Vitamin D'],      plan:'Silver',   lastActive:'Yesterday',  status:'active' },
  { name:'Vikram Nair',   phone:'+91 99988 77666', conditions:['Diabetes','Arthritis'],    plan:'Platinum', lastActive:'2 days ago', status:'active' },
  { name:'Sunita Verma',  phone:'+91 77654 32109', conditions:['Arthritis'],               plan:'Silver',   lastActive:'5 days ago', status:'active' },
  { name:'Suresh Kumar',  phone:'+91 88001 23456', conditions:['Diabetes'],                plan:'Gold',     lastActive:'Today',      status:'active' },
  { name:'Preethi Rajan', phone:'+91 90012 34567', conditions:['Hypertension'],            plan:'Silver',   lastActive:'3 days ago', status:'inactive' },
];

const DOCTORS = [
  { name:'Dr. Priya Sharma',  spec:'Diabetologist',    patients:127, rating:'4.9', status:'active',   joined:'Jan 2023' },
  { name:'Dr. Rajesh Gupta',  spec:'Cardiologist',     patients:89,  rating:'4.7', status:'active',   joined:'Mar 2023' },
  { name:'Dr. Amara Singh',   spec:'Orthopaedic',      patients:61,  rating:'4.8', status:'active',   joined:'Jun 2023' },
  { name:'Dr. Kavya Reddy',   spec:'Gynaecologist',    patients:74,  rating:'4.6', status:'active',   joined:'Sep 2023' },
  { name:'Dr. Arjun Mehta',   spec:'Dermatologist',    patients:43,  rating:'4.5', status:'inactive', joined:'Dec 2023' },
];

const PLAN_COLORS = { Gold:'var(--gold)', Silver:'var(--vc-slate-400,#94A3B8)', Platinum:'#818CF8' };

function UsersScreen() {
  const [activeTab, setActiveTab] = React.useState('patients');
  const [query, setQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');

  const filteredPatients = PATIENTS.filter(p =>
    (!query || p.name.toLowerCase().includes(query.toLowerCase()) || p.phone.includes(query)) &&
    (statusFilter === 'all' || p.status === statusFilter)
  );

  const filteredDoctors = DOCTORS.filter(d =>
    (!query || d.name.toLowerCase().includes(query.toLowerCase()) || d.spec.toLowerCase().includes(query.toLowerCase())) &&
    (statusFilter === 'all' || d.status === statusFilter)
  );

  return (
    <div style={{ padding: '28px 28px 40px', overflowY: 'auto', height: '100%', boxSizing: 'border-box' }}>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5 }}>Users</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
            {PATIENTS.length} patients · {DOCTORS.length} doctors
          </div>
        </div>
        <button style={{ appearance: 'none', background: 'var(--grad-primary)', border: 'none', borderRadius: 'var(--r-lg)', padding: '10px 20px', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--shadow-primary)' }}>
          <span className="iconify" data-icon="material-symbols:person-add-rounded" style={{ fontSize: 18 }} />
          Add User
        </button>
      </div>

      {/* Tabs + search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', background: 'var(--card)', borderRadius: 'var(--r-lg)', padding: 4, boxShadow: 'var(--shadow-card)' }}>
          {['patients','doctors'].map(t => (
            <button key={t} onClick={() => { setActiveTab(t); setQuery(''); }}
              style={{ appearance: 'none', border: 'none', cursor: 'pointer', padding: '8px 20px', borderRadius: 10, fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, transition: 'all var(--dur-medium) var(--ease-std)',
                background: activeTab === t ? 'var(--primary)' : 'transparent',
                color: activeTab === t ? '#fff' : 'var(--text-secondary)',
                boxShadow: activeTab === t ? 'var(--shadow-primary)' : 'none',
              }}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
          <span className="iconify" data-icon="material-symbols:search-rounded" style={{ fontSize: 18, color: 'var(--text-secondary)', position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
          <input value={query} onChange={e => setQuery(e.target.value)}
            placeholder={`Search ${activeTab}…`}
            style={{ width: '100%', boxSizing: 'border-box', height: 44, paddingLeft: 40, paddingRight: 14, border: '1.5px solid var(--border)', borderRadius: 'var(--r-lg)', background: 'var(--surface)', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-primary)', outline: 'none' }}
            onFocus={e => e.target.style.borderColor = 'var(--primary)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['all','active','inactive'].map(s => (
            <button key={s} onClick={() => setStatusFilter(s)}
              style={{ appearance: 'none', border: `1.5px solid ${statusFilter === s ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 'var(--r-pill)', padding: '7px 14px', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, background: statusFilter === s ? 'color-mix(in srgb, var(--primary) 10%, transparent)' : 'var(--surface)', color: statusFilter === s ? 'var(--primary)' : 'var(--text-primary)', transition: 'all var(--dur-medium) var(--ease-std)' }}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ background: 'var(--card)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
        {activeTab === 'patients' ? (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)' }}>
                {['Patient','Phone','Conditions','Plan','Last Active','Status',''].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((p, i) => (
                <tr key={i} style={{ borderBottom: i < filteredPatients.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}>
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--r-md)', background: 'var(--grad-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
                        {p.name.split(' ').map(w => w[0]).join('').slice(0,2)}
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 13, color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>{p.phone}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {p.conditions.map(c => <span key={c} style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 'var(--r-pill)', background: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)' }}>{c}</span>)}
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: PLAN_COLORS[p.plan] }}>{p.plan}</span>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 13, color: 'var(--text-secondary)' }}>{p.lastActive}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 'var(--r-pill)', background: `color-mix(in srgb, ${p.status === 'active' ? 'var(--success)' : 'var(--text-hint)'} 10%, transparent)`, color: p.status === 'active' ? 'var(--success)' : 'var(--text-hint)' }}>
                      {p.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <button style={{ appearance: 'none', background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)' }}>
                {['Doctor','Specialization','Patients','Rating','Status','Joined',''].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.map((d, i) => (
                <tr key={i} style={{ borderBottom: i < filteredDoctors.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}>
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--r-md)', background: 'var(--grad-teal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
                        {d.name.replace('Dr. ','').split(' ').map(w=>w[0]).join('').slice(0,2)}
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{d.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 13, color: 'var(--text-secondary)' }}>{d.spec}</td>
                  <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{d.patients}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: 'var(--gold)' }}>
                      <span className="iconify" data-icon="material-symbols:star-rounded" style={{ fontSize: 14 }} />
                      {d.rating}
                    </span>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 'var(--r-pill)', background: `color-mix(in srgb, ${d.status === 'active' ? 'var(--success)' : 'var(--text-hint)'} 10%, transparent)`, color: d.status === 'active' ? 'var(--success)' : 'var(--text-hint)' }}>
                      {d.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 13, color: 'var(--text-secondary)' }}>{d.joined}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <button style={{ appearance: 'none', background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { UsersScreen });
