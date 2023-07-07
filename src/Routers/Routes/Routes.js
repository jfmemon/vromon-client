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
import Coxbazar from "../../Pages/Hotels/Coxbazar/Coxbazar";
import Rangamati from "../../Pages/Hotels/Rangamati/Rangamati";
import Bandarban from "../../Pages/Hotels/Bandarban/Bandarban";
import Sajek from "../../Pages/Hotels/Sajek/Sajek";

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
                path: "/coxbazar",
                element: <Coxbazar></Coxbazar>,
                loader: () => {
                    return fetch("http://localhost:5000/coxbazar")
                }
            },
            {
                path: "/rangamati",
                element: <Rangamati></Rangamati>,
                loader: () => {
                    return fetch("http://localhost:5000/rangamati")
                }
            },
            {
                path: "/bandarban",
                element: <Bandarban></Bandarban>,
                loader: () => {
                    return fetch("http://localhost:5000/bandarban")
                }
            },
            {
                path: "/sajek",
                element: <Sajek></Sajek>,
                loader: () => {
                    return fetch("http://localhost:5000/sajek")
                }
            }
        ]
    }
])

export default router;