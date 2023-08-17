import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [data, setData] = useState({});
    const navigate=useNavigate();

    function handleLoginDataChange(e){
        setData((previousValue)=>(
            {...previousValue, [e.target.name]:e.target.value}
        ))
    }


     async function validateLogin(){
        try{
            const result =await axios.post("http://localhost:8080/login", data);
            console.log(result.data);
            if(result.status===200){
                localStorage.setItem("token", result.data.token);
                console.log("Logged in");
                navigate("/");
            }
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <div>
            <div>
                <label>Username</label>
                <input type='text' name="username" onChange={handleLoginDataChange}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text' name="password" onChange={handleLoginDataChange}></input>
            </div>
            <button onClick={validateLogin}>Login</button>
        </div>
    )
}
