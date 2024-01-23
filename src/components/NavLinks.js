import cv from "../assests/CheemaLebensLauf.pdf";
import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={classes.navLinks}>
      <li>
        <a href="/#about" onClick={props.onClick}>
          <span>01.</span> About
        </a>
      </li>
      <li>
        <a href="/#experience" onClick={props.onClick}>
          <span>02.</span> Experience
        </a>
      </li>
      <li>
        <a href="/#work" onClick={props.onClick}>
          <span>03.</span> Work
        </a>
      </li>
      <li>
        <a href="/#contact" onClick={props.onClick}>
          <span>04.</span> Contact
        </a>
      </li>
      <li>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick}
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
