import {Fragment} from "react";
import {createElement} from "react";
import './SearchForCity.css';
import json from "./cities.json";
import menu from "./images/Menu.png";

function SearchForCity() {
    const __COMPONENT__ = 'SearchForCity';
    const __CITY__ = 'Александровск-Сахалинский';
    let lengthOfCityName = `min-height:${__CITY__.length}px`;

    const arr = [
        "Ростов-на-Дону",
        "Казань",
        "Рязань",
        "Москва",
        "Петропавловск",
        "Мухосранск",
        "Ереван",
        "Абовян"
    ];
    return (
        <Fragment>
            <select className={__COMPONENT__}>
                <option className={__COMPONENT__ + '1'}>{arr[0]}</option>
                <option className={__COMPONENT__ + '1'}>{arr[1]}</option>
                <option className={__COMPONENT__ + '1'}>{arr[2]}</option>
                <option className={__COMPONENT__ + '1'}>{arr[3]}</option>
                <option className={__COMPONENT__ + '1'}>{arr[4]}</option>
                <option className={__COMPONENT__ + '1'}>{arr[5]}</option>
                <option className={__COMPONENT__ + '1'}>{arr[6]}</option>
                <option className={__COMPONENT__ + '1'}>{arr[7]}</option>
            </select>
        </Fragment>
    );
}

export default  SearchForCity;