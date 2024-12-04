import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { GoIssueOpened, GoIssueReopened } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";
import { Outlet } from "react-router"
const items = [
  {
    icon: <MdSpaceDashboard />,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <MdSpaceDashboard />,
    label: "Orders",
    link: "/orders",
  },
  {
    icon: <MdSpaceDashboard />,
    label: "Products",
    link: "/products",
  },
  {
    icon: <MdSpaceDashboard />,
    label: "Reports",
    link: "/reports",
  },
];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } h-full transition-all duration-300 flex flex-col`}
      >
        <div className="flex p-4 justify-start items-center">
          <h1 className="font-semibold text-2xl">
            {isSidebarOpen ? "StoreSync" : "SS"}
          </h1>
        </div>
        {/* Navigation Items */}
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-4 hover:border-r-4 rounded-sm border-green-500 hover:bg-blue-50 transition-colors hover:text-green-500 duration-150 cursor-pointer ${
                !isSidebarOpen ? "justify-center" : ""
              }`}
            >
              {/* Icon */}
              <span className="text-xl">{item.icon}</span>
              {/* Label - Only visible when sidebar is open */}
              {isSidebarOpen && <span className="ml-4">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center  shadow p-4">
          <button
            className="p-2 font-semibold text-1xl hover:text-green-500 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <GoIssueReopened /> : <GoIssueOpened />}
          </button>
          <div className="flex items-center space-x-4">
            <button className="flex items-center gap-2 px-5 py-2 text-white bg-red-500 rounded-lg shadow-sm hover:bg-red-600 transition-all duration-200  focus:outline-none ">
              <IoMdLogOut className="text-xl" />
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 bg-gray-50 p-6">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default App;
