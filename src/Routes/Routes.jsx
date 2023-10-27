import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pges/Home/Home/Home";
import Login from "../Pges/Login/Login";
import SignUp from "../Pges/SignUp/SignUp";
import Services from "../Pges/Home/Services/Services";
import About from "../Pges/Home/About/About";
import CheckOut from "../Pges/CheckOut/CheckOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path: 'services',
          element: <Services></Services>
        },
        {
          path:"/about",
          element: <About></About>
        },
        {
          path:'checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);
  export default router