import { createBrowserRouter } from "react-router";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import CustomerList from "../pages/customers/CustomerList";
import AddCustomer from "../pages/customers/AddCustomer";
import Settings from "../pages/settings/Settings";
import Report from "../pages/Report";
import AddProduct from "../pages/products/AddProduct";
import ProductList from "../pages/products/ProductList";
import PrintLabels from "../pages/products/PrintLabels";
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
                path: "add-product",
                element: <AddProduct/>
            },
            {
                path: "product-list",
                element: <ProductList/>
            },
            {
                path: "print-labels",
                element: <PrintLabels/>
            },
            {
                path: "report",
                element: <Report/>
            },
            {
                path: "settings",
                element: <Settings/>
            }
        ]
    },
]);

export default router

