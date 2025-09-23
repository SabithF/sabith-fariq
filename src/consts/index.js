import { title } from "framer-motion/client"


const grid1 =
    {
        title:  "Who am I?",
        title2:  "Hi, I am Sabith",
        content: "a Full Stack Developer who loves turning ideas into clean, interactive web experiences. From UI to backend, I enjoy building smart, user-friendly solutions." 
    } 
const grid2 =
    {
        title:  "Dev",
        content: "I design sleek interfaces for web and mobile, build efficient backends, and explore the magic of machine learning." 
    }
 
const grid3 =
    {
        title:  "Education ",
        content: "I hold an MSc in Computer Science from Queen Mary University of London and a diploma in Digital Marketing.”" 
       
    }

const grid4 =
     {
    title: "Tech",
    content: "I work with JavaScript, React, Node.js, and MongoDB to build full-stack applications. I also explore Flutter for mobile and cloud platforms to bring ideas to life across devices."
  }


  const work = [
    {
        logo: "/assets/company/animatist_logo.png",
        designation: "Web Developer & Digital Marketer",
        company: "Animatist.lk",
        date: "2021-Present",
        description: [
            "Built responsive web apps with JavaScript/Node.js, HTML, CSS, Tailwind CSS, improving Lighthouse scores and load times.",
            "Designed flows and UI components in Figma, aligning designs with implementation via clear dev handoff",
            "Implemented technical SEO and analytics leading to +30% organic traffic.",
            "Managed Google Ads campaigns, improving ROI (-20% CPA); partnered with engineers/analysts to iterate on landing pages.",
            "Collaborated across design, engineering, and marketing in agile sprints; participated in code reviews and Git workflows."
        ]
    },

    {
        logo: "/assets/company/front_logo.png",
        designation: "IT Auditor & Digital Marketer - Consultant",
        company: "Frontier Advisory (Pvt) Ltd",
        date: "2023",
        description: [
            "Performed risk assessments and recommended controls, improving security posture and compliance.",
            "Analysed IT processes; proposed changes to increase operational efficiency and resilience.",
            ]
    },
    {
        logo: "/assets/company/cjm.png",
        designation: "IT Specialist",
        company: "Ceylon Jewelry Manufacturers",
        date: "2023",
        description: [
            "Optimised network infrastructure for reliability and performance.",
            "Supported ERP integration and trained staff on core workflows to improve adoption and data quality.",
           ]
    },
    {
        logo: "/assets/company/myshop.png",
        designation: "Digital Marketing Specialist & Business Analyst",
        company: "Myshop.lk (Pvt) Ltd",
        date: "2017-2021",
        description: [
            "Directed growth initiatives contributing to +40% sales and +60% organic traffic; collaborated with engineering on site performance and analytics.",
             ]
    },
]


const projects = [
    {
        img: "/assets/img/haskellp.png",
        title: "Haskell Web Data Harvester",
        category:"Web",
        link: "https://github.com/Thananont/haskell-project",
        description:"Built a Haskell app to fetch, parse, store, andquery JSON data from TFL web API using a modular design.",
        stack: [
            "Haskell" , "sqLite"

        ]


    },
    {
        img: "/assets/img/haskellp.png",
        title: "Haskell Web Data Harvester",
        category:"Designing",
        link: "https://github.com/Thananont/haskell-project",
        web:"Designing",
        description:"Built a Haskell app to fetch, parse, store, andquery JSON data from TFL web API using a modular design.",
        stack: [
            "Haskell" , "React"

        ]


    },
    {
        img: "/assets/img/haskellp.png",
        title: "Haskell Web Data Harvester",
        category:"Implementation",
        link: "https://github.com/Thananont/haskell-project",
        web:"",
        description:"Built a Haskell app to fetch, parse, store, andquery JSON data from TFL web API using a modular design.",
        stack: [
            "Haskell" , "React"

        ]


    },
    {
        img: "/assets/img/haskellp.png",
        title: "Haskell Web Data Harvester",
        category:"Implementation",
        link: "https://github.com/Thananont/haskell-project",
        web:"",
        description:"Built a Haskell app to fetch, parse, store, andquery JSON data from TFL web API using a modular design.",
        stack: [
            "Haskell" , "React"

        ]


    },
    {
        img: "/assets/img/haskellp.png",
        title: "Haskell Web Data Harvester",
        category:"Implementation",
        link: "https://github.com/Thananont/haskell-project",
        web:"",
        description:"Built a Haskell app to fetch, parse, store, andquery JSON data from TFL web API using a modular design.",
        stack: [
            "Haskell" , "React"

        ]


    },
    {
        img: "/assets/img/haskellp.png",
        title: "Haskell Web Data Harvester",
        category:"Implementation",
        link: "https://github.com/Thananont/haskell-project",
        web:"",
        description:"Built a Haskell app to fetch, parse, store, andquery JSON data from TFL web API using a modular design.",
        stack: [
            "Haskell" , "React"

        ]


    },
]

const links = {
    github: "https://github.com/SabithF",
    insta:"https://www.instagram.com/sabith_fariq/?hl=en-gb",
    gmail:"mailto:sabithfariq@gmail.com?subject=Let's%20work%20together&body=Hi%20Sabith,%0AI%20would%20like%20to%20discuss...",
    linkedin: "https://www.linkedin.com/in/sabith-fariq/",

} 

const Nav_links = {
    about: "#about",
    work: "#work",
    projects: "#projects",
    contact:"#contact"
} 




export {grid1, grid2, grid3, grid4, work, projects, links, Nav_links}