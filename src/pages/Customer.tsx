const man = "/man.png";
const Customer = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <header className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Customers
          </h1>
        </div>
      </header>

      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 justify-between">
  {/* Left Section */}
  <div className="flex flex-col md:flex-row items-center gap-4">
    <button className="px-4 py-2 font-medium text-green-600 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 hover:text-green-700 transition duration-150 shadow-sm">
      Add Customer
    </button>
    <select className="px-4 py-2 rounded-lg bg-blue-50 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100">
      <option value="">All</option>
      <option value="due">Due</option>
    </select>
  </div>

  {/* Right Section */}
  <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
    <input
      type="text"
      className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
      placeholder="Search"
    />
    <button className="py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-150 shadow-sm">
      Search
    </button>
  </div>
</div>


      {/* Table Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-light">
            <thead className="bg-blue-100 text-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">#</th>
                <th className="px-6 py-4 font-medium">Photo</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Mobile</th>
                <th className="px-6 py-4 font-medium">Due</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-medium">1</td>
                <td className="px-6 py-4">
                  <img
                    src={man}
                    alt="Customer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4">Md. HASAN MIA</td>
                <td className="px-6 py-4">01740398196</td>
                <td className="px-6 py-4 text-red-500 font-bold">50 BDT</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-150 shadow-sm">
                    View
                  </button>
                  <button className="py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-150 shadow-sm">
                    Update
                  </button>
                  <button className="py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-150 shadow-sm">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-medium">1</td>
                <td className="px-6 py-4">
                  <img
                    src={man}
                    alt="Customer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4">Md. HASAN MIA</td>
                <td className="px-6 py-4">01740398196</td>
                <td className="px-6 py-4 text-green-500 font-bold">0 BDT</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-150 shadow-sm">
                    View
                  </button>
                  <button className="py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-150 shadow-sm">
                    Update
                  </button>
                  <button className="py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-150 shadow-sm">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
