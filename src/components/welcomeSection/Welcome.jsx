import React from "react";
import DisplayLottie from "../lottie/DisplayLottie";
import landingPerson from "../../assets/lottie/landingPerson.json";
export default function Welcome() {
  return (
    <div>
      <div className="flex flex-wrap mt-20">
        <div className="flex-auto grid grid-rows-2 gap-3 md:pr-4 md:w-1/2">
          <div className="col-auto self-end text-center md:text-right">
            <span className="font-title text-5xl">Hi, </span>
            <span className="font-title text-5xl">Welcome</span>
          </div>
          <div className="col-auto text-center md:ml-20 md:text-right">
            <span className="font-bold font-sans">
              My name is Jeremiah, and I am a full stack developer
            </span>
          </div>
        </div>
        <div className="flex-auto justify-start sm:justify-end mr-8 sm:mr-0 md:w-1/2 h-200 md:w-400 md:h-400">
          <DisplayLottie animationData={landingPerson} />
        </div>
      </div>
    </div>
  );
}
