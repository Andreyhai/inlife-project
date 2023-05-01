import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import style from "../Content/temp/style.css";
import {Button} from "react-bootstrap";



const Input = () => {


    // const random = () => {
    //     function randomInteger(min, max) {
    //         let rand = min + Math.random() * (max - min);
    //         return Math.round(rand);
    //     }
    //     let rez = ""
    //     for (let i = 0; i < 5; i++) {
    //         rez += randomInteger(0, 9);
    //     }
    //     console.log(rez)
    // }



    return (
        <Fragment>
            <div>
                <div className='wrapper'>
                    <div className='form-box'>
                        <h2>Введите 6-значный код из письма</h2>
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

export default Input;