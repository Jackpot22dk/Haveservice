import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink end className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink end className="nav-link" aria-current="page" to="/HomeAdmin">HomeAdmin</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">ViborgService</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/ViborgHaveservice1">ViborgHaveservice1</NavLink></li>
                            </ul>
                        </li>    
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Vejret">Vejret</NavLink>
                        </li>                  
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Nyheder">Nyheder</NavLink>
                        </li>                  
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Energidata">Energidata</NavLink>
                        </li>                                 
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Love">Love</NavLink>
                        </li>                                 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
