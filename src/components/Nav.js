import React from "react";
import classes from "./Header.module.css";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <nav className={classes.navLinks}>
      <NavLinks />
    </nav>
  );
};

export default Nav;
