import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Verification from "./pages/Veridication/Verification";
import SignIn from "./pages/Authorisation/SignIn";
import LogIn from "./pages/Authorisation/LogIn";
import Profile from "./pages/Profile/Profile"
import { HOME_ROUTE, ERROR_ROUTE, VERIFICATION_ROUTE, LOGIN_ROUTE, SIGNIN_ROUTE, PROFILE_ROUTE } from "./utils/consts";

const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />
            <Route path={LOGIN_ROUTE} element={<LogIn />} />
            <Route path={SIGNIN_ROUTE} element={<SignIn />} />
            <Route path={VERIFICATION_ROUTE} element={<Verification />} />
            <Route path={PROFILE_ROUTE} element={<Profile />} />
        </Routes>
    );
};

export default AppRouter;