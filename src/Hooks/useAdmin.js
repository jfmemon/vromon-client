import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure(user);

    const queryKey = user?.email ? ['isAdmin', user.email] : null;

    const { data: isAdmin, isLoading: isAdminLoading, error: isAdminError } = useQuery({
        queryKey,
        queryFn: async () => {
            if (!user?.email) {
                throw new Error('User email is not available.');
            }
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data.admin;
        },
        enabled: !!user?.email, // Only enable the query if user.email is defined
    });

    return { isAdmin, isAdminLoading, isAdminError };
};

export default useAdmin;






// import { useContext } from 'react';
// import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

// const useAdmin = () => {
//     const { user } = useContext(AuthContext);
//     const axiosSecure = useAxiosSecure();

//     const { data: isAdmin, isLoading: isAdminLoading, error: isAdminError } = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         // queryFn here
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     });

//     return { isAdmin, isAdminLoading, isAdminError }; // Return values as an object instead of an array
// };

// export default useAdmin;
