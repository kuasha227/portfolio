/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Ashiqur Rahman",
  logo_name: "Ashiqur Rahman",

  full_name: "Ashiqur Rahman",
  subTitle1: "Frontend Developer.",
  subTitle2: "Life Long Learner.",
  subTitle: "Professional Web Developer, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1lFqkZnNUg5N2muUuv6qIF6so6xloY6-4/view?usp=sharing",
  mail: "mailto:ashiqurrahman356@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/kuasha227",
  linkedin: "https://www.linkedin.com/in/ashiqur-rahman-ashik/",
  gmail: "ashiqurrahman356@gmail.com",
  twitter: "https://twitter.com/ashiqur356",
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive user interfaces",
        "⚡ Building responsive website front end using React",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#593D88",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:uikit",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "vscode-icons:file-type-styled",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      _id: "c026fe64-1542-42b0-84ab-9311840c169f",
      title: "Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "skill-icons:gcp-dark",
          style: {
            backgroundColor: "transparent",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "skill-icons:vercel-light",
          style: {
            color: "gray",
            fill: "gray",
            // backgroundColor: "white",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
            width: "1em",
            height: "1em",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Daffodil International University, Dhaka",
      subtitle: "Bachelor in Computer Science and Engineering",
      logo_path: "daffodil-logo.png",
      alt_name: "Daffodil International University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have taken variety of courses related to Computer Science, Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have done courses on Algorithms,Data Structure and Frontend Development.",
      ],
      website_link: "https://daffodilvarsity.edu.bd/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Frontend Developer Capstone",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link: "",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Advanced React",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link: "",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Java Programming: Build a Recommendation System",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link: "",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "React Basics",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link: "",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Programming with JavaScript",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link: "",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link: "",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link: "",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "Frontend Development",
      subtitle: "- Christian Hur",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#0056d2",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Apprenticeship",
  description:
    "I've over 1 year of experience as a frontend developer. I've worked on building products for multiple stakeholders in Infosys as well as my personal projects.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      {
        title: "Website Developer",
        company: "Happy Touch",
        company_url: "https://www.facebook.com/happytouch.com.bd",
        logo_path: "happpytouch.png",
        alt_name: "Happy Touch-logo",
        duration: "(Jan, 2022 - May, 2022)",
        location: "Remote",
        description:
          "<li>Launched Happy Touch E-Commerce in a team of four with add on features such as multiple content pages in a single project, audio, custom gradients, trigger and hover based animations etc. in canvas using ReactJS v18.</li><br><li>Maintained the whole website and focus on user friendly customization</li>",
        color: "#0071C5",
      },
      {
        title: "Frontend Developer",
        company: "Digibook Limited",
        company_url: "https://www.facebook.com/digibooklimited.bd",
        logo_path: "digibook.png",
        alt_name: "Digibook-logo",
        duration: "(Jun, 2022 - Dec, 2022)",
        location: "Remote",
        description:
          "<li>Implemented implemented a super responsive frontend e-commerce with seo and bug fixing & maintaining continuously</br> Still now continuously maintaining their websites. I have developed 4 websites under Digibook Limited.</br>I have also worked there as a Business Consultant. I have developed 2 account software under them.</li>",
        color: "#0071C5",
      },
      {
        title: "Website Developer",
        company: "Coachcouncil",
        company_url: "https://www.coachcouncil.com.bd/",
        logo_path: "coachcouncil.png",
        alt_name: "coachcouncil-logo",
        duration: "(Nov, 2022 - Feb, 2023)",
        location: "Remote",
        description:
          "This is a sister concern of Digibook Limited. I have developed their lms system on their website and maintained them regularly </br> First I have developed their frontend. Then I have gone for the lms system. They are enrolling students regularly and genenrating profits continuously. I also maintained their website speed optomization",
        color: "#4285F4",
      },
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create MERN and MEAN Stack Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "project-0",
      name: "Crafty Commerce",
      url: "https://crafty-commerce.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/crafty-commerce",
      description:
        "Crafty Commerce is a full stack e-commerce web application that allows you to purchase different categories of product online. You can apply filters accordingly and find your favourite products in crafty commerce. You can pay with debit/credit cards and in just few click your product will be delivered.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
    {
      id: "project-1",
      name: "Tikkaway",
      url: "https://restaurant-app-bceb0.web.app/",
      repoUrl: "https://github.com/sumit-sharma-02/tikkaway",
      description:
        "Tikkaway is a full stack restaurant web application that allows you to order food online. It has wide variety of categories on the menu like Chicken, Curry, Rice, Fish, Fruits, Icecreams, Soft Drinks etc.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
    {
      id: "project-2",
      name: "MEAN Agency",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/mean-agency",
      description:
        "Mean Agency is a full stack service provider web application that allows you to provide services to other companies.",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "Handlebars",
          iconifyClass: "vscode-icons:file-type-handlebars",
        },
      ],
    },
    {
      id: "project-3",
      name: "Countdown Timer",
      url: "https://countdown-timer-sumit-sharma-02.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/countdown-timer",
      description: "A Simple React App for countdown to new year using hooks.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "project-4",
      name: "Portfolio",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/sumit-portfolio",
      description: "You are watching it right now 😉.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Reveal",
          iconifyClass: "simple-icons:scrollreveal",
        },
        {
          name: "Styled Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
    {
      id: "project-5",
      name: "SpaceX Capsules",
      url: "https://spacex-capsules.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/spacex-capsules",
      description:
        "A React application which shows you the filtered spaceX capsules data.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portfolioProfileImage.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
