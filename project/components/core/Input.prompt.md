# Input — usage notes

## When to use
Use `Input` for every text entry in VitaCare Plus: phone login, OTP field, vitals logging, medication search, appointment notes.

## Props at a glance
| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | string | — | Sentence-case label above the field |
| `value` / `onChange` | controlled | — | Always controlled |
| `type` | string | `"text"` | `"tel"`, `"email"`, `"password"`, `"number"` |
| `helper` | string | — | Quiet hint below (slate-500) |
| `error` | string | — | Overrides helper; red border + text |
| `leadingIcon` | string | — | Material Symbols glyph name |
| `trailingIcon` | string | — | e.g. `"visibility"` for password toggle |
| `disabled` | boolean | false | Grays out, blocks interaction |
| `size` | `sm`/`md`/`lg` | `"md"` | Heights 44/52/56 px |

## Code example
```jsx
const [phone, setPhone] = React.useState('');
const [err, setErr] = React.useState('');

<Input
  label="Mobile Number"
  value={phone}
  onChange={e => setPhone(e.target.value)}
  placeholder="+91 99999 99999"
  type="tel"
  leadingIcon="phone"
  helper="We'll send an OTP to this number"
  error={err}
/>
```

## Design notes
- Always provide a `label` — unlabeled inputs fail accessibility.
- Pair with `Button variant="primary" fullWidth` below the input.
- For OTP, render 4–6 `<Input size="md">` fields in a row with `width: 52px`.
- `trailingIcon="visibility"` / `"visibility_off"` is the standard password toggle.
