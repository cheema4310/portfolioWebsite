import cv from "../assests/CheemaLebensLauf.pdf";

const NavLinks = () => {
  return (
    <ul
      data-aos="zoom-in-left"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <li>
        <a href="/#about">
          <span>01.</span> About
        </a>
      </li>
      <li>
        <a href="/#experience">
          <span>02.</span> Experience
        </a>
      </li>
      <li>
        <a href="/#work">
          <span>03.</span> Work
        </a>
      </li>
      <li>
        <a href="/#contact">
          <span>04.</span> Contact
        </a>
      </li>
      <li>
        <a href={cv} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
