import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
import Login from "../components/Login/Login";

const Authorisation = () => {

    return (
        <div>
            <Header />
            <div style={{
                width: "100%",
                height: "946px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Login />
            </div>
            <Footer />
        </div>
    );
};

export default Authorisation;