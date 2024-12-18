type SSInputProps = {
  label: string;
  type: "submit" | "text" | "number";
  placeholder: string;
  required?: boolean;
};
const SSInput = ({ label, type, placeholder, required }: SSInputProps) => {
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
        placeholder={placeholder}
        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-1 focus:ring-green-500"
      />
    </div>
  );
};

export default SSInput;
