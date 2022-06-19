import React from "react";
import DisplayLottie from "../lottie/DisplayLottie";
import landingPerson from "../../assets/lottie/landingPerson.json";
import SocialIcons from "../socialIcons/SocialIcons";
import Button from "../button/button";
export default function Welcome() {
  return (
    <div>
      <div className="flex flex-wrap overflow-hidden mb-10 mt-32">
        <div className="flex flex-wrap w-full md:pl-4 md:w-1/2">
          <div className="flex-auto col-auto self-end text-center md:text-right">
            <span className="font-title text-5xl">Hi! 👋</span>
          </div>
          <div className="flex-auto col-auto text-center md:ml-20 md:text-right">
            <span className="font-bold font-sans">
              My name is Jeremiah, and I am a full stack developer
            </span>
            <div className="my-5">
              <SocialIcons />
            </div>
            <div className="my-5">
              <Button
                className="text-white"
                name="Contact Me"
                link="/contact"
                type="button"
              />
            </div>
          </div>
        </div>
        <div className="flex-auto justify-start sm:justify-end mr-8 sm:mr-0 md:w-1/2 h-200 md:w-400 md:h-400">
          <DisplayLottie animationData={landingPerson} />
        </div>
      </div>
    </div>
  );
}
