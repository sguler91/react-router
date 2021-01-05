import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="text-center p-3 mt-5">
           <h1>Login Page</h1> 
           <NavLink to="/" className="btn btn-primary">
               <strong>Login</strong>
           </NavLink>
        </div>
    )
}

export default LoginPage
