import React, {Component, Fragment} from "react";
import Header from "../../Home/Header/Header";
import FormItem from "../FormItem/FormItem";
import {Link} from "react-router-dom";
import "../Authorization.css";
export default class SignIn extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <div className="wrapper">
                    <Link to="/">
                        <span className="icon-close">
                            <ion-icon name="close" />
                        </span>
                    </Link>
                    <div className="form-box">
                        <h2>Login</h2>
                        <form>
                            <FormItem iconName={"mail"} type={"email"} labelName={"Login"}/>
                            <FormItem iconName={"lock-closed"} type={"password"} labelName={"Password"} />
                            <div className="remember-forgot">
                                <label>
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <a href="#">Forgot password?</a>
                            </div>
                            <button type="submit" className="btn">Login</button>
                            <div className="login-register">
                                <p>
                                    Don't have an account?
                                    <br/>
                                    <Link to='/signup'><a href="#" className="register-link">
                                        Register
                                    </a>
                                        </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}