import logo from "./images/new_лого.png"
import {Fragment} from "react";

function Logotype() {
    return (
        <Fragment>
            <img src={logo} alt="логотип" />
        </Fragment>
    );
}

export default Logotype;