import React from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/SideBar/SideBar';
const Profile = () => {

    const url1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThuAkh28Gnk64Jd25h6vUOp9ZEyZkpkam8gDrBeRJtug&s"

    const url2 = "https://media.istockphoto.com/id/1280715716/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D1%88%D1%82%D1%83%D1%82%D0%B3%D0%B0%D1%80%D1%82-%D0%B2%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BD%D0%B5%D0%B1%D0%BE-%D0%BD%D0%B0%D0%B4-%D1%81%D0%BF%D0%B5%D0%BB%D1%8B%D0%BC-%D0%B7%D0%B5%D1%80%D0%BD%D0%BE%D0%B2%D1%8B%D0%BC-%D0%BF%D0%BE%D0%BB%D0%B5%D0%BC-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D1%8B-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=SMtGvffg3eg-HExwUkiECkuM1Bsb6C85pIzebM_T2f8="
    return (
        <React.Fragment>
            <Header isAuth={true}/>
            <div className='flex'>
                <Sidebar isAuth={1}/>
                <Profile url1={url1} url2={url2}/>
                
            </div>
        </React.Fragment>
    );
};

export default Profile;