import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
import "./Authorisation.css"
import React, {Fragment, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, VERIFICATION_ROUTE} from "../../utils/consts";
const SignIn = () => {

    const [Mail, setMail] = useState('');
    const [Password, setPassword] = useState('');

    const sendData = (e) => {
        e.preventDefault()
        axios.post(
            "http://localhost:8080/auth/login",
            {
                "emailID" : Mail,
                "password" : Password,
            }
        ).then(res => {
            if (res === "incorrect") {
                alert("Введите корректный логин или пароль")
            } else {
                localStorage.clear();
                localStorage.setItem("token", res)
            }
        }).catch(() => {
            console.log("Не отправилось!")
        })
    }

    return (
        <div>
            <Header />
            <div style={{
                width: "100%",
                height: "946px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>

                <Fragment>
                    <div>
                        <div className="wrapper1">
                            <Link to={HOME_ROUTE}>
                                <div className='icon-close'>
                                    <ion-icon name="close" />
                                </div>
                            </Link>
                            <div className="form-box">
                                <h2>Войти</h2>
                                <form className="text-center">
                                <div className="input-box">
                                        <span className={'icon'}>
                                            <ion-icon name={"mail"}></ion-icon>
                                        </span>
                                    <input type="text" onChange={(e) => {
                                        setMail(e.target.value)
                                    }}/>
                                    <label>{"Mail"}</label>
                                </div>

                                <div className="input-box">
                                        <span className={'icon'}>
                                            <ion-icon name={"lock-closed"}></ion-icon>
                                        </span>
                                    <input type="password" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}/>
                                    <label>{"Password"}</label>
                                </div>
                                <div className="text-center">
                                    <Link to={LOGIN_ROUTE}>
                                        Зарегистрироваться
                                    </Link>
                                    <button type="submit" className="btn" onClick={(event) => {
                                        sendData(event)
                                    }}>
                                        Войти
                                    </button>
                                </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </div>
            <Footer />
        </div>
    );
};

export default SignIn;