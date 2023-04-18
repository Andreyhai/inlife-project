import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";
import Home from "./pages/Home";
import Authorisation from "./pages/Authorisation";
import Feedback from "./pages/Feedback";
import ErrorPage from "./pages/Error";
import Profile from "./pages/Profile";
import Form from "./pages/form";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/authorisation' element={<Authorisation />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/*' element={<ErrorPage />} />
            {/*<Route path='/profile' element={<Profile />} />*/}
            <Route path='/form' element={<Form />} />

        </Routes>
    );
};

export default AppRouter;