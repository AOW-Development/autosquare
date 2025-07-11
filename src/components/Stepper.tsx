interface StepperProps {
  steps: string[];
  currentStep: number; // 1-based
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-between w-full mb-8 mt-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                i + 1 < currentStep
                  ? "bg-[#009AFF] border-[#009AFF]"
                  : i + 1 === currentStep
                  ? "bg-[#009AFF] border-[#009AFF]"
                  : "border-white"
              } ${i + 1 === currentStep ? "shadow-lg" : ""}`}
            >
              <span
                className={`font-semibold ${
                  i + 1 < currentStep
                    ? "text-white"
                    : i + 1 === currentStep
                    ? "text-white"
                    : "text-white"
                }`}
              >
                {i + 1 < currentStep ? "✓" : i + 1}
              </span>
            </div>
            <span
              className={`mt-2 text-sm font-semibold ${
                i + 1 <= currentStep ? "text-[#009AFF]" : "text-white"
              }`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 ${
                i + 1 < currentStep ? "bg-[#009AFF]" : "bg-white"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
