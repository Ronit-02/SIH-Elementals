import "./Navbar.css";

import {React, useState} from "react";
import { AiOutlineArrowRight } from "react-icons/ai"
import { NavLink } from "react-router-dom";

export default function NavBar() {

    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOver2 = () => {
        setIsHovering2(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };
    
    return (
        <>
            <nav className="navbar">

                    <NavLink to="/" className="nav-logo">
                        TrashTalk
                    </NavLink>

                    <ul className="nav-menu">
                        
                        <li className="nav-item">
                            <NavLink 
                                to="/" 
                                className={(navData) => (navData.isActive ? "active" : 'non-active')}>
                                    Home
                            </NavLink>
                        </li>

                        <li 
                            className="nav-item"
                            onMouseOver={handleMouseOver2}
                            onMouseOut={handleMouseOut2}
                        >
                            <div className="nav-item-title">
                                Services
                                <AiOutlineArrowRight />

                                {isHovering2 && 
                                    <div className="dropdown">
                                        <NavLink className="dropdown-item" to="/service1" >Reclycle your item</NavLink>
                                        <NavLink className="dropdown-item" to="/service2" >Request garbage collection</NavLink>
                                        <NavLink className="dropdown-item" to="/service3" >Accept collection requests</NavLink>
                                    </div>
                                }

                            </div>
                        </li>

                        <li 
                            className="nav-item"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            >
                            <div className="nav-item-title">
                                About
                                <AiOutlineArrowRight />

                                {isHovering && 
                                    <div className="dropdown">
                                        <NavLink className="dropdown-item" to="/about" >About Us</NavLink>
                                        <NavLink className="dropdown-item" to="/process" >How does it work?</NavLink>
                                    </div>
                                }

                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                to="/signup" 
                                className={(navData) => (navData.isActive ? "active" : 'non-active')}>
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
            </nav>
        </>
    );
}