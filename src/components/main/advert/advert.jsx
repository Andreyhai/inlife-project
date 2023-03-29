import React from "react";
import './advert.css';

const Advert = ({data}) => {
    const __TYPE__ = data.type;
    const __URL__ = data.url;
    const __NAME__ = data.name;
    const __PRICE__ = data.price;
    const __DOP__ = data.dop;
    const __DATA__ = data.data;
    const liked = data.liked;
    const checked = data.checked;

    let url = '';
    if (liked) {
        url = 'https://img.icons8.com/color/48/null/filled-like.png';
    } else {
        url = 'https://img.icons8.com/sf-regular/48/FA5252/like.png';
    }
    let url1 = 'https://img.icons8.com/small/16/null/filled-checked.png';
    if (!checked) {
        url1 = 'https://img.icons8.com/small/16/null/filled-checked.png';
    } else {
        url1 = 'https://img.icons8.com/color/48/null/checked--v1.png';
    }
    return (
        <div class="advert">
            <div className="advert__id">
                <div className="advert__id-name">
                    {__TYPE__}
                </div>
                <img className="advert__id-icon" src={url1} alt="icon"/>
            </div>
            <img className="advert__photo" src={__URL__} alt="photo" />
            <div className="advert__info">
                <div className="advert__info-name">
                    {__NAME__}
                </div>
                <div className="advert__info-price">
                    {__PRICE__}
                </div>
                <div className="advert__info-dop">
                    {__DOP__}
                </div>
                <div className="advert__info-data">
                    <span className="dataName">{__DATA__}</span>
                    <img className="advert__info-dataIcon" src={url} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default Advert;