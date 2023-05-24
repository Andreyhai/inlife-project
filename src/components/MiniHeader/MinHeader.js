import React, {usePosition} from 'react';

import "./MiniHeader.css"

import filter from "./images/img.png"
import search from "./images/img_1.png"
import house from "./images/img_2.png"
import position from "./images/img_3.png"
import buildings from "./images/free-icon-font-building-3915161.png"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PROFILE_ROUTE } from '../../utils/consts';
const MinHeader = () => {
    
    function componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
    }

    return (
        <div className="miniHeader flex">
            <div className="h-full w-full">
                <div className="w-full h-1/3 flex justify-center ">
                    <div className="purpleButton w-30 h-30 pb30" style={{marginRight:"5px"}}>
                        <div className="purpleButton__title mr-1">
                            фильтр
                        </div>
                        <div className="purpleButton__icon">
                            <img src={filter} alt="filter"/>
                        </div>
                    </div>
                    <input className="miniPlaceholder" type="text" placeholder="найти квартиру в Ростове-на-Дону..."/>
                    <div className="purpleButton pb30" style={{marginLeft:"5px"}}>
                        <Link to={PROFILE_ROUTE}>
                        <div className="purpleButton__icon" onClick={componentDidMount}>
                            <img src={search} alt="search"/>
                        </div></Link>
                    </div>
                    <div className="purpleButton w-44 pb30" style={{marginLeft:"61px"}}>
                        <div className="purpleButton__icon mr-1">
                            <img src={position} alt="filter" />
                        </div>
                        <div className="purpleButton__title">
                            Ростов-на-Дону
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/3">
                    <div className="w-full h-full pr-44 flex justify-center">
                    {
                        ["Аренда","Покупка","Дома и участки","Сервисы"].map((button, index) => {
                            return (
                                <div key={index} className="purpleButton h-9" style={{marginRight:"15px"}}>
                                    <div className="purpleButton__title">
                                        {button}
                                    </div>
                                </div>)
                        })
                    }
                    </div>
                </div>
                <div className="flex justify-center w-full h-1/3">
                    <div className='flex items-center' style={{width: "587px"}}>
                    <div className='title'>
                        Будь уверен в завтрашнем дне.
                    </div>
                    <div className="purpleButton relative h-9" style={{marginRight:"15px"}}>
                        <div className="purpleButton__icon mr-1">
                            <img src={buildings} alt="search"/>
                        </div>
                        <div className="purpleButton__title">
                            Выбрать тип недвижимости
                        </div>
                                </div>
                    </div>
                </div>
            </div>
            <img className="h-full" src={house} />
        </div>
    );
};

export default MinHeader;