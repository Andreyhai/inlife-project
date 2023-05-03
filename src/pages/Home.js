import React from 'react';
import Header from "../components/Header/Header";
import Aside from "../components/Asside/Aside";
import MinHeader from "../components/MiniHeader/MinHeader";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
        <Header />
        <div className="flex">
            <Aside />
            <MinHeader />
        </div>
        <Footer />
    </div>
  );
};

export default Home;