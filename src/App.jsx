import {Component, Fragment} from "react";
import Home from "./components/screens/Home/Home";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Feedback from "./components/screens/Feedback/Feedback";
import SignIn from "./components/screens/Authorization/SignIn/SignIn";
import SignUp from "./components/screens/Authorization/SignUp/SignUp";
import ErrorPage from "./components/screens/ErrorPage/ErrorPage";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/feedback' element={<Feedback />} />
                    <Route path='/*' element={<ErrorPage />} />
                </Routes>
            </Fragment>
        );
    }
}