import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/DirectoryWeb.png";
import Work2 from "./assets/Realestate.png";
import Work3 from "./assets/Ecommerce.png";
import Work4 from "./assets/clickdigital.png";
import Work5 from "./assets/hrms.png";
import Work6 from "./assets/NikeHome.png";
import Work7 from "./assets/CryptoApp.png";
import Work8 from "./assets/DirectoryWebHome.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Rabi",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Roy",
  },

  {
    id: 3,
    title: "Age : ",
    description: "24 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Nepali",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Kathmandu",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+977-9815811311",
  },

  {
    id: 8,
    title: "Email : ",
    description: "rrabir9815@gmail.com",
  },

  {
    id: 9,
    title: "Linkdin : ",
    description: "rabi-roy-821466272",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Maithali, Nepali, English, hindi",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Months of <br /> Intern Experience",
  },

  {
    id: 2,
    no: "5+",
    title: "Completed <br /> Self Projects",
  },

  {
    id: 3,
    no: "3+",
    title: "Technologies <br /> Experienced",
  },

  {
    id: 4,
    no: "100+",
    title: " Hours of <br />coding Practice",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024-2025",
    title: "Frontend Developer Intern <span> Blue Fox pvt ltd </span>",
    desc: "Worked on building responsive web interfaces using React, Bootstrap, and Tailwind. Improved UI performance and collaborated with designers to enhance the user experience.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024",
    title: "UI/UX Designer Intern <span> IT Service Nepal </span>",
    desc: "Designed and prototyped user interfaces in Figma, conducted user research, and optimized web and mobile experiences to enhance usability and engagement.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2025",
    title: "Bachelor Degree <span> Purbanchal University </span>",
    desc: "Pursuing a Bachelor's degree with a focus on IT. Gained in-depth knowledge of Programming, hands-on experience in Projects, and skills in HTML, CSS, JS, React, Tailwind, PHP, Mysql.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Plus 2 Degree <span> Triton College, Kathmandu </span>",
    desc: "Completed high school with a specialization in Science. Developed a strong foundation in Computer.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "95",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "85",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 4,
    title: "React",
    percentage: "65",
  },

  {
    id: 5,
    title: "Tailwind",
    percentage: "50",
  },

  {
    id: 6,
    title: "Python",
    percentage: "40",
  },

  {
    id: 7,
    title: "Php",
    percentage: "30",
  },

  {
    id: 8,
    title: "Wordpress",
    percentage: "75",
  },

  {
    id: 9,
    title: "Mysql",
    percentage: "75",
  },

  {
    id: 10,
    title: "Next js",
    percentage: "10",
  },

  {
    id: 11,
    title: "Nest js",
    percentage: "10",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Website Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Directory Web Portal",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "html, css, js, bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://directory-web-portal.vercel.app/" target="_blank" rel="noopener noreferrer" className="custom-link">View</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "RealeState Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://nobroker-application.vercel.app/" className="custom-link" target="_blank" rel="noopener noreferrer">View</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Ecommerce Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "html, css, bootstrap, php, mysql",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://github.com/rrabir12/E-commerce-Website" className="custom-link" target="_blank" rel="noopener noreferrer">View</a>,
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Click Digital Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Click digitals",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React js, tailwind",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://clickdigitals.com.np/" className="custom-link" target="_blank" rel="noopener noreferrer">View</a>,
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Website Design",
    details: [
      {
        title: "Project : ",
        desc: "HRMS Website",
      },
      {
        title: "Client : ",
        desc: "Self project",
      },
      {
        title: "Language : ",
        desc: "Figma",
      },
      {
        title: "Preview : ",
        desc: <a href="https://tinyurl.com/39z57mr4" className="custom-link" target="_blank" rel="noopener noreferrer">View</a>,
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Nike Home Page ",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Figma",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://tinyurl.com/659dxknu" className="custom-link" target="_blank" rel="noopener noreferrer">View</a>,
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: "Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Cripto App",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Figma",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://tinyurl.com/487w5tst" className="custom-link" target="_blank" rel="noopener noreferrer">View</a>,
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Directory Web Portal",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Figma",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://tinyurl.com/3jdzrmhr" className="custom-link" target="_blank" rel="noopener noreferrer">View</a>,
      },
    ],
  }
  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
