import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import EditContact from './pages/edit';
import ErrorPage from './pages/error-page';
import Login from './pages/login';
import Root, { loader as rootLoader } from './pages/root';
import Addon from "./pages/addon";
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
        path: "add-on",
        element: <Addon/>
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
