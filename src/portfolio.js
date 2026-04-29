/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 100 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abril Reyes",
  title: "Hola, soy Abril  ",
  subTitle: emoji(
    "I'm a passionate Computer Science graduate student currently pursuing a Master’s degree in Computer Science and Engineering, with a strong interest in Artificial Intelligence and Machine Learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1n5M4W41gL7VQjBNoiCXCWXfcHl1cafVu/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abrilrys",
  linkedin: "https://www.linkedin.com/in/abrilrys/",
  gmail: "abril.reyesflo@gmail.com",
  facebook: "https://www.facebook.com/abrilrys1",
  medium: "https://medium.com/@abrilrys",
  instagram: "https://www.instagram.com/abrilrys/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Turning curiosity into intelligent systems",
  skills: [
    emoji(
      "🌀 Open to collaborating on AI/ML projects with a focus on learning dynamics, adaptive systems, and real-world deployment"
    ),
    emoji("🌀 Working with data-driven models for prediction, representation, and decision-making"),
    emoji(
      "🌀 Exploring Computer Vision methods for analyzing structured and scientific imagery"
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
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "opencv",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "matplotlib",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "jupyter",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Nacional Autónoma de México",
      // logo: require("./assets/images/unamlogo.png"),
      subHeader: "Master of Science in Computer Science and Engineering",
      duration: "August 2025 - Present",
      desc: "Master’s research on topic discovery in astronomical image data using deep learning techniques.",
      descBullets: [
        "Developed models for unsupervised pattern discovery in large-scale image datasets",
        "Applied deep learning methods for feature extraction and representation learning"

      ]
    },
    {
      schoolName: "Universidad Nacional Autónoma del Estado de Morelos",
      // logo: require("./assets/images/uaemlogo2.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2020 - December 2024",
      desc: "Ranked top 10% in the program. Conducted research on learning dynamics in artificial agents, focusing on predictive error and adaptive behavior.",
      descBullets: ["Designed and implemented learning agents driven by intrinsic motivation and prediction error",
        "Analyzed performance using error-based metrics and temporal evaluation buffers",
        "Worked with self-organizing maps (SOMs) for representation and policy adaptation",
        "Research member of the Cognitive Robotics Lab"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Analysis & Processing",
      progressPercentage: "80%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "70%"
    },
    {
      Stack: "Research & Experimentation",
      progressPercentage: "85%"
    },
    {
      Stack: "Software Engineering (Python)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant - Artificial Intelligence",
      company: "UNAM",
      companylogo: require("./assets/images/unamlogo.png"),
      date: "Jan 2026 – Present",
      desc: "Guided students through the mathematical foundations and from-scratch Python implementation of core machine learning, evolutionary algorithms, heuristic search, constraint satisfaction problems, and probabilistic reasoning."
    },
    {
      role: "Junior Software Developer",
      company: "Facturaxion",
      companylogo: require("./assets/images/facturaxionlogo.jpeg"),
      date: "Dec 2024 – Dec 2025",
      desc: "Processed 10, 000+ electronic invoices monthly with 100 % compliance to SAT tax regulations by engineering robust backend services and RESTful APIs using C# and .NET."
    },
    {
      role: "Freelance Game Developer",
      company: "SuperSalt",
      companylogo: require("./assets/images/supersaltlogo.jpeg"),
      date: "Jan 2020 – Dec 2024",
      desc: "Developed modular core mechanics and interactive systems across 3 deployed 2D/3D projects by designing scalable object-oriented architectures in C# and Unity."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I use writing as a way to reflect on what I build and learn",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      //url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      //title: "Why REACT is The Best?",
      //description:
      //  "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("On repeat lately 🪩"),
  subtitle: "The soundtrack behind my code",

  podcast: [
    "https://open.spotify.com/embed/album/2xkZV2Hl1Omi8rk2D7t5lN"
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let’s Collaborate ☎️"),
  subtitle:
    "Open to collaborations, ideas, or just a quick hello—feel free to reach out. :)",
  number: "+52-7773434443",
  email_address: "abril.reyesflo0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
