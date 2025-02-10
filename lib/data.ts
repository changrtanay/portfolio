import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import docks from "@/public/docks2.png";
import recommender from "@/public/recommender2.png";
import cricksion from "@/public/cricksion.png";
import z61 from "@/public/Z612.png";
import n11 from "@/public/N112.png";
import bamberg from "@/public/bamberg2.png";
import caritas from "@/public/caritas2.jpg";

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
    location: "CGPA: 8.5",
    description:
      "Awarded KIIT Merit Scholarship for academic excellence and consistent performance.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2022 - April 2026",
    link: "",
  },
  {
    title: "🔗 Rajiv Creation Pvt. Ltd.",
    location: "Software Development Intern",
    description:
      "Developed a fashion eCommerce platform  supporting 20+ active customers, processing 50+ orders with total sales of INR 4,00,000.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2024 - December 2024",
    link: "https://github.com/changrtanay/rcpl",
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
    title: "🔗Docks",
    description:
      "Real-time document collaboration. Multiple users can edit documents at the same time.",
    tags: ["React", "Express", "MongoDB", "Socket.io", "QuillJS", "Docker"],
    imageUrl: docks,
    link: "https://github.com/changrtanay/docksv4",
  },
  {
    title: "🔗Recommender",
    description:
      "Hybrid Recommendation System. I combined rating-based filtering, content-based filtering, and collaborative filtering.",
    tags: ["Python", "Pandas", "NumPy", "scikit-learn", "spaCy"],
    imageUrl: recommender,
    link: "https://github.com/changrtanay/recommendation-engine",
  },
  {
    title: "🔗Cricksion",
    description:
      "A google chrome extension to know live cricket updates with the click of a button.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: cricksion,
    link: "https://github.com/changrtanay/cricksion",
  },
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
    title: "🔗Caritas Kol",
    description:
      "Founded and led a youth-driven social activism group, mobilizing 100+ volunteers and executing 10+ large-scale campaigns, benefiting 2,000+ individuals.",
    tags: [""],
    imageUrl: caritas,
    link: "https://github.com/caritaskol/caritaskol",
  },
  {
    title: "German Youth Camp",
    description:
      "Selected as one of India's top 10 students for a fully funded three-week immersive program at the Goethe-Institut, collaborating with 74 international peers in cultural exchange.",
    tags: [""],
    imageUrl: bamberg,
    link: "",
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
