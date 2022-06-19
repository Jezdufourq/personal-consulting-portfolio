import React from "react";
import TagCloud from "../TagCloud/TagCloud";

export default function MySkills() {
  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "Vue",
    "Java",
    "Docker",
    "Kubernetes",
    "Google Cloud",
    "SAP HANA",
    "Postgres",
  ];
  return (
    <div id="skills">
      <div className="flex flex-wrap overflow-hidden my-10">
        <div className="flex flex-wrap w-full md:pr-4 md:w-1/2">
          <div className="flex-auto col-auto text-center self-end md:text-right">
            <span className="font-title text-5xl">My Skills</span>
          </div>
          <div className="flex-auto col-auto text-center md:ml-20 md:text-right">
            <span className="font-bold font-sans">
              I am proficient in Typescript, Java, and SQL, and have had
              experience in Vue and React. I have also completed projects which
              use Docker, Terraform, Kubernetes, Python and C++. My interests
              lie within Fintech, Web Applications, Cloud Architectures.
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
