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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    pharmacy,
    syllabus_management,
    ai_tetris,
    dharahara
  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Driver Attention Monitoring System",
      description:
        "This is an AI project that monitors the attention of the driver in order to reduce number of accidents",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: carrent,
      source_code_link: "https://github.com/Aditya186-code/Driver-Attention-Monitoring-System",
    },
    {
      name: "FYP-Pharmacy",
      description:
        "Helps to book appointment for full-body-checkup from doctors. Addition to that provides information about the medicines  to the client",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: pharmacy,
      source_code_link: "https://github.com/Aditya186-code/FYP-Pharmacy",
    },
    {
      name: "Syllabus Version Management ",
      description:
        "Provides all the syllabus information to the students. Addition to that keeps a track of version of revised syllabus and the curriculum changed",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: syllabus_management,
      source_code_link: "https://github.com/Aditya186-code/Syllabus-Version_Management",
    },
    ,
    {
      name: "AI Tetris ",
      description:
        "It uses Monte Carlo Tree Search to make the agent learn to play tetris by itself.(Domain - AI)",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "reinforcement-learning",
          color: "green-text-gradient",
        },
      //   {
      //     name: "css",
      //     color: "pink-text-gradient",
      //   },
      // ],
      ],
      image: ai_tetris,
      source_code_link: " https://github.com/Aditya186-code/AI-Tetris/"
      
    },
    {
      name: "Dharahara In OpenGL ",
      description:
        "Building Dharahara in OpenGL(C++)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "blender",
          color: "green-text-gradient",
        },
      //   {
      //     name: "css",
      //     color: "pink-text-gradient",
      //   },
      // ],
      ],
      image: dharahara,
      source_code_link: "https://github.com/Aditya186-code/Dharahara-clone"
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  