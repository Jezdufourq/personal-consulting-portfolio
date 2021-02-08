import React from "react";
import img from "../../assets/jeremiah.jpeg";
import Avatar from "../avatar/avatar";
import Title from "../title/title";

export default function experience(props) {
  return (
    <div
      className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8"
      id="experiences"
    >
      <div className="bg-white shadow-md rounded-md p-8 cursor-pointer transform hover:scale-103 ease-in-out min-w-full min-h-full max-w-md min-h-md">
        <div className="grid col-auto p-10">
          <div className="flex row justify-center">
            <Title string={props.title} />
          </div>
          <div className="grid col-auto justify-center p-8">
            <Avatar src={img} alt="experience1" />
          </div>
          <div className="grid col-auto row justify-center pt-1 pb-4">
            <span className="font-bold">{props.date}</span>
          </div>
          <div className="grid col-auto row justify-center">
            <span>{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
