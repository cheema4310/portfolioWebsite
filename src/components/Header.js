import classes from "./Header.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";

import NavLinks from "./NavLinks";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Backdrop from "./shared/Backdrop";
import SideMenu from "./mobileNav/SideMenu";

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const closeSideMenu = () => {
    setSideMenu(false);
  };
  const openSideMenu = () => {
    setSideMenu(true);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header>
      {sideMenu && <Backdrop onClick={closeSideMenu} />}
      {sideMenu && (
        <SideMenu>
          <div className={classes.sideMenuWrapper}>
            <div className={classes.closeIcon}>
              <div className={classes.menuIcon}>
                <RiCloseLine onClick={closeSideMenu} />
              </div>
            </div>
            <div className={classes.mobileLogo}>
              <div
                data-aos="flip-left"
                data-aos-duration="2000"
                className={classes.headerLogo}
              >
                <img src="/logo512.png" alt="logo" />
              </div>
            </div>

            <nav className={classes.navMobile}>
              <NavLinks sideMenu onClick={closeSideMenu} />
            </nav>
          </div>
        </SideMenu>
      )}
      <div className={classes.headerWrapper}>
        <div
          data-aos="flip-left"
          data-aos-duration="700"
          className={classes.headerLogo}
        >
          <img src="/logo5122.png" alt="logo" />
        </div>
        <div className={classes.menuIcon}>
          <BiMenuAltRight onClick={openSideMenu} />
        </div>
        <nav
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="700"
          className={classes.navDesktop}
        >
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
