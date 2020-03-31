import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return(
        <nav>
            <Link to={'/'}>
                <div>Tripn</div>
            </Link>
            <Link to={'/'}>
                <div>Home</div>
            </Link>
            <Link to={'/about'}>
                <div>About</div>
            </Link>
        </nav>
    )

};