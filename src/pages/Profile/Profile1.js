import React, { Fragment, useState } from "react"
// import { listOfAdverts, listOfAdverts1 } from "../listOfAdverts"
// import Advert from "../Advert/Advert";
import { Link } from "react-router-dom";
import { ADD_ADVERT_PAGE_ROUTE, UPLOAD_ROUTE } from "../../utils/consts";
import Advert from "../../components/Advert/Advert";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";

const Profile1 = (props) => {
    const [var1, setVar1] = useState(false);
    return (

<div className='w-full h-screen'>
                <div className='flex flex-wrap border-r-indigo-700 border-r justify-center' style={{margin: "0 auto",paddingTop: "0px", maxWidth: "1540px", minWidth: "300px"}}>
        <div>
        <Header url={"https://cdn-icons-png.flaticon.com/512/8188/8188349.png"} />
            {/* <img src={localStorage.getItem("img")}/> */}
            {/*<Header isAuth={true}/>*/}
            <div className='flex h-screen'>
                <Sidebar isAuth={1}/>

        <div className='profile__adverts flex flex-wrap border-r-indigo-700 justify-center pl-72' style={{margin: "0 auto",paddingTop: "100px", maxWidth: "1500px", minWidth: "300px"}}>
            <div className='profile__adverts flex flex-wrap justify-center w-full' style={{margin: "0 auto"}}>
                {/* <div className='profile'> */}
                {/* <div className="w-full mx-11 mb-11">
                    <table className=" divide-y-2 divide-gray-200 bg-transparent text-sm w-full">
                        <tbody className="divide-y divide-gray-200">
                        {
                            props.data.map(item => {
                                for (const itemElement in item) {
                                    return (
                                        <tr key={item.name} style={{
                                            height: "30px"
                                        }}>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                                {itemElement}
                                            </td>
                                            {/*<td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center"></td>*/}
                                            {/* <td className="whitespace-nowrap px-4 py-2 w-1/5"> */}
                                                {/* {item[itemElement]} */}
                                                {/*<a*/}
                                                {/*    href="#"*/}
                                                {/*    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"*/}
                                                {/*>*/}
                                                {/*    refactor*/}
                                                {/*</a>*/}
                                            {/* </td> */}
                                        {/* </tr> */}
                                    {/* ) */}
                                {/* } */}
                            {/* }) */}
                        {/* } */}
                        {/* </tbody> */}
                    {/* </table> */}
                {/* </div> */}
                <div className="ml-14 text-center text-5xl w-full">
                    Ваши избранные объявления
                </div>
                <div className="flex flex-wrap mt-5 mb-10">
                    {
                        false && [1].map((index, index1) => {
                            if(index1 < 10) {
                                {/* return <Advert key={index1} index={index}/> */}
                            }
                        })
                    }
                    {
                        !false && <div className="text-6xl text-gray-400">Здесь пока нет объявлений !</div>
                    }
                </div>
                <div className="ml-14 text-center text-5xl w-full">
                    Ваши выставленные объявления
                </div>
                <div className="flex flex-wrap justify-start w-full mt-5 mb-10 ml-24">
                    
                  <Advert key={1} index={{
      id: 0,
      type: "Аренда",
      url: "https://www.imufa.ru/images/2019/03/17/fotka3.jpg",
      title: "Дом на Ямайке",
      salary: "5.000.000.000$",
      info: "70 кв.м",
      date: "Сегодня",
      checked: false,
      liked: true
  }}/>
                    
                    
                </div>
        </div>
        </div>
        </div><Footer />
        </div>
        </div>
        
        </div>
    );
}

export default Profile1

