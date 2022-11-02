import classes from "./Header.module.css";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className={classes.headerWrapper}>
        <div className={classes.headerLogo}>
          <img src="/logo512.png" alt="logo" />
        </div>
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
