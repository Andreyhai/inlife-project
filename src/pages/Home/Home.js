import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Aside from "../../components/Asside/Aside";
import MinHeader from "../../components/MiniHeader/MinHeader";
import Footer from "../../components/Footer/Footer";
import Advert from '../../components/Advert/Advert';
import Sidebar from '../../components/SideBar/SideBar';
import { listOfAdverts, listOfAdverts1 } from '../../components/listOfAdverts';
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios"
import {VERIFICATION_ROUTE} from "../../utils/consts";

const Home = (props) => {
    // if (!props.isAuth)
    //     window.location.replace("/login")
    const [active, setActive] = useState(1)
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={() => {
            setActive(number)
        }}>
          {number}
        </Pagination.Item>,
      );
    }
    
    const PaginationBasic = () => {
        return <Pagination>{items}</Pagination>
    }
console.log(props.isAuth)
    return (
    <div className=''>

        <div className="flex justify-center" style={{minWidth: "1722px",
  maxWidth: "2500px", width: "min-contend", margin: "0 auto"}}>


            <div className='w-full'>
                <div className='flex flex-wrap border-r-indigo-700 border-l-indigo-700 border-l border-r justify-center' style={{margin: "0 auto",paddingTop: "0px", maxWidth: "1460px", minWidth: "300px"}}>
                    <Header />
                    <MinHeader />
                    <Sidebar isAuth={props.isAuth} />
                    <div className='flex flex-wrap justify-center w-5/6'>
                    <div className='w-full flex justify-center mb-10'>
                    <PaginationBasic />

                    </div>
                    {   active === 1 && listOfAdverts1.map(index => {
                            return <Advert key={index.id} index={index} />
                        })
                    }
                    {   active === 2 && listOfAdverts1.map(index => {
                            return <Advert key={index.id} index={index} />
                        })
                    }
                    </div>
                    
                    {/* <PaginationBasic /> */}
                </div>
                
            </div>
            
        </div>
        <Footer />
    </div>
  );
};

export default Home;