import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import TakeATour from "../../Pages/TakeATour/TakeATour";
import Hotels from "../../Pages/Hotels/Hotels";
import HotelCollection from "../../Pages/HotelCollection/HotelCollection";

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
                path: "/takeATour",
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
            },
            {
                path: "/hotels/:id",
                element: <Hotels></Hotels>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/destinations/${params.id}`)
                }
            },
            {
                path: "/hotelCollection",
                element: <HotelCollection></HotelCollection>,
                loader: () => {
                    return fetch("http://localhost:5000/hotels");
                }
            }

        ]
    }
])

export default router;