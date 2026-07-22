import React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import { Button } from '../../../components/Button';

const MOCK_REPORTS = [
  {
    id: 'cbc',
    name: 'CBC (Complete Blood Count)',
    date: '15 Jun 2025',
    status: 'analyzed',
    riskScore: 2,
    icon: 'bloodtype',
    color: '#DC2626',
    summary: 'Your haemoglobin is slightly below normal range. Iron supplementation may be beneficial.',
    markers: [
      { name: 'Haemoglobin', value: '11.8', unit: 'g/dL', normal: '13.5–17.5', status: 'low' },
      { name: 'WBC', value: '7.2', unit: 'K/µL', normal: '4.5–11.0', status: 'normal' },
      { name: 'Platelets', value: '245', unit: 'K/µL', normal: '150–400', status: 'normal' },
      { name: 'RBC', value: '4.1', unit: 'M/µL', normal: '4.7–6.1', status: 'low' },
    ],
  },
  {
    id: 'hba1c',
    name: 'HbA1c',
    date: '20 Jun 2025',
    status: 'analyzed',
    riskScore: 6,
    icon: 'water_drop',
    color: '#0D9488',
    summary: 'HbA1c at 6.8% is in the controlled range for a diabetic. Continue current management plan.',
    markers: [
      { name: 'HbA1c', value: '6.8', unit: '%', normal: '<5.7% (normal), 5.7–6.4% (pre-DM)', status: 'high' },
      { name: 'Est. Avg Glucose', value: '148', unit: 'mg/dL', normal: '70–100 (fasting)', status: 'high' },
    ],
  },
];

const UPLOAD_TYPES = ['CBC', 'HbA1c', 'Vitamin D', 'Lipid Panel', 'Thyroid (TSH)', 'Liver Function', 'Kidney Function'];

function RiskGauge({ score }) {
  const color = score <= 3 ? 'var(--success)' : score <= 6 ? 'var(--warning)' : 'var(--error)';
  const label = score <= 3 ? 'Low Risk' : score <= 6 ? 'Moderate' : 'High Risk';
  const pct = (score / 10) * 100;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'var(--border)', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 3, background: color, transition: 'width .5s' }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 800, color, minWidth: 70 }}>{label}</span>
    </div>
  );
}

function MarkerRow({ name, value, unit, normal, status }) {
  const color = status === 'normal' ? 'var(--success)' : status === 'low' ? 'var(--primary)' : 'var(--warning)';
  const icon = status === 'normal' ? 'check_circle' : status === 'low' ? 'arrow_downward' : 'arrow_upward';
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, paddingBottom: 12, borderBottom: '1px solid var(--border)', marginBottom: 12 }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: `color-mix(in srgb, ${color} 12%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name={icon} size={14} color={color} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>Normal: {normal}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <span style={{ fontSize: 15, fontWeight: 800, color }}>{value}</span>
        <span style={{ fontSize: 11, color: 'var(--text-secondary)', marginLeft: 3 }}>{unit}</span>
      </div>
    </div>
  );
}

function ReportCard({ report, onExpand }) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 42, height: 42, borderRadius: 'var(--r-xl)', background: `color-mix(in srgb, ${report.color} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={report.icon} size={20} color={report.color} fill={1} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700 }}>{report.name}</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>{report.date}</div>
        </div>
        <Badge status={report.riskScore <= 3 ? 'success' : report.riskScore <= 6 ? 'warning' : 'critical'}>
          {report.riskScore <= 3 ? 'Low Risk' : report.riskScore <= 6 ? 'Moderate' : 'High'}
        </Badge>
      </div>

      <div style={{ marginTop: 12 }}>
        <RiskGauge score={report.riskScore} />
      </div>

      <div style={{ marginTop: 10, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
        {report.summary}
      </div>

      {expanded && (
        <div style={{ marginTop: 14, borderTop: '1px solid var(--border)', paddingTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>Detailed Markers</div>
          {report.markers.map(m => (
            <MarkerRow key={m.name} {...m} />
          ))}
        </div>
      )}

      <button
        onClick={() => setExpanded(e => !e)}
        style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', width: '100%', marginTop: 10, padding: '8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--primary)' }}
      >
        {expanded ? 'Hide Markers' : 'View Detailed Markers'}
        <Icon name={expanded ? 'expand_less' : 'expand_more'} size={16} color="var(--primary)" />
      </button>
    </Card>
  );
}

export function HealthReportScreen({ onViewTrends }) {
  const [uploading, setUploading] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState('');
  const [processing, setProcessing] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleAnalyze = () => {
    if (!selectedType) return;
    setProcessing(true);
    setTimeout(() => { setProcessing(false); setDone(true); setUploading(false); }, 2200);
  };

  return (
    <div style={{ paddingBottom: 28 }}>
      {/* Header */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.3 }}>Health Reports</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Upload your lab report to get an instant AI-powered explanation and risk score.</div>
      </div>

      {/* Upload card */}
      {!uploading ? (
        <div
          onClick={() => setUploading(true)}
          style={{ margin: '16px 20px 0', border: '2px dashed color-mix(in srgb, var(--primary) 40%, transparent)', borderRadius: 'var(--r-xl)', padding: '28px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, cursor: 'pointer', background: 'color-mix(in srgb, var(--primary) 4%, transparent)', textAlign: 'center' }}
        >
          <div style={{ width: 60, height: 60, borderRadius: 'var(--r-2xl)', background: 'color-mix(in srgb, var(--primary) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="upload_file" size={30} color="var(--primary)" />
          </div>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Upload Lab Report</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>PDF or image · CBC, HbA1c, Vitamin D, and more</div>
          <span style={{ padding: '8px 24px', borderRadius: 'var(--r-pill)', background: 'var(--primary)', color: '#fff', fontSize: 13, fontWeight: 700 }}>Choose File</span>
        </div>
      ) : (
        <Card style={{ margin: '16px 20px 0' }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Select Report Type</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
            {UPLOAD_TYPES.map(t => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                style={{ appearance: 'none', padding: '7px 14px', borderRadius: 'var(--r-pill)', border: `1.5px solid ${selectedType === t ? 'var(--primary)' : 'var(--border)'}`, background: selectedType === t ? 'color-mix(in srgb, var(--primary) 10%, transparent)' : 'var(--bg)', color: selectedType === t ? 'var(--primary)' : 'var(--text-secondary)', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}
              >{t}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 'var(--r-lg)', background: 'var(--bg)', border: '1px solid var(--border)', marginBottom: 14 }}>
            <Icon name="description" size={20} color="var(--text-secondary)" />
            <span style={{ flex: 1, fontSize: 13, color: 'var(--text-secondary)' }}>report_jun_2025.pdf</span>
            <Icon name="check_circle" size={18} color="var(--success)" fill={1} />
          </div>
          <Button
            variant="primary"
            style={{ width: '100%' }}
            onClick={handleAnalyze}
            disabled={!selectedType || processing}
          >
            {processing ? (
              <><span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', animation: 'vcspin 0.8s linear infinite', marginRight: 8 }} />Analysing with AI...</>
            ) : 'Analyse Report'}
          </Button>
          {done && (
            <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', borderRadius: 'var(--r-lg)', background: 'color-mix(in srgb, var(--success) 10%, transparent)' }}>
              <Icon name="check_circle" size={16} color="var(--success)" fill={1} />
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--success)' }}>Report analysed and added below!</span>
            </div>
          )}
        </Card>
      )}

      {/* AI analysis info strip */}
      <div style={{ margin: '14px 20px 0', padding: '10px 14px', borderRadius: 'var(--r-lg)', background: 'color-mix(in srgb, var(--secondary) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--secondary) 20%, transparent)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Icon name="auto_awesome" size={18} color="var(--secondary)" fill={1} />
        <span style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.4, flex: 1 }}>
          AI analysis explains your report in simple language and flags values outside normal ranges.
        </span>
      </div>

      {/* View Trends CTA */}
      {onViewTrends && (
        <div
          onClick={onViewTrends}
          style={{ margin: '14px 20px 0', padding: '14px 16px', borderRadius: 'var(--r-xl)', background: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
        >
          <div style={{ width: 40, height: 40, borderRadius: 'var(--r-lg)', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="show_chart" size={22} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>View Metric Trends</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>See how your health has improved over time</div>
          </div>
          <Icon name="chevron_right" size={20} color="rgba(255,255,255,0.8)" />
        </div>
      )}

      {/* Past reports */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Your Reports</div>
        {MOCK_REPORTS.map(r => <ReportCard key={r.id} report={r} />)}
      </div>
    </div>
  );
}
