import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

import {
    HOME_ROUTE,
    ERROR_ROUTE, AUTHORISATION_ROUTE, VERIFICATION_ROUTE
} from "./utils/consts";
import ErrorPage from "./pages/ErrorPage";
import Authorisation from "./pages/Authorisation";
import Verification from "./pages/Veridication/Verification";

const AppRouter = () => {
    let x = 1

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />
            <Route path={AUTHORISATION_ROUTE} element={<Authorisation />} />
            {
                x && <Route path={VERIFICATION_ROUTE} element={<Verification />} />
            }

        </Routes>
    );
};

export default AppRouter;