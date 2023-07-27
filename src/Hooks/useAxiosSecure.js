import { useContext, useEffect } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAxiosSecure = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: "http://localhost:5000",
    });

    useEffect(() => {
        const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logout();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        // Clean up the interceptors when the component unmounts
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logout, navigate, axiosSecure]); // Pass the dependencies as an array to useEffect
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    return axiosSecure; // Return the axiosSecure instance
};

export default useAxiosSecure;








