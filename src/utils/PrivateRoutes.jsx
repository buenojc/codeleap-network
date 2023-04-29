import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

export default function PrivateRoutes(){
    const { user } = useSelector((state) => state);
    return (
        user.login ? <Outlet /> : <Navigate to ='/' />
    )
}
