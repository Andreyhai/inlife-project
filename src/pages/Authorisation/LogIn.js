import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
import "./Authorisation.css"
import axios from "axios";
import React, {Fragment, useState} from "react";
import {Link, redirect} from "react-router-dom";
import { SIGNIN_ROUTE, VERIFICATION_ROUTE } from "../../utils/consts";

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
    }
    let rez = ""
    for (let i = 0; i < 6; i++) {
    rez += randomInteger(0, 9);
}

const LogIn = () => {

    redirect("/")

    const [Mail, setMail] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Password1, setPassword1] = useState('');
    const [Password2, setPassword2] = useState('');

    const sendData = () => {
        localStorage.setItem("emailID", Mail);
        localStorage.setItem("firstName", Firstname);
        localStorage.setItem("lastName", Lastname);
        localStorage.setItem("password", Password1);
    }





    const sendCode = (e) => {
        e.preventDefault()
        localStorage.setItem("code",rez);
        axios.post(
            "http://localhost:8080/send",
            {
                "recipient": Mail,
                "code": rez
            }
        ).then(res => {
            if (res) {
                sendData();
                return window.location.replace(VERIFICATION_ROUTE)
            }
        }).catch(() => {
            alert("Некорректная почта!")
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
                            <Link to="/">
                                <div className='icon-close'>
                                    <ion-icon name="close" />
                                </div>
                            </Link>
                            <div className="form-box">
                                <h2>Зарегистрироваться</h2>
                                <form>

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
                                            <ion-icon name={"person"}></ion-icon>
                                        </span>
                                    <input type="text" onChange={(e) => {
                                        setFirstname(e.target.value)
                                    }}/>
                                    <label>{"Firstname"}</label>
                                </div>

                                <div className="input-box">
                                        <span className={'icon'}>
                                            <ion-icon name={"person"}></ion-icon>
                                        </span>
                                    <input type="text" onChange={(e) => {
                                        setLastname(e.target.value)
                                    }}/>
                                    <label>{"Lastname"}</label>
                                </div>

                                <div className="input-box">
                                        <span className={'icon'}>
                                            <ion-icon name="lock-closed"></ion-icon>
                                        </span>
                                    <input type="text" onChange={(e) => {
                                        setPassword1(e.target.value)
                                    }}/>
                                    <label>{"Password1"}</label>
                                </div>

                                <div className="input-box">
                                        <span className={'icon'}>
                                            <ion-icon name="lock-closed"></ion-icon>
                                        </span>
                                    <input type="text" onChange={(e) => {
                                        setPassword2(e.target.value)
                                    }}/>
                                    <label>{"Password2"}</label>
                                </div>

                                <div className="text-center">
                                    <Link to={SIGNIN_ROUTE}>
                                        Войти
                                        {/*{code}*/}
                                    </Link>
                                    <Link to={VERIFICATION_ROUTE}>
                                        <button type="submit" className="btn" onClick={(e)=>{
                                            sendCode(e)
                                        }}>
                                            Зарегистрироваться
                                        </button>
                                    </Link>
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
export default LogIn