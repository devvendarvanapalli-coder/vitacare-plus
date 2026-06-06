# BottomNav — usage notes

## When to use
Use `BottomNav` as the primary navigation on every main-app screen. The patient app uses 5 slots (Home, Modules, SOS, Appointments, Profile); the doctor app uses 4 (Schedule, Patients, Rx, Profile). Keep labels ≤ 8 chars.

## Props at a glance
| Prop | Type | Default | Notes |
|---|---|---|---|
| `items` | `BottomNavItem[]` | — | Required, 3–5 items |
| `activeIndex` | number | `0` | Drives active state |
| `onSelect` | `(i) => void` | — | Update activeIndex in state |
| `item.badge` | boolean | false | Red dot for unread notifications |

## Code example
```jsx
const NAV = [
  { icon: 'home', label: 'Home' },
  { icon: 'grid_view', label: 'Modules' },
  { icon: 'calendar_today', label: 'Appts', badge: true },
  { icon: 'person', label: 'Profile' },
];
const [tab, setTab] = React.useState(0);

<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
  <div style={{ flex: 1, overflowY: 'auto' }}>{/* screen content */}</div>
  <BottomNav items={NAV} activeIndex={tab} onSelect={setTab} />
</div>
```

## Design notes
- Place below the scrollable content area inside a flex column — never `position: fixed` inside a scaled phone frame.
- For the VitaCare SOS center button, render a custom element in the `items` array at index 2 and override its render slot in your App shell (as done in patient-app/App.jsx).
- Icons auto-switch from `-outline-rounded` (rest) to `-rounded` (active) — pass just the base name.
