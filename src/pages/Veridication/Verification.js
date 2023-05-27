import React, {Fragment, useEffect, useState} from 'react'
import Header from "../../components/Header/Header"
import "./verification.css"
import {Link} from "react-router-dom"
import {LOGIN_ROUTE, VERIFICATION_ROUTE, PROFILE_ROUTE} from "../../utils/consts"
import Footer from "../../components/Footer/Footer"
import axios from "axios";

const code = localStorage.getItem("code");

const Verification = () => {
    
    const [input, setInput] = useState('')

    console.log(code)

    const register = () => {
        // axios.post(
        //     "http://localhost:8080/auth/register",
        //     {
        //         "firstName" : localStorage.getItem("firstName"),
        //         "lastName" : localStorage.getItem("lastName"),
        //         "emailID" : localStorage.getItem("emailID"),
        //         "password" : localStorage.getItem("password"),
        //     }
        // ).then(res => {
        //     localStorage.clear();
        //     axios.get(
        //         "http://localhost:8080/auth/info",
        //         {},
        //         {"Authorization" : `Bearer ${res.data}`}
        //     ).then(
        //         rez => {
        //             if (rez.data == "auth/login") alert("NO!!!")
        //             else{
        //             for (const key in rez.data) {
        //                 let val = rez.data[key];
        //                 localStorage.setItem(key, val);
        //             }}
        //         }
        //     )
        //     localStorage.setItem("token", res.data)
        //     return window.location.replace(PROFILE_ROUTE)
        // }).catch(err => {
        //     console.log(err)
        // })

        // if(code == 364780) {
            window.location.replace(PROFILE_ROUTE)
        // }
    }

    return (
        <div className='flex justify-center flex-wrap'>
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
                                <input className='input1' type="text" maxLength={1} size={1} onChange={(e) => {(setInput(input + e.target.value)); document.querySelector('.input2').focus()}}/>
                                <input className='input2' type="text" maxLength={1} size={1} onChange={(e) => {(setInput(input + e.target.value)); document.querySelector('.input3').focus()}}/>
                                <input className='input3' type="text" maxLength={1} size={1} onChange={(e) => {(setInput(input + e.target.value)); document.querySelector('.input4').focus()}}/>
                                <input className='input4' type="text" maxLength={1} size={1} onChange={(e) => {(setInput(input + e.target.value)); document.querySelector('.input5').focus()}}/>
                                <input className='input5' type="text" maxLength={1} size={1} onChange={(e) => {(setInput(input + e.target.value)); document.querySelector('.input6').focus()}} />
                                <input className='input6' type="text" maxLength={1} size={1} onChange={(e) => {(setInput(input + e.target.value)); register()
                                    if (input == code) {
                                        return window.location.replace(PROFILE_ROUTE)
                                }}}/>
                            </div>
                            <div className={"flex justify-content-center"}>
                                <Link to={LOGIN_ROUTE}>
                                    <button className="btn1">назад</button>
                                </Link>
                                <button className="btn1" onClick={() => {
                                    register()
                                    // if (input == code) {
                                    //     return window.location.replace(PROFILE_ROUTE)
                                    // }
                                }}>отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Verification;