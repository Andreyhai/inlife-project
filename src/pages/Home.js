import React from 'react';
import {Link} from "react-router-dom";
import {ERROR_ROUTE} from "../utils/consts";
import Header from "../components/Header/Header";
import Aside from "../components/Asside/Aside";
import MinHeader from "../components/MiniHeader/MinHeader";

const Home = () => {
  return (
    <div>
        <Header />
        <div className="flex">
            <Aside />
            <MinHeader />
        </div>

      home
        <br/>
        <Link to={ERROR_ROUTE}>
            ошибка
        </Link>
    </div>
  );
};

export default Home;