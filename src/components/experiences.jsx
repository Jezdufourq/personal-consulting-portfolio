import React from "react";
import ExperienceCard from "./experienceCard/ExperienceCard";
import { workExperience } from "../source";

export default function experiences() {
  return (
    <div id="experiences">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-5 min-w-100 min-h-400">
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