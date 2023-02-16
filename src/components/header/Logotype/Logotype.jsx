import logo from "./images/new_лого.png"
import "./Logotype.css"
import {Fragment} from "react";

function Logotype() {
    return (
        <Fragment>
            <img className={'logotype'} src={logo} alt={"логотип"} />
        </Fragment>
    );
}

export default Logotype;