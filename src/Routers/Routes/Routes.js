import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import TakeATour from "../../Pages/TakeATour/TakeATour";
import Hotels from "../../Pages/Hotels/Hotels";
import ServiceList from './../../Pages/ServiceList/ServiceList';
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Checkout from "../../Pages/Checkout/Checkout";
import BusDetailsCheckout from "../../Pages/ServiceList/BusDetailsCheckout";
import HotelDetailsCheckout from "../../Pages/ServiceList/HotelDetailsCheckout";
import FlightDetailsCheckout from "../../Pages/ServiceList/FlightDetailsCheckout";

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
                    return fetch(`https://vromon-server-roan.vercel.app/destinations/${params.id}`)
                }
            },
            {
                path: "/checkout/:checkoutId",
                element: <Checkout></Checkout>,
            },

            {
                path: "/busDetailsCheckout/:checkoutId",
                element: <BusDetailsCheckout></BusDetailsCheckout>
            },

            {
                path:"/hotelDetailsCheckout/:checkoutId",
                element: <HotelDetailsCheckout></HotelDetailsCheckout>
            },

            {
                path: "/flightDetailsCheckout/:checkoutId",
                element: <FlightDetailsCheckout></FlightDetailsCheckout>
            },

            {
                path: "/serviceCollection/:id",
                element: <ServiceList></ServiceList>,
                loader: ({ params }) => {
                    return fetch(`https://vromon-server-roan.vercel.app/services/${params.id}`);
                }
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default router;