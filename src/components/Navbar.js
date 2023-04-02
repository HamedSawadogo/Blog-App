import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    <nav className="navigation">
      <ul className="nav-items">
        <NavLink
          className={(nav) => (nav.isActive ? "nav-active" : "nav")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? "nav-active" : "nav")}
          to={"/blog"}
        >
          Blog
        </NavLink>
        <NavLink className={"nav"} onClick={() => toogleTheme()}>
          {theme === "light" ? "☀️" : "🌙"}
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
