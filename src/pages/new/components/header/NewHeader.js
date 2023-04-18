import { Component } from "react";
import "./newHeader.css";
import {Link} from "react-router-dom";
import {NEW_HOME_ROUTE} from "../../newConsts";
import logo from "../../../../sourse/images/new_лого.png"

export default class NewHeader extends Component {
    render() {
        const services = [
            'Аренда',
            'Продажа',
            'Новостройки',
            'Дома и участки',
            'Сервисы'
        ]
        const icons = [
            'contrast-outline',
            'chatbubble-ellipses-outline',
            'notifications-outline',
            'business-outline',
        ]
        return (
            <header>
                    <Link to={NEW_HOME_ROUTE}>
                            <img className={'logo'} src={logo} alt={logo}/>
                    </Link>
<div className={'navigation'}>
                    <nav className={''}>
                            {
                                services.map(service => {
                                    return (<li className={'navigation-link'}>{service}</li>)
                                })
                            }
                    </nav>
</div>
                        <div className={'icons'}>
                            {
                                icons.map((icon) => {
                                    return(
                                        <span className={'icons-item'}>
                                            <ion-icon name={icon} />
                                        </span>
                                    )
                                })
                            }
                        </div>
                    <button className={'addAdvert'}>+ Разместить объявление</button>
                    <div className={'profile-avatar'}>

                    </div>
            </header>
        )
    }
}