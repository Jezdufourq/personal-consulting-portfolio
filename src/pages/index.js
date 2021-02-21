import React from "react";
import Index from "../layouts";
import SEO from "../components/seo";
import Title from "../components/title/title";
import DisplayLottie from "../components/lottie/DisplayLottie";
import landingPerson from "../assets/lottie/landingPerson.json";
import TagCloud from "../components/TagCloud/TagCloud";
import Button from "../components/button/button";
import Avatar from "../components/avatar/avatar";
import jeremiahAvatar from "../assets/jeremiah.jpeg";
import { navigate } from "gatsby";
import { skills } from "../source";
import { Fade } from "react-reveal";
import Welcome from "../components/welcomeSection/welcome";
import AboutMe from "../components/aboutMeSection/AboutMe";

export default function Home() {
  function contactPage() {
    navigate("/contact");
  }

  return (
    <Index>
      <Fade duration={2000} distance="200px">
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
        <Welcome />
        <AboutMe />
        <div className="flex flex-wrap overflow-hidden">
          <div className="grid grid-rows-1 w-full md:pr-4 md:w-1/2">
            <div className="col-auto self-center text-center md:text-right">
              <Title string="My Skills" />
            </div>
          </div>
          <div className="flex justify-evenly w-full md:py-20 md:pr-14 md:pl-4 md:w-1/2">
            <TagCloud text={skills} />
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="grid grid-rows-1 w-full justify-items-center my-4">
            <div className="text-primary font-title text-center text-4xl w-3/4 h-full">
              I love creating solutions to everyday problems.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="grid grid-rows-1 w-full justify-items-center my-4">
            <div className="text-primary font-title text-center text-4xl w-3/4 h-full">
              Ready to take the next step and work together?
            </div>
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="grid grid-rows-1 w-full justify-items-center my-4">
            <div className="font-title text-center text-4xl">
              Let's have a chat
            </div>
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="grid grid-rows-1 w-full justify-items-center">
            <Button name="Contact Me" link="/contact" />
          </div>
        </div>
      </Fade>
    </Index>
  );
}
