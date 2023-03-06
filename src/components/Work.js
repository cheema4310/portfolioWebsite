import { v4 as uuidv4 } from "uuid";

import ProjectCard from "./ProjectCard";
import classes from "./Work.module.css";

const Dummy_Project_Data = [
  {
    id: "01",
    title: "Love Quiz for fun",
    des: "In Magzine, I read one article asking few questions and based on given answer, that person is being charaterized",
    tech: ["HTML", "CSS", "React"],
    gitLink: "https://github.com/cheema4310/Love-Quiz",
    url: "https://love-quiz-5405b.web.app/",
  },
  {
    id: "02",
    title: "OpenAI Text to Image",
    des: "OpenAI has developed a powerful tool called DALL-E, which works by using a generative model called a GAN that has been trained on a vast dataset of images and textual descriptions.",
    tech: ["HTML", "CSS", "Node.js", "API", "OpenAI"],
    gitLink: "https://github.com/cheema4310/imageGenerator",
    url: "https://imggen-4h9z.onrender.com/",
  },
  {
    id: "03",
    title: "Data visualization in Chart.js",
    des: "I built tastewheel for user to select one among all flavors of chips and take users to desired page according to selection. first gig on fiver",
    tech: ["HTML", "CSS", "Javascript", "Chart.js"],
    gitLink: "https://github.com/cheema4310/Data-visualization-Chart-js",
  },
  {
    id: "04",
    title: "Internet of Things",
    des: "Helping undergraduates with their final year. built Home Automation system and connecting to a website to control the house",
    tech: ["ESP8266", "arduino.ino", "Javascript"],
    gitLink: "https://github.com/cheema4310",
  },

  {
    id: "05",
    title: "Travel World Light and Tight",
    des: "When Bored, it help me to choose where should i travel according to my mood at the moment. using Api to render results ",
    tech: ["React", "Express", "API"],
    gitLink: "https://github.com/cheema4310/Data-visualization-Chart-js",
  },
  {
    id: "06",
    title: "Auth 101",
    des: "To practice user authentication, and enabling hashes and salts to ensure high-end security ",
    tech: ["React", "Express", "MongoDB"],
    gitLink: "https://github.com/cheema4310/Data-visualization-Chart-js",
  },
];

const showMoreLess = () => {};

const Work = () => {
  return (
    <section id="work">
      <div className={classes.workWrapper}>
        <div className={classes.workHeading}>
          <h2>
            <span>03.</span> Some Things I've Built
          </h2>
        </div>
        <div className={classes.workSubHeading}>
          <h3>Noteworthy Projects</h3>
        </div>
        <div className={classes.allProjects}>
          {Dummy_Project_Data.map((project, index) => (
            <ProjectCard index={index} project={project} key={uuidv4()} />
          ))}
        </div>
        <div className={classes.showMoreBtn}>
          <button onClick={showMoreLess}>Show More</button>
        </div>
      </div>
    </section>
  );
};

export default Work;
