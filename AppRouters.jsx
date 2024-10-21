import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SignUp from './src/Pages/Standard/SignUp/SignUp.jsx';
import Dashboard from './src/Pages/DashBoard/Dashboard.jsx';
import Subscription from './src/Pages/Subscription/Subscription.jsx';
import AddPost from './src/Pages/AddPost/AddPost.jsx';
import Home from './src/Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path:'/home',
    element: <Home/>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  },
  {
    path:'/subscription',
    element: <Subscription/>
  },
  {
    path:'/addpost',
    element: <AddPost/>
  },

]);

function AppRouters() {
  return (
    <RouterProvider router={router} />
  );
}

export default AppRouters;
