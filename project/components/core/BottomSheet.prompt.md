# BottomSheet — usage notes

## When to use
Use `BottomSheet` for contextual overlays on mobile screens: appointment booking, specialist filter, medication detail, action confirmation. Do NOT use for full-screen flows — push a new screen instead.

## Props at a glance
| Prop | Type | Default | Notes |
|---|---|---|---|
| `open` | boolean | — | Required; drives show/hide |
| `onClose` | function | — | Backdrop click + close button |
| `title` | string | — | Shown in header row |
| `maxHeight` | string | `"80vh"` | CSS max-height |

## Code example
```jsx
const [open, setOpen] = React.useState(false);

<Button onClick={() => setOpen(true)}>Book Appointment</Button>

<BottomSheet open={open} onClose={() => setOpen(false)} title="Book Appointment">
  <Chip selected>Diabetologist</Chip>
  <Button variant="primary" fullWidth style={{ marginTop: 16 }}>Confirm</Button>
</BottomSheet>
```

## Design notes
- Keep content under ~5 items; longer lists should live on a full screen.
- The drag handle is rendered automatically — do not add your own.
- Padding `0 20px 32px` is applied to the content area automatically.
- Pair with `Button variant="primary" fullWidth` at the bottom as the primary CTA.
