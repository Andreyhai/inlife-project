import React, {Fragment, useEffect, useState} from 'react'
import Header from "../../components/Header/Header"
import "./verification.css"
import {Link} from "react-router-dom"
import {LOGIN_ROUTE, VERIFICATION_ROUTE, PROFILE_ROUTE} from "../../utils/consts"
import Footer from "../../components/Footer/Footer"
import {code} from "../Authorisation/LogIn"
import axios from "axios";

const Verification = () => {
    const [input, setInput] = useState('')

    console.log(code)

    const register = () => {
        axios.post(
            "http://localhost:8080/auth/register",
            {
                "firstName" : localStorage.getItem("Firstname"),
                "lastName" : localStorage.getItem("Lastname"),
                "emailID" : localStorage.getItem("Mail"),
                "password" : localStorage.getItem("Password1"),
            }
        ).then(res => {
            localStorage.clear();
            axios.get(
                "http://localhost:8080",
                {},
                {"Authorization" : `Bearer ${res}`}
            ).then(
                rez => {
                    for (const key in rez) {
                        let val = rez[key];
                        localStorage.setItem(key, val);
                    }
                }
            )
            localStorage.setItem("token", res)
            return window.location.replace(PROFILE_ROUTE)
        }).catch(err => {
            console.log(err)
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
                    <div className='wrapper'>
                        <div className='form-box'>
                            <h2 className="title">Введите 6-значный код из письма</h2>
                            <div className="pincode">
                                <input type="text" maxLength={1} size={1} onChange={(e) => (setInput(input + e.target.value))}/>
                                <input type="text" maxLength={1} size={1} onChange={(e) => (setInput(input + e.target.value))}/>
                                <input type="text" maxLength={1} size={1} onChange={(e) => (setInput(input + e.target.value))}/>
                                <input type="text" maxLength={1} size={1} onChange={(e) => (setInput(input + e.target.value))}/>
                                <input type="text" maxLength={1} size={1} onChange={(e) => (setInput(input + e.target.value))}/>
                                <input type="text" maxLength={1} size={1} onChange={(e) => (setInput(input + e.target.value))}/>
                            </div>
                            <div className={"flex justify-content-center"}>
                                <Link to={LOGIN_ROUTE}>
                                    <button className="btn1">назад</button>
                                </Link>
                                <button className="btn1" onClick={() => {
                                    register()
                                    if (input == code) {
                                        return window.location.replace(PROFILE_ROUTE)
                                    }
                                }}>отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            </div>
            <Footer />
        </div>
    );
};

export default Verification;