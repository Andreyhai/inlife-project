import React from 'react';

import "./MiniHeader.css"

import filter from "./images/img.png"
const MinHeader = () => {
    return (
        <div className="miniHeader">
            <div className="formSearch">
                <div className="purpleButton">
                    <div className="purpleButton__title">
                        фильтр
                    </div>
                    <div className="purpleButton__icon">
                        <img src={filter} alt="filter"/>
                    </div>
                </div>
            </div>
            <input className="miniPlaceholder" type="text" placeholder="найти квартиру в Ростове-на-Дону..."/>
            {/*<div className="purpleButton">*/}
            {/*    <div className="purpleButton__title">*/}
            {/*        фильтр*/}
            {/*    </div>*/}
            {/*    <div className="purpleButton__icon">*/}
            {/*        <img src={filter} alt="filter"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default MinHeader;