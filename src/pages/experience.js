import React from "react";
import SEO from "../components/seo";
import Index from "../layouts";
import Experience from "../components/experienceCards/experience";
import Date from "react";
export default function experience() {
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
        title="Experience"
      />
      <Experience
        title="test 1"
        date={Date.now()}
        description="This is a test description"
      />
    </Index>
  );
}
