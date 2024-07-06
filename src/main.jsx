import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home.jsx';
import Error from './Footer/Error/Error.jsx';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Update from './Update/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/course')
      },
      {
        path: "/pre_schooling",
        element: <h1>This is pre schooling</h1>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        loader: () => fetch('http://localhost:5000/user')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('http://localhost:5000/course')
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
