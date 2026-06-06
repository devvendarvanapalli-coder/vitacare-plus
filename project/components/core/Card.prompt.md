Rounded 16px surface — the workhorse container for VitaCare Plus content.

```jsx
<Card>Plain white surface with soft shadow</Card>
<Card gradient="primary" onClick={open}>Gold member · your plan is active</Card>
```

Default is white with `--shadow-card`. Pass `gradient="primary|teal|gold|sos"` for a hero card with white text and a matching colored glow. Adding `onClick` makes it pressable (shrinks to 0.98). Tune `padding` and `radius` as needed.
