import React, {Component} from "react";
import { NavLink } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <header>
                <NavLink to="/" className="nav-item"> Blog </NavLink>
                <NavLink to="/comments" className="nav-item"> Comments </NavLink>
            </header>
        )
    }
}
