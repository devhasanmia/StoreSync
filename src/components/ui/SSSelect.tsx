import { UseFormRegisterReturn } from "react-hook-form";

type SSSelectProps = {
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  register?: UseFormRegisterReturn;
  error?: string;
};

const SSSelect = ({
  label,
  options,
  required,
  register,
  error
}: SSSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2 gap-2">
        {label}
        {required ? (
          <span className="text-red-500 font-bold"> *</span>
        ) : (
          <span className="text-gray-400"> (Optional)</span>
        )}
      </label>
      <select
        {...register}
        className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-1 ${
          error ? "focus:ring-red-500" : "focus:ring-green-500"
        } ${error && "border-red-500"}`}
      >
        <option value="" disabled>
          Select an {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SSSelect;
