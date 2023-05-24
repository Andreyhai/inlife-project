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


        axios.get(
            "http://localhost:8080/auth/info"
        ).then(response => {
            if (response) {
                // sendData();
                db.push(response)
            }
        }).catch(() => {
            alert("Некорректная почта!")
        })
    



    const url2 = "https://media.istockphoto.com/id/1280715716/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D1%88%D1%82%D1%83%D1%82%D0%B3%D0%B0%D1%80%D1%82-%D0%B2%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BD%D0%B5%D0%B1%D0%BE-%D0%BD%D0%B0%D0%B4-%D1%81%D0%BF%D0%B5%D0%BB%D1%8B%D0%BC-%D0%B7%D0%B5%D1%80%D0%BD%D0%BE%D0%B2%D1%8B%D0%BC-%D0%BF%D0%BE%D0%BB%D0%B5%D0%BC-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D1%8B-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=SMtGvffg3eg-HExwUkiECkuM1Bsb6C85pIzebM_T2f8="
    return (
        <div className='text-center my-5'>
            <div className='m-2 text-2xl'>emailID: {localStorage.getItem("mail")}</div>
            <div className='m-2 text-2xl'>Firstname: {localStorage.getItem("firstName")}</div>
            <div className='m-2 text-2xl'>LastName: {localStorage.getItem("lastName")}</div>
            <div className='m-2 text-2xl'>Password: {localStorage.getItem("password")}</div>
        </div>
    );

};

export default ProfilePage;