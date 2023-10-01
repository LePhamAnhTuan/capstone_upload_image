import React, { useEffect } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root, { loader as rootLoader } from './pages/root';
import ErrorPage from './pages/error-page';
import Contact from './pages/contact';
import EditContact from './pages/edit';
import Login from './pages/login';
import Addnew from './pages/addnew';
import Upload from './Components/Upload';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "addnew",
        element: <Addnew/>
      },
      {
        path: "manger",
        element: <EditContact />,
        // loader: contactLoader,
      }

    ]

  },

]);

function App() {



  return (
    <RouterProvider router={router} />

  );
}

export default App;
