import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import { setLogin } from "../actions/loginActions";

export default function PrivateRoutes(){
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
        const isUserLogged = localStorage.getItem('login')
        if(isUserLogged){
          dispatch(setLogin())
        }
      }, [])

    return (
        user.login ? <Outlet /> : <Navigate to ='/' />
    )
}
