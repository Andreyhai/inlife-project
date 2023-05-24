import React from 'react';
import { Link } from 'react-router-dom';
import { ADVERT_PAGE_ROUTE } from '../../utils/consts';
import heart1 from "../../sourse/images/adverts/heart1.png"
import heart2 from "../../sourse/images/adverts/heart2.png"
import checked1 from "../../sourse/images/adverts/cheked1.png"
import checked2 from "../../sourse/images/adverts/checked2.png"
import "./Advert.css"
const Advert = (props) => {
    let icon1 = ""
    let icon2 = ""
    if (props.index.checked) {
        icon1 = checked2
    } else {
        icon1 = checked1
    }
    if (props.index.liked) {
        icon2 = heart2
    } else {
        icon2 = heart1
    }
    return (


        <Link to={ADVERT_PAGE_ROUTE} className="advertt group relative block m-2">
            <span className="mt-5 advertt absolute inset-0 border-2 border-dashed border-black "></span>
                {/*<div*/}
                {/*    // className="advertt transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 transform !pt-4 transition-opacity group-hover:absolute group-hover:opacity-1"*/}
                {/*>*/}

                    <div className='advert transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 transform !pt-4 transition-opacity group-hover:absolute group-hover:opacity-1'>
                        <div className='advert__title'>
                            <div className='advert__title-title'>
                                {props.index.type}
                            </div>
                            <div className='advert__title-icon'>
                                {props.index.checked && <img src={icon1} alt='icon' />}
                                {!props.index.checked && <img src={icon1} alt='icon' />}
                            </div>
                        </div>
                        <div className='advert__img'>
                            <Link to={ADVERT_PAGE_ROUTE}><img src={props.index.url} alt='icon' /></Link>
                        </div>
                        <div className='advert__info'>
                            <div className='advert__info-title'>{props.index.title}</div>
                            <div className='advert__info-slary'>{props.index.salary}</div>
                            <div className='advert__info-info'>{props.index.info}</div>
                        </div>
                        <div className='advert__footer advert__title'>
                            <div className='advert__footer-title'>
                                {props.index.date}
                            </div>
                            <div className='advert__footer-icon'>
                                { props.index.liked && <img src={icon2} alt='icon' />}
                                { !props.index.liked && <img src={icon2} alt='icon' />}
                            </div>
                        </div>
                    {/*</div>*/}
            </div>
        </Link>
    );
};

export default Advert;








