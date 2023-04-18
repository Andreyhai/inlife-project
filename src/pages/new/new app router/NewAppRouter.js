import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import NewHome from "../new pages/NewHome";


export default class NewAppRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<NewHome />} />
            </Routes>
        );
    }
};