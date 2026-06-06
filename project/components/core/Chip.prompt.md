Selectable rounded pill for choices and filters (specialty, consultation type).

```jsx
<Chip selected={spec === 'Diabetologist'} onClick={() => setSpec('Diabetologist')}>Diabetologist</Chip>
```

`selected` gives a 10% tint, a 1.5px colored border and colored label. `color="secondary"` switches the accent to teal.
