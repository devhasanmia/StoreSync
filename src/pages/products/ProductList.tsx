import PageTitle from "../../components/ui/PageTitle";
import SSModal from "../../components/ui/SSModal";

const ProductList = () => {
  const renderActions = (record: any) => {
    return (
      <div className="flex gap-2">
        <button
          className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          aria-label={`View details of ${record.name}`}
        >
          View
        </button>
        <SSModal content={"s"} />
        <button
          className="px-3 py-1 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
          aria-label={`Edit details of ${record.name}`}
        >
          Edit
        </button>
        
        <button
          className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
          aria-label={`Delete record of ${record.name}`}
        >
          Delete
        </button>
      </div>
    );
  };

  const data = [
    {
      key: "1",
      productImage: "https://img.drz.lazcdn.com/static/bd/p/226853498edce7efc077e434421cb305.jpg_720x720q80.jpg_.webp",
      name: "Product A",
      price: 20.5,
      currentStock: 50,
    },
    {
      key: "2",
      productImage: "https://img.drz.lazcdn.com/static/bd/p/226853498edce7efc077e434421cb305.jpg_720x720q80.jpg_.webp",
      name: "Product B",
      price: 15.0,
      currentStock: 30,
    },
    {
      key: "3",
      productImage: "https://img.drz.lazcdn.com/static/bd/p/f733fd5a0d66b147bcbdc0d3962372f5.jpg_720x720q80.jpg_.webp",
      name: "Product C",
      price: 25.99,
      currentStock: 4,
    },
  ];
  

  return (
    <div>
      <div className="">
        <PageTitle title="Product List" />
        <div className="flex flex-col md:flex-row gap-4 md:gap-6  mb-2">
          {/* Search Input */}
          <input
            type="text"
            className="w-full md:w-80 px-3 py-2 rounded-md border border-green-100  focus:outline-none "
            placeholder="Search by name, email, mobile..."
          />

          <select className="w-full md:w-48 px-3 py-2 rounded-md border border-green-100  focus:outline-none">
            <option value="All">All</option>
            <option value="Due">Due</option>
          </select>
        </div>

        <div>
          <table className="min-w-full   rounded-lg p-5">
            <thead className=" text-green-500 h-16 rounded-2xl">
              <tr className="bg-[#22c55e0f] rounded-lg text-left font-semibold">
                <th className="py-2 px-4 border-b">Product Image</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Current stock</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody className="font-medium">
              {data.map((record) => (
                <tr
                  key={record.key}
                  className="hover:bg-gray-50 border-green-100"
                >
                  <td className="py-5 px-4 border-b border-green-100">
                    <img src={record.productImage} alt="Product Image" width={80} className="rounded-md" />
                  </td>
                  <td className="py-2 px-4 border-b border-green-100">
                    {record.name}
                  </td>
                  <td className="py-2 px-4 border-b border-green-100">
                    {record.price}
                  </td>
                  <td className="py-2 px-4 border-b border-green-100">
                  <span
                      className={`px-3 py-1 text-white rounded-lg ${
                        record.currentStock < 5
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white-500"
                      }`}
                    >
                      {record.currentStock < 5 ? `Low Stock ${record.currentStock}`: `In Stock ${record.currentStock}`}
                    </span>
                  </td>
                  
                  <td className="py-2 px-4 border-b border-green-100">
                    {renderActions(record)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
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
      </div>
    </div>
  );
};

export default ProductList;
