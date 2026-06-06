# MedicationCard — usage notes

## When to use
Use `MedicationCard` in the "Today's Medications" section on the dashboard and the full medication management screen. Each card represents one scheduled dose.

## Code example
```jsx
const [meds, setMeds] = React.useState([
  { name: 'Metformin 500mg', dosage: '1 tablet · 9:00 AM',   taken: true,  icon: 'medication' },
  { name: 'Glimepiride 2mg', dosage: '1 tablet · 8:00 AM',   taken: true,  icon: 'medication' },
  { name: 'Vitamin D3 60k',  dosage: '1 capsule · 2:00 PM',  taken: false, icon: 'medication_liquid' },
]);

<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
  {meds.map((m, i) => (
    <MedicationCard key={m.name} {...m}
      onToggle={() => setMeds(prev => prev.map((x, j) => j === i ? { ...x, taken: !x.taken } : x))}
    />
  ))}
</div>
```

## Design notes
- `icon` options: `"medication"` (tablet), `"medication_liquid"` (syrup/capsule).
- Status pill color: `var(--success)` for Taken, `var(--warning)` for Pending — mirrors the icon tile.
- Long drug names are truncated with `text-overflow: ellipsis` — keep `dosage` concise.
