import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li>
                        <NavLink to="/" className="nav-item"> Blog </NavLink>
                    </li>
                    <li>
                        <NavLink to="/comments" className="nav-item"> Comments </NavLink>
                    </li>
                </ul>
                <div className={"clear"}/>
            </header>
        )
    }
}
