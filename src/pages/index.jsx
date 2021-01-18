import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Title from "../components/title/title";
import DisplayLottie from "../components/DisplayLottie";
import landingPerson from "../assets/lottie/landingPerson.json";
import heroImg from "../assets/jeremiah.jpeg";

function IndexPage() {
  return (
    <div>
      <SEO
        keywords={[
          `consulting`,
          `webdevelopment`,
          `react`,
          `vue`,
          `jezdufourq`,
        ]}
        title="Home"
      />
      <Header />
      <div className="flex flex-wrap overflow-hidden">
        <div className="grid grid-rows-2 pr-4 gap-3 w-full md:w-1/2">
          <div className="col-auto text-right self-end">
            <Title string="Welcome" />
          </div>
          <div className="col-auto ml-20 text-right">
            <span className="font-bold font-sans">
              My name is Jeremiah, and I am a full stack developer
            </span>
          </div>
        </div>
        <div className="py-20 pr-14 pl-4 overflow-hidden w-full md:w-1/2">
          <DisplayLottie className="w-30 h-30" animationData={landingPerson} />
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="py-20 pl-14 pr-4 w-full md:w-1/2">
          <img
            src={heroImg}
            className="w-40 h-40 border-lightBlue-400 border-4"
            alt="cardAvatar"
          />
        </div>
        <div className="grid grid-rows-2 pl-4 gap-3 w-full md:w-1/2">
          <div className="col-auto text-left self-end">
            <Title string="About Me" />
          </div>
          <div className="col-auto mr-20 text-left">
            <span className="font-bold font-sans">
              I am a software developer.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="grid grid-rows-1 pr-4 w-full md:w-1/2">
          <div className="col-auto text-right self-center">
            <Title string="My Skills" />
          </div>
        </div>
        <div className="py-20 pr-14 pl-4 w-full md:w-1/2">column 1</div>
      </div>
    </div>
  );
}

export default IndexPage;
