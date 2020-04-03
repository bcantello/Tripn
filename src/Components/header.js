import React from "react";
import {Link} from "react-router-dom";
import '../styles.css'

export default function Header(props) {
    return(
        <nav>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div><span id={'logo'} onClick={props.reset}>Tripn</span></div>
            </Link>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div onClick={props.reset}>Home</div>
            </Link>
            <Link to={'/about'} style={{textDecoration: 'none'}}>
                <div>About</div>
            </Link>
        </nav>
    )
};