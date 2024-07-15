import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Home/Root/Layout";
import Error from "../components/Shared/Error";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ],
    },
]);