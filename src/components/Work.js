import { v4 as uuidv4 } from 'uuid';

import ProjectCard from './ProjectCard';
import classes from './Work.module.css';

// images imports for Projects Card
import bookingImage from '../assests/images/booking.png';
import eComImage from '../assests/images/ecom.png';
import generateImage from '../assests/images/imgGen.png';
import quizImage from '../assests/images/loveQuiz.png';
import homeAutoImage from '../assests/images/homeAuto.png';
import wheelImage from '../assests/images/tasteWheel.png';
import onlineTutorImage from '../assests/images/onlineTutor.png';
import { useState } from 'react';

const Dummy_Project_Data = [
  {
    id: '01',
    title: 'Online Learning Platform',
    des: 'Designed & Developed to facilitate online learning experiences. It offers an environment for instructors to create and deliver engaging courses, while providing students with access to educational content. Learners can explore various subjects.',
    tech: ['React', 'Tailwind CSS', 'Express', 'Mongoose', 'JWT', 'Node.js'],
    gitLink: 'https://github.com/cheema4310/assignment-investment-compass',
    url: 'https://assignment-investment-compass-1.onrender.com/',
    imageUrl: onlineTutorImage,
  },
  {
    id: '01',
    title: 'Hair Salon Booking App',
    des: 'The platform offers a visually appealing interface for clients to book appointments. Customers can effortlessly book their preferred services, and salon staff can manage appointments efficiently.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB'],
    gitLink: 'https://github.com/cheema4310/Reservation',
    url: 'https://reservation-anu-cuts.vercel.app/',
    imageUrl: bookingImage,
  },
  {
    id: '02',
    title: 'E-commerce Platform',
    des: 'The development of a robust e-commerce website leveraging the MERN stack. Specializing in dropshipping, the platform seamlessly connects customers with trending high-quality products.',
    tech: ['HTML5', 'CSS3', 'React', 'Express', 'Mongoose', 'Node.js', 'Redux'],
    gitLink: 'https://deals.buypits.com',
    url: 'https://deals.buypits.com',
    imageUrl: eComImage,
  },
  {
    id: '03',
    title: 'OpenAI Text to Image',
    des: 'OpenAI has developed a powerful tool called DALL-E, which works by using a generative model called a GAN that has been trained on a vast dataset of images and textual descriptions.',
    tech: ['HTML5', 'CSS3', 'Node.js', 'EJS', 'OpenAI', 'Render'],
    gitLink: 'https://github.com/cheema4310/imageGenerator',
    url: 'https://imggen-4h9z.onrender.com/',
    imageUrl: generateImage,
  },
  {
    id: '04',
    title: 'Love Quiz for fun',
    des: 'Came across an intriguing magazine article featuring a questionnaire. Based on the responses, individuals were characterized in a unique and engaging manner.',
    tech: ['HTML5', 'CSS3', 'React', 'Firebase'],
    gitLink: 'https://github.com/cheema4310/Love-Quiz',
    url: 'https://love-quiz-5405b.web.app/',
    imageUrl: quizImage,
  },

  {
    id: '05',
    title: 'Internet of Things',
    des: 'Aiding final-year undergraduates in creating a Home Automation system, connected to a website for convenient household control. A Web IoT project that merges innovation with practicality.',
    tech: ['Arduino', 'JavaScript', 'HTML5', 'CSS3'],
    gitLink: 'https://github.com/cheema4310?tab=repositories',
    imageUrl: homeAutoImage,
  },
  {
    id: '06',
    title: 'Data visualization in Chart.js',
    des: 'Developed a tastewheel enabling users to easily select their preferred chip flavor on Pie Chart and navigate to the corresponding page. This project marked my debut on Fiverr.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    gitLink: 'https://github.com/cheema4310/Data-visualization-Chart-js',
    imageUrl: wheelImage,
  },
];

const Work = () => {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore((pre) => !pre);
  };
  let totalProjects;
  if (showMore) {
    totalProjects = Dummy_Project_Data;
  } else {
    totalProjects = Dummy_Project_Data.slice(0, 6);
  }
  console.log(totalProjects);
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
          {totalProjects.map((project, index) => (
            <ProjectCard index={index} project={project} key={uuidv4()} />
          ))}
        </div>
        <div className={classes.showMoreBtn}>
          <button onClick={showMoreHandler}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
