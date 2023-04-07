import React, {Component, Fragment} from "react";
import styles from "./Feedback.module.css";
import {Link} from "react-router-dom";
import logo from "../../../images/new_лого.png";
import image from "../../../images/img.png";
export default class Feedback extends Component{
    render () {
        return (
            <Fragment>
                <div className={styles.wrapper}>
                    <div className="block-1">
                        <img className={styles.logo} src={logo} alt="logotype"/>
                        <img className={styles.image} src={image} alt="image"/>
                    </div>
                    <div className="block-2">
                        <Link to="/">
                            <div id={styles.one}>
                                <ion-icon name="close" />
                            </div></Link>
                        <h1 className={styles.tittle}>Обратная связь</h1>
                        <form>
                            <input id={styles.input} type="text" required/>
                            <input id={styles.input} type="email" required/>
                            <input className={styles.id} type="text" required/>
                            <br/>
                            <button id={styles.x} type={"submit"}>Отправить</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}