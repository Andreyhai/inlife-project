import React from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/SideBar/SideBar';
import Profile from '../../components/Profile/Profile';
import axios from "axios";
import {VERIFICATION_ROUTE} from "../../utils/consts";

const db = [

]
const ProfilePage = (props) => {

    if (!props.isAuth)
        window.location.replace("/login")

    const getData = (e) => {
        e.preventDefault()
        axios.get(
            "http://localhost:8080/send"
        ).then(response => {
            if (response) {
                // sendData();
                db.push(response)
            }
        }).catch(() => {
            alert("Некорректная почта!")
        })
    }


};

export default ProfilePage;