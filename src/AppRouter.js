import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import Verification from "./pages/Veridication/Verification";
import SignIn from "./pages/Authorisation/SignIn";
import LogIn from "./pages/Authorisation/LogIn";
import Profile from "./pages/Profile/Profile"
import { HOME_ROUTE, ERROR_ROUTE, VERIFICATION_ROUTE, LOGIN_ROUTE, SIGNIN_ROUTE, PROFILE_ROUTE, UPLOAD_ROUTE, ADVERT_PAGE_ROUTE, ADD_ADVERT_PAGE_ROUTE, PROFILE1_PAGE_ROUTE } from "./utils/consts";
import UploadFilesPage from './pages/UploadFiles/UploadFiles';
import AdvertPage from './pages/AdvertPage/AdvertPage';
import AddAdvert from './pages/AddAdvert/AddAdvert';
import Profile1 from './pages/Profile/Profile1';

const AppRouter = () => {

    const isAuth = () => {
        if(localStorage.getItem("token"))
            return true
        else
            return false
    }

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home isAuth={isAuth()}/>} />
            <Route path={ERROR_ROUTE} element={<ErrorPage isAuth={isAuth()}/>} />
            <Route path={LOGIN_ROUTE} element={<LogIn />} />
            <Route path={SIGNIN_ROUTE} element={<SignIn />} />
            <Route path={VERIFICATION_ROUTE} element={<Verification />} />
            <Route path={PROFILE_ROUTE} element={<Profile isAuth={isAuth()}/>} />
            <Route path={UPLOAD_ROUTE} element={<UploadFilesPage isAuth={isAuth()}/>} />
            <Route path={ADVERT_PAGE_ROUTE} element={<AdvertPage isAuth={isAuth()}/>} />
            <Route path={ADD_ADVERT_PAGE_ROUTE} element={<AddAdvert />} />
            <Route path={PROFILE1_PAGE_ROUTE} element={<Profile1 />} />


        </Routes>
    );
};

export default AppRouter;