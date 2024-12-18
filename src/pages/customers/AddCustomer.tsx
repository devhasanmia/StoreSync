import { toast } from "sonner";
import SSInput from "../../components/ui/SSInput";

const AddCustomer = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("Customer added successfully!");
  };
  return (
    <div className="p-5 bg-gray-50 rounded-lg ">
      <div className="bg-white p-3 rounded-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Add Customer</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SSInput label="Name" placeholder="Name" type="text" required />
            <SSInput
              label="Mobile number (11 digits)"
              placeholder="Mobile"
              type="number"
              required
            />
            <SSInput label="Email" placeholder="Email" type="text" />
            <SSInput
              label="Address"
              placeholder="Address"
              type="text"
              required
            />
            <SSInput label="NID" placeholder="NID" type="number" />
            <SSInput
              label="Previous Due"
              placeholder="Previous Due"
              type="number"
            />
          </div>
          {/* Submit Button */}
          <div className="mt-5">
            <button className="w-full  py-3 px-6 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none transition font-semibold">
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
