import React from "react";
import ReactDOM from "react-dom";

import classes from "./SideMenu.module.css";

const SideMenu = (props) => {
  const content = (
    <aside className={classes.sideMenu} onClick={props.onClick}>
      {props.children}
    </aside>
  );
  return ReactDOM.createPortal(content, document.getElementById("side-menu"));
};

export default SideMenu;
