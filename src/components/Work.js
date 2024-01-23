import { v4 as uuidv4 } from "uuid";

import ProjectCard from "./ProjectCard";
import classes from "./Work.module.css";

const Dummy_Project_Data = [
  {
    id: "nextjs-01",
    title: "Hair Salon Booking App",
    des: "The platform offers a visually appealing interface for clients to book appointments. Customers can effortlessly book their preferred services, and salon staff can manage appointments efficiently.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    gitLink: "https://github.com/cheema4310/Reservation",
    url: "https://reservation-anu-cuts.vercel.app/",
  },
  {
    id: "01",
    title: "E-commerce Platform",
    des: "The development of a robust e-commerce website leveraging the MERN stack. Specializing in dropshipping, the platform seamlessly connects customers with trending high-quality products.",
    tech: ["React", "Express", "MongoDB", "NodeJS"],
    gitLink: "https://deals.buypits.com",
    url: "https://deals.buypits.com",
  },
  {
    id: "02",
    title: "OpenAI Text to Image",
    des: "OpenAI has developed a powerful tool called DALL-E, which works by using a generative model called a GAN that has been trained on a vast dataset of images and textual descriptions.",
    tech: ["HTML/CSS", "Node.js", "EJS", "OpenAI"],
    gitLink: "https://github.com/cheema4310/imageGenerator",
    url: "https://imggen-4h9z.onrender.com/",
  },
  {
    id: "03",
    title: "Love Quiz for fun",
    des: "Came across an intriguing magazine article featuring a questionnaire. Based on the responses, individuals were characterized in a unique and engaging manner.",
    tech: ["HTML", "CSS", "React"],
    gitLink: "https://github.com/cheema4310/Love-Quiz",
    url: "https://love-quiz-5405b.web.app/",
  },

  {
    id: "04",
    title: "Internet of Things",
    des: "Aiding final-year undergraduates in creating a Home Automation system, connected to a website for convenient household control. A Web IoT project that merges innovation with practicality.",
    tech: ["ESP8266", "arduino.ino", "Javascript"],
    gitLink: "https://github.com/cheema4310?tab=repositories",
  },
  {
    id: "05",
    title: "Data visualization in Chart.js",
    des: "Developed a tastewheel enabling users to easily select their preferred chip flavor on Pie Chart and navigate to the corresponding page. This project marked my debut on Fiverr.",
    tech: ["HTML/CSS", "Javascript", "Chart.js"],
    gitLink: "https://github.com/cheema4310/Data-visualization-Chart-js",
  },

  {
    id: "06",
    title: "Auth 101",
    des: "To practice user authentication, and enabling hashes and salts to ensure high-end security ",
    tech: ["React", "Express", "MongoDB", "JWT"],
    gitLink: "https://github.com/cheema4310/Redux-Practice",
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
