export const frontendBadges = [
  {
    title: 'HTML5',
    badgeUrl:
      'https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat',
  },
  {
    title: 'CSS3',
    badgeUrl:
      'https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat',
  },
  {
    title: 'SCSS',
    badgeUrl:
      'https://img.shields.io/badge/SASS-hotpink?logo=sass&logoColor=fff&style=flat',
  },
  {
    title: 'JavaScript',
    badgeUrl:
      'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat',
  },
  {
    title: 'jQuery',
    badgeUrl:
      'https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=fff&style=flat',
  },
  {
    title: 'React',
    badgeUrl:
      'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat',
  },
  {
    title: 'Redux',
    badgeUrl:
      'https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff&style=flat',
  },
  {
    title: 'Next.js',
    badgeUrl:
      'https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat',
  },
  {
    title: 'TypeScript',
    badgeUrl:
      'https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=fff&style=flat',
  },
  {
    title: 'Tailwind CSS',
    badgeUrl:
      'https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat',
  },
  {
    title: 'Chart.js',
    badgeUrl:
      'https://img.shields.io/badge/Chart.js-f5788d?logo=chartdotjs&logoColor=fff&style=flat',
  },
  {
    title: 'Framer Motion',
    badgeUrl:
      'https://img.shields.io/badge/Framer-black?style=flat&logo=framer&logoColor=blue',
  },
];

export const backendBadges = [
  {
    title: 'Node.js',
    badgeUrl:
      'https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat',
  },
  {
    title: 'Express',
    badgeUrl:
      'https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat',
  },
  {
    title: 'EJS',
    badgeUrl:
      'https://img.shields.io/badge/EJS-A91E50?logo=ejs&logoColor=B4CA65&style=flat',
  },
  {
    title: 'MongoDB',
    badgeUrl:
      'https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat',
  },
  {
    title: 'Mongoose',
    badgeUrl:
      'https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat',
  },
  {
    title: 'JWT',
    badgeUrl:
      'https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens',
  },
  {
    title: 'Prisma',
    badgeUrl:
      'https://img.shields.io/badge/Prisma-3982CE?logo=prisma&logoColor=fff&style=flat',
  },
  {
    title: 'PostgreSQL',
    badgeUrl:
      'https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=fff&style=flat',
  },
];

export const toolsBadges = [
  {
    title: 'Git',
    badgeUrl:
      'https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat',
  },
  {
    title: 'GitHub',
    badgeUrl:
      'https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat',
  },
  {
    title: 'Postman',
    badgeUrl:
      'https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=fff&style=flat',
  },
  {
    title: 'Visual Studio',
    badgeUrl:
      'https://img.shields.io/badge/Visual%20Studio-007ACC?logo=visualstudiocode&logoColor=fff&style=flat',
  },
  {
    title: 'Webpack',
    badgeUrl:
      'https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=000&style=flat',
  },
  {
    title: 'OpenAI',
    badgeUrl:
      'https://img.shields.io/badge/OpenAI-000?logo=openai&logoColor=white&style=flat',
  },
  {
    title: 'Firebase',
    badgeUrl:
      'https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=flat',
  },
  {
    title: 'Heroku',
    badgeUrl:
      'https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=fff&style=flat',
  },
  {
    title: 'Render',
    badgeUrl:
      'https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=000&style=flat',
  },
  {
    title: 'Arduino',
    badgeUrl:
      'https://img.shields.io/badge/Arduino-12959C?logo=arduino&logoColor=fff&style=flat',
  },
];

const allBadges = frontendBadges.concat(backendBadges, toolsBadges);

export const getBadgeUrl = (title) => {
  const badgeObj = allBadges.find((badge) => badge.title === title);
  return badgeObj.badgeUrl;
};
