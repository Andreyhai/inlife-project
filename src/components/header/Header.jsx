import "./header.css";
import Logotype from "./Logotype/Logotype";
import Login from "./Login/Login";
import Navigation from "./Navigation/Navigation";
import SearchForCity from "./Search-for-city/SearchForCity";

function Header() {
    const __COMPONENT__ = "header";
    return (
      <header className={__COMPONENT__}>
        <div className={__COMPONENT__+'__logo'}>
          <Logotype />
        </div>
        <div className={__COMPONENT__+'__login'}>
          <Login />
        </div>
        <div className={__COMPONENT__+'__navigation'}>
            <Navigation />
        </div>
        <div className='header__search-for-city'>
          <SearchForCity />
        </div>
      </header>
    );
}

export default Header;