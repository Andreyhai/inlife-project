import React, {Component, Fragment} from "react";
import "./User.css"

class User extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="name">
                    Регистрация
                </h1>
                <form>
                    <div className={"label1"}>
                        <label className={"label"}>
                            First name
                        </label>
                        <br/>
                        <input type={"text"}/>
                    </div>
                    <div className={"label2"}>
                        <div>
                            <label>
                                Last name
                            </label>
                        </div>
                        <input type={"text"}/>
                    </div>
                    <div className={"label3"}>
                        <label>
                            Email
                        </label>
                        <br/>
                        <input type={"text"}/>
                    </div>
                    <button className={"button-save"} type={"submit"}>
                        Save
                    </button>
                    <button className={"button-clear"} type={"submit"}>
                        Clear
                    </button>
                </form>
            </Fragment>
        );
    }
}

export default User;