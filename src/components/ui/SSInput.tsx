import { UseFormRegisterReturn } from "react-hook-form";

type SSInputProps = {
  label: string;
  type: "submit" | "text" | "number" | "email" | "password" | "file";
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  error?: string; 
};
const SSInput = ({
  label,
  type,
  placeholder,
  required,
  register,
  error
}: SSInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2 gap-2">
        {label}
        {required ? (
          <span className="text-red-500 font-bold"> *</span>
        ) : (
          <span className="text-gray-400 "> (Optional)</span>
        )}
      </label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-1 ${error ? "focus:ring-red-500" :"focus:ring-green-500"} ${error && 'border-red-500'}`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SSInput;
