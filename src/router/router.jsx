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
import UpdateArtifact from "../pages/UpdateArtifact/UpdateArtifact";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";

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
        // loader: ({params}) => fetch(`http://localhost:5000/historicalArtifacts/${params.id}`)
        loader: ({ params }) => axios.get(`http://localhost:5000/historicalArtifacts/${params.id}`, { withCredentials: true })
        // .then((response) => {
        //   console.log(response.data);
        // })
      },
      {
        path: "/allArtifacts",
        element: <AllArtifacts></AllArtifacts>
      },
      {
        path: "/addArtifact",
        element: <PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>
      },
      {
        path: "/myArtifacts/:email",
        element: <PrivateRoute><MyArtifacts></MyArtifacts></PrivateRoute>,
        // loader: ({params}) => fetch(`http://localhost:5000/myHistoricalArtifacts/${params.email}`)
      },
      {
        path: "updateArtifact/:id",
        element: <PrivateRoute><UpdateArtifact></UpdateArtifact></PrivateRoute>,
        loader: ({ params }) => axios.get(`http://localhost:5000/historicalArtifacts/${params.id}`, { withCredentials: true })
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