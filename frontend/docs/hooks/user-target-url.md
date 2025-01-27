# useTargetUrl

A custom React hook using `nuqs` to parse and retrieve query parameters from the URL in a structured and type-safe manner.

## Usage

```tsx
import { useTargetUrl } from '@/hooks/use-target-url';

function TargetComponent() {
  const target = useTargetUrl();

  return (
    <div>
      <p>Name: {target.name}</p>
      <p>Duration (months): {target.durationMonths}</p>
      <p>Amount: {target.amount}</p>
    </div>
  );
}
```

### Parameters

This hook does not take parameters directly but internally uses `useQueryStates` from `nuqs` with the following configuration:

- **Query Parameters:**

  - `name` (string): Parsed as a string using `parseAsString`.
  - `durationMonths` (number): Parsed as an integer using `parseAsInteger`.
  - `amount` (number): Parsed as an integer using `parseAsInteger`.

- **Options:**
  - `history`: Set to `'push'`, which means the history stack will be updated when query parameters change.

### Returns

The hook returns an object with the following structure:

```typescript
{
  name?: string;
  durationMonths?: number;
  amount?: number;
}
```

Each property corresponds to the query parameter in the URL. If a query parameter is missing or invalid, the value will be `undefined`.

## Features

- ✅ Parses query parameters into structured data.
- 🔄 Automatically syncs with the URL.
- 🔍 Type-safe parsing using `nuqs` parsers (`parseAsString` and `parseAsInteger`).
- ⚙️ History management using `push` to avoid overwriting the history stack.

## Example

Assume a URL like this: `https://example.com?name=John&durationMonths=12&amount=5000`

### Component Example:

```tsx
import { useTargetUrl } from '@/hooks/use-target-url';

function Example() {
  const target = useTargetUrl();

  return (
    <div>
      <h1>Financial Target</h1>
      <p>Name: {target.name}</p>
      <p>Duration (months): {target.durationMonths}</p>
      <p>Amount: {target.amount}</p>
    </div>
  );
}
```

### Output:

```plaintext
Financial Target
Name: John
Duration (months): 12
Amount: 5000
```

## Error Handling

The hook relies on the parsers provided by `nuqs` (`parseAsString`, `parseAsInteger`) to validate and parse query parameters. If a parameter is invalid or missing:

1. It will default to `undefined`.
2. No runtime errors will be thrown.
3. Ensure default values or fallback handling in your components if required.

Example:

```tsx
const target = useTargetUrl();

const duration = target.durationMonths ?? 0; // Default to 0 if undefined
```
