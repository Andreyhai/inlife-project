import {Fragment} from "react";
import "./Login.css"
import profile from "./images/аватар.jpg";

function Login() {
    const __COMPONENT__ = "login";
    return (
      <Fragment>
        <div className={__COMPONENT__}>
            <img className={__COMPONENT__ + "__profile-photo"} src="https://img.icons8.com/external-becris-lineal-becris/64/null/external-user-avatars-becris-lineal-becris.png"/>
          <span className={__COMPONENT__+'__text'}>
              login
          </span>
        </div>
      </Fragment>
    );
}

export default Login;