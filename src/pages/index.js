import React from "react";
import Index from "../layouts";
import SEO from "../components/seo";
import { Fade } from "react-reveal";
import Welcome from "../components/welcomeSection/Welcome";
import AboutMe from "../components/aboutMeSection/AboutMe";
import MySkills from "../components/mySkillsSection/MySkills";
import BottomSection from "../components/bottomSection/BottomSection";
import ExperienceSection from "../components/experienceSection/ExperienceSection";
import ProjectSection from "../components/projectSection/ProjectSection";

export default function Home() {
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
