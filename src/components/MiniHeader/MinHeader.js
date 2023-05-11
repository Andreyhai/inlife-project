import React from 'react';

import "./MiniHeader.css"

import filter from "./images/img.png"
import search from "./images/img_1.png"
import house from "./images/img_2.png"
import position from "./images/img_3.png"

const MinHeader = () => {
    return (
        <div className="miniHeader flex">

            <div className="h-full w-4/5">
                <div className="w-full h-1/3 flex justify-center ">
                    <div className="purpleButton w-30 h-30" style={{marginRight:"5px"}}>
                        <div className="purpleButton__title">
                            фильтр
                        </div>
                        <div className="purpleButton__icon">
                            <img src={filter} alt="filter"/>
                        </div>
                    </div>
                    <input className="miniPlaceholder" type="text" placeholder="найти квартиру в Ростове-на-Дону..."/>
                    <div className="purpleButton" style={{marginLeft:"5px"}}>
                        <div className="purpleButton__icon">
                            <img src={search} alt="search"/>
                        </div>
                    </div>
                    <div className="purpleButton w-60" style={{marginLeft:"20px"}}>
                        <div className="purpleButton__icon" >
                            <img src={position} alt="filter" className="w-14"/>
                        </div>
                        <div className="purpleButton__title">
                            Ростов-на-Дону
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/3"></div>
                <div className="w-full bg-green-600 h-1/3"></div>
            </div>
            <img className="h-full w" src={house} />




        </div>
    );
};

export default MinHeader;