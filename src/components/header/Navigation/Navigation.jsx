import React from "react";
import "./Navigation.css";
function Navigation() {
    const __COMPONENT__ = "navigation";

    return (
        <React.Fragment>
            <nav className={__COMPONENT__}>
                <a className={__COMPONENT__+'__link'} href={'#1'}>
                    Продажа
                </a>
                <a className={__COMPONENT__+'__link'} href={'#2'}>
                    Покупка
                </a>
                <a className={__COMPONENT__+'__link'} href={'#3'}>
                    Аренда
                </a>
            </nav>
        </React.Fragment>
    );
}

export default Navigation;