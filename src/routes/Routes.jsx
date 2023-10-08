import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import ErrorPage from './../pages/ErrorPage';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import PrivateRoute from './../Providers/PrivateRoute';
import Classes from './../pages/Classes';
import ClassCard from "../pages/ClassCard";




const router = createBrowserRouter([


    {
  
  
        path: "/",
  
  element: <Root></Root>,
  errorElement: <ErrorPage></ErrorPage>,
  children:[

    {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('/services.json')
    },
    {
        path:'/classes/:id',

        element: <PrivateRoute> <Classes></Classes></PrivateRoute>
    },
    {
path:'/classes',
element: <ClassCard></ClassCard>
    },
    {
        path:'/err',

        element:  <ErrorPage></ErrorPage>
    },
    
    {
path:'/login',

element: <Login></Login>
    },
    {
 
        path:'/register',
        element: <Register></Register>

    },
  ]
   
    }


])  

export default router;