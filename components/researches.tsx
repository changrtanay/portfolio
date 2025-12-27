"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { researchData } from "@/lib/data";
import Research from "./research";
import { useSectionInView } from "@/lib/hooks";

export default function Researches() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="research" className="scroll-mt-28 mb-28">
    {/* <section id="research" className="scroll-mt-28 mb-28"> */}
      <SectionHeading>My research</SectionHeading>
      <div>
        {researchData.map((research, index) => (
          <React.Fragment key={index}>
            <Research {...research} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
