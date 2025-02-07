## Input Component

A reusable input component with built-in validation and accessibility features.

### Usage

```tsx
import Input from '@/components/input/input';

<Input
  label='Email'
  name='email'
/>;
```

### Props

| Prop  | Type                                        | Required | Description            |
| ----- | ------------------------------------------- | -------- | ---------------------- |
| label | string                                      | Yes      | Input label            |
| name  | string                                      | Yes      | Input name attribute   |
| error | string                                      | No       | Error message          |
| props | React.InputHTMLAttributes<HTMLInputElement> | No       | Additional input props |
