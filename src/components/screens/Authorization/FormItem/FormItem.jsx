import React, {Component} from "react";
import "./FormItem.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

export default class FormItem extends Component {

    constructor(props) {
        super(props);
        this.iconName = props.iconName;
        this.type = props.type;
        this.labelName = props.labelName;
    }

    render() {
        return (
            <div className={'input-box'}>
                <span className={'icon'}>
                    <ion-icon name={this.iconName}></ion-icon>
                </span>
                <input type={this.type} required />
                <label>{this.labelName}</label>
            </div>
        );
    }
}