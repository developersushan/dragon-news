import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import News from "../../pages/News/News";
import Login from "../../pages/Login/Login/Login";
import Registrar from "../../pages/Login/Registrar/Registrar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TamsAndConditions from "../../pages/Others/TamsAndCondition/TamsAndConditions";
import Profile from "../../pages/Others/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path:"/" ,element:<Main></Main> ,
        children:[
            {
                path:"/" ,element:<Home></Home>,
                loader: () => fetch(`https://server-eight-liard.vercel.app/news`)
            },
            {
                path:"/category/:id", element:<Category></Category>,
                loader: ({params})=> fetch(`https://server-eight-liard.vercel.app/category/${params.id}`)
            },
            {
                path:"/news/:id", element:<PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://server-eight-liard.vercel.app/news/${params.id}`)
            },
            {
                path:"/login", element: <Login></Login>
            },
            {
                path:"/registrar", element:<Registrar></Registrar>
            },
            {
                path:"/tams", element:<TamsAndConditions></TamsAndConditions>
            },
            {
                path:"/profile" , element:<PrivateRoute> <Profile></Profile> </PrivateRoute>
            }
        ]
    }
])