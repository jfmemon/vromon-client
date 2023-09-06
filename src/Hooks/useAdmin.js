import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const useAdmin = () => {

    const { user, loading } = useContext(AuthContext);
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://vromon-server-roan.vercel.app/users/admin/${user?.email}`)
            return res.data.admin

        }
    })
    return [isAdmin, isAdminLoading]
}


export default useAdmin;