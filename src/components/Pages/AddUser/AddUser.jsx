import React, {Fragment, useState} from 'react';
import UserService from './service';
import logo from './images/newLogo.png';
import sally from './images/Rectangle 11.png';
import './AddUser.css';

const AddUser = () => {

    const [user, setuser] = useState({
        id: "", firstName: "", lastName: "", emailId: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setuser({...user, [e.target.name]: value})
    };

    const saveUser = (e) => {
        e.preventDefault();
        UserService.saveUser(user).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        });
    };

    return (
        <div className={"wrapper"}>
            <div className="left">

                <div className="form">
                    <div className="title">
                        Регистрация
                    </div>
                    <div className="ifYouTTT">
                        If you don’t have an account register
                    </div>
                    <div className="youCanReg">
                        You can <span className="blue">Register here !</span>
                    </div>
                    <form action="">
                        <div className="emailLink">
                            First name
                        </div>
                        <div>
                            <input className="input"
                                   type="text"
                                   placeholder="Enter your first name"
                                   name='firstName'
                                   value={user.firstName}
                                   onChange={(e) => handleChange(e)}
                            />
                            <div className="hr"></div>
                        </div>
                        <div className="emailLink">
                            Last name
                        </div>
                        <div>
                            <input className="input"
                                   type="text"
                                   placeholder="Enter your last name"
                                   name='lastName'
                                   value={user.lastName}
                                   onChange={(e) => handleChange(e)}
                            />
                            <div className="hr"></div>
                        </div>
                        <div className="emailLink">
                            Email
                        </div>
                        <div>
                            <input className="input"
                                   type="text"
                                   placeholder="Enter your email"
                                   name='emailId'
                                   value={user.emailId}
                                   onChange={(e) => handleChange(e)}
                            />
                            <div className="hr"></div>
                        </div>
                        <button className="button-name">
                            Register
                        </button>
                    </form>
                    <div className="or">
                        or continue with
                    </div>
                    <div className="icons">
                        <img className="icon" src="https://img.icons8.com/plasticine/100/null/google-logo.png"/>
                        <img className="icon" src="https://img.icons8.com/ios-glyphs/30/null/mac-os.png"/>
                        <img className="icon" src="https://img.icons8.com/fluency/48/null/facebook.png"/>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="logo" src={logo} alt="logo"/>
                <img className="sally" src={sally} alt="photo"/>
                <div className="sign">
                    Sign in to start using
                </div>
                <div className="lorem">
                    Your fishes - our goal
                </div>
            </div>
        </div>)
}

export default AddUser