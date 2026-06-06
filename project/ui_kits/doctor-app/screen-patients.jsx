/* VitaCare Plus — Doctor app: Patient list screen */

const DR_PATIENTS = [
  { initials:'RK', name:'Rohan Kapoor',  age:34, gender:'M', conditions:['Diabetes','Hypertension'], lastVisit:'2 days ago', metricLabel:'HbA1c',     metricValue:'6.8%',      gradient:'primary' },
  { initials:'AM', name:'Anjali Mehta',  age:28, gender:'F', conditions:['Anemia','Vitamin D'],      lastVisit:'1 week ago', metricLabel:'Hb',         metricValue:'10.2 g/dL', gradient:'teal' },
  { initials:'VN', name:'Vikram Nair',   age:52, gender:'M', conditions:['Diabetes','Arthritis'],    lastVisit:'3 days ago', metricLabel:'HbA1c',     metricValue:'8.1%',      gradient:'gold' },
  { initials:'SV', name:'Sunita Verma',  age:61, gender:'F', conditions:['Arthritis'],               lastVisit:'2 weeks ago',metricLabel:'Pain Score', metricValue:'6/10',      gradient:'primary' },
  { initials:'SK', name:'Suresh Kumar',  age:45, gender:'M', conditions:['Diabetes'],                lastVisit:'Today',      metricLabel:'Glucose',   metricValue:'148 mg/dL', gradient:'teal' },
  { initials:'PR', name:'Preethi Rajan', age:38, gender:'F', conditions:['Hypertension','Anemia'],   lastVisit:'Today',      metricLabel:'BP',         metricValue:'138/88',    gradient:'primary' },
];

const FILTERS = ['All', 'Diabetes', 'Anemia', 'Arthritis', 'Vitamin D', 'Hypertension'];

function PatientsScreen({ onOpenConsultation }) {
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState('All');

  const visible = DR_PATIENTS.filter(p => {
    const matchQuery = !query || p.name.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === 'All' || p.conditions.includes(filter);
    return matchQuery && matchFilter;
  });

  return (
    <div style={{ paddingBottom: 24 }}>
      {/* Header */}
      <div style={{ padding: '14px 20px 8px' }}>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.3, marginBottom: 14 }}>Patients</div>
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by name or condition…"
          leadingIcon="search"
          trailingIcon={query ? 'close' : ''}
        />
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '8px 20px', scrollbarWidth: 'none' }}>
        {FILTERS.map(f => (
          <Chip key={f} selected={filter === f} onClick={() => setFilter(f)} style={{ flexShrink: 0 }}>{f}</Chip>
        ))}
      </div>

      {/* Count */}
      <div style={{ padding: '4px 20px 8px', fontSize: 12, color: 'var(--text-secondary)' }}>
        {visible.length} patient{visible.length !== 1 ? 's' : ''}
      </div>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 20px' }}>
        {visible.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
            No patients match your search
          </div>
        ) : visible.map(p => (
          <PatientRow key={p.name} {...p} onTap={() => onOpenConsultation(p)} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { PatientsScreen });
