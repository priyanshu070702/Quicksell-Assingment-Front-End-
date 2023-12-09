import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

function Header(){
    return(
        <div className="navigation">
            <ul>
                <li className="items">
                <NavLink to="/users" className="link">
                    Users
                </NavLink>
                </li>
                <li className="items">
                <NavLink to="/status" className="link">
                    Status
                </NavLink>
                </li>
                <li className="items">
                <NavLink to="/priority" className="link">
                    Priority
                </NavLink>
                </li>
                <li className="items">
                <NavLink to="/title" className="link">
                    Title
                </NavLink>
                <NavLink to="/arrangeP" className="link">
                    Priority
                </NavLink>
                </li>
            </ul>
        </div>
    );
}


export default Header;