import React, {Component} from "react";
import style from "./Header.module.css"
import logo from "../../sourse/images/new_лого.png";

import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <header>
                <Link to='/'>
                    <img src={logo} className={style.navigation} alt={style.navigation}/>
                </Link>
                <nav className={style.navigation}>
                    <Link to='/'>Home</Link>
                    <Link to='/form'>Form</Link>
                    <Link to='/*'>Services</Link>
                    <Link to='/date'>Date</Link>
                    <Link to='/feedback'>Feedback</Link>
                </nav>
                <Link to="/authorisation">
                    <button>Login</button>
                </Link>
            </header>
        );
    }
}