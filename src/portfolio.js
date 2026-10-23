/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  title: "Hi, I'm Ashish",
  subTitle: emoji(
    "Data Engineer & ML Practitioner 🚀 — building production pipelines, AI agent infrastructure, and ML systems at scale. 2+ years across Spark, BigQuery, Snowflake, GCP, and AWS. 1st place, national data science competition."
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
    "Data Engineering & ML || ",
    "AI Systems at Scale || ",
    "Analog & Digital Electronics"
  ],
  skills: [
    emoji(
      "⚡ Building production ETL pipelines on Spark, BigQuery, and Snowflake serving AI agents at scale"
    ),
    emoji("⚡ Designing and deploying ML systems — recommendation engines, classifiers, and supply chain simulation — end to end"),
    emoji(
      "⚡ Integrating enterprise APIs and data infrastructure for AI procurement platforms"
    ),
    emoji(
      "⚡ Creating BI dashboards and analytical models in Power BI and Tableau on 10GB+ datasets"
    ),
    emoji(
      "⚡ Applying NLP, Genetic Algorithms, and GenAI to real-world competition and production problems"
    ),
    emoji(
      "⚡ Designing and simulating analog circuits (amplifiers, filters, oscillators) using Cadence & SPICE, and verifying digital systems with Verilog/VHDL on Xilinx platforms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // --- Data Engineering ---
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "devicon-postgresql-plain"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "devicon-apachespark-plain"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "BigQuery",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "dbt",
      fontAwesomeClassname: "fas fa-database"
    },
    // --- ML / AI ---
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "devicon-tensorflow-original"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "devicon-pandas-plain"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "devicon-jupyter-plain"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-brain"
    },
    // --- BI & Analytics ---
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    // --- Cloud & Infrastructure ---
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "devicon-googlecloud-plain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon-docker-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    // --- Electronics ---
    {
      skillName: "Verilog/VHDL",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Cadence/SPICE",
      fontAwesomeClassname: "fas fa-plug"
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
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      companylogo: require("./assets/images/aerchain_logo.webp"),
      date: "March 2025 – Present",
      desc: "Building AI-native data infrastructure for procurement automation",
      descBullets: [
        "Engineered Spark + BigQuery pipelines serving 3 production AI agents (Negotiation, Procurement, Aera), processing 1M+ vendor records with sub-minute refresh latency.",
        "Reduced pipeline runtime from 12 hours to 1 hour (8x improvement) via parallelization and incremental loads on Snowflake; led technical onboarding of Meta as enterprise client.",
        "Built Random Forest vendor recommendation engine on 1M+ purchase records and ML Scenario Builder for supply chain disruption simulation — both deployed to production."
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
  title: "Projects & Competitions",
  subtitle: "Production systems, competition wins, and research-driven builds",
  projects: [
    {
      image: require("./assets/images/google_logo.avif"),
      projectName: "KisanWise — AI Agricultural Intelligence",
      projectDesc: "AI copilot for 500M+ Indian smallholder farmers: sell/hold/store recommendations from a multi-signal Trust Engine, crop quality grading via Gemini Vision, live mandi price alerts, geospatial risk scoring via Google Earth Engine. 90 automated tests, deployed on Vercel.",
      footerLink: [
        { name: "Live Demo", url: "https://krishi-era-ai-updj.vercel.app/login" },
        { name: "GitHub", url: "https://github.com/Ashishrox18/KisanWise" }
      ]
    },
    {
      image: require("./assets/images/imi_logo.jpeg"),
      projectName: "Netflix Pivot & Recommendation Engine",
      projectDesc: "1st Place — IMI Data Science Competition (250 participants). Genetic Algorithm feature selection (107→57 features) + Random Forest classifier (99.77% accuracy, AUC 1.0) + TF-IDF cosine similarity recommender across 8,807 Netflix titles. Strategic finding: TV content overtook movies post-2019.",
      footerLink: [
        { name: "View Certificate", url: "https://drive.google.com/file/d/1jf7otUtRIj6R79m1XapC7EI4VElVr2nF/view?usp=sharing" },
        { name: "GitHub", url: "https://github.com/Ashishrox18/Netflix-Recommendation" }
      ]
    },
    {
      image: require("./assets/images/google_logo.avif"),
      projectName: "LexLegal — GenAI Legal Document Intelligence",
      projectDesc: "Built for Google Prompt Wars. Parses Indian contracts and legal documents with Gemini 2.0 Flash + Groq fallback — extracts risk flags (red/yellow/green), missing statutory clauses, ELI5 summaries, and lawyer-ready briefs. Zero document storage, privacy-first architecture.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Ashishrox18/LexLegal" }
      ]
    },
    {
      image: require("./assets/images/google_logo.avif"),
      projectName: "CarbonWise — AI Carbon Footprint Tracker",
      projectDesc: "AI-powered web app helping individuals track and reduce daily carbon footprint via 5-step check-ins, Gemini-generated personalized insights, Groq LLaMA 3.1 conversational coach, and 7-day habit streaks. Local-first, zero data persistence, WCAG 2.1 AA.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Ashishrox18/CarbonWise" }
      ]
    },
    {
      image: require("./assets/images/Deloitte_logo.png"),
      projectName: "Nextu",
      projectDesc: "Most suited ML model for credit card fraud detection — evaluated multiple techniques to identify the optimal classifier for real-world transaction data.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Ashishrox18/Fraud-detection"
        }
      ]
    },
    {
      image: require("./assets/images/krishi_sus_logo.png"),
      projectName: "Krishi Inspiro",
      projectDesc: "Automated IoT enabled Bio filtration device",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://willowy-cat-2473ab.netlify.app/"
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
      title: "IEI Engineering Award — Chief Minister of Karnataka",
      subtitle:
        "Presented by the Chief Minister of Karnataka for outstanding academic engineering project — recognised for excellence in electronics design and innovation.",
      image: require("./assets/images/chiefminister_logo.jpg"),
      imageAlt: "IEI Engineering Award",
      footerLink: []
    },
    {
      title: "Google Prompt Wars Winner",
      subtitle:
        "Won Google's Prompt Wars challenge for building LexLegal, a GenAI-powered legal document intelligence platform with Gemini 2.0 Flash.",
      image: require("./assets/images/google_logo.avif"),
      imageAlt: "Google Prompt Wars",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Ashishrox18/LexLegal" }
      ]
    },
    {
      title: "1st Place — IMI Data Science Competition",
      subtitle:
        "Ranked 1st among 250 participants for Netflix content strategy and recommendation modelling using Genetic Algorithms and Random Forest.",
      image: require("./assets/images/imi_logo.jpeg"),
      imageAlt: "IMI Data Science Competition",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1jf7otUtRIj6R79m1XapC7EI4VElVr2nF/view?usp=sharing"
        }
      ]
    },
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
  title: "Research & Publications",
  subtitle: emoji(
    "Published work in VLSI testing and environmental engineering"
  ),

  talks: [
    {
      title: "Sustainable Innovation in Electronics",
      subtitle: "IIT Madras Bio Mimicry",
      slides_url: "https://drive.google.com/file/d/1pd2C7JC01CaHPtvFezh63XLee_2-UXjp/view?usp=sharing",
      event_url: "https://www.youtube.com/watch?v=k1Ufx5EFDtc"
    },
    {
      title: "Automatic Test Pattern Generation for VLSI Circuits",
      subtitle: "Shashidhara H. R, Ashish S, Suhas S — Genetic Algorithm-based ATPG with stuck-at fault model",
      slides_url: "https://drive.google.com/file/d/1QeQET7T19iO6XCoLyJqIm-1e9qLfaAts/view?usp=drive_link",
      event_url: "https://drive.google.com/file/d/1QeQET7T19iO6XCoLyJqIm-1e9qLfaAts/view?usp=drive_link"
    },
    {
      title: "Effluent Purification by Accelerated Protein Biosynthesis Using Recombination of Algae",
      subtitle: "Ashish S — Published research on bio-based water purification using algae recombination",
      slides_url: "https://drive.google.com/file/d/1HEZsUBAQA95hH4_kRR9bs-poHnfnDSsi/view?usp=drive_link",
      event_url: "https://drive.google.com/file/d/1HEZsUBAQA95hH4_kRR9bs-poHnfnDSsi/view?usp=drive_link"
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
    "I'm always open to connecting and discussing new ideas, collaborations, or professional opportunities feel free to reach out, and I'll get back to you soon.",
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
