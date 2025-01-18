# useFormPersistence

A custom React hook that persists form data in localStorage, allowing form state to survive page refreshes and browser sessions.

## Usage

```tsx
import { useFormPersistence } from '@/hooks/use-form-persistence';
function MyForm() {
  const [formData, setFormData] = useFormPersistence('my-form', {
    name: '',
  });
  return (
    <form>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {/ ... /}
    </form>
  );
}
```

### Parameters

- `key` (string): The unique key used to store the data in localStorage
- `initialValue` (T): The initial value to use if no data is found in localStorage

### Returns

Returns a tuple containing:
1. The current state value
2. A setState function to update the value

## Features

- 🔄 Automatically syncs with localStorage
- 🏃‍♂️ Server-side rendering compatible
- 🔒 Error handling for localStorage operations
- 📦 Type-safe with TypeScript generics

## Example

```tsx
import { useFormPersistence } from '@/hooks/use-form-persistence';
interface UserForm {
name: string;
email: string;
age: number;
}
function RegistrationForm() {
const [formData, setFormData] = useFormPersistence<UserForm>('registration-form', {
name: '',
email: '',
age: 0
});
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Form submission logic
console.log(formData);
};
return (
<form onSubmit={handleSubmit}>
<input
value={formData.name}
onChange={(e) => setFormData({ ...formData, name: e.target.value })}
placeholder="Name"
/>
<input
value={formData.email}
onChange={(e) => setFormData({ ...formData, email: e.target.value })}
placeholder="Email"
/>
<input
type="number"
value={formData.age}
onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
placeholder="Age"
/>
<button type="submit">Submit</button>
</form>
);
}
```

## Error Handling

The hook includes built-in error handling for localStorage operations:

- If localStorage is not available (e.g., in SSR)
- If there's an error parsing the stored JSON
- If there's an error writing to localStorage

In all error cases, the hook will:
1. Fall back to the provided initial value
2. Log the error to the console
3. Continue functioning with in-memory state

## Best Practices

1. Use unique keys to avoid conflicts with other stored data
2. Provide appropriate initial values that match your data structure
3. Be mindful of localStorage size limits (typically 5-10MB)

## TypeScript Support

The hook is fully typed with TypeScript generics:

```tsx
interface MyFormData {
  name: string;
  email: string;
}

const [formData, setFormData] = useFormPersistence<MyFormData>('form-key', {
  name: '',
  email: ''
});
```