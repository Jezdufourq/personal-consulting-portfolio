import React from "react";
import Avatar from "../avatar/avatar";
import jeremiahAvatar from "../../assets/jeremiah.jpeg";

export default function AboutMe() {
  return (
    <div id="about">
      <div className="flex flex-wrap overflow-hidden my-10">
        <div className="flex justify-center items-center md:justify-end w-full md:pr-4 md:w-1/2 my-5">
          <div className="w-40 h-40">
            <Avatar src={jeremiahAvatar} alt="Jeremiah" />
          </div>
        </div>
        <div className="flex flex-wrap w-full md:pl-4 md:w-1/2">
          <div className="flex-auto col-auto text-center self-end md:text-left">
            <span className="font-title text-5xl">About Me</span>
          </div>
          <div className="flex-auto col-auto text-center md:mr-20 md:text-left">
            <span className="font-bold font-sans">
              I am a current final year Software Engineering student and QUT
              Deans Scholar. I love to design practical solutions to solve
              complex problems.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
