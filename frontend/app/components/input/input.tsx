import { Input as ShadcnInput } from "../ui/input";
import { Label } from "../ui/label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
}

export default function Input({ label, error, name, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      <ShadcnInput
        name={name}
        aria-invalid={!!error}
        aria-describedby={name || undefined}
        className={`
          w-full px-4 py-2 rounded-md border
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? "border-red-500" : "border-gray-300"}
          ${props.className || ""}
        `.trim()}
        {...props}
      />

      {error && (
        <p id={`${name}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
