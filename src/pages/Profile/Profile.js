import Header from '../../components/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/SideBar/SideBar';
    import Profile from '../../components/Profile/Profile';
    import axios from "axios";
    import {VERIFICATION_ROUTE} from "../../utils/consts";
import Footer from '../../components/Footer/Footer';

// import i from  "./im/img.png"

    const db = [
        {
            1:1
        },
        {
            2:2
        }
    ]
// localStorage.clear()
localStorage.setItem("img", "/static/media/img.f157affa1326f70f94e8.png")
    const ProfilePage = (props) => {
    // if (!props.isAuth)
    //     window.location.replace("/login")

    const getData = (e) => {
        e.preventDefault()
        // axios.get(
        //     "http://localhost:8080/send"
        // ).then(response => {
        //     if (response) {
        //         // sendData();
        //         for (const responseKey in response) {

        //             const x = {
        //                 responseKey: response[responseKey]
        //             }
        //             db.push(x)
        //         }
        //     }
        // }).catch(() => {
        //     alert("Некорректная почта!")
        // })
    }
// const url = "../../sourse/images/img.png"
    return (
        <div className='w-full h-screen'>
                <div className='flex flex-wrap border-r-indigo-700 border-r justify-center' style={{margin: "0 auto",paddingTop: "0px", maxWidth: "1540px", minWidth: "300px"}}>
        <div>
        <Header url={"https://cdn-icons-png.flaticon.com/512/8188/8188349.png"} />
            {/* <img src={localStorage.getItem("img")}/> */}
            {/*<Header isAuth={true}/>*/}
            <div className='flex h-screen'>
                <Sidebar isAuth={1}/>
                <Profile data={db}/>
            </div><Footer />
        </div>
        </div>
        
        </div>
)
};

export default ProfilePage;