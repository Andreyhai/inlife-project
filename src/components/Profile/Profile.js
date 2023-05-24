import React, { Fragment } from "react"
import { listOfAdverts } from "../listOfAdverts"
import Advert from "../Advert/Advert";

const Profile = (props) => {
    return (
        <div className='profile__adverts flex flex-wrap border-r-indigo-700 border-l-indigo-700 border-l border-r justify-center' style={{margin: "0 auto",paddingTop: "100px", maxWidth: "1500px", minWidth: "300px"}}>
            <div className='profile__adverts flex flex-wrap justify-center w-full' style={{margin: "0 auto"}}>
                {/* <div className='profile'> */}
                <div className="w-full mx-11 mb-11">
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
                                            <td className="whitespace-nowrap px-4 py-2 w-1/5">
                                                {item[itemElement]}
                                                {/*<a*/}
                                                {/*    href="#"*/}
                                                {/*    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"*/}
                                                {/*>*/}
                                                {/*    refactor*/}
                                                {/*</a>*/}
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div className="text-center text-5xl w-full">
                    Ваши объявления
                </div>
                <div className="w-4/5 flex flex-wrap mt-5">
                    {
                        listOfAdverts.map((index, index1) => {
                            if(index1 < 10) {
                                return <Advert key={index1} index={index}/>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile