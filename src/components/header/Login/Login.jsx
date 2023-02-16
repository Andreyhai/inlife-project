import {Fragment} from "react";
import "./Login.css"
import profile from "./images/аватар.jpg";

function Login() {
    const __COMPONENT__ = "login";
    return (
      <Fragment>
        <div className={__COMPONENT__}>
          <img className={__COMPONENT__+'__profile-photo'} src={profile} alt='profile'/>
          <div className={__COMPONENT__+'__text'}>
              login
          </div>
        </div>
      </Fragment>
    );
}

export default Login;