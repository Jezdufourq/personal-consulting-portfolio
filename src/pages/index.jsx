import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";

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
    </div>
  );
}

export default IndexPage;
