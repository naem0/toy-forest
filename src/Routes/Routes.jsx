import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup/Signup";
import MyToy from "../Pages/MyToy/MyToy";
import AllProducts from "../Pages/AllProducts/AllProducts";
import AddProducts from "../Pages/AddProducts/AddProducts";
import PraivatRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdatToy from "../Pages/UpdatToy/UpdatToy";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: "/signup",
            element: <Signup></Signup>,
        },
        {
          path: '/my-toy',
          element: <PraivatRoute><MyToy></MyToy></PraivatRoute>
        },
        {
          path: '/all-products',
          element: <AllProducts></AllProducts>
        },
        {
          path: '/add-products',
          element: <PraivatRoute><AddProducts></AddProducts></PraivatRoute>
        },
        {
          path: '/toy-details/:id',
          element: <PraivatRoute><ToyDetails></ToyDetails></PraivatRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toy-products/${params.id}`)
        },
        {
          path: '/updat-toy/:id',
          element: <PraivatRoute><UpdatToy></UpdatToy></PraivatRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toy-products/${params.id}`)
        },

      ]
    },
  ]);
  export default router