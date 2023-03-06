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
          data-aos-duration="1700"
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
              Freelancer
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
              CyanaBot
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
            data-aos-duration="1700"
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
              <h4>Self-Taught Freelancer</h4>
              <p>Jan 2021 - to Date</p>
              <ul>
                <li>
                  Develop front-end User Interface using React, Redux and APIs.
                </li>
                <li>
                  I try my best to deliver satisfying work in time. I value your
                  time, effort and specially your trust in me.
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
                  It was demanded to display tastewheel with flavors and a
                  portion dedicated to certain flavor of chips.
                </li>
                <li>
                  when clicked on, will be directed to serach results page.
                  Chart.js made everything pretty easy for me
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
              <h4>IOT @ CyanaBot</h4>
              <p>March - 2021</p>
              <ul>
                <li>CyanaBot is upcomming leading world company </li>
                <li>point number two is what number is </li>
              </ul>
            </div>
            <div
              className={
                toggleState === 4
                  ? `${classes.content} ${classes.activeContent}`
                  : classes.content
              }
            >
              <h4>Web and IOT @ FYP</h4>
              <p>Nov 2021 - jan 2022</p>
              <ul>
                <li>
                  I helped undergraduates with their Final-Year-Project which
                  was controlling and monitoring house environment using Android
                  App.
                </li>
                <li>
                  I studied C++ in University which helped me understanding
                  arduino.ino syntax and deploying it to ESP8266
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
