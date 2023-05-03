import React, {Fragment, useState} from 'react';
import Header from "../../components/Header/Header";
import {Button} from "react-bootstrap";
import "./verification.css"
import {Link} from "react-router-dom";
import {AUTHORISATION_ROUTE} from "../../utils/consts";
import Footer from "../../components/Footer/Footer";

const Verification = () => {
    const [input, setInput] = useState('')

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
                                <input type="text" maxLength={1} size={1}/>
                                <input type="text" maxLength={1} size={1}/>
                                <input type="text" maxLength={1} size={1}/>
                                <input type="text" maxLength={1} size={1}/>
                                <input type="text" maxLength={1} size={1}/>
                                <input type="text" maxLength={1} size={1}/>
                            </div>
                            <div className={"flex justify-content-center"}>
                                <Link to={AUTHORISATION_ROUTE}>
                                    <button className="btn1">назад</button>
                                </Link>
                                <button className="btn1">отправить</button>
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