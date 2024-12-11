import { createBrowserRouter } from "react-router";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/Customer";
import Demo from "../pages/Demo";
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
                path: "customer",
                element: <Customer/>
            }
        ]
    },
]);

export default router

