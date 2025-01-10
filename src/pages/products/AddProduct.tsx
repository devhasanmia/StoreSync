import PageTitle from "../../components/ui/PageTitle";
import SSInput from "../../components/ui/SSInput";
import SSSelect from "../../components/ui/SSSelect";
import { useGetCategoriesQuery } from "../../redux/api/baseApi";

const AddProduct =  () => {
  const {data, isLoading} =  useGetCategoriesQuery("");
  
  const categoryOptions = isLoading
  ? []
  : data?.data?.map((cat: any) => ({
      label: cat.name,
      value: cat.id,
    })) || [];


  return (
    <div>
      <PageTitle title="Add Product" />
      <div className="bg-white p-3 rounded-md ">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SSInput
              label="Product name"
              placeholder="Product name"
              type="text"
              required
              //   register={register("name")}
              //   error={errors.name?.message as string}
            />
            <SSSelect
              label="Brand"
              options={[
                {
                  label: "Blue Sky",
                  value: "bluesky",
                },
                { label: "HP", value: "hp" },
                { label: "Bashundhara", value: "bashundhara" },
                { label: "MS", value: "MS" },
                { label: "Double A", value: "double-a" },
              ]}
              required
            />
          <SSSelect
              label="Category"
              options= {categoryOptions}
              required
            />

            <SSInput label="Photo" type="file"/>
            <SSSelect label="Unit" options={[
                { label: "Piece", value: "piece" },
                { label: "Box", value: "box" },
                { label: "Set", value: "set" },
                { label: "Case", value: "case" },
                { label: "Pack", value: "pack" },
                { label: "Jar", value: "jar" },
                { label: "Can", value: "can" },
                { label: "Bag", value: "bag" },
                { label: "Unit", value: "unit" },
            ]} required/>
          </div>

          {/* Submit Button */}
          <div className="mt-5">
            <button className="w-full  py-3 px-6 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none transition font-semibold">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
