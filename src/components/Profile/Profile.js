import React, { Fragment, useState } from "react"
import { listOfAdverts, listOfAdverts1 } from "../listOfAdverts"
import Advert from "../Advert/Advert";
import { Link } from "react-router-dom";
import { ADD_ADVERT_PAGE_ROUTE, UPLOAD_ROUTE } from "../../utils/consts";

const Profile = (props) => {
    const [var1, setVar1] = useState(false);
    console.log(var1)
    return (
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
                        false && listOfAdverts.map((index, index1) => {
                            if(index1 < 10) {
                                return <Advert key={index1} index={index}/>
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
                <div className="flex flex-wrap justify-center mt-5 mb-10 ml-24">
                    {
                        var1 && listOfAdverts1.map((index, index1) => {
                            if(index1 < 10) {
                                return <Advert key={index1} index={index}/>
                            }
                        })
                    }
                    {
                        !var1 && <div className="text-center mb-3 text-6xl text-gray-400">Список объявлений пуст</div>
                    }
                    {
                        !var1 && <div className="text-6xl flex items-center text-gray-400">добавьте первое<Link className="mt-px text-gray-600 hover:text-indigo-600 text-4xl ml-2" to={ADD_ADVERT_PAGE_ROUTE}> объявление</Link></div>
                    }
                </div>
        </div>
        </div>
    );
}

export default Profile

