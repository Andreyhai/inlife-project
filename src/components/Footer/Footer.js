import React from 'react';

const Footer = () => {
    const styleSpan = {

        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        height: "20px",
        marginLeft: "50px",
        color: "#ffffff"

}

    const styleSpan1 = {

        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        height: "20px",
        color: "#ffffff"

    }
    return (
        <div style={{
            width: "100%",
            height: "198px",
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        }}>
            <div className="flex my-12 flex-nowrap h-6 w-full justify-center">
                <div style={styleSpan}>Общая информация</div>
                <div style={styleSpan}>Политика конфиденциальности</div>
                <div style={styleSpan}>Пользовательское соглашение</div>
            </div>
            <div className="flex flex-nowrap h-full w-full justify-center items-center" style={styleSpan1}>Разработано студентами ЮФУ</div>
        </div>
    );
};

export default Footer;