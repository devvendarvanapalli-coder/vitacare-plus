# MetricCard — usage notes

## When to use
Use `MetricCard` in horizontal scrollable strips for the Health Overview section. Each chronic-care module gets one or more metric cards. Always assign the correct accent color per vital.

## Vital → accent color mapping
| Vital | icon | iconColor |
|---|---|---|
| Glucose / Blood Sugar | `monitor_heart` | `var(--vc-glucose-blue)` |
| HbA1c | `water_drop` | `var(--vc-hba1c-teal)` |
| Weight | `monitor_weight` | `var(--vc-weight-purple)` |
| Blood Pressure | `favorite` | `var(--vc-bp-orange)` |
| Heart Rate | `favorite` | `var(--vc-heart-rate)` |

## Code example
```jsx
<div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '12px 20px' }}>
  <MetricCard label="HbA1c" value="6.8" unit="%" icon="water_drop"
    iconColor="var(--vc-hba1c-teal)" delta={-3.2} deltaLabel="from last month" />
  <MetricCard label="Blood Sugar" value="126" unit="mg/dL" icon="monitor_heart"
    iconColor="var(--vc-glucose-blue)" delta={1.4} deltaLabel="fasting" />
  <MetricCard label="Weight" value="74.5" unit="kg" icon="monitor_weight"
    iconColor="var(--vc-weight-purple)" />
</div>
```

## Design notes
- Default width is 140px. Keep the strip horizontally scrollable (`overflowX: auto`, `scrollbarWidth: none`).
- `delta` sign convention: positive = worse (red), negative = better (green) — matches glucose/HbA1c. For weight-loss goals, negate before passing.
- Use `onClick` to navigate to the module detail screen.
