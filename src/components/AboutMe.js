import classes from "./AboutMe.module.css";
import imageUrl from "../assests/dp.jpg";

const AboutMe = () => {
  return (
    <section id="about">
      <div className={classes.aboutWrapper}>
        <div className={classes.mainHeading}>
          <span>01.</span> About Me
        </div>
        <div className={classes.flexContainer}>
          <div className={classes.textArea}>
            <p>
              Hello! I am Cheema and I enjoy long romantic walks to the fridge
              while creating things on the Internet. I love to bring my
              imagination to life. My interest in web development started back
              in 2016, well first off i found it amusing because it is
              challenging in many ways for a self-taught developer but
              throughout recent years, I kept gaining valable experience in
              HTML, CSS, Javascript, React, Express, MongoDB, Node.js and few
              more.
            </p>
            <p>
              I started working as freelancer on upwork and fiverr in 2021. I
              practiced on many projects in past years to have essential
              skillset for a full-stack developer. I went off track for few
              months to help undergraduates with their Final-Year-Project based
              on Web and IOT.
            </p>
            <p>
              I am constantly seeking out new technologies and staying
              up-to-date on trends. I would be thrilled to help you out
            </p>
            <p>
              Here are a few technologies I have been working with recently:
            </p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className={classes.picArea}>
            <div className={classes.picFrame}>
              <img src={imageUrl} alt="cheema" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
