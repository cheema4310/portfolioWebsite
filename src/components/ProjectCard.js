import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import classes from "./ProjectCard.module.css";
import Card from "../UI/Card";
import ProjectCardTechList from "./ProjectCardTechList";

const ProjectCard = (props) => {
  const { title, des, tech, gitLink, url, imageUrl } = props.project;

  return (
    <Card
      dataAos={props.index % 2 ? "flip-right" : "flip-left"}
      dataAosDuration="1500"
      className={classes.projectCard}
    >
      <div className={classes.cardImage}>
        <img src={imageUrl} alt={props.index} />
      </div>

      <div className={classes.cardTop}>
        <div className={classes.iconOne}>
          <span>Live Demo</span>
          <a href={url ? url : gitLink} target="_blank" rel="noreferrer">
            <FaLink />
          </a>
        </div>
        <div className={classes.iconTwo}>
          <span>Source Code</span>
          <a href={gitLink} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className={classes.cardContent}>
        <h4>{title}</h4>
        <p>{des}</p>

        <ul>
          {tech.map((res) => (
            <ProjectCardTechList data={res} key={uuidv4()} />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ProjectCard;
