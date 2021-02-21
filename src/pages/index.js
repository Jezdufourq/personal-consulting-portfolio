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
import MySkills from "../components/mySkillsSection/MySkills";
import BottomSection from "../components/bottomSection/BottomSection";
import ExperienceSection from "../components/experienceSection/ExperienceSection";
import ProjectSection from "../components/projectSection/ProjectSection";

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
        <MySkills />
        <ExperienceSection />
        <ProjectSection />
        <BottomSection />
      </Fade>
    </Index>
  );
}
