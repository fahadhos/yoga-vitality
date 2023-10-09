import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import ErrorPage from './../pages/ErrorPage';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import PrivateRoute from './../Providers/PrivateRoute';
import Classes from './../pages/Classes';
import ClassHome from "../pages/ClassHome";
import Trainer from './../pages/Trainer';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Price from './../pages/Price';



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
        path:'/trainers',

        element: <PrivateRoute> <Trainer></Trainer></PrivateRoute>
        ,
        loader: ()=> fetch('/trainer.json')
    },
    {
path:'/classes',
element: <ClassHome></ClassHome>,
loader: ()=>fetch('/services.json')
    },
    {
path:'/price',
element: <PrivateRoute><Price></Price></PrivateRoute> 
    },
    {
        path:'/about',

        element:  <About></About>
    },
    
    {
        path:'/contact',

        element:  <Contact></Contact>
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