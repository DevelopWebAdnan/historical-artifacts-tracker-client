import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ArtifactDetails from "../pages/ArtifactDetails/ArtifactDetails";
import PrivateRoute from "./PrivateRoute";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import MyArtifacts from "../pages/MyArtifacts/MyArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/historicalArtifacts/:id",
        element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute>,
        // loader: ({params}) => fetch(`https://historical-artifacts-tracker-server-alpha.vercel.app/historicalArtifacts/${params.id}`)
        loader: ({ params }) => axios.get(`https://historical-artifacts-tracker-server-alpha.vercel.app/historicalArtifacts/${params.id}`, { withCredentials: true })
        // .then((response) => {
        //   console.log(response.data);
        // })
      },
      {
        path: "/addArtifact",
        element: <PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>
      },
      {
        path: "/myArtifacts",
        element: <PrivateRoute><MyArtifacts></MyArtifacts></PrivateRoute>
      },
      {
        path: "/likedArtifacts",
        element: <PrivateRoute><LikedArtifacts></LikedArtifacts></PrivateRoute>
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