import classes from "./Header.module.css";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header>
      <div className={classes.headerWrapper}>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className={classes.headerLogo}
        >
          <img src="/logo512.png" alt="logo" />
        </div>
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
