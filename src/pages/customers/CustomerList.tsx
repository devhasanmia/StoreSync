import PageTitle from "../../components/ui/PageTitle";
import SSModal from "../../components/ui/SSModal";

const CustomerList = () => {
  const renderActions = (record: any) => {
    return (
      <div className="flex gap-2">
        <div>
        </div>
        <SSModal
          title="Custom Modal Titles"
          content={
            <p>
              This is dynamic modal content. You can include any content you want.
              For example, you can display a form to make a payment.
            </p>
          }
        />
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
      name: "MD. HASAN MIA",
      email: "hasan@gmail.com",
      mobile: "01740398196",
      address: "Chandrapur",
      due: 20,
    },
    {
      key: "2",
      name: "MD. RAHIM UDDIN",
      email: "rahim@gmail.com",
      mobile: "01740398197",
      address: "Kanchanpur",
      due: 0,
    },
    {
      key: "3",
      name: "MD. KARIM ALI",
      email: "karim@gmail.com",
      mobile: "01740398198",
      address: "Mohammadpur",
      due: 100,
    },
  ];

  return (
    <div>
      <div className="">
        <PageTitle title="Customers" />
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
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Mobile</th>
                <th className="py-2 px-4 border-b">Due</th>
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
                    {record.name}
                  </td>
                  <td className="py-2 px-4 border-b border-green-100">
                    {record.mobile}
                  </td>
                  
                 
                  <td className="py-2 px-4 border-b border-green-100 font-semibold">
                    <span
                      className={`px-3 py-1 text-white rounded-lg ${
                        record.due > 0
                          ? "bg-red-500 text-white"
                          : "bg-green-100 text-green-500"
                      }`}
                    >
                      {record.due > 0 ? `${record.due} BDT` : "PAID"}
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

export default CustomerList;
