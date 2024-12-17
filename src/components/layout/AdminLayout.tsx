import { useState } from "react";
import { GoIssueOpened, GoIssueReopened } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 shadow-sm bg-gray-50">
          <button
            className="p-2 font-semibold text-1xl hover:text-green-500 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <GoIssueReopened /> : <GoIssueOpened />}
          </button>
          <div className="flex items-center">
            <button className="flex items-center gap-2 px-5 py-2 text-white bg-red-500 rounded-lg shadow-sm hover:bg-red-600 transition-all duration-200  focus:outline-none ">
              <IoMdLogOut className="text-xl" />
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </header>

        {/* Main Content Wrapper */}
        <div className="m-5 rounded-md bg-gray-50">
          {/* Content */}
         <div className="m-2 bg-white">
         <Outlet />
         </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
