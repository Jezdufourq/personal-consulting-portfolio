import React from "react";
import ExperienceCard from "../experienceCard/ExperienceCard";

export default function ExperienceSection() {
  const experienceData = [
    {
      title: "SAP",
      description:
        "Currently building an internal web application in Java, SAP HANA, Vue and Quasar hosted on SAP Cloud Platform. Main highlights are migration from monolithic application to a service multitenant architecture.",
      date: "February, 2020 - Current",
      img: require("../../assets/images/sap.png"),
      url: "https://www.sap.com/index.html",
    },
    {
      title: "NOJA Power",
      description:
        "Had experience as an Engineering cadet, rotating through R&D, Production Engineering and Q&A. Main highlights were building an automation testing suite using Python and C# and developing prototypes of a web application.",
      date: "January, 2017 - January, 2021",
      img: require("../../assets/images/noja.png"),
      url: "https://www.nojapower.com.au/",
    },
    {
      title: "QUT",
      description:
        "Currently enrolled as a Final Year Student, studying a Bachelor of Engineering (Honours) majoring in Computer and Software Systems. Main highlights are Vice Chancellor Scholarship recipient and current QUT Deans Scholar. I am currently volunteering with the Deans Scholars within the SEADS committee.",
      date: "February 2017 - Current",
      img: require("../../assets/images/qut.jpg"),
      url: "https://www.qut.edu.au/",
    },
  ];
  return (
    <div id="experience" className="my-10">
      <div className="text-center my-5">
        <span className="font-title text-5xl">My Experience</span>
      </div>
      <div className="text-center my-5">
        <span className="font-sans text-subtitle">
          This section outlines my current educational and professional
          experience. If you would like elaboration, please request my CV under
          contact me.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-5 min-w-100">
        {experienceData.map((v, i) => {
          return (
            <ExperienceCard
              title={v.title}
              img={v.img}
              date={v.date}
              description={v.description}
              url={v.url}
            />
          );
        })}
      </div>
    </div>
  );
}
