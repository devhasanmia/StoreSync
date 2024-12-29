import SSInput from "../../components/ui/SSInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import PageTitle from "../../components/ui/PageTitle";
import { customerValidation } from "../../validations/customerValidation";
import SSSelect from "../../components/ui/SSSelect";

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerValidation),
  });
  const onSubmit = (data: any) => {
    const customerData = {
      ...data,
      due: data.due || 0,
      balance: data.balance || 0,
    };
    console.log("Customer Data:", customerData);
    toast.success("Customer added successfully");
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
            <SSSelect label="Gender" options={[{
              label:"Male",
              "value":"Male"
            },{
              label:"Female",
              value: "Female"
            },{
              label:"Other",
              value: "Other"
            }]} required register={register("gender")}/>
            <SSInput
              label="NID"
              placeholder="NID"
              type="number"
              register={register("nid")}
              error={errors.nid?.message as string}
            />
            <SSInput
              label="Date of Birth"
              placeholder="Date of Birth"
              type="date"
              register={register("dob")}
              error={errors.dob?.message as string}
              />

            <SSInput
              label="Previous Due"
              placeholder="Previous Due"
              type="number"
              register={register("due")}
              error={errors.due?.message as string}
            />
            <SSInput
              label="Balance"
              placeholder="Balance"
              type="number"
              register={register("balance")}
              error={errors.balance?.message as string}
              />
          </div>
          {/* Submit Button */}
          <div className="mt-5">
            <button type="submit" className="w-full  py-3 px-6 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none transition font-semibold">
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
