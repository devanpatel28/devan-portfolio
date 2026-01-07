import { icons, skills_icons } from "@/config/icons";
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
type SkillItem = {
  name: string;
  icon: string;
};
type EducationItem = {
  institution_logo: string;
  institution_name: string;
  institution_web: string;
  course: string;
  time: string;
};
type WorkExperienceItem = {
  company_logo: string;
  company_name: string;
  company_web: string;
  position: string;
  location: string;
  time: string;
};
type AchievementPlace = {
  icon: string;
  place: string;
  url?: string;
};
type AchievementsItem = {
  title: string;
  image: string;
  description: string;
  place: AchievementPlace[];
  date: string;
};
type CertificationFrom = {
  icon: string;
  name: string;
  url?: string;
};
type CertificationItem = {
  title: string;
  image: string;
  from: CertificationFrom[];
  date: string;
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
  skills: SkillItem[];
  education: EducationItem[];
  work_experience: WorkExperienceItem[];
  achievements: AchievementsItem[];
  certifications: CertificationItem[];
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
      url: "/documents/resume.pdf",
    },
  ],
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
      tokens: {
        CODEGRIN: {
          label: "Codegrin Technologies",
          url: "https://www.codegrin.com",
        },
      },
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
        },
      },
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
        },
      },
    },
    {
      date: "2025.03",
      title: "Worked on ICT Portal - ERP System",
      description:
        "📱 Worked on role-based modules using Flutter, PHP, and MySQL.",
    },
    {
      date: "2024.06",
      title: "{{AWS}} - Data Engineering Certification",
      description:
        "☁️ Gained practical exposure to data pipelines and cloud-based data processing.",
      tokens: {
        AWS: {
          label: "AWS Academy",
          url: "https://aws.amazon.com/education/awseducate/",
        },
      },
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
        },
      },
    },
    {
      date: "2023.02",
      title: "Finalist - Code Gennie Hackathon by {{TARK}}",
      description: "🔥 Reached finalist stage at Tark Technologies hackathon.",
      tokens: {
        TARK: {
          label: "Tark Technologies",
          url: "https://www.tarktech.com",
        },
      },
    },
  ],
  skills: [
    {
      name: "React.js",
      icon: skills_icons.reactjs,
    },
    {
      name: "Next.js",
      icon: skills_icons.nextjs,
    },
    {
      name: "Node.js",
      icon: skills_icons.nodejs,
    },
    {
      name: "Express.js",
      icon: skills_icons.expressjs,
    },
    {
      name: "PHP",
      icon: skills_icons.php,
    },
    {
      name: "MySQL",
      icon: skills_icons.mysql,
    },
    {
      name: "PostgreSQL",
      icon: skills_icons.postgresql,
    },
    {
      name: "Firebase",
      icon: skills_icons.firebase,
    },
    {
      name: "Flutter",
      icon: skills_icons.flutter,
    },
    {
      name: "Java",
      icon: skills_icons.java,
    },
    {
      name: "Tailwind CSS",
      icon: skills_icons.tailwind,
    },
    {
      name: "Supabase",
      icon: skills_icons.supabase,
    },
    {
      name: "Python",
      icon: skills_icons.python,
    },
    {
      name: "Git",
      icon: skills_icons.git,
    },
    {
      name: "GitHub",
      icon: skills_icons.github,
    },
  ],
  education: [
    {
      institution_logo: "/education/marwadi-university.png",
      institution_name: "Marwadi University",
      institution_web: "https://www.marwadiuniversity.ac.in",
      course:
        "Bachelor of Technology in Information & Communication Technology",
      time: "2021 - 2025",
    },
    {
      institution_logo: "/education/modi-school.png",
      institution_name: "P.V Modi High School",
      institution_web: "https://modischools.edu.in/",
      course: "Higher Secondary Education",
      time: "2019 - 2021",
    },
  ],
  work_experience: [
    {
      company_logo: "/work/codegrin.png",
      company_name: "Codegrin Technologies",
      company_web: "https://www.codegrin.com",
      position: "Full Stack Developer",
      location: "Rajkot, Gujarat",
      time: "Aug 2025 - [[Present]]",
    },
  ],
  achievements: [
    {
      title: "Finalist, Code Gennie Hackathon",
      image: "/achievements/tark.png",
      description: "Reached finalist stage at Code Gennie hackathon by Tark Technologies.",
      place: [{ icon: "/achievements/icons/tark.png", place: "Tark Technologies", url: "https://www.tarktech.com" }],
      date: "February 2024",
    },
    {
      title: "Finalist, Intellify Hackathon",
      image: "/achievements/intellify.png",
      description: "Reached finalist stage at Intellify hackathon by Marwadi University.",
      place: [{ icon: "/achievements/icons/mu.png", place: "Intellify MU", url: "https://www.intellify.marwadiuniversity.ac.in/" }],
      date: "April 2023",
    },
    {
      title: "Intellectual Property Rights",
      image: "/achievements/ipr.png",
      description: "Copyrighted project “Colorograph”, an Android game based on graph coloring algorithms.",
      place: [
        { icon: "/achievements/icons/mu.png", place: "MUIR", url: "https://www.marwadiuniversity.ac.in/muiir/" },
        { icon: "/achievements/icons/gov-ind.png", place: "IP India", url: "/documents/colorograph-ipr.pdf" }
      ],
      date: "March 2023",
    },
  ],
  certifications: [
    {
      title: "AWS Academy Graduate - Data Engineering",
      image: "/certifications/aws.png",
      from: [{ icon: "/certifications/icons/aws.png", name: "AWS Academy", url: "https://www.credly.com/badges/2c487669-aa17-4683-a43b-6f6733754059"}],
      date: "March 2024",
    },
    {
      title: "Technology Job Simulation",
      image: "/certifications/deloitte.png",
      from: [{ icon: "/certifications/icons/deloitte.png", name: "Deloitte Australia", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_xQRrwzKfEnaXtpRf4_1751271974616_completion_certificate.pdf"}],
      date: "June 2025",
    },
    {
      title: "Database Foundation",
      image: "/certifications/oracle.png",
      from: [{ icon: "/certifications/icons/oracle.png", name: "Oracle Academy", url: "/certifications/oracle.png"}],
      date: "March 2024",
    },
    {
      title: "Ethical Hacking",
      image: "/certifications/cisco.png",
      from: [{ icon: "/certifications/icons/ethical-hacking.png", name: "Cyber Security", url: "/certifications/ethical-hacking.png"}],
      date: "March 2024",
    },
  ],
};
