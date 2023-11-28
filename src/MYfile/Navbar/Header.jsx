import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    let colour={
        background: "#e3f2fd",
    }
    return (
        <nav className="navbar navbar-expand-lg  " style={colour}>
            
            <div className="container-fluid">
                <a className="navbar-brand" href="#">AR7sol</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink  to="/services" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Individual Tax Filing</a></li>
                                <li><a className="dropdown-item" href="#">Business Tax Filing</a></li>
                                <li><a className="dropdown-item" href="#">Tax Consulting</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/expert" className="nav-link" >Experts</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" >Contact</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="button" class="btn btn-outline-primary">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
