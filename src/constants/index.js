import {
    data,
    creator,
    ml,
   fast,
    sql,
    ten,
    flask,
    estate,
    Agri,
    mood,
    python,
    jupitarNotebook,
    intern,
    Gen,
    fr,
    pot,
    research,
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
      title: "AIML",
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
      name: "Tensorflow",
      icon: ten,
    },
    {
      name: "FastApi",
      icon: fast,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Python",
      icon: python,
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
    {
      title: "Internship",
      company_name: "Accolade Tech Solution",
      icon: intern,
      iconBg: "#383E56",
      date: "February 2025 - May 2025",
      points: [
        "AIML Internship in Accolade Tech Solutions.",
        "I have completed my Internship with a project that is Developed a Glaucoma Detection System using retina datasets (2-3 hospitals) with TensorFlow, CNN (VGG16), achieving 95%+ accuracy, integrated with a PHP-XAMPP frontend and Flask backend e-commerce platform during internship at Accolade Tech Solutions."
      ],
    },
     {
      title: "Research Work",
      company_name: "Improving Subsriber Retention: A Machine Learning Approach with Random Forest and SMOTE",
      icon: research,
      iconBg: "#383E56",
      date: "September 2024 - June 2025",
      points: [
        "For subscription-based companies, especially those in the telecom sector, customer attrition is a serious problem. Using machine learning techniques and the Telco Customer attrition dataset, this research forecasts customer attrition. Strong data preprocessing, feature engineering, and predictive modeling with cutting-edge algorithms like LightGBM and Random Forest as well as a Voting Classifier to improve accuracy are all part of the approach. SMOTE ensures balanced forecasts by addressing class imbalance. Effective retention tactics may be implemented by stakeholders thanks to an intuitive dashboard that offers real-time projections, churn patterns, and interactive visualizations. This project provides a complete solution to enhance business results and lower churn rates.",
        "(Acceptance ID: ICIRCA047) has been accepted for oral presentation and inclusion in the ICIRCA 2025 Conference Proceedings. The conference will be held on June 25-27, 2025 at RVS College of Engineering and Technology, Coimbatore, Tamil Nadu, India."
      ],
    },
  ];
  const OtherActivities = [
    {
      Activity:
        "I play Football, Volleyball and Cricket. I play sports very often which freshens my mind helps me to stay fit . I also go Gym and i love to work out.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      Activity:
        "I Play Music like Guitar in my free time. I learnt this long back when i was in 10th standard.I only play when I'm alone which makes me Happy",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      Activity:
        "I am fond of reading history. I have seen many Documentries and I'm very curious to know about the historical things",
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
        {
      name: "Cold Email Generator",
      description:
        "Cold email generator for services company using groq, langchain and streamlit. It allows users to input the URL of a company's careers page. The tool then extracts job listings from that page and generates personalized cold emails. These emails include relevant portfolio links sourced from a vector database, based on the specific job descriptions.",
      tags: [
        {
          name: "Langchain",
          color: "blue-text-gradient",
        },
        {
          name: "Groq",
          color: "green-text-gradient",
        },
        {
          name: "Llama 3.1",
          color: "pink-text-gradient",
        },
      ],
      image: Gen,
      source_code_link: "https://github.com/stevengonsalves/Cold_Email_Generator.git",
    },
    {
      name: "Churn Prediction For Telecom Industry",
      description:
        "Using Random Forest, a machine learning-based Customer Churn Prediction system was developed and implemented, improving telecom client retention tactics. To increase prediction accuracy, data preprocessing, feature engineering, and SMOTE were used. It is under review for IEEE publication",
      tags: [
        {
          name: "Random Forest",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "SMOTE",
          color: "pink-text-gradient",
        },
      ],
      image: fr,
      source_code_link: "https://github.com/stevengonsalves/CustomerChurnPrediction.git",
    },
    {
      name: "Potato Disease Detector",
      description:
        "Detecting Potato disease using TensorFlow and CNN models. Using react for front end and using FastAPI for the backend",
      tags: [
        {
          name: "FastAPI",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: pot,
      source_code_link: "https://github.com/stevengonsalves/Potato.git",
    },
  ];
  
  export { services, technologies, experiences,OtherActivities, projects };