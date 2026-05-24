import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ArtifactDetails from "../pages/ArtifactDetails/ArtifactDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/historicalArtifacts/:id",
        element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/historicalArtifacts/${params.id}`)
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ]
  },
]);

export default router;