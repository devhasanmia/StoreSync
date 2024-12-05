import { MdSpaceDashboard } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { Link } from "react-router";

const items = [
    {
        icon: <MdSpaceDashboard />,
        label: "Dashboard",
        link: "/dashboard",
    },
    {
        icon: <IoPersonAdd />,
        label: "Customer",
        link: "/customer",
    },
];

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
    return (
        <div
            className={`${isSidebarOpen ? "w-64" : "w-16"
                } h-full transition-all duration-300 flex flex-col`}
        >
            <Link to={"/dashboard"}>
                <div className="flex p-4 justify-start items-center">
                    <h1 className="font-bold text-2xl text-green-500">
                        {isSidebarOpen ? "StoreSync" : "S.."}
                    </h1>
                </div>
            </Link>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="group">
                        <Link
                            to={item.link}
                            className={`flex items-center p-4 hover:border-r-4 rounded-sm border-green-500 hover:bg-blue-50 transition-colors hover:text-green-500 cursor-pointer  ${!isSidebarOpen ? "justify-center" : ""
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            {isSidebarOpen && (
                                <span className="ml-4">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar