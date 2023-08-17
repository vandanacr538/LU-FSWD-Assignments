import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Login from '../../Pages/Login/Login';

export default function ProtectedLayout() {

    const[loggedIn, setLoggedIn]=useState(true);
    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("token")===null){
            setLoggedIn(false);
            navigate("/login");
        }
    }, [])
    
    return (
        <div>ProtectedLayout
            {loggedIn ? <Outlet/>:<Login/>}
        </div>
    )
}
