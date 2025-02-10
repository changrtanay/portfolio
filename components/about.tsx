"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing high school, I decided to pursue my passion for programming.
        <br /> I started by learning {" "}
        <span className="font-medium">development and machine learning</span>. {" "}
        <span className="italic">My favorite part of programming</span> <br /> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. {" "}
        {/* I {" "}
         <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma.  */}
        I like the challenge of competitive programming. 
        I am open to <span className="font-medium">developing impactful projects, engaging in research, and participating in hackathons</span>.
        I am always looking to learn new technologies. Feel free to reach out to discuss anything.
        {/* I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and listening to music. 
        I have also worked as a <span className="font-medium">graphic designer and video editor</span>. {" "}
        {/* I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and finance</span>. */} 
        I'm also 
        learning how <br /> to play the piano.
      </p>
    </motion.section>
  );
}
