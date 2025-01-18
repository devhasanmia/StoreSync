import {FiTrash } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import PageTitle from "../../components/ui/PageTitle";
import { useAddCategoryMutation, useGetCategoriesQuery } from "../../redux/api/baseApi";
import SSModal from "../../components/ui/SSModal";
import SSInput from "../../components/ui/SSInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { format } from 'date-fns';
import { categoryValidation } from "../../validations/categoryValidation";
import SSButton from "../../components/ui/SSButton";
import { FaEdit } from "react-icons/fa";
import SSPopConfirm from "../../components/ui/SSPopConfirm";
const CategoryManagement = () => {

  const { data } = useGetCategoriesQuery("");
  const [addCategory, { isLoading: isCategoryLoading }] = useAddCategoryMutation();
  // const [deleteCategory] = useDeleteCategoryMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categoryValidation),
  });

  const onSubmit = async (data: any) => {
    try {
      const category = await addCategory(data).unwrap();
      toast.success(category.message)
      reset()
    } catch (error: any) {
      toast.error(error.data.errorSources[0].message);
    }
  };

  return (
    <div>
      {/* Page Title Start*/}
      <PageTitle title="Category Management" />
      {/* Page Title End*/}

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between mb-2">
        {/* Search Input Start */}
        <input
          type="text"
          className="w-full md:w-80 px-3 py-2 rounded-md border border-green-100 focus:outline-none"
          placeholder="Search here..."
        />
        {/* Search Input End */}

        <SSModal content={<div className="p-5 rounded-md ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
              <SSInput
                label="Category Name"
                placeholder="Category Name"
                type="text"
                required
                register={register("name")}
                error={errors.name?.message as string}
              />
            </div>
            {/* Submit Button */}
            <SSButton text="Add Category" type="submit" disabled={isCategoryLoading} />
          </form>
        </div>} title="Add Category" btnName="Add Category" icon={<IoMdAddCircle />} bgColor="green" />
      </div>

      {/* Grid for Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {data?.data?.map((category: any) => (
          <div
            key={category._id}
            className="bg-[#22c55e0f] text-left font-semibold rounded-lg p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className=" text-green-500 h-10 rounded-2xl">
                {category.name}
              </h3>
              <p>Last Update: {format(new Date(category.createdAt), 'dd MMM yyyy')}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              <SSModal content={<div className="p-5 rounded-md ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
                    <input
                      className="border rounded-lg p-3 w-full focus:outline-none focus:ring-1 focus:ring-green-500"
                      type="text" value={category.name} />
                  </div>
                  {/* Update Button */}
                  <SSButton text="Update Category" disabled={isCategoryLoading} type="submit"  />
                </form>
              </div>} title="Update Category" btnName="Update" icon={<FaEdit />} bgColor="green"/>
              <SSPopConfirm title="Category" name="Delete" icon={<FiTrash/>} bgColor="red" content={<div><SSButton text="Update Category" disabled={isCategoryLoading} type="submit"  /></div>} alartMsg="ssdfsdfds"/>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-white bg-indigo-600 rounded-full  hover:bg-indigo-700">
            Previous
          </button>
          <button className="px-4 py-2 text-white bg-green-600 rounded-full  hover:bg-green-700">
            Next
          </button>
        </div>

        {/* Pagination Numbers */}
        <div className="flex flex-wrap justify-center gap-3">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className="w-10 h-10 flex items-center justify-center text-green-500 font-medium bg-green-100 rounded-full hover:bg-green-300 hover:text-white "
            >
              {page}
            </button>
          ))}
        </div>
        <div>
          <select className="px-4 py-2 bg-green-100 font-medium text-green-500 rounded-md  focus:outline-none ">
            <option className="text-gray-800">10</option>
            <option className="text-gray-800">15</option>
            <option className="text-gray-800">20</option>
            <option className="text-gray-800">50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;
