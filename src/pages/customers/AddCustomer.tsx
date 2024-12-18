import { z } from "zod";
import SSInput from "../../components/ui/SSInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import PageTitle from "../../components/ui/PageTitle";

const AddCustomer = () => {
  const customerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").optional(),
    mobile: z
      .string()
      .min(11, "Mobile number must be 11 digits")
      .max(11, "Mobile number must be 11 digits")
      .optional(),
    address: z.string().min(1, "Address is required"),
    nid: z
      .string({
        invalid_type_error: "Invalid NID number",
      })
      .optional(),
    previousDue: z.string().optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(customerSchema),
  });
  const previousDue = watch("previousDue");
  const onSubmit = (data: any) => {
    const previousDueNumber = Number(previousDue) || 0;
    const customerData = {
      ...data,
      previousDue: previousDueNumber,
    };
    try {
      toast.success("Customer added successfully.");
      console.log(customerData);
    } catch (error) {
      toast.error("Failed to add customer. Please try again.");
    }
  };

  return (
    <div>
      <PageTitle title="Add Customer"/>
      
      <div className="bg-white p-3 rounded-md ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SSInput
              label="Name"
              placeholder="Name"
              type="text"
              required
              register={register("name")}
              error={errors.name?.message as string}
            />
            <SSInput
              label="Mobile number (11 digits)"
              placeholder="Mobile"
              type="number"
              required
              register={register("mobile")}
              error={errors.mobile?.message as string}
            />
            <SSInput
              label="Email"
              placeholder="Email"
              type="text"
              register={register("email")}
              error={errors.email?.message as string}
            />
            <SSInput
              label="Address"
              placeholder="Address"
              type="text"
              required
              register={register("address")}
              error={errors.address?.message as string}
            />
            <SSInput
              label="NID"
              placeholder="NID"
              type="number"
              register={register("nid")}
            />
            <SSInput
              label="Previous Due"
              placeholder="Previous Due"
              type="number"
              register={register("previousDue")}
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
