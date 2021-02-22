import React from "react";
import TagCloud from "../TagCloud/TagCloud";

export default function MySkills() {
  const skills = [
    "Javascript",
    "React",
    "Vue",
    "Java",
    "Docker",
    "SAP HANA",
    "Postgres",
  ];
  return (
    <div id="skills">
      <div className="flex flex-wrap overflow-hidden my-4">
        <div className="grid grid-rows-1 w-full md:pr-4 md:w-1/2">
          <div className="col-auto text-center self-end md:text-right">
            <span className="font-title text-5xl">My Skills</span>
          </div>
          <div className="col-auto text-center md:ml-20 md:text-right">
            <span className="font-bold font-sans">
              I am proficient in Java, Vue, Quasar and SQL (specifically SAP
              HANA). I have also completed projects which use Docker, Postgres,
              Python and C++. My interests lie within Web Applications, Cloud
              Architectures and Fintech.
            </span>
          </div>
        </div>
        <div className="flex justify-evenly w-full md:py-20 md:pr-14 md:pl-4 md:w-1/2">
          <TagCloud text={skills} />
        </div>
      </div>
    </div>
  );
}
