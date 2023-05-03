import React, {Fragment, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./login.css";
import {VERIFICATION_ROUTE} from "../../utils/consts";

const Login = () => {

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
    }
    let rez = ""
    for (let i = 0; i < 6; i++) {
        rez += randomInteger(0, 9);
    }

let str = ""

    const log = (e) => {
        e.preventDefault()
        axios.post(
            "http://localhost:8080/send",
            {
                "recipient":str,
                "code": rez
            }
        ).then(res => {
            if (res)return window.location.replace("http://localhost:3000/verification");
        }).catch(err => {
            return alert(`ERROR(не существует почты ${str})`)
        })
    }

    const FormItem = (props) => {

        const { iconName, labelName, type } = props

        return (
            <div className="input-box">
                <span className={'icon'}>
                    <ion-icon name={iconName}></ion-icon>
                </span>
                <input type={type} onChange={(e) => {
                    str = e.target.value
                }} autoComplete={"new-password"} />
                <label>{labelName}</label>
            </div>
        );
    }

    return (
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
                        {/*<form>*/}
                            <FormItem iconName={"mail"} type={"text"} labelName={"Mail"}/>
                            <FormItem iconName={"person"} type={"text"} labelName={"Firstname"}/>
                            <FormItem iconName={"person"} type={"text"} labelName={"Lastname"}/>
                            <FormItem iconName={"lock-closed"} type={"password"} labelName={"Password"} />
                            <FormItem iconName={"lock-closed"} type={"password"} labelName={"Password"} />
                            <Link to={VERIFICATION_ROUTE}>
                                <button type="submit" className="btn" onClick={(e) => log(e)}>
                                    Зарегистрироваться
                                </button>
                            </Link>
                        {/*</form>*/}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;