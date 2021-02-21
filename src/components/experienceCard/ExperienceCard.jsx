import React from "react";
import img from "../../assets/jeremiah.jpeg";
import Avatar from "../avatar/avatar";
import Title from "../title/title";
import { Fade } from "react-reveal";

export default function ExperienceCard(props) {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="shadow-md rounded-md p-8 transform hover:scale-105 ease-in-out min-w-full min-h-full">
        <div className="flex flex-col p-10 sm:p-5">
          <span className="font-title text-5xl">{props.title}</span>
          <div className="p-8 items-center">
            {props.img === null ? (
              <Avatar src={img} alt="default" />
            ) : (
              <Avatar src={props.img} alt="experience1" />
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
