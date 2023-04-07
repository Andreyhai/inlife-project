import React, {Component, Fragment} from "react";
import Header from "../../Home/Header/Header";
import FormItem from "../FormItem/FormItem";
import {Link} from "react-router-dom";
import "../Authorization.css";

export default class SignUp extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <div className="wrapper" style={
                    {
                        height: 540,
                    }
                }>
                    <Link to="/">
                        <span className="icon-close">
                            <ion-icon name="close" />
                        </span>
                    </Link>
                    <div className="form-box">
                        <h2>Registration</h2>
                        <form action="#">
                            <FormItem iconName={"person"} type={"text"} labelName={"Username"}/>
                            <FormItem iconName={"mail"} type={"email"} labelName={"Login"}/>
                            <FormItem iconName={"lock-closed"} type={"password"} labelName={"Password"} />
                            <div className="remember-forgot">
                                <label>
                                    <input type="checkbox" />
                                </label>
                                I'm agree to the terms & conditions
                                <a href="#"></a>
                            </div>
                            <button type="submit" className="btn">Register</button>
                            <div className="login-register">
                                <p>
                                    Already have an account?
                                    <Link to='/signin'><a href="#" className="register-link">
                                        Login
                                    </a></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}