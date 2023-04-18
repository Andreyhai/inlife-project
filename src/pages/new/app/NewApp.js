import {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import NewAppRouter from "../new app router/NewAppRouter";

export default class NewApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <NewAppRouter />
            </BrowserRouter>
        );
    }
}