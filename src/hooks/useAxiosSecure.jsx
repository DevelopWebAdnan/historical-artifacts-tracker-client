import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: "https://historical-artifacts-tracker-server-alpha.vercel.app",
    withCredentials: true
});

const useAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('Response API error status', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                signOutUser()
                    .then(() => {
                        // redirect to the login page
                        navigate("/login");
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error);
        });
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;