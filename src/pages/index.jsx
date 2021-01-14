import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Greeting from "../components/greeting";
import Projects from "../components/projects";
import Button from "../components/button/button";
import Title from "../components/title/title";
import Card from "../components/card/card";

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
      <Card
        title="Test"
        date="10/10/10 - 10/10/10"
        description="This is a test"
      />
      <Card
        title="Test"
        date="10/10/10 - 10/10/10"
        description="This is a test"
      />
      <Card
        title="Test"
        date="10/10/10 - 10/10/10"
        description="This is a test"
      />
      <Greeting />
      {/* <Skills /> */}
      <Projects />
    </div>
  );
}

export default IndexPage;
