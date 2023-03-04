import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Detail from '../routes/Detail';
import Home from '../routes/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path:"/:id",
        element:<Detail></Detail>
    }
  ]);

function App(){
    return <RouterProvider router={router}></RouterProvider>
}

export default App;