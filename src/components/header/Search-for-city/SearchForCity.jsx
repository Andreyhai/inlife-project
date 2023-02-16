import {Fragment} from "react";
import './SearchForCity.css';
import menu from "./images/Menu.png";
function SearchForCity() {
    const __COMPONENT__ = 'SearchForCity';

    return (
        <Fragment>
            <div className={'wrapper'}>
                <div className={__COMPONENT__}>
                    <span className={__COMPONENT__+"__item"}>
                        Ростов-на-Дону
                    </span>
                </div>
                <img className={__COMPONENT__+"__menu"} src={menu} alt={"menu"}/>
            </div>
        </Fragment>
    );
}

export default  SearchForCity;