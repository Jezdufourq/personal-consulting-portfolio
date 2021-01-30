import React from "react";
import Index from "../layouts";
import SEO from "../components/seo";
import Title from "../components/title/title";
import DisplayLottie from "../components/DisplayLottie";
import landingPerson from "../assets/lottie/landingPerson.json";
import TagCloud from "../components/TagCloud/TagCloud";
import Button from "../components/button/button";

export default function Home() {
  return (
    <Index>
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
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full grid grid-rows-2 gap-3 md:pr-4 md:w-1/2">
          <div className="col-auto self-end text-center md:text-right">
            <Title string="Welcome" />
          </div>
          <div className="col-auto text-center md:ml-20 md:text-right">
            <span className="font-bold font-sans">
              My name is Jeremiah, and I am a full stack developer
            </span>
          </div>
        </div>
        <div className="md:py-20 md:pr-14 md:pl-4 md:w-1/2">
          <DisplayLottie width={300} height={300} animationData={landingPerson} />
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="grid grid-rows-1 pr-4 w-full md:w-1/2">
          <div className="col-auto self-center text-center md:ml-20 md:text-right">
            <span className="font-bold font-sans">
              Image goes here
            </span>
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
        <div className="mx-80 my-10 md:mx-40 grid grid-rows-1 w-full text-center text-4xl text-primary font-title">
          I love creating solutions to everyday problems.
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="mx-80 my-10 md:mx-40 grid grid-rows-1 w-full text-center text-4xl text-primary font-title">
          Ready to take the next step and work together?
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="mx-80 grid grid-rows-1 w-full text-center text-4xl font-title md:w-1/2">
          Let's have a chat
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="grid grid-rows-1 w-full justify-items-center">
          <Button name="Contact Me" />
        </div>
      </div>
    </Index>
  );
}
