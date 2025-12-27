"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { cocurricularData } from "@/lib/data";
import CoCurricular from "./cocurricular";
import { useSectionInView } from "@/lib/hooks";

export default function CoCurriculars() {
  const { ref } = useSectionInView("Experience");

  return (
    <section ref={ref} id="cocurricular" className="scroll-mt-28 mb-28">
    {/* <section id="cocurricular" className="scroll-mt-28 mb-28"> */}
      <SectionHeading>My co-curricular</SectionHeading>
      <div>
        {cocurricularData.map((cocurricular, index) => (
          <React.Fragment key={index}>
            <CoCurricular {...cocurricular} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
