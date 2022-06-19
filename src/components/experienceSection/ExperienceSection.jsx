import React from "react";
import ExperienceCard from "../experienceCard/ExperienceCard";

export default function ExperienceSection() {
  const experienceData = [
    {
      title: "Freetrade",
      description:
        "Currently working at Freetrade as a Junior Software Engineer. Working within the Crypto and FX team where we are building services using Typescript and python hosted on Google Cloud with kubernetes cloud functions.",
      date: "November, 2021 - Present",
      img: require("../../assets/images/freetrade.png"),
      url: "https://freetrade.io/",
    },
    {
      title: "SAP",
      description:
        "Currently building an internal web application in Java, SAP HANA, Vue and Quasar hosted on SAP Cloud Platform. Main highlights are migration from monolithic application to a service multitenant architecture.",
      date: "February, 2020 - October 2021",
      img: require("../../assets/images/sap.png"),
      url: "https://www.sap.com/index.html",
    },
    {
      title: "QUT",
      description:
        "Completed a Bachelor of Engineering (Honours) (Computer and Software Systems Major) with first class honours. Main highlights are Vice Chancellor Scholarship recipient and QUT Deans Scholar recipient.",
      date: "February 2017 - November 2020",
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
