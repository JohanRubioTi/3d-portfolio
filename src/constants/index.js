import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  unisabana,
  hackmonkeys,
  netstar,
  carrent,
  jobit,
  tripguide,
  threejs,
  estateease,
  sonicscape,
  promptvision,
  codetalk,
  aigateway,
  shapecraft,
  wetforest,
  porta,
  metajungle,
  moya,
  rayo,
  trashquest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Informatics Engineer Degree",
    company_name: "Universidad de La Sabana",
    icon: unisabana,
    iconBg: "#383E56",
    date: "January 2017 - May 2023",
    points: [
      "Software development for mobile devices, interactive applications and video games.",
      "Designing, developing and managing information systems for businesses and organizations.",
      "Creating and establishing new companies and organizations.",
      "Managing complex IT infrastructure and networks.",
      "Implementing automation technologies including humanoid robotics.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Hackmonkeys",
    icon: hackmonkeys,
    iconBg: "#E6DEDD",
    date: "August 2022 - January 2023",
    points: [
      "Spearheading mobile application development using React Native and Expo.",
      "Developing dependable maintainers for web pages utilizing Vue.js and Bootstrap.",
      "Crafting robust modules and web applications in production, leveraging React with Material UI.",
      "Creating innovative web applications employing Vue.js.",
      "Architecting RESTful APIs from inception to implementation leveraging Node.",
    ],
  },
  {
    title: "Founder",
    company_name: "NetStar",
    icon: netstar,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Founded a software solutions company specializing in creating top-notch web applications",
      "Demonstrated leadership and entrepreneurial skills by taking the initiative to start my own business",
      "Leveraged expertise as a front-end developer to establish myself as a knowledgeable and skilled informatics engineer",
      "Developed effective strategies for managing projects, negotiating contracts, and building strong client relationships",
      "Used innovative approaches to create cutting-edge web applications that exceeded expectations of clients",
      "Provided exceptional customer service through proactive communication with clients throughout the development process",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EstateEase",
    description:
      "Introducing a cutting-edge real estate platform with a sleek Material UI 5 design, built on the MERN stack and Refine. Complete with a REST API, chat feature, and Google Login, users can effortlessly publish properties, create custom profiles, and access comprehensive analytics via the ApexCharts dashboard. A truly modern solution delivering seamless user experiences for real estate professionals and clients alike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: estateease,
    source_code_link: "https://github.com/JohanRubioTi/estate-ease",
    website_link: "https://estate-esase.netlify.app",
  },
  {
    name: "SonicScape",
    description:
      "Introducing a state-of-the-art e-commerce app that boasts advanced cart features, seamless Stripe integration, and an intuitive CMS allowing easy on-the-go product management. A modern solution to streamline your online store's operation, delivering unbeatable user experience.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sonicscape,
    source_code_link: "https://github.com/JohanRubioTi/sonic-scape-ecommerce",
    website_link: "https://sonic-scape.netlify.app",
  },
  {
    name: "PromptVision",
    description:
      "Designed and developed a cutting-edge AI image generator using React and pure CSS styling. Leveraged the PromptHero Open Journey API to enable natural language prompts for image creation, providing a seamless and creative user experience.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "propmpthero openjourney API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: promptvision,
    source_code_link: "https://github.com/JohanRubioTi/prompt-vision",
    website_link: "https://prompt-vision.netlify.app",
  },
  {
    name: "CodeTalk",
    description:
      "I successfully developed a coding-focused chatbot using OpenAI API, JavaScript, and Express.js. My project was a replica of ChatGPT, showcasing my expertise in programming and AI, and delivering an intuitive and user-friendly chatbot experience to fellow coders.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: codetalk,
    source_code_link: "https://github.com/JohanRubioTi/codetalk",
    website_link: "https://codetalk.netlify.app/",
  },
  {
    name: "AI Gateway",
    description:
      "Introducing a cutting-edge AI/GPT themed website built with modern UI/UX using React. Designed to inform visitors about the limitless potential of AI/GPT, this project showcases my ability to deliver seamless user experiences with a modern edge.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: aigateway,
    source_code_link: "https://github.com/JohanRubioTi/ai-gateway",
    website_link: "https://gpt-gateway.netlify.app",
  },
  {
    name: "ShapeCraft 3D",
    description:
      "Introducing an AI-powered ThreeJS 3D product website that lets users easily create and customize 3D models with custom colors and file support. Built with TailwindCSS and Framer Motion, this cutting-edge site ensures seamless performance and responsiveness across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: shapecraft,
    source_code_link: "https://github.com/JohanRubioTi/shapecraft",
    website_link: "https://shirtcraft.netlify.app",
  },
  {
    name: "Wetforest Homepage Maintainers",
    description:
      "Developed a maintainer allowing dynamic modifications of images & texts for Wetforest Ventures' website. Utilized Vue.js & Bootstrap CSS to create a robust multilingual platform delivering seamless UX & exceeding client expectations. Showcases my aptitude for developing dynamic websites using cutting-edge tech.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: wetforest,
    source_code_link: "",
    website_link: "https://wetforest.com/",
  },
  {
    name: "Porta",
    description:
      "Revamped Porta, a virtual platform for managing worker hours. Improved existing code, fixed bugs, & utilized Express.js, Handlebars, JS email automation & SQL Server to enhance user experience & ensure seamless operations.",
    tags: [
      {
        name: "handlebars",
        color: "blue-text-gradient",
      },
      {
        name: "SQL server",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: porta,
    source_code_link: "",
    website_link: "portasistema.azurewebsites.net",
  },
  {
    name: "Meta Jungle",
    description:
      "Created a front-end for the Meta Jungle platform using Vue & SASS, designed & developed multiple sections such as homepage, blog, job listings, & maintainer modules for SEO-optimized content. Contributed expertise to a consultant-led project within the metaverse arena, delivering seamless user experiences with a modern edge.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: metajungle,
    source_code_link: "",
    website_link: "https://metajungle.group/",
  },
  {
    name: "Customs agencies Moya and Vio",
    description:
      "Revamped internal platform of Moya & Vio, Chile customs agencies. Added responsive interface, refactored code for improved performance, fixed critical bugs & added mantainers & features. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: moya,
    source_code_link: "",
    website_link: "https://agenciamoya-qa.web.app/login",
  },
  {
    name: "Rayo",
    description:
      "I successfully refactored the code for Rayo's mobile app. The app allowed workers to easily track delivery addresses and routes, and my optimization efforts significantly improved the app's performance and usability.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: rayo,
    source_code_link: "",
    website_link: "https://play.google.com/store/apps/details?id=com.rayo.rayoLatam",
  },
  {
    name: "TrashQuest",
    description:
      "I designed a captivating retro-style video game using Phaser on JavaScript. The project showcases my proficiency in game development and programming, delivering an engaging and entertaining experience to users.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "phaser",
        color: "green-text-gradient",
      },
    ],
    image: trashquest,
    source_code_link: "https://github.com/JohanRubioTi/trashquest",
    website_link: "https://kradron.itch.io/trashquest",
  },
];

export { services, technologies, experiences, testimonials, projects };
