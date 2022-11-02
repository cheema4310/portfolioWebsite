import React from "react";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  fontFamily: "'Roboto Condensed', sans-serif",
  color: "#64ffda",
  transform: "translate(-50%, -50%)",
  fontSize: "3rem",
};

const NotFound = () => {
  return <div style={styles}>Page Not found</div>;
};

export default NotFound;
