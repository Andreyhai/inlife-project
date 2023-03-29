import './App.css';
import {Fragment} from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import User from "./components/User/User";
import SignIn from "./components/Pages/Login-page/SignIn";
import AddUser from "./components/Pages/AddUser/AddUser";

function App() {
  return (
      <Fragment>
          {/*<Header />*/}
          {/*<Main />*/}
          {/*<Footer />*/}
          {/*<User />*/}
          {/*<SignIn />*/}
          <AddUser/>

      </Fragment>
  );
}

export default App;
