import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage} from './pilot/page/ErrorPage'
import './index.css'
import { Index } from './pilot/page/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Index/>,
    // errorElement: <ErrorPage />,
  },
  // {
  //   path: "/:jasa",
  //   element: <Jasa/>,
  //   errorElement: <ErrorPage />,
  // },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
