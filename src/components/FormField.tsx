import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface FormFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
  value?: string;
  onChange?: (v: string) => void;
  disabled?: boolean;
}

export default function FormField({
  label,
  type,
  placeholder,
  options,
  value,
  onChange,
  disabled,
}: FormFieldProps) {
  const [show, setShow] = useState(false);
  if (type === "select" && options) {
    return (
      <div className="flex flex-col gap-1">
        <label className="font-semibold mb-1">{label}</label>
        <select
          className="bg-[#091627] text-white border border-white rounded-md shadow px-4 py-2 focus:outline-none"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold mb-1">{label}</label>
      <div className="relative">
        <input
          type={type === "password" && !show ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className="w-full border border-white bg-[#091627] text-white rounded-lg shadow px-4 py-2 focus:outline-none pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-300 hover:text-blue-500 w-6 h-6"
            tabIndex={-1}
            onClick={() => setShow((s) => !s)}
            disabled={disabled}
          >
            {!show ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    </div>
  );
}
