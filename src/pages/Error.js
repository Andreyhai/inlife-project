import {Component, Fragment} from "react";
import {Link} from "react-router-dom";
export default class ErrorPage extends Component{
    render () {
        return (
            <Fragment>
                <h1>Данная страница в стадии разработки!</h1>
                <Link to='/'><p>на главную</p></Link>
            </Fragment>
        );
    }
}