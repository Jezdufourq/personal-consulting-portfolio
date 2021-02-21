import React from "react";
import ExperienceCard from "../experienceCard/ExperienceCard";
import { workExperience } from "../../source";

export default function ExperienceSection() {
  return (
    <div id="experiences">
      <div className="text-center my-5">
        <span className="font-title text-5xl">My Experience</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-5 min-w-100 min-h-200">
        {workExperience.map((v, i) => {
          return (
            <ExperienceCard
              title={v.title}
              img={v.image}
              date={v.date}
              description={v.description}
            />
          );
        })}
      </div>
    </div>
  );
}
