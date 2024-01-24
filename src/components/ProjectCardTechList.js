import React from "react";
import classes from "./ProjectCardTechList.module.css";
import { getBadgeUrl } from "./shared/data/badges";

const ProjectCardTechList = ({ data }) => {
  const imageUrl = getBadgeUrl(data);
  return (
    <li className={classes.techList}>
      <div className={classes.techBadge}>
        <img src={imageUrl} alt="html" />
      </div>
    </li>
  );
};

export default ProjectCardTechList;
