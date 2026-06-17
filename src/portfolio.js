/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { title } from "process";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashish S",
  title: "Greetings I am Ashish",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 with a strong foundation in Electronics and hands-on experience in Python, SQL, Machine Learning, and Power BI, skilled at turning complex data into actionable insights and building intelligent, scalable solutions for real-world impact."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1tH9EsOqGbM4GklYyqS6J9ZPRxu_r9CQ8?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ashishrox18",
  linkedin: "https://www.linkedin.com/in/ashishsrinivas/",
  gmail: "ashishandsan@gmail.com",
  twitter: "https://unstop.com/u/ashissri8635",
  gitlab: "https://drive.google.com/drive/folders/1MhXSpF3OM5vp_zDqvNtGVEikRt3agEXB?usp=sharing",
  stackoverflow: "https://drive.google.com/drive/folders/1SkPXl4h4bxccB43793fA50z5GNDNlW_R?usp=sharing",
  medium: "https://drive.google.com/drive/folders/1CZB06sshVWnFsO6SW8BIQkISfODbuBIM?usp=sharing",
  kaggle: "https://www.kaggle.com/ashishsrinivas",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


const skillsSection = {
  title: "What I do",
  subTitle: [
    "Data Science & AI || ",
    "Digital and Analog Design"
  ],
  skills: [
    emoji(
      "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases"
    ),
    emoji("⚡ Data Analysis building ETL/PI pipelines, and developing interactive dashboards for data-driven decision-making"),
    emoji(
      "⚡ Complex quantitative modelling for dynamic forecasting"
    ),
    emoji(
      "⚡ Designing and simulating analog circuits such as amplifiers, filters, and oscillators using Cadence & SPICE tools"
    ),
    emoji("⚡ Developing and verifying digital systems using Verilog/VHDL on platforms like Xilinx"),
    emoji(
      "⚡ Working with embedded systems, interfacing microcontrollers, sensors, and communication protocols (UART, SPI, I2C) for real-world applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "machine learning",
      fontAwesomeClassname: "fa fa-cogs"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "oracle cloud",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fa fa-table"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "cadence",
      fontAwesomeClassname: "fa fa-microchip"
    },
    {
      skillName: "LTSpice",
      fontAwesomeClassname: "fa fa-plug"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The National Institute of Engineering",
      logo: require("./assets/images/NIE_f_logo.jpg"),
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      duration: "August 2019 - Septemper 2023",
      desc: "Activly partcipated and won National level competitions in Technical Clubs IEEE and E-Cell",
      descBullets: [
        "Awarded the KCET Merit Scholarship for ranking among the top 1% candidates in Karnataka Common entrance test",
        "Hands-on experience in data science, AI, and cloud integration, bridging electronics with data-driven problem solving"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Scince and Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Analog and Digital Design",
      progressPercentage: "80%"
    },
    {
      Stack: "DSA",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with top Data Consulting Firms like Deloitte and I have also worked with some well established companies mostly as AI Developer. I love organising events and workshops in the field of STEM, Data Science and Electronics.",
  display: true, //Set it to true to show workExperiences Section
  //sections: [
  //  {
  experience: [
    {
      role: "Data Engineer",
      company: "Aerchain",
      companylogo: require("./assets/images/turing_t_logo.png"),
      date: "March 2025 – Present",
      desc: "Data-Driven Insights ,Machine Learning Solutions and Predictive Analytics",
      descBullets: [
        "Engineered Spark, BigQuery, and Snowflake pipelines powering 3 AI agents, processing procurement data across 1M+ vendor records with near real-time refresh.",
        "Optimized data ingestion architecture, reducing pipeline runtime from 12 hours to 1 hour (8x improvement), and led technical onboarding for Meta.",
        "Built ML-driven vendor recommendation and supply-chain simulation solutions using 1M+ procurement records to support sourcing and risk-analysis decisions."
      ]
    },
    {
      role: "Data Analyst",
      company: "Deloitte USI",
      companylogo: require("./assets/images/Deloitte_logo.png"),
      date: "Dec 2023 – Jan 2025",
      descBullets: [
        "Performed data extraction, transformation, and validation using SQL, Python, and Excel to support business intelligence and audit analytics initiatives.",
        "Built and maintained interactive dashboards and KPI reports in Power BI and Tableau, enabling leadership to make data-driven decisions with real-time insights.",
        "Analyzed large datasets, automate reporting workflows using oracle cloud integration, and develop predictive insights for client engagements across finance and operations",
      ],
    },
    {
      role: "Research And Development Intern",
      company: "ExcelSoft Technologies",
      companylogo: require("./assets/images/excelsoft_logo.jpeg"),
      date: "Jan 2023 – Jul 2023",
      descBullets: [
        "Performed lexical analysis and NLP on regional Indian languages using Python and custom tokenizers",
        "Compiled a comprehensive dataset for under-resourced languages, enhancing model accuracy by 20%",
        "Presented research outcomes to senior stakeholders and published findings in internal whitepapers",
      ],
    }
  ]
}
  /*  {
      title: "Volunteership",
  experience: [
    {
      role: "IEEE SAC Coordinator",
      company: "IEEE",
      companylogo: require("./assets/images/ieee_logo.png"),
      date: "Aug 2021 – Aug 2022",
      descBullets: [
        "Conducted 10+ technical workshops and STEM outreach events with hands-on electronic kits for students.",
        "Organized regional student competitions, increasing IEEE membership by 25"
      ],
    },
    {
      role: "CISCO Campus Ambassador",
      company: "CISCO",
      companylogo: require("./assets/images/Cisco_logo.png"),
      date: "Aug 2021 – Aug 2022",
      descBullets: [
        "Conducted CISCO led workshops and STEM outreach events with hands-on networking events",
        "Organized regional student competitions promoting innovation."
      ],
    },
    {
      role: "Research And Development Intern",
      company: "ExcelSoft Technologies",
      companylogo: require("./assets/images/onyx_logo.jpeg"),
      date: "Aug 2021 – Aug 2022",
      descBullets:
      [
        "Conducted 50+ workshops on startup finance, product pitching, and marketing",
        "Arranged industrial visits and startup pitch sessions with VCs and alumni mentors."
      ],
    }
  ]
}
*/

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Impactful Projects",
  subtitle: "Real World Application and Research Oriented",
  projects: [
    {
      image: require("./assets/images/krishi_sus_logo.png"),
      projectName: "Krishi Inspiro",
      projectDesc: "Automated IoT enabled Bio filtration device",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://willowy-cat-2473ab.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/data_science_logo.png"),
      projectName: "Nextu",
      projectDesc: "most suited model for creditcard fraud detection in terms of the machine learning techniques chosen for the project",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Ashishrox18/Fraud-detection"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IIT Madras Hackathon Winner",
      subtitle:
        "First Prize for best sustainable tech from 10000 students",
      image: require("./assets/images/IIT_madras_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1EGN3rtOmjRYMG3Mc8DUrFn5rWwrV-4tx/view?usp=sharing"
        }
      ]
    },
    {
      title: "L&T Smart City Winner",
      subtitle:
        "Developed a Smart tracker for Traffic and Resource allocation using Data analytics.",
      image: require("./assets/images/LT_logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1_A_0FAfXX1xGt7A1mnjZ9oiwvcIzjB2H/view?usp=sharing"
        }
      ]
    },

    {
      title: "IIT Bombay Avenues Winner",
      subtitle: "Winner for best innovation from 20000 registrations",
      image: require("./assets/images/iit_b_logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1QFgDaaO_vTc1j2-tqYPT7rlVchbaYQbj/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE NEW APPROACHES AND INNOVATIONS IN THE TECH DOMAIN"
  ),

  talks: [
    {
      title: "Sustainable Innovation in Electronics",
      subtitle: "IIT Madras Bio Mimicry",
      slides_url: "https://drive.google.com/file/d/1pd2C7JC01CaHPtvFezh63XLee_2-UXjp/view?usp=sharing",
      event_url: "https://www.youtube.com/watch?v=k1Ufx5EFDtc"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I’m always open to connecting and discussing new ideas, collaborations, or professional opportunities feel free to reach out, and I’ll get back to you soon.",
  number: "+91 7019138913",
  email_address: "ashishandsan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "aashish__18", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
