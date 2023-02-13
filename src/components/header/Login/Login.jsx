import {Fragment} from "react";
import "./Login.css"
import profile from "./images/аватар.jpg";

function Login() {
    const __COMPONENT__ = "login";
    return (
      <Fragment>
        <div className={__COMPONENT__}>
          <img className={__COMPONENT__+'__profile'} src={profile} alt='profile'/>
          <span className={__COMPONENT__+'__text'}>
              login
          </span>
        </div>
      </Fragment>
    );
}

export default Login;