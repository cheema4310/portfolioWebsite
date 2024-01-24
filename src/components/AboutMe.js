import { useEffect } from "react";
import classes from "./AboutMe.module.css";
import imageUrl from "../assests/dp.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import FrontendIcon from "./icons-components/Frontend";
import BackendIcon from "./icons-components/Backend";
import ToolsIcon from "./icons-components/Tools";
import {
  backendBadges,
  frontendBadges,
  toolsBadges,
} from "./shared/data/badges";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about">
      <div className={classes.aboutWrapper}>
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-sine"
          className={classes.mainHeading}
        >
          <span>01.</span> About Me
        </div>
        <div className={classes.flexContainer}>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
            className={classes.textArea}
          >
            <p>
              Hello! I am Cheema and I enjoy long romantic walks to the fridge
              while creating things on the Internet. Turning my imagination into
              reality is my jam. I got into web development around 2016, and
              honestly, it caught my eye because of the challenge it posed to a
              self-taught developer like me. Over the years, though, I've
              gathered valuable experience in HTML, CSS, Javascript, Tailwind
              CSS, React, Next.js, Node.js, Express, MongoDB, and a few more
              tricks up my sleeve.
            </p>
            <p>
              In 2021, I took a leap into freelancing on platforms like Upwork
              and Fiverr. I've honed my skills through various projects,
              striving to be the full-stack developer that every project needs.
              For a few months, I took a detour to assist undergraduates with
              their Final-Year-Projects, focusing on Web and IoT.
            </p>
            <p>
              I'm always on the lookout for new technologies and like to stay in
              the loop with the latest trends. If you've got a project, I'd be
              more than thrilled to help you out!
            </p>
            <p>
              Here are a few technologies I have been working with recently:
            </p>
          </div>

          <div className={classes.picArea}>
            <div className={classes.picFrame}>
              <img src={imageUrl} alt="cheema" />
            </div>
          </div>
        </div>
        {/* MySkills Div */}
        <div className={classes.mySkills}>
          <div className={classes.frontend}>
            <div className={classes.icon}>
              <FrontendIcon />
            </div>
            <div className={classes.title}>
              <h3>Frontend</h3>
            </div>
            <div className={classes.badges}>
              {frontendBadges.map((badge, index) => (
                <div key={index} className={classes.skill}>
                  <img alt={badge.title} src={badge.badgeUrl} />
                </div>
              ))}
            </div>
          </div>

          <div className={classes.backend}>
            <div className={classes.icon}>
              <BackendIcon />
            </div>
            <div className={classes.title}>
              <h3>Backend</h3>
            </div>
            <div className={classes.badges}>
              {backendBadges.map((badge, index) => (
                <div key={index} className={classes.skill}>
                  <img alt={badge.title} src={badge.badgeUrl} />
                </div>
              ))}
            </div>
          </div>

          <div className={classes.tools}>
            <div className={classes.icon}>
              <ToolsIcon />
            </div>
            <div className={classes.title}>
              <h3>Tools</h3>
            </div>
            <div className={classes.badges}>
              {toolsBadges.map((badge, index) => (
                <div key={index} className={classes.skill}>
                  <img alt={badge.title} src={badge.badgeUrl} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
