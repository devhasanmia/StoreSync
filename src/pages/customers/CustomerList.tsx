const CustomerList = () => {
  const customers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "0123456789", due: "$120" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "0987654321", due: "$150" },
    { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com", phone: "0555555555", due: "$90" },
    { id: 4, name: "Sarah Williams", email: "sarah.williams@example.com", phone: "0444444444", due: "$200" },
    { id: 5, name: "Tom Brown", email: "tom.brown@example.com", phone: "0333333333", due: "$60" },
    { id: 5, name: "Tom Brown", email: "tom.brown@example.com", phone: "0333333333", due: "$60" },
    { id: 5, name: "Tom Brown", email: "tom.brown@example.com", phone: "0333333333", due: "$60" },
    { id: 5, name: "Tom Brown", email: "tom.brown@example.com", phone: "0333333333", due: "$60" },
    { id: 5, name: "Tom Brown", email: "tom.brown@example.com", phone: "0333333333", due: "$60" },
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <header className="mb-6 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800">Customers</h1>
      </header>

      {/* Filters and Actions */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search customers..."
          className="border-2 border-gray-300 rounded-md p-2 w-full sm:w-1/2 md:w-1/3"
        />

        <select className="border-2 border-gray-300 rounded-md p-2 w-full sm:w-auto">
          <option value="">All</option>
          <option value="due">Due</option>
        </select>

        <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300 w-full sm:w-auto">
          Add Customer
        </button>
      </div>

      {/* Card List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg p-5 border border-gray-200 transition-all duration-300"
          >
            {/* Customer Info */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 truncate">
                {customer.name}
              </h2>
              <p className="text-gray-600 text-sm break-words">
                <strong>Email:</strong> {customer.email}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Phone:</strong> {customer.phone}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Due:</strong>{" "}
                <span className="text-green-500 font-bold">{customer.due}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-2">
              <button className="bg-blue-500 text-white rounded px-4 py-2 text-sm hover:bg-blue-600 transition duration-300">
                Edit
              </button>
              <button className="bg-red-500 text-white rounded px-4 py-2 text-sm hover:bg-red-600 transition duration-300">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
