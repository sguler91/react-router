import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({brand}) => {
    return (
        <header className="header p-3 bg-dark text-white">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto text-center">
                    <NavLink to="/">
                        <h4>{brand}</h4>
                    </NavLink>
                    </div>
                    <div className="col-auto">
                        <NavLink to="/" className="btn btn-primary ml-1">
                            <strong>Home</strong>
                        </NavLink>
                        <NavLink to="/about" className="btn btn-primary ml-1">
                            <strong>About</strong>
                        </NavLink>
                        <NavLink to="/blank/about" className="btn btn-primary ml-1">
                            <strong>Blank About</strong>
                        </NavLink>
                        <NavLink to="/contact" className="btn btn-primary ml-1">
                            <strong>Contact</strong>
                        </NavLink>
                        <NavLink to="/login" className="btn btn-secondary ml-1">
                            <strong>Login</strong>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
