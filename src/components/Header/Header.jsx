import React from "react";
import { NavLink } from "react-router-dom";
import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPodcast, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar-container">
      <AppLogo />
      <ul className="link-container">
        <li>
          <NavLink to="home"><FontAwesomeIcon icon={faHouse} style={{ marginRight: "10px" }} />HOME</NavLink>
        </li>
        <li>
          <NavLink to="social"><FontAwesomeIcon icon={faPodcast} style={{ marginRight: "10px" }} />SOCIAL</NavLink>
        </li>
        <li>
          <NavLink to="library"><FontAwesomeIcon icon={faHeadphones} style={{ marginRight: "10px" }} />LIBRARY</NavLink>
        </li>
      </ul>
      <SearchBar />
      <Profile />
    </nav>
  );
}

export default Header;
