import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";

import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

import style from "./temp/style.css"
import {HOME_ROUTE, INPUT_ROUTE} from "../../utils/consts";
import {Button} from "react-bootstrap";
import axios from "axios";
import * as url from "url";

const Content = () => {

    const FormItem = (props) => {

        const { iconName, labelName, type } = props

        return (
            <div className={'input-box'}>
                <span className={'icon'}>
                    <ion-icon name={iconName}></ion-icon>
                </span>
                <input type={type} required />
                <label>{labelName}</label>
            </div>
        );
    }

    const Form = () => {

        const [isAuthorised, setIsAuthorised] = useState(false)

        const random = () => {
            function randomInteger(min, max) {
                let rand = min + Math.random() * (max - min);
                return Math.round(rand);
            }
            let rez = ""
            for (let i = 0; i < 6; i++) {
                rez += randomInteger(0, 9);
            }
            axios.post(
                "http://localhost:8080/send",
                {
                    "recipient" : "ustavitski.andrei@gmail.com",
                    "code" : rez
                }
        ).then(response => {
            if (response) {
                axios.post(
                    "http://localhost:8080/auth/register",
                    {
                        "firstName" : "Vazgen",
                        "lastName" : "Karapetyan",
                        "password" : "1111",
                        "emailID" : "7648756"
                    }
                ).then(respon => {
                    console.log(respon)
                })
            }
            })
        }

        const tog = () => {
            setIsAuthorised(!isAuthorised)
        }

        return (
            <Fragment>
                <div>
                    <div className='wrapper'>
                        <Link to="/">
                            <div className='icon-close'>
                                <ion-icon name="close" />
                            </div>
                        </Link>
                        <div className='form-box'>
                            <h2 onClick={tog}>{isAuthorised ? 'Login' : 'Registration'}</h2>
                            <form>
                                {
                                    isAuthorised && <FormItem iconName={"person"} type={"text"} labelName={"Username"}/>
                                }

                                <FormItem iconName={"mail"} type={"email"} labelName={"Mail"}/>
                                <FormItem iconName={"person"} type={"text"} labelName={"Firstname"}/>
                                <FormItem iconName={"person"} type={"text"} labelName={"Lastname"}/>
                                <FormItem iconName={"lock-closed"} type={"password"} labelName={"Password"} />
                                <FormItem iconName={"lock-closed"} type={"password"} labelName={"Password"} />
                                <div className={style.rememberForgot}>
                                    <label>
                                        <input type="checkbox" />
                                        {
                                            isAuthorised ? 'Remember me' : 'I\'m agree to the terms & conditions'
                                        }
                                    </label>
                                    <a href="#">Forgot password?</a>
                                </div>
                                <Link to={INPUT_ROUTE}>
                                    <button type="submit" className="btn" onClick={random}>
                                        {
                                            isAuthorised ? 'Login' : 'Register'
                                        }
                                    </button>
                                </Link>
                                <div className={style.loginRegister} />
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    const Form1 = () => {

        const [isAuthorised, setIsAuthorised] = useState(false)

        const tog = () => {
            setIsAuthorised(!isAuthorised)
        }

        return (
            <Fragment>
                <div>
                    <div className='wrapper'>
                        <div className='form-box'>
                            <h2 onClick={tog}>Введите 6-значный код из письма</h2>
                            <div className="pincode">
                                <input type="number" />
                                <input type="number"/>
                                <input type="number"/>
                                <input type="number"/>
                                <input type="number"/>
                                <input type="number"/>
                            </div>
                            <div className={"flex"}>
                                <Button variant={"link"} active>назад</Button>
                                <Button variant={"success"} active>отправить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    return (
        <div style={{
            width: "100%",
            height: "946px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"

        }}>
            <Form />
            {/*<Form1 />*/}
        </div>
    );
};

export default Content;