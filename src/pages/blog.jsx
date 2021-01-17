import React from "react";
import Header from "../components/header";
import SEO from "../components/seo";

export default function blog() {
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
