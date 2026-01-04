import { icons } from "@/config/icons";
import { TokenMap } from "@/utils/replaceTokensWithLinks";

type AboutItem = {
  text: string;
  tokens?: TokenMap;
};

type LatestUpdateItem = {
  date: string;
  title: string;
  description: string;
  tokens?: TokenMap;
};
type SocialLinkesItem = {
  name: string;
  icon: string;
  url: string;
  openInNew?: boolean | false;
};

export const personal_info: {
  first_name: string;
  last_name: string;
  degree: string;
  profile_image: string;
  occupation: string;
  current_company: string;
  current_company_url: string;
  social_links: SocialLinkesItem[];
  about: AboutItem[];
  latest_updated: LatestUpdateItem[];
} = {
  first_name: "Devan",
  last_name: "Bhensdadiya",
  degree: "B.Tech - Information & Communication Technology",
  profile_image: "/profile.png",
  occupation: "Full Stack Developer",
  current_company: "Codegrin Technologies",
  current_company_url: "https://www.codegrin.com",
  social_links: [
    {
      name: "GitHub",
      icon: icons.github,
      url: "https://github.com/devanpatel28",
    },
    {
      name: "LinkedIn",
      icon: icons.linkedin,
      url: "https://www.linkedin.com/in/devanpatel28/",
    },
    {
      name: "Threads",
      icon: icons.thread,
      url: "https://www.threads.com/@devan.patel.28",
    },
    {
      name: "Resume",
      icon: icons.resume,
      url: "/resume.pdf",
    },
    // {
    //   name: "Mail",
    //   icon: icons.mail,
    //   url: "mailto:devanbhensdadiya123@gmail.com",
    // },
  ],
  // Use Brackets [[ ]] for bold text
  about: [
    {
      text: "Hi, I'm [[Devan Bhensdadiya]] 👋, a [[Full-Stack Developer]] specializing in [[MERN stack]], [[Next.js]], and [[Flutter]], with strong experience in building scalable web and mobile applications. I focus on creating clean, efficient, and production-ready solutions that bridge backend systems with modern user interfaces.",
    },
    {
      text: "I completed my B.Tech in {{ICT}} from {{MU}} with a CGPA of 7.7/10. During my academic journey, I worked extensively on real-world projects involving [[React.js]], [[Next.js]], [[Node.js]], [[PHP]], [[MySQL]], [[PostgreSQL]], [[Firebase]], and [[Flutter]].",
      tokens: {
        MU: {
          label: "Marwadi University (NAAC A+, NBA Tier-1)",
          url: "https://www.marwadiuniversity.ac.in",
        },
        ICT: {
          label: "Information & Communication Technology",
          url: "https://www.marwadiuniversity.ac.in/information-communication-technology-engineering-b-tech-ict/#",
        },
      },
    },
    {
      text: "I am currently working as a [[Full-Stack Developer]] at {{CODEGRIN}}, where I develop [[RESTful APIs]], design dynamic [[frontend applications]], and implement [[secure authentication]] and end-to-end API integrations. I enjoy solving practical problems, building [[full-stack systems]], and continuously improving my engineering skills.",
      tokens: {
        CODEGRIN: {
          label: "Codegrin Technologies",
          url: "https://www.codegrin.com",
        },
      },
    },
  ],
  latest_updated: [
    {
      date: "2025.08",
      title: "Full-Stack Developer at {{CODEGRIN}}",
      description:
        "🚀 Actively working on production-grade MERN and Next.js applications with REST APIs, authentication, and database integrations.",
      tokens:{
        CODEGRIN:{
          label: "Codegrin Technologies",
          url: "https://www.codegrin.com",
        }
      }
    },
    {
      date: "2025.07",
      title: "Worked on Scalable Backend APIs",
      description:
        "⚙️ Designed and implemented RESTful APIs using Node.js, Express, and SQL, focusing on performance and maintainability.",
    },
    {
      date: "2025.06",
      title: "Technology Job Simulation - {{DELLOITTE}}",
      description:
        "📜 Completed hands-on industry simulation covering software engineering, problem-solving, and real-world development workflows.",
      tokens: {
        DELLOITTE: {
          label: "Deloitte Australia",
          url: "https://www.deloitte.com/au/en.html",
        }
      }
    },
    {
      date: "2025.05",
      title: "Graduated from {{MU}}",
      description:
        "🎓 Successfully completed B.Tech in Information and Communication Technology with strong academic and practical experience.",
        tokens: {
        MU: {
          label: "Marwadi University",
          url: "https://www.marwadiuniversity.ac.in",
        }
      }
    },
    {
      date: "2025.03",
      title: "Worked on ICT Portal - ERP System",
      description: "📱 Worked on role-based modules using Flutter, PHP, and MySQL.",
    },
    {
      date: "2024.06",
      title: "{{AWS}} - Data Engineering Certification",
      description:
        "☁️ Gained practical exposure to data pipelines and cloud-based data processing.",
      tokens: {
        AWS: {
          label: "AWS Academy",
          url: "https://aws.amazon.com/education/awseducate/"
        }
      }
    },
    {
      date: "2024.05",
      title: "Developed Coaching Class Management System",
      description:
        "📊 Developed attendance tracking, calendar heatmap visualization, and real-time communication modules.",
    },
    {
      date: "2023.03",
      title: "Intellectual Property Rights Certificate",
      description:
        "🏆 Copyrighted project “Colorograph”, an Android game based on graph coloring algorithms.",
    },
    {
      date: "2023.04",
      title: "Finalist - Intellify Hackathon by {{MU}}",
      description:
        "🏆 Selected as finalist at Marwadi University for an innovative robotic solution.",
      tokens: {
        MU: {
          label: "Marwadi University",
          url: "https://www.marwadiuniversity.ac.in",
        }
      }
    },
    {
      date: "2023.02",
      title: "Finalist - Code Gennie Hackathon by {{TARK}}",
      description: "🔥 Reached finalist stage at Tark Technologies hackathon.",
      tokens: {
        TARK: {
          label: "Tark Technologies",
          url: "https://www.tarktech.com",
        }
      }
    },
  ],
};
