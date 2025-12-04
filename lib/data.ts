import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TenSense from "@/public/TenSense2.png";
import ForeSight from "@/public/ForeSight2.png";
import InventoVision from "@/public/InventoVision2.png";
import docks from "@/public/docks3.png";
import recommender from "@/public/recommender2.png";
import cricksion from "@/public/cricksion.png";
import z61 from "@/public/Z612.png";
import n11 from "@/public/N112.png";
import buildfest from "@/public/buildfest2.png";
import bamberg from "@/public/bamberg3.png";
import caritas from "@/public/caritas3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Kalinga Institute of Industrial Technology",
    location: "CGPA: 8.6",
    description:
      "Awarded KIITEE Merit Scholarship for academic excellence and consistent performance.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2022 - April 2026",
    link: "https://drive.google.com/file/d/1WVIfQCIo6K1yC20Slg23YAf1xILSz2F4/view?usp=sharing",
  },
  {
    title: "Rajiv Creation Pvt. Ltd.",
    location: "Software Development Intern",
    description:
      "Developed a modern fashion eCommerce platform using React.js, MongoDB, Express.js, Stripe, and Docker.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2024 - December 2024",
    link: "https://github.com/changrtanay/rcpl-demo",
  },
  {
    title: "IIT Indore",
    location: "Research Intern",
    description:
      "Developed the official site of the IEEE Signal Processing Society (SPS) Chapter of Madhya Pradesh on React.js, Node.js, and Framer Motion.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2025 - May 2025",
    link: "https://github.com/changrtanay/ieee-sps-mp-demo",
  },
  {
    title: "IIT Kharagpur",
    location: "Research Intern",
    description:
      "Developed a legal research platform powered by AI that allows semantic search, automated summarization, and conversational querying of Indian court judgements.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - July 2024",
    link: "https://github.com/changrtanay/Suits-demo",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "TenSense",
    description:
      "Analyzes Tennis players in a video to measure their speed, ball shot speed, and the number of shots.",
    tags: ["Python", "PyTorch", "OpenCV", "Ultralytics", "YOLOv8"],
    imageUrl: TenSense,
    link: "https://github.com/changrtanay/TenSense",
  },
  {
    title: "ForeSight",
    description:
      "Cleaning, Forecasting, and Policy Analysis on the World Bank's Development Indicators Dataset.",
    tags: ["Python", "Streamlit", "Facebook Prophet", "Plotly"],
    imageUrl: ForeSight,
    link: "https://github.com/changrtanay/ForeSight",
  },
  {
    title: "InventoVision",
    description:
      "Helps retailers optimize inventory by demand forecasting, stock management, and pricing strategies using machine learning.",
    tags: ["Python", "scikit-learn", "Power BI", "Pandas", "NumPy"],
    imageUrl: InventoVision,
    link: "https://github.com/changrtanay/InventoVision",
  },
  {
    title: "Docks",
    description:
      "Real-time document collaboration platform allowing multiple users to edit documents at the same time.",
    tags: ["React", "Express", "Docker", "MongoDB", "Socket.io"],
    imageUrl: docks,
    link: "https://github.com/changrtanay/docksv4",
  },
  // {
  //   title: "Recommender",
  //   description:
  //     "Hybrid Recommendation System. I combined rating-based filtering, content-based filtering, and collaborative filtering.",
  //   tags: ["Python", "Pandas", "NumPy", "scikit-learn", "spaCy"],
  //   imageUrl: recommender,
  //   link: "https://github.com/changrtanay/recommendation-engine",
  // },
  // {
  //   title: "Cricksion",
  //   description:
  //     "A google chrome extension to know live cricket updates with the click of a button.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   imageUrl: cricksion,
  //   link: "https://github.com/changrtanay/cricksion",
  // },
] as const;


export const researchData = [
  {
    title: "Adaptive Precision Agriculture Network",
    description:
      "Proposed an AI-driven system integrating IoT and robotics to enhance crop yield, improve soil health, and boost resource efficiency.",
    tags: [""],
    imageUrl: z61,
    link: "",
  },
  {
    title: "Lung Cancer Early Detection Framework",
    description:
      "Designed a decision tree-based diagnostic model with 94% accuracy to detect lung cancer at an early stage.",
    tags: [""],
    imageUrl: n11,
    link: "",
  },
] as const;


export const cocurricularData = [
  {
    title: "Build Fest'25",
    description:
      "Presented our project at the Hackathon Finals at IIT Bombay, selected among the top 41 teams out of 3400+ participants.",
    tags: [""],
    imageUrl: buildfest,
    link: "https://drive.google.com/file/d/1jFgju7WNVDqbZuDEVu7ChXt65H1-jsLH/view?usp=sharing",
  },
  {
    title: "Caritas Kol",
    description:
      "Founded and led a youth-driven social activism group, mobilizing 100+ volunteers and executing 10+ campaigns, and benefiting 2,000+ individuals.",
    tags: [""],
    imageUrl: caritas,
    link: "https://github.com/caritaskol/caritaskol",
  },
  {
    title: "Youth Camp, Germany",
    description:
      "Selected as one of India's top 10 students for a fully funded three-week immersive program at the Goethe-Institut, collaborating with 74 international peers in cultural exchange.",
    tags: [""],
    imageUrl: bamberg,
    link: "https://www.facebook.com/share/p/16GRksJzjZ/",
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Socket.io",
  "Flask",
  "MongoDB",
  "MySQL",
  "Docker",
  "Kubernetes",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Git",
] as const;
