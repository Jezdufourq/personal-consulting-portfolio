import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Greeting from "../components/greeting";

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
      <Greeting />
    </div>
  );
}

export default IndexPage;
