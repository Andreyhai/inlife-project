import React from 'react';
import { Link } from 'react-router-dom';
import AdvertPage from '../../pages/AdvertPage/AdvertPage';
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
    <div className='advert'>
        <div className='advert__title'>
            <div className='advert__title-title'>
                {props.index.type}
            </div>
            <div className='advert__title-icon'>
                { props.index.checked && <img src={icon1} alt='icon' />}
                { !props.index.checked && <img src={icon1} alt='icon' />}
            </div>
        </div>
        <div className='advert__img'>
            <img src={props.index.url} alt='icon' />
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
    </div>
  );
};

export default Advert;