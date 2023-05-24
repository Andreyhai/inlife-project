import Header from '../../components/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/SideBar/SideBar';
    import Profile from '../../components/Profile/Profile';
    import axios from "axios";
    import {VERIFICATION_ROUTE} from "../../utils/consts";

    const db = [

    ]
    const ProfilePage = (props) => {

    if (!props.isAuth)
        window.location.replace("/login")

    const getData = (e) => {
        e.preventDefault()
        axios.get(
            "http://localhost:8080/send"
        ).then(response => {
            if (response) {
                // sendData();
                for (const responseKey in response) {
                    const x = {
                        responseKey: response[responseKey]
                    }
                    db.push(x)
                }
            }
        }).catch(() => {
            alert("Некорректная почта!")
        })
    }

    return (
        <div>
            <Header isAuth={true}/>
            <div className='flex'>
                <Sidebar isAuth={1}/>
                <Profile data={db}/>
            </div>
        </div>
)
};

export default ProfilePage;