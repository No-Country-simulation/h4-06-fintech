# Submit Button Component

A reusable submit button component with built-in validation and accessibility features.

## Usage

```tsx
import SubmitButton from '@/components/button/submit-button';

<SubmitButton label="Submit" pending={false} />
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Button label |
| pending | boolean | Yes | Button pending state |
|props|React.ButtonHTMLAttributes<HTMLButtonElement>|No|Additional button props|
