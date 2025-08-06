import React, { useState, useEffect, useRef } from "react";

interface SearchableDropdownProps {
  options: string[];
  value: string;
  onChange: (selected: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  disabled = false,
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
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={wrapperRef} className="relative w-[368px]">
      <input
        type="text"
        value={search || value}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowOptions(true);
        }}
        onFocus={() => setShowOptions(true)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full h-[38px] px-4 text-sm rounded-md border-2 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
          disabled
            ? "bg-gray-200 border-gray-200 text-black opacity-50 cursor-not-allowed"
            : "bg-white border-gray-200 text-black opacity-100 cursor-pointer"
        }`}
      />
      {showOptions && !disabled && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white text-sm shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setSearch("");
                  setShowOptions(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-blue-100"
              >
                {opt}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No matches found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
