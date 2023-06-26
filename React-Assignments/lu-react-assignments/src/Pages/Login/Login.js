import React, { useState } from 'react'
import './login.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const { login, setLogin } = props;
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState({
        usernameError: false,
        passwordError: false
    })
    function handleNameChange(e) {
        setUserName(e.target.value);
        if (e.target.value === "") {
            setError((previousValue) => (
                { ...previousValue, usernameError: true }
            ))
        }
        else {
            setError((previousValue) => (
                { ...previousValue, usernameError: false }
            ))
        }
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
        if (e.target.value === "") {
            setError((previousValue) => (
                { ...previousValue, passwordError: true }
            ))
        }
        else {
            setError((previousValue) => (
                { ...previousValue, passwordError: false }
            ))
        }
    }
    let validateUserName = () => {
        if (username === "") {
            setError((previousValue) => (
                { ...previousValue, usernameError: true }
            ))
            return false;
        }
        else {
            setError((previousValue) => (
                { ...previousValue, usernameError: false }
            ))
            return true;
        }
    }
    let validatePassword = () => {
        if (password === "") {
            setError((previousValue) => (
                { ...previousValue, passwordError: true }
            ))
            return false;
        }
        else {
            setError((previousValue) => (
                { ...previousValue, passwordError: false }
            ))
            return true;
        }
    }
    function validateLogin() {
        validateUserName();
        validatePassword();
        if (validateUserName() === true && validatePassword() === true) {
            console.log("hi");
            setLogin(true);
            navigate("/");
        }
    }
    return (
        <div>
            <div className='login-container'>
                <h2>Login</h2>
                <div>
                    <p>Username</p>
                    <input type='text' placeholder='Name of the user'
                        onChange={handleNameChange}>
                    </input>
                    {error.usernameError ? <p className='errors'>Username should be entered to login!</p> : ""}
                </div>
                <div>
                    <p>Password</p>
                    <input type='password' placeholder='Password'
                        onChange={handlePasswordChange}>
                    </input>
                    {error.passwordError ? <p className='errors'>Password should be entered to login!</p> : ""}
                </div>
                <div>
                    <Button variant='contained' style={{ marginTop: "20px" }} onClick={validateLogin}>Login</Button>
                </div>
            </div>
        </div>
    )
}
