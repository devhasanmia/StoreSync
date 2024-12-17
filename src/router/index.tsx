import { createBrowserRouter } from "react-router";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import CustomerList from "../pages/customers/CustomerList";
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
                path: "customer-due",
                element: <CustomerList/>
            }
        ]
    },
]);

export default router

