import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import amazon from "../images/amazon.png";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={amazon} alt="amazon" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option1">Hello {user?.email}</span>
            <span className="header__option2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option1">Returns</span>
            <span className="header__option2">& Orders</span>
          </div>
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__option2 header__BasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
