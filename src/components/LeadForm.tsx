"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo, useCallback } from "react";
import { PhoneCall, Mail, Loader2, Shield, X } from "lucide-react";
import { YEAR, MAKE, PART, ENGINE_SIZES, TRANSMISSION } from "@/app/config";


type OnChangeFn = (name: string, value: string) => void;


export function LeadForm() {
  const router = useRouter();


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    part: "",
    engineSize: "",
    transmission: "",
    name: "",
    email: "",
    phone: "",
    zipCode: "",
  });


  const [errors, setErrors] = useState<Record<string, string>>({});


  const yearOptions = useMemo(() => YEAR, []);
  const makes = useMemo(() => Object.keys(MAKE), []);
  const parts = useMemo(() => PART, []);
  const sizes = useMemo(() => ENGINE_SIZES, []);
  const transOptions = useMemo(() => TRANSMISSION, []);


  const modelOptions = useMemo(
    () => (formData.make && MAKE[formData.make] ? MAKE[formData.make] : []),
    [formData.make]
  );


  const formatPhone = useCallback((v: string) => {
    const n = v.replace(/\D/g, "");
    if (n.length <= 3) return n;
    if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`;
    return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
  }, []);


  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    return emailRegex.test(email);
  };


  const validate = useCallback(() => {
    const e: Record<string, string> = {};
    if (!formData.year || formData.year === "Year") e.year = "Choose Year.";
    if (!formData.make || formData.make === "Choose Your Car")
      e.make = "Choose your car make.";
    if (!formData.model || formData.model.trim() === "")
      e.model = "Choose or enter model.";
    if (!formData.part || formData.part === "Choose Part")
      e.part = "Choose Part.";
    if (!formData.engineSize || formData.engineSize === "Engine Size")
      e.engineSize = "Choose engine size.";
    if (!formData.transmission || formData.transmission === "Choose Transmission")
      e.transmission = "Choose transmission.";
    if (!formData.name) e.name = "Please enter your name.";
    if (!formData.email) e.email = "Please enter your e-mail.";
    else if (!validateEmail(formData.email)) e.email = "Invalid e-mail.";
    if (!formData.phone) e.phone = "Please enter your phone no.";
    if (!formData.zipCode) e.zipCode = "ZIP code required.";
    return e;
  }, [formData]);


  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);


      const eObj = validate();
      setErrors(eObj);


      if (Object.keys(eObj).length > 0) {
        setIsSubmitting(false);


        const firstField = Object.keys(eObj)[0];
        if (
          ["year", "make", "part", "engineSize", "transmission", "model"].includes(
            firstField
          )
        ) {
          setOpenDropdown(firstField);
        }
        return;
      }


      try {
        // Send to new SMTP API
        const emailRes = await fetch("/api-2/leadForm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            year: formData.year,
            make: formData.make,
            model: formData.model,
            part: formData.part,
            engineSize: formData.engineSize,
            transmission: formData.transmission,
            name: formData.name,
            email: formData.email,
            phone: formData.phone.replace(/\D/g, ""), // Send only digits
            zipCode: formData.zipCode,
          }),
        });


        if (!emailRes.ok) {
          throw new Error("Email API failed");
        }


        // Show thank you popup after delay
        await new Promise((r) => setTimeout(r, 800));
        setShowThankYou(true);
        setIsSubmitting(false);
      } catch (err) {
        console.error(err);
        setErrors((p) => ({
          ...p,
          submit: "Submission failed. Please try again.",
        }));
        setIsSubmitting(false);
      }
    },
    [validate, formData]
  );


  const handleInputChange = useCallback(
    (name: string, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    },
    [errors]
  );


  const handleSelectChange = useCallback(
    (name: string, value: string) => {
      if (name === "make") {
        setFormData((prev) => ({ ...prev, [name]: value, model: "" }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      if (errors[name]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
      setOpenDropdown(null);
    },
    [errors]
  );


  const handlePhoneChange = useCallback(
    (value: string) => {
      const formatted = formatPhone(value);
      setFormData((prev) => ({
        ...prev,
        phone: formatted.replace(/\D/g, ""),
      }));
      if (errors.phone) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.phone;
          return newErrors;
        });
      }
    },
    [errors, formatPhone]
  );


  const handleCloseThankYou = () => {
    setShowThankYou(false);
    router.push("/");
  };


  return (
    <>
      {/* THANK YOU POPUP - SAME UI AND CSS */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred background */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleCloseThankYou}
          />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-xl mx-auto bg-[#091b33] rounded-md p-10 flex flex-col items-center shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-2 text-gray-400 hover:text-white text-4xl"
              aria-label="Close"
              onClick={handleCloseThankYou}
            >
              <X className="w-6 h-6" />
            </button>
            <h2
              className="text-white text-5xl font-bold mb-4 tracking-wide text-center"
              style={{ fontFamily: "inherit" }}
            >
              Thank you
            </h2>
            <div className="text-white text-center text-lg font-semibold mb-2">
              FOR IMMEDIATE ASSISTANCE CALL{" "}
              <span className="text-[#00a3ff]">(888) 748-0882</span>
            </div>
            <a
              href="/"
              className="text-sm text-[#b3d4fc] underline mb-8 mt-2"
            >
              Return to the main page
            </a>
          </div>
        </div>
      )}

      {/* FORM CONTAINER */}
      <div className="bg-gradient-to-br from-[#00A3FF] via-[#0080D0] to-[#001D3D] w-full sm:p-5 p-4 md:p-6 border border-[#00A3FF]/30 shadow-xl flex flex-col gap-4 rounded-2xl">
        <h2 className="text-[#E8F3FF] text-xl sm:text-2xl md:text-3xl font-extrabold text-center">
          Find Your Part Instantly
        </h2>


        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <SelectFieldCustom
              label="Year"
              name="year"
              value={formData.year}
              options={yearOptions}
              onSelect={handleSelectChange}
              onOpen={setOpenDropdown}
              isOpen={openDropdown === "year"}
              error={errors.year}
            />
            <SelectFieldCustom
              label="Make"
              name="make"
              value={formData.make}
              options={makes}
              onSelect={handleSelectChange}
              onOpen={setOpenDropdown}
              isOpen={openDropdown === "make"}
              error={errors.make}
            />
          </div>


          <div className="grid grid-cols-2 gap-3">
            <SelectFieldCustom
              label="Model"
              name="model"
              value={formData.model}
              options={modelOptions}
              onSelect={handleSelectChange}
              onOpen={setOpenDropdown}
              isOpen={openDropdown === "model"}
              error={errors.model}
              disabled={!formData.make}
              placeholder={!formData.make ? "Select make first" : "Select model"}
            />
            <SelectFieldCustom
              label="Part"
              name="part"
              value={formData.part}
              options={parts}
              onSelect={handleSelectChange}
              onOpen={setOpenDropdown}
              isOpen={openDropdown === "part"}
              error={errors.part}
            />
          </div>


          <div className="grid grid-cols-2 gap-3">
            <SelectFieldCustom
              label="Engine Size"
              name="engineSize"
              value={formData.engineSize}
              options={sizes}
              onSelect={handleSelectChange}
              onOpen={setOpenDropdown}
              isOpen={openDropdown === "engineSize"}
              error={errors.engineSize}
            />
            <SelectFieldCustom
              label="Transmission"
              name="transmission"
              value={formData.transmission}
              options={transOptions}
              onSelect={handleSelectChange}
              onOpen={setOpenDropdown}
              isOpen={openDropdown === "transmission"}
              error={errors.transmission}
            />
          </div>


          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              placeholder="John Smith"
              onChange={handleInputChange}
              error={errors.name}
            />
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              placeholder="john@example.com"
              onChange={handleInputChange}
              error={errors.email}
            />
          </div>


          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="ZIP Code"
              name="zipCode"
              value={formData.zipCode}
              placeholder="12345"
              onChange={handleInputChange}
              error={errors.zipCode}
            />
            <PhoneInputField
              label="Phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              error={errors.phone}
            />
          </div>


          {errors.submit && (
            <p className="text-red-300 text-sm text-center">{errors.submit}</p>
          )}


          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-11 sm:h-12 rounded-xl bg-white text-[#001D3D] font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting…
              </>
            ) : (
              "Find My Part"
            )}
          </button>


          <a
            href="tel:+18883382540"
            className="w-full h-11 sm:h-12 rounded-xl bg-white text-[#001D3D] font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4" />
            (888) 338-2540
          </a>
        </form>


        <div className="text-white/75 flex justify-center gap-2 text-sm pt-2 border-t border-white/20">
          <Shield className="w-4 h-4" />
          Your information is secure.
        </div>
      </div>
    </>
  );
}


/* ---------------------- INPUTS ---------------------- */


function InputField({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
}: {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: OnChangeFn;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <input
        value={value}
        placeholder={placeholder || label}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full h-10 sm:h-11 md:h-12 px-3 bg-white rounded-lg text-sm sm:text-base text-black placeholder:text-gray-600 border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] shadow-sm ${
          error ? "border-red-400" : "border-[#0A5FA6] hover:border-[#00A3FF]"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}


function PhoneInputField({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  const formatPhone = useCallback((v: string) => {
    const n = v.replace(/\D/g, "");
    if (n.length <= 3) return n;
    if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`;
    return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
  }, []);


  return (
    <div className="flex flex-col gap-1">
      <input
        type="tel"
        value={formatPhone(value)}
        placeholder="(123) 456-7890"
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-10 sm:h-11 md:h-12 px-3 bg-white rounded-lg text-sm sm:text-base text-black placeholder:text-gray-600 border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] shadow-sm ${
          error ? "border-red-400" : "border-[#0A5FA6] hover:border-[#00A3FF]"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}


/* ---------------------- SELECT ---------------------- */


function SelectFieldCustom({
  label,
  name,
  value,
  options,
  onSelect,
  onOpen,
  isOpen,
  error,
  disabled,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onSelect: (name: string, value: string) => void;
  onOpen: (name: string | null) => void;
  isOpen: boolean;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <select
        value={value}
        onChange={(e) => onSelect(name, e.target.value)}
        disabled={disabled}
        className={`w-full h-10 sm:h-11 md:h-12 px-3 bg-white rounded-lg text-sm sm:text-base text-black placeholder:text-gray-600 border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] shadow-sm ${
          error
            ? "border-red-400"
            : disabled
            ? "border-gray-300 bg-gray-100 cursor-not-allowed"
            : "border-[#0A5FA6] hover:border-[#00A3FF]"
        }`}
      >
        <option value="">{placeholder || `Select ${label}`}</option>
        {options?.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
