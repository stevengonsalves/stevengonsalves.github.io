import {
    data,
    creator,
    ml,
    javascript,
    sql,
    html,
    css,
    reactjs,
    c,
    nodejs,
    estate,
    Agri,
    mood,
    python,
    jupitarNotebook,
    intern,
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
      title: "Machine Learning",
      icon: ml,
    },
    {
      title: "Datascience",
      icon: data,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Jupitar Notebook",
      icon: jupitarNotebook,
    },
    {
      name: "MY SQL",
      icon: sql,
    },
  ];
  const experiences = [
    {
      title: "Internship",
      company_name: "Accolade Tech Solution",
      icon: intern,
      iconBg: "#383E56",
      date: "September 2023 - October 2023",
      points: [
        "Data science Internship in Accolade Tech Solutions where I leant to work with Datasets.",
        "I leant some of the of important ML Algorithm and I learnt to use some Important tools like JupiterNote Book"
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
      name: "Mood Music Detector",
      description:
        "A Mood Music Detector uses a Convolutional Neural Network (CNN) to identify a listener's emotional state based on their current mood. The project aims to enhance user experience by tailoring music recommendations to the detected mood",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "ML algorithm(CNN)",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: mood,
      source_code_link: "https://github.com/stevengonsalves/MoodMusicDetector",
    },
    {
      name: "Real Estate Prediction",
      description:
        "Designed, developed, and deployed a Real Estate prediction model using AI/ML techniques, incorporating it into a user-friendly web application with Flask, facilitating real-time Flat or Room valuation for users.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "ML (Linear Regression)",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: estate,
      source_code_link: "https://github.com/stevengonsalves/RealEstatePrediction",
    },
    {
      name: "Agriculture Management System",
      description:
        "Agriculture Management System (AMS) connects farmers and buyers, ensuring quality and transparency through technology, revolutionizing transactions and offering potential for broader reach and sustainability.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "MY SQL",
          color: "pink-text-gradient",
        },
      ],
      image: Agri,
      source_code_link: "https://github.com/stevengonsalves/AgricultureManagement",
    },
  ];
  
  export { services, technologies, experiences,testimonials, projects };