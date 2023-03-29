import "./Main.css";
import Advert from "./advert/advert";
import {objectOfAdverts} from "../object-of-adverts";

function Main() {
    const __COMPONENT__ = 'main';

    const data = [];
    for (const item in objectOfAdverts) {
        data.push(objectOfAdverts[item]);
    }
    const elements = data.map(item => {
        return (<Advert data={item}/>);
    })
    return (
        <main className={__COMPONENT__}>
            <div className="wrapper">
                {elements}
            </div>

        </main>
    )
}

export default Main;