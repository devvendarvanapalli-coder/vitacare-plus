Tinted status pill for short stateful labels (Confirmed, Pending, Critical, Video).

```jsx
<Badge status="success">Confirmed</Badge>
<Badge status="warning" dot={false}>Pending</Badge>
<Badge status="critical">Action needed</Badge>
```

Status maps to color: `info` (blue), `success`/`normal` (green), `warning` (amber), `critical`/`error` (red), `gold`. Background is a 10% tint of that color; set `dot={false}` to hide the leading dot.
