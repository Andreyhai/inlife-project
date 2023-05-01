import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

import {
    HOME_ROUTE,
    ERROR_ROUTE, AUTHORISATION_ROUTE, INPUT_ROUTE
} from "./utils/consts";
import ErrorPage from "./pages/ErrorPage";
import Authorisation from "./pages/Authorisation";
import Input from "./components/input/Input";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />
            <Route path={AUTHORISATION_ROUTE} element={<Authorisation />} />
            <Route path={INPUT_ROUTE} element={<Input />} />
        </Routes>
    );
};

export default AppRouter;