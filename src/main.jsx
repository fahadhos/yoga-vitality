import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import {  RouterProvider,} from "react-router-dom";
import router from './routes/Routes';
import AuthProvider from './Providers/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
         <HelmetProvider>

 <RouterProvider router={router}></RouterProvider>

    </HelmetProvider>
    </AuthProvider>
 
  </React.StrictMode>,
)
