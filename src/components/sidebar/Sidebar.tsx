import { useState } from "react";
import { MdMenuBook } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { LuUserPlus } from "react-icons/lu";
import { AiFillDashboard } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { IoBagAdd } from "react-icons/io5";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { ImQrcode } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const items = [
  {
    icon: <AiFillDashboard />,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <AiFillDashboard />,
    label: "Sale",
    link: "/dashboard",
  },
  {
    icon: <AiFillProduct />,
    label: "Product Management",
    subItems: [
      { label: "Add Product", icon: <IoBagAdd />, link: "/add-product" },
      {
        label: "Product List",
        icon: <HiSquare3Stack3D />,
        link: "/product-list",
      },
      {
        label: "Print Labels",
        icon: <ImQrcode />,
        link: "/print-labels",
      },
      {
        label: "Trending Product",
        icon: <MdOutlineWorkspacePremium />,
        link: "/print-labels",
      },
    ],
  },
  {
    icon: <MdManageAccounts />,
    label: "Customer Management",
    subItems: [
      { label: "Add Customer", icon: <LuUserPlus />, link: "/add-customer" },
      {
        label: "Customer List",
        icon: <IoPeopleSharp />,
        link: "/customer-list",
      },
      {
        label: "Customer Due Report",
        icon: <MdMenuBook />,
        link: "/customer-due",
      },
    ],
  },
  {
    label: "Categories",
    icon: <HiOutlineClipboardDocumentList />,
    link: "/category-management",
  },
  {
    label: "Brands",
    icon: <HiSquare3Stack3D />,
    link: "/product-list",
  },
  
  {
    icon: <TbReportAnalytics />,
    label: "Report",
    link: "/report",
  },
  {
    icon: <LuSettings />,
    label: "Settings",
    link: "/settings",
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
        <div className="flex p-4 justify-center items-center text-center">
          <h1 className="font-bold text-2xl text-green-500 ">
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
