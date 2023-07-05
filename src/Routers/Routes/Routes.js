import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Destination from "../../Pages/Home/Destination/Destination";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import TourBook from "../../Pages/TakeATour/TakeATour";
import TakeATour from "../../Pages/TakeATour/TakeATour";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/takeATour",
                element: <TakeATour></TakeATour>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;