import { useState } from "react";
import { MdSpaceDashboard,MdMenuBook } from "react-icons/md";
import { IoPeopleSharp,IoPersonAdd } from "react-icons/io5";
import { LuUserPlus } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";
import { MdManageAccounts } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const items = [
  {
    icon: <MdSpaceDashboard />,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <MdManageAccounts />,
    label: "Customer Management",
    subItems: [
      { label: "Add Customer", icon: <LuUserPlus />, link: "/add-customer" },
      { label: "Customer List", icon: <IoPeopleSharp />, link: "/customer-list" },
      { label: "Customer Due Report", icon: <MdMenuBook />, link: "/customer-due" },
    ],
  },
  {
    icon: <IoPersonAdd />,
    label: "More",
    subItems: [
      { label: "Reports", icon: <GoChecklist />, link: "/reports" },
      { label: "Settings", icon: <GoChecklist />, link: "/settings" },
      { label: "Logs", icon: <GoChecklist />, link: "/logs" },
    ],
  },
  {
    icon: <GoChecklist />,
    label: "Product",
    link: "/product",
  },
  {
    icon: <IoPersonAdd />,
    label: "More",
    subItems: [
      { label: "Reports", icon: <GoChecklist />, link: "/reports" },
      { label: "Settings", icon: <GoChecklist />, link: "/settings" },
      { label: "Logs", icon: <GoChecklist />, link: "/logs" },
    ],
  },
];

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } bg-gray-900 transition-all duration-300 flex flex-col shadow-lg`}
    >
      <Link to={"/dashboard"}>
        <div className="flex p-4 justify-start items-center">
          <h1 className="font-bold text-2xl text-white">
            {isSidebarOpen ? "StoreSync" : "S.."}
          </h1>
        </div>
      </Link>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="group">
            {item.subItems ? (
              <>
                <div
                  className={`flex items-center text-white p-4 hover:border-r-4 rounded-sm border-green-500 hover:bg-gray-800 transition-colors hover:text-green-500 cursor-pointer ${
                    !isSidebarOpen ? "justify-center" : ""
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="text-xl">{item.icon}</span>
                  {isSidebarOpen && (
                    <>
                      <span className="ml-4 flex-1">{item.label}</span>
                      {dropdownOpen === index ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </>
                  )}
                </div>
                {dropdownOpen === index && (
                  <ul className="bg-gray-950">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="group">
                        <Link
                          to={subItem.link}
                          className={`flex items-center text-white p-4 hover:border-r-4 rounded-sm border-green-500 hover:bg-gray-800 transition-colors hover:text-green-500 cursor-pointer ${
                            !isSidebarOpen ? "justify-center" : ""
                          }`}
                        >
                          <span className="text-xl">{subItem.icon}</span>
                          {isSidebarOpen && (
                            <span className="ml-4">{subItem.label}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.link}
                className={`flex items-center text-white p-4 hover:border-r-4 rounded-sm border-green-500 hover:bg-gray-800 transition-colors hover:text-green-500 cursor-pointer ${
                  !isSidebarOpen ? "justify-center" : ""
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {isSidebarOpen && <span className="ml-4">{item.label}</span>}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
