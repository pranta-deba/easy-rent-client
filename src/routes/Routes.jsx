import { createBrowserRouter } from "react-router-dom";


import Root from "../Layout/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Error/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/SignInSignUp/Login";
import Register from "../components/SignInSignUp/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:'/blog',
                element:<Blog/>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ],
    },
]);