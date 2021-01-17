import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Title from "../components/title/title";
import DisplayLottie from "../components/DisplayLottie";
import landingPerson from "../assets/lottie/landingPerson.json";

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
        <div className="w-full py-20 pl-14 pr-4 overflow-hidden content-center md:w-1/2">
          <div className="col-auto py-4 align-center text-right justify-right">
            <Title string="Welcome" />
          </div>
          <div className="py-2 ml-20 text-right">
            <span className="font-bold font-sans">
              My name is Jeremiah, and I am a full stack developer
            </span>
          </div>
        </div>
        <div className="w-full py-20 pr-14 pl-4 overflow-hidden md:w-1/2">
          <DisplayLottie className="w-10 h-10" animationData={landingPerson} />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
