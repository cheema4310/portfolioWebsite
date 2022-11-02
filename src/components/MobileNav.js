import React, { useState } from "react";

import classes from "./Header.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const closeIcon = (
    <RiCloseLine onClick={() => setOpen(!open)} className={classes.menuIcon} />
  );

  const openIcon = (
    <BiMenuAltRight
      className={classes.menuIcon}
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className={classes.mobileNavLinks}>
      {open ? closeIcon : openIcon}

      {open && (
        <div
          className={classes.backdrop}
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
