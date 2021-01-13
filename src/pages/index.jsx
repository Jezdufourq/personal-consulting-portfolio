import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Greeting from "../components/greeting";
import Projects from "../components/projects";
import Button from "../components/button/button";
import Title from "../components/title/title";

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
      <Button />
      <Title />
      <Greeting />
      {/* <Skills /> */}
      <Projects />
    </div>
  );
}

export default IndexPage;
