import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomeLayouts from "../Layouts/HomeLayouts";
import MyProfile from "../Pages/MyProfile";
import Skills from "../Pages/Skills";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ForgetPassword from "../Pages/ForgetPassword";
import DetailsPage from "../Pages/DetailsPage";
import PrvtRoutes from "./PrvtRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: HomeLayouts,
                loader: async () => {
                    const res = await fetch('/skill.json');
                    const data = await res.json();
                    return data;
                },
            },
            {
                path: '/skills',
                Component: Skills,
                loader: async () => {
                    const res = await fetch('/skill.json');
                    const data = await res.json();
                    return data;
                }

            },
            {
                path: '/profile',
                Component: MyProfile,
            },
            {
                path: '/details/:skillId',
                element: <PrvtRoutes>
                    <DetailsPage></DetailsPage>
                </PrvtRoutes>,
                loader: async () => {
                    const res = await fetch('/skill.json');
                    const data = await res.json();
                    return data;
                }
            }
        ]
    },
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'signup',
                Component: Signup,
            },
            {
                path: 'forgetPassword',
                Component: ForgetPassword,
            }
        ]
    }
]);

export default router;
