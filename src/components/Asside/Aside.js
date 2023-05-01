import React from 'react';

import style from "./Asside.module.css";

import reklama from "./image/img.png"
const Aside = () => {
    return (
        <div className={style.aside}>
            <div className={style.aside__blocks}>
                {[0,1,2,3].map(item => (
                    <div key={item} className={style.aside__blocks__block}>
                        <img src={reklama} alt="reklama"/>
                        <div>реклама</div>
                    </div>
                    )
                )}
            </div>

        </div>
    );
};

export default Aside;