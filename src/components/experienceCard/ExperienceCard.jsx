import React from "react";
import img from "../../assets/jeremiah.jpeg";
import { Fade } from "react-reveal";

export default function ExperienceCard(props) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className="shadow-lg rounded-lg p-6 cursor-pointer transform hover:bg-gray-50 min-w-full min-h-full"
        key={props.title}
        onClick={() => openRepoinNewTab(props.url)}
      >
        <div className="flex flex-col sm:p-5">
          <span className="font-title text-3xl text-center">{props.title}</span>
          <div className="p-8 items-center">
            {props.img === null ? (
              <img src={img} alt="default" />
            ) : (
              <img src={props.img} alt="experience1" />
            )}
          </div>
          <div className="pt-1 pb-4">
            <span className="font-bold">{props.date}</span>
          </div>
          <div className="">
            <span>{props.description}</span>
          </div>
        </div>
      </div>
    </Fade>
  );
}
