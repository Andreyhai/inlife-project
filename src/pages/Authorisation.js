import React, {Component, Fragment} from 'react';
import Header from "../components/Header/Header";
import {Link} from "react-router-dom";
import FormItem from "../components/FormItem/FormItem";
import  style from "./Authorisation.css";
import {FORM_ROUTE} from "../utils/consts";

import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

export default class Authorisation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorised: true
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div>
                    <Link to="/">
                    <div className='icon-close'>
                        <ion-icon name="close" />
                    </div>
                    </Link>
                <div className='wrapper'>

                    <div className='form-box'>
                        <h2>{this.state.isAuthorised ? 'Login' : 'Registration'}</h2>
                        <form>
                            {
                                this.state.isAuthorised && <FormItem iconName={"person"} type={"text"} labelName={"Username"}/>
                            }
                            <div className={'input-box'}>
                                <span className={'icon'}>
                                    <ion-icon name='mail'></ion-icon>
                                </span>
                                <input type='email' required />
                                <label>{'Login'}</label>
                            </div>
                            {/*<FormItem iconName={"mail"} type={"email"} labelName={"Login"}/>*/}
                            <FormItem iconName={"lock-closed"} type={"password"} labelName={"Password"} />
                            <div className={style.rememberForgot}>
                                <label>
                                    <input type="checkbox" />
                                    {
                                        this.state.isAuthorised ? 'Remember me' : 'I\'m agree to the terms & conditions'
                                    }
                                </label>
                                <a href="#">Forgot password?</a>
                            </div>
                            <Link to={FORM_ROUTE}>
                                <button type="submit" className="btn" >
                                    {
                                        this.state.isAuthorised ? 'Login' : 'Register'
                                    }
                                </button>
                            </Link>
                            <div className={style.loginRegister}>

                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
};