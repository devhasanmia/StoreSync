import { FiEdit, FiTrash } from "react-icons/fi";
import PageTitle from "../../components/ui/PageTitle";

const CategoryManagement = () => {
  return (
    <div>
      {/* Page Title */}
      <PageTitle title="Category Management" />
    

      {/* Search Input */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-2">
          {/* Search Input */}
          <input
            type="text"
            className="w-full md:w-80 px-3 py-2 rounded-md border border-green-100  focus:outline-none "
            placeholder="Search by name, email, mobile..."
          />
        </div>

      {/* Grid for Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((category, index) => (
          <div
            key={index}
            className="bg-[#22c55e0f] rounded-lg text-left font-semibold rounded-lg p-4 flex flex-col justify-between"
          >
            {/* Category Info */}
            <div>
              <h3 className=" text-green-500 h-10 rounded-2xl">
                Category {category}
              </h3>
           
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition"
              >
                <FiEdit />
                Edit
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition"
              >
                <FiTrash />
                Delete
              </button>
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
