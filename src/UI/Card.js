import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      data-aos={props.dataAos}
      data-aos-duration={props.dataAosDuration}
      className={`${classes.card} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
