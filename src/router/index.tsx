import { createBrowserRouter } from "react-router";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import CustomerList from "../pages/customers/CustomerList";
import AddCustomer from "../pages/customers/AddCustomer";
import Settings from "../pages/settings/Settings";
const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "customer-list",
                element: <CustomerList/>
            },
            {
                path: "add-customer",
                element: <AddCustomer/>
            },
            {
                path: "customer-due",
                element: <CustomerList/>
            },
            {
                path: "settings",
                element: <Settings/>
            }
        ]
    },
]);

export default router

