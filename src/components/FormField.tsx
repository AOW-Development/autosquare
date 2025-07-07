import { useState } from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
  value?: string;
  onChange?: (v: string) => void;
}

export default function FormField({ label, type, placeholder, options, value, onChange }: FormFieldProps) {
  const [show, setShow] = useState(false);
  if (type === 'select' && options) {
    return (
      <div className="flex flex-col gap-1">
        <label className="font-semibold mb-1">{label}</label>
        <select
          className="bg-[#091627] text-white border border-white rounded-md shadow px-4 py-2 focus:outline-none"
          value={value}
          onChange={e => onChange?.(e.target.value)}
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
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
          type={type === 'password' && !show ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange?.(e.target.value)}
          className="w-full border border-white bg-[#091627] text-white rounded-lg shadow px-4 py-2 focus:outline-none pr-10"
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-300 hover:text-blue-500"
            tabIndex={-1}
            onClick={() => setShow(s => !s)}
          >
            {show ? '🙈' : '👁️'}
          </button>
        )}
      </div>
    </div>
  );
} 