import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Title from "../components/title/title";
import DisplayLottie from "../components/DisplayLottie";
import landingPerson from "../assets/lottie/landingPerson.json";
import heroImg from "../assets/jeremiah.jpeg";
import TagCloud from "../components/TagCloud/TagCloud";
import Button from "../components/button/button";
import Footer from "../components/footer";
// import Socials from "../components/socials";

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
        <div className="grid grid-rows-1 pr-4 w-full md:w-1/2">
          <div className="col-auto justify-right place-items-end self-center">
            <div className="w-full h-full"></div>
          </div>
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
        <div className="py-20 pr-14 pl-4 w-full md:w-1/2">
          <TagCloud text={["test", "test1", "test2"]} />
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="mx-80 my-10 grid grid-rows-1 w-full text-center text-4xl text-primary font-title">
          I love creating solutions to everyday problems.
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="mx-80 my-10 grid grid-rows-1 w-full text-center text-4xl text-primary font-title">
          Ready to take the next step and work together?
        </div>
        <div className="mx-40 grid grid-rows-1 w-full text-center text-4xl text-black font-title">
          Let's have a chat
        </div>
        <div className="grid grid-rows-1 w-full justify-items-center">
          <Button name="Contact Me" />
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden place-content-center">
        {/* <Socials /> */}
      </div>
      <div className="flex flex-wrap overflow-hidden place-content-center">
        <Footer />
      </div>
    </div>
  );
}

export default IndexPage;
