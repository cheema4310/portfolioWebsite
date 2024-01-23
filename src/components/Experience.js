import classes from "./Experience.module.css";
import { useState } from "react";

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="experience">
      <div className={classes.expWrapper}>
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-sine"
          className={classes.expHeading}
        >
          <h2>
            <span>02.</span> Where I've Worked
          </h2>
        </div>
        <div className={classes.expContent}>
          <div className={classes.tabs}>
            <div
              className={
                toggleState === 1
                  ? `${classes.tab} ${classes.activeTab}`
                  : classes.tab
              }
              onClick={() => toggleTab(1)}
            >
              E-commerce
            </div>
            <div
              className={
                toggleState === 2
                  ? `${classes.tab} ${classes.activeTab}`
                  : classes.tab
              }
              onClick={() => toggleTab(2)}
            >
              Fiver
            </div>
            <div
              className={
                toggleState === 3
                  ? `${classes.tab} ${classes.activeTab}`
                  : classes.tab
              }
              onClick={() => toggleTab(3)}
            >
              Freelancer
            </div>
            <div
              className={
                toggleState === 4
                  ? `${classes.tab} ${classes.activeTab}`
                  : classes.tab
              }
              onClick={() => toggleTab(4)}
            >
              FYP
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
            className={classes.allContent}
          >
            <div
              className={
                toggleState === 1
                  ? `${classes.content} ${classes.activeContent}`
                  : classes.content
              }
            >
              <h4>E-commerce Enthusiast</h4>
              <p>Jul 2023 - Oct 2023</p>
              <ul>
                <li>
                  Developed a dropshipping e-commerce website, buypits.com, with
                  a focus on delivering seamless user experiences.
                </li>
                <li>
                  engaging user interfaces with React, while seamlessly
                  integrating back-end functionality with Node.js, Express, and
                  MongoDB.
                </li>
              </ul>
            </div>
            <div
              className={
                toggleState === 2
                  ? `${classes.content} ${classes.activeContent}`
                  : classes.content
              }
            >
              <h4>Data Visualization @ Fiver</h4>
              <p>Feb 2021 - Mar 2021</p>
              <ul>
                <li>
                  Developing a tastewheel in Chart.js, showcasing various
                  flavors of chips in Pie Chart and upon onClick, directing
                  users to a comprehensive display of all chips associated with
                  the selected flavor.
                </li>
                <li>
                  An interactive experience by integrating Chart.js, enabling
                  users to navigate to a dedicated search results page simply by
                  clicking on a flavor.
                </li>
              </ul>
            </div>
            <div
              className={
                toggleState === 3
                  ? `${classes.content} ${classes.activeContent}`
                  : classes.content
              }
            >
              <h4>Independent Freelancer</h4>
              <p>Jan 2021 - to Date</p>
              <ul>
                <li>
                  Proficient in front-end development utilizing technologies
                  such as React, Redux, and UI/UX design, with expertise in
                  back-end technologies including Node.js, Express, MongoDB, and
                  REST APIs.
                </li>
                <li>
                  Committed to delivering high-quality work within specified
                  timelines. I prioritize your time, effort and most
                  importantly, your trust in my abilities.
                </li>
              </ul>
            </div>
            <div
              className={
                toggleState === 4
                  ? `${classes.content} ${classes.activeContent}`
                  : classes.content
              }
            >
              <h4>Web and IoT Project @ FYP</h4>
              <p>Nov 2021 - jan 2022</p>
              <ul>
                <li>
                  Provided guidance and support to undergraduate students
                  working on their Final-Year-Projects, focusing on the
                  development of a system for controlling and monitoring house
                  environments using an Android App.
                </li>
                <li>
                  Leveraged my C++ expertise acquired during university studies
                  to comprehend arduino.ino syntax and proficiently deploy it to
                  ESP8266, enhancing my capabilities in the realm of Internet of
                  Things (IoT).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
