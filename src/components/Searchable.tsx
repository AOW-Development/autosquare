import React, { useEffect, useRef, useState } from "react";

interface SearchableDropdownProps {
  options: string[];
  value: string;
  onChange: (selected: string) => void;
  placeholder?: string;
  disabled?: boolean;
  onOpenChange?: (isOpen: boolean) => void; // ✅ already here
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  disabled = false,
  onOpenChange, // ✅ pull this out
}) => {
  const [search, setSearch] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
        setSearch(""); // Clear search when clicking outside
        if (onOpenChange) onOpenChange(false); // ✅ notify parent closed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onOpenChange]);

  // Clear search when value changes externally (e.g., when resetting form)
  useEffect(() => {
    if (!value) {
      setSearch("");
    }
  }, [value]);

 const filteredOptions = options.filter((opt) =>
  opt.toLowerCase().startsWith(search.toLowerCase())
);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearch(input);
    setShowOptions(true);
    if (onOpenChange) onOpenChange(true); // ✅ notify parent opened
    if (input === "") {
      onChange("");
    }
  };

  const handleOptionSelect = (opt: string) => {
    onChange(opt);
    setSearch("");
    setShowOptions(false);
    if (onOpenChange) onOpenChange(false); // ✅ notify parent closed
  };

  const handleInputFocus = () => {
    setShowOptions(true);
    if (onOpenChange) onOpenChange(true); // ✅ notify parent opened
    // If there's a value, show it in the search field for editing
    if (value && !search) {
      setSearch(value);
    }
  };

  const displayValue = search || value;

  return (
    <div ref={wrapperRef} className="relative md:w-[660px] lg:w-[368px]">
      <input
        type="text"
        value={displayValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full h-[38px] px-4 text-sm rounded-md border-2 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
          disabled
            ? "bg-gray-200 border-gray-200 text-black opacity-50 cursor-not-allowed"
            : "bg-white border-gray-200 text-gray-900 opacity-100 cursor-text"
        }`}
      />

      {showOptions && !disabled && filteredOptions.length > 0 && (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white text-sm shadow-lg">
          {filteredOptions.map((opt) => (
            <li
              key={opt}
              onClick={() => handleOptionSelect(opt)}
              className={`cursor-pointer px-4 py-2 hover:bg-blue-100 hover:text-blue-900 ${
                opt === value
                  ? "bg-blue-50 text-blue-900 font-medium"
                  : "text-black"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      {showOptions && !disabled && search && filteredOptions.length === 0 && (
        <ul className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white text-sm shadow-lg">
          <li className="px-4 py-2 text-gray-500">No matches found</li>
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
